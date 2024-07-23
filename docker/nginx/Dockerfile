FROM debian:bookworm-slim

MAINTAINER Braulio Henrique Marques Souto <braulio@disroot.org>

# Essa variável de ambiente é usada para controlar se o Python deve
# gravar arquivos de bytecode (.pyc) no disco. 1 = Não, 0 = Sim
ENV PYTHONDONTWRITEBYTECODE 1

# Define que a saída do Python será exibida imediatamente no console ou em
# outros dispositivos de saída, sem ser armazenada em buffer.
# Em resumo, você verá os outputs do Python em tempo real.
ENV PYTHONUNBUFFERED 1

ENV DEBIAN_FRONTEND="noninteractive"

EXPOSE 80
EXPOSE 443

# RUN executa comandos em um shell dentro do container para construir a imagem.
# O resultado da execução do comando é armazenado no sistema de arquivos da
# imagem como uma nova camada.
# Agrupar os comandos em um único RUN pode reduzir a quantidade de camadas da
# imagem e torná-la mais eficiente.
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y tzdata locales netcat-openbsd iputils-ping nginx-full python3-certbot-nginx vim && \
    ln -fs /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && \
    sed -i 's/# pt_BR.UTF-8 UTF-8/pt_BR.UTF-8 UTF-8/' /etc/locale.gen && \
    locale-gen && \
    update-locale LANG=pt_BR.UTF-8

WORKDIR /etc/nginx
COPY .bashrc /root
COPY nginx.conf ./
COPY default sites-available

CMD ["nginx", "-g", "daemon off;"]
