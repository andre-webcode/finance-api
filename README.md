# Finance — Backend

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

## Arquitetura

A API foi organizada separando responsabilidades entre rotas, controllers, services, middlewares e acesso ao banco de dados.

```text id="v9r2xk"
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

## Autenticação

A autenticação utiliza **JWT (JSON Web Token)**.

Após realizar o login, o usuário recebe um token que é utilizado para acessar as rotas protegidas da API.

O middleware de autenticação verifica o token antes de permitir o acesso às operações que exigem um usuário autenticado.

Além disso, as receitas e despesas são associadas ao usuário autenticado.

## Validação

Os dados de autenticação são validados utilizando **Zod** antes de serem processados pela aplicação.

Isso ajuda a garantir que os dados recebidos pela API estejam de acordo com o formato esperado.

## Banco de dados

O projeto utiliza **PostgreSQL** como banco de dados e **Prisma ORM** para comunicação com o banco.

Principais modelos:

```text id="p7x4kc"
User
 ├── Revenue
 └── Expense
```

### User

Representa os usuários cadastrados no sistema.

### Revenue

Representa as receitas cadastradas pelo usuário.

Principais informações:

* Descrição
* Valor
* Categoria
* Data
* Usuário responsável

### Expense

Representa as despesas cadastradas pelo usuário.

Principais informações:

* Descrição
* Valor
* Categoria
* Data
* Usuário responsável

## API

A API possui rotas relacionadas à autenticação e às movimentações financeiras.

### Autenticação

```text id="q1a8hf"
POST /signup
POST /signin
```

### Receitas

```text id="z5r1jp"
POST /revenue
GET /revenue
PUT /revenue/:id
DELETE /revenue/:id
```

### Despesas

```text id="c8m4vt"
POST /expense
GET /expense
PUT /expense/:id
DELETE /expense/:id
```

As rotas de movimentações financeiras são protegidas por autenticação.

## Estrutura do projeto

A aplicação segue uma organização baseada na separação de responsabilidades:

```text id="n4q7ws"
src/
├── controllers/
├── services/
├── routes/
├── middlewares/
├── libs/
└── types/

prisma/
└── schema.prisma
```

## Como executar

Clone o repositório:

```bash id="j2f6pa"
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash id="r7k3md"
cd <NOME_DO_PROJETO>
```

Instale as dependências:

```bash id="x8c1qn"
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis necessárias para a aplicação, incluindo a conexão com o PostgreSQL e a chave utilizada para autenticação JWT.

## Prisma

Depois de configurar o banco de dados, execute as migrations:

```bash id="a6t9we"
npx prisma migrate dev
```

Gere o Prisma Client:

```bash id="f3k8zr"
npx prisma generate
```

## Executando a API

Inicie o servidor utilizando o script configurado no projeto:

```bash id="m5v2qd"
npm run dev
```

A API ficará disponível na porta configurada para o servidor.

## Conceitos aplicados

Durante o desenvolvimento foram aplicados conceitos importantes de desenvolvimento backend:

* API REST
* CRUD
* Node.js
* Express
* TypeScript
* Middlewares
* Controllers
* Services
* JWT
* Hash de senhas
* Validação de dados
* Prisma ORM
* Relacionamentos entre entidades
* PostgreSQL
* Autorização baseada no usuário autenticado
* Tratamento de erros
* Migrations

## Objetivo

Este projeto foi desenvolvido como parte da minha evolução como desenvolvedor Full Stack, colocando em prática conceitos de desenvolvimento de APIs, autenticação, banco de dados, arquitetura de aplicações e integração entre backend e frontend.

## Autor

**Luiz André**

Desenvolvedor Full Stack em formação.
