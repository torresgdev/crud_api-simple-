# 🚀 CRUD com Node.js, PostgreSQL e Docker

API RESTful para cadastro de usuários, com as operações de **criar**, **listar** e **deletar**. Projeto construído com **Node.js**, **Express**, **PostgreSQL via Docker**, usando estrutura modular (Clean Architecture) e boas práticas de organização. Inclui um frontend simples em HTML + JS para testar os endpoints da API sem Postman.

---

## 📚 Tecnologias

- Node.js + Express
- PostgreSQL
- Docker (Docker Compose)
- Clean Architecture (Controller, Service, Repository)
- HTML + JavaScript (Frontend simples)

---

## 💻 Como rodar o projeto

### Pré-requisitos

- Node.js instalado
- Docker instalado

### 1. Clone o projeto

```bash
git clone git@github.com:SEU_USUARIO/crud_init-simple.git
cd crud_init-simple

2-  Suba o banco PostgreSQL com Docker

docker-compose up -d

3. Crie a tabela no banco

docker exec -it postgres_container psql -U postgres  -d crudo

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

4. Instale as dependências do Node.js

npm install express pg dotenv

5. Inicie o servidor

node src/index.js

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

📬 Endpoints disponíveis
Método	      Rota	            Descrição
POST	      /api/users	      Cria um novo usuário
GET	        /api/users      	Lista todos usuários
DELETE	    /api/users/:id	  Deleta um usuário por ID

