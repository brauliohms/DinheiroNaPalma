# Projeto DinheiroNaPalma

Projeto para finanças pessoais.

Em funcionamento em:
`https://dinheironapalma.com.br/`

API em funcionamento em:

PRISMA: `https://api.dinheironapalma.com.br/v1/registros`

KNEX: `https://api.dinheironapalma.com.br/v2/registros`

## Instalação

### Dependencias:

- nodejs

- yarn

- docker (para uso produção)

### Passo a passo SEM DOCKER:

- Após clonar o projeto, instalar as dependências estando na raiz do projeto:
  `yarn install`

- Configurar o Backend e o Frontend na raiz de cada projeto (apps/backend, apps/frontend), gerando `.env` baseado no arquivo `env-example.env`:
  `cp env-example.env .env`

- Gerar o prisma client estando na raiz do projeto backend:
  `npx prisma generate`

- Fazer as migrações estando na raiz do projeto backend:
  `npx prisma migrate deploy`

- Construir o projeto estando na raiz do projeto:
  `yarn build`

- Executar o projeto backend:
  `node apps/backend/dist/index.js`

- Executar o projeto frontend estando na raiz do projeto frontend:
  `yarn start`

### Passo a passo COM DOCKER:

- Após clonar o projeto, instalar as dependências estando na raiz do projeto:
  `yarn install`

- Configurar o Backend e o Frontend alterando os valores em `docker/backend.env`, `docker/frontend.env`, `docker/postgres.env`:

- Construir o projeto estando na raiz do projeto para gerar os diretórios `/dist` do `packages/common` e do `packages/registro`:
  `yarn build`

- Construir as imagens docker e executar o projeto:
  `docker compose up -d --build`
