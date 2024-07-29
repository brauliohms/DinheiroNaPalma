FROM maven:3-eclipse-temurin-17 AS build

COPY src /app/src
COPY pom.xml /app

WORKDIR /app
RUN mvn clean install -DskipTests

FROM debian:bookworm-slim

ENV DEBIAN_FRONTEND="noninteractive"

RUN apt-get update && apt-get upgrade -y && \
  apt-get install -y tzdata locales default-jre && \
  ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
  sed -i 's/# pt_BR.UTF-8 UTF-8/pt_BR.UTF-8 UTF-8/' /etc/locale.gen && \
  locale-gen && \
  update-locale LANG=pt_BR.UTF-8

COPY --from=build /app/target/backend-springboot-0.0.1-SNAPSHOT.jar /app/app.jar

WORKDIR /app

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]