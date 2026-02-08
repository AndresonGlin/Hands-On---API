# 🎮 API Mundo Geek

Este repositório contém a **API de Gerenciamento da Loja Mundo Geek**, desenvolvida em **Node.js + TypeScript**, utilizando **Express**, **TypeORM**, **PostgreSQL** e **Zod** para validação de dados.

A aplicação foi construída seguindo o padrão de **Arquitetura em Camadas**, garantindo organização, escalabilidade e fácil manutenção.

---

## 🔄 Fluxo da Requisição

1. **Middlewares (Zod)**  
   Validação do contrato da requisição (tipos, campos obrigatórios e regras de negócio básicas).

2. **Controllers**  
   Responsáveis apenas pela comunicação HTTP (req / res).

3. **Services**  
   Contêm as regras de negócio da aplicação, como:
   - Verificar se a categoria existe antes de criar um produto.
   - Lançar erros padronizados.

4. **Repositories (TypeORM)**  
   Camada de acesso a dados, responsável pela persistência no PostgreSQL.

---

## 🚀 Decisões de Design e Tecnologias

1. **TypeScript**  
   Escolhido para trazer tipagem estática ao Node.js, reduzindo erros em tempo de execução e melhorando a manutenção do código.

2. **TypeORM (Data Mapper Pattern):**  
   Optamos pelo uso de Entidades e Repositories para gerenciar o relacionamento 1:N entre Categorias e Produtos de forma eficiente e segura.

3. **Zod**  
   Implementado para garantir a integridade dos dados antes mesmo de chegarem ao Service, evitando que dados "sujos" sobrecarreguem o banco de dados

4. **AppError (Custom Error Handling):**  
   Criamos uma classe de erro personalizada para padronizar as respostas de erro da API (400, 404, 500), melhorando a experiência de quem consome a API.

---

## 🛠️ Divisão de Responsabilidades

1. **Entities**  
   Define a estrutura das tabelas e os relacionamentos (1:N).

2. **Validates (Zod)**  
   Define os esquemas de validação (ex: preço deve ser > 0).

3. **Controllers**  
   Isolam o Express da lógica de negócio. Apenas recebem req e retornam res.

4. **Services:**  
   Camada "cérebro". Valida se a categoria existe antes de criar um produto e lida com erros de negócio.

5. **Middlewares:**  
   Executam funções transversais, como o tratamento global de erros e logs (Winston).

6. **Routes:**  
   Endpoints utilizados pelo cliente usufluir dos serviço.

---

## 🚀 Passo a passo para execução do projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/AndresonGlin/Hands-On---API.git
```

---

### 2️⃣ Acessar a pasta da API

```bash
cd api_geek
```

---

### 3️⃣ Inicializar o projeto Node.js

```bash
npm init -y
```

---

### 4️⃣ Instalar as dependências

#### 4.1 Dependências de produção

```bash
npm install
```

### 5️⃣ Configurar o TypeScript

#### 5.1 Criar o arquivo `tsconfig.json`

```bash
npx tsc --init
```

#### 5.2 Substituir o conteúdo do `tsconfig.json` pelo código abaixo

```json
{
  "compilerOptions": {
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false,
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

---

### 6️⃣ Ajustar o `package.json`

#### 6.1 Scripts

Adicione ou ajuste os scripts:

```json
"scripts": {
  "dev": "nodemon --watch src --ext ts,json --exec tsx src/server.ts",
  "start": "node dist/server.js"
}
```

#### 6.2 Definir o tipo de módulo

```json
"type": "module"
```

---

### 7️⃣ Configurar variáveis de ambiente (`.env`)

Crie um arquivo `.env` na raiz do projeto com o seguinte modelo:

```env
DB_PORT=5433
DB_HOST=********
DB_USER=********
DB_PASS=********
DB_NAME=********
```

> ℹ️ **Observação:** neste caso, o PostgreSQL já está instalado localmente, por isso a porta foi ajustada para `5433`.

---

## ▶️ Executando o projeto

Para rodar a aplicação em modo desenvolvimento:

```bash
npm run dev
```

---

## 🛠️ Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- TypeORM
- PostgreSQL
- Nodemon
- TSX
- Docker (necessário baixar as imagens do Postgres e pgAdmin)
---

## 📌 Observações finais

Este projeto é voltado para fins educacionais e prática de configuração de uma API moderna com TypeScript e banco de dados relacional.

Sinta-se à vontade para evoluir a estrutura, adicionar entidades, rotas e regras de negócio 🚀

