# Finance API

API REST de um sistema financeiro desenvolvida para gerenciamento de usuários, receitas e despesas.

O backend é responsável pela autenticação dos usuários, regras de negócio, operações financeiras e comunicação com o banco de dados PostgreSQL.

## Funcionalidades

* Cadastro de usuários
* Login de usuários
* Autenticação com JWT
* Proteção de rotas
* Criação de receitas
* Consulta de receitas
* Atualização de receitas
* Exclusão de receitas
* Criação de despesas
* Consulta de despesas
* Atualização de despesas
* Exclusão de despesas
* Associação das movimentações ao usuário autenticado
* Validação dos dados recebidos pela API

## Tecnologias

* Node.js
* Express
* TypeScript
* Prisma ORM
* PostgreSQL
* JSON Web Token (JWT)
* bcrypt
* Zod
* Helmet
* CORS
* tsx

## Arquitetura

A API foi organizada separando as responsabilidades entre rotas, controllers, services, middlewares, schemas e acesso ao banco de dados.

```text
Cliente
   ↓
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Services
   ↓
Prisma
   ↓
PostgreSQL
```

## Estrutura do projeto

```text
prisma/
└── schema.prisma

src/
├── controllers/
├── libs/
├── middleware/
├── routes/
├── schemas/
├── services/
├── types/
└── server.ts
```

### Principais responsabilidades

* `controllers/` — recebe as requisições e retorna as respostas da API.
* `services/` — concentra as regras de negócio.
* `routes/` — define as rotas e os endpoints da API.
* `middleware/` — executa verificações antes das requisições chegarem aos controllers.
* `schemas/` — responsável pela validação dos dados.
* `libs/` — reúne funcionalidades e configurações auxiliares.
* `types/` — contém as tipagens utilizadas pela aplicação.
* `prisma/` — contém o schema e as configurações relacionadas ao banco de dados.

## Autenticação

A autenticação utiliza **JWT (JSON Web Token)**.

Após realizar o login, o usuário recebe um token que é utilizado para acessar as rotas protegidas da API.

O middleware de autenticação verifica o token antes de permitir o acesso às operações que exigem um usuário autenticado.

As receitas e despesas também são associadas ao usuário autenticado, garantindo que cada usuário tenha acesso apenas às suas próprias movimentações.

## Validação

Os dados recebidos pela API são validados utilizando **Zod**.

A validação acontece antes dos dados serem processados pela aplicação, ajudando a garantir que as informações estejam no formato esperado.

## Banco de dados

O projeto utiliza **PostgreSQL** como banco de dados e **Prisma ORM** para comunicação com o banco.

Principais modelos:

```text
User
 ├── Revenue
 └── Expense
```

### User

Representa os usuários cadastrados no sistema.

### Revenue

Representa as receitas cadastradas pelos usuários.

Principais informações:

* Descrição
* Valor
* Categoria
* Data
* Usuário responsável

### Expense

Representa as despesas cadastradas pelos usuários.

Principais informações:

* Descrição
* Valor
* Categoria
* Data
* Usuário responsável

## API

A API possui rotas relacionadas à autenticação e às movimentações financeiras.

### Autenticação

```text
POST /signup
POST /signin
```

### Receitas

```text
POST /revenue
GET /revenue
PUT /revenue/:id
DELETE /revenue/:id
```

### Despesas

```text
POST /expense
GET /expense
PUT /expense/:id
DELETE /expense/:id
```

As rotas de movimentações financeiras são protegidas por autenticação.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias para a aplicação.

Entre elas estão as configurações utilizadas para conexão com o banco de dados e autenticação.

> Não compartilhe os valores das variáveis de ambiente, principalmente chaves secretas e credenciais do banco de dados.

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd finance-api
```

Instale as dependências:

```bash
npm install
```

## Prisma

Após configurar o banco de dados, execute as migrations:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

## Executando a API

Para iniciar o servidor em ambiente de desenvolvimento:

```bash
npm run dev
```

O comando utiliza `tsx` para executar o arquivo `src/server.ts` e reinicia automaticamente o servidor quando alterações são detectadas.

## Segurança

O projeto utiliza algumas ferramentas para aumentar a segurança da API:

* `helmet` para configuração de headers de segurança.
* `cors` para controle de acesso entre origens.
* `bcrypt` para proteção das senhas.
* `jsonwebtoken` para autenticação baseada em tokens.

## Conceitos aplicados

Durante o desenvolvimento foram aplicados conceitos importantes de desenvolvimento backend:

* API REST
* CRUD
* Node.js
* Express
* TypeScript
* Controllers
* Services
* Middlewares
* Validação de dados
* JWT
* Hash de senhas
* Prisma ORM
* Relacionamentos entre entidades
* PostgreSQL
* Migrations
* Autorização baseada no usuário autenticado
* Tratamento de erros
* Segurança de API

## Objetivo

Este projeto foi desenvolvido como parte da minha evolução como desenvolvedor Full Stack, colocando em prática conceitos de desenvolvimento de APIs, autenticação, banco de dados, arquitetura de aplicações e integração entre backend e frontend.

## Autor

**Luiz André**

Desenvolvedor Full Stack em formação.
