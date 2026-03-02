# Bookmark API (NestJS + MongoDB)

A simple RESTful API to manage bookmarks, built with NestJS, TypeORM, and MongoDB.
Supports full CRUD operations, DTO validation, and can be tested via Postman.

# Features

Create a bookmark – POST /bookmarks
Get all bookmarks – GET /bookmarks
Get a bookmark by ID – GET /bookmarks/:id
Update a bookmark – PATCH /bookmarks/:id
Delete a bookmark – DELETE /bookmarks/:id
DTO validation using class-validator
MongoDB _id management using ObjectId

# Prerequisites
Node.js >= 18
Yarn or npm
MongoDB cluster or local MongoDB

# Clone the Project
git clone https://github.com/elsayedfarg/NestJs-Project.git
cd NestJs-Project
yarn install
or npm install

# Configure MongoDB

Update your app.module.ts with your MongoDB connection string:

TypeOrmModule.forRoot({
  type: 'mongodb',
  url: 'mongodb+srv://<username>:<password>@<cluster-url>/BookMark',
  synchronize: true,
  useUnifiedTopology: true,
  entities: [Bookmark],
}),

# Run the Project
# development
yarn start:dev

# or
npm run start:dev

The API will run at http://localhost:3000

📂 Project Structure
NestJs-Project/
├─ src/
│  ├─ bookmarks/
│  │  ├─ bookmarks.controller.ts
│  │  ├─ bookmarks.service.ts
│  │  ├─ bookmarks.module.ts
│  │  ├─ dto/
│  │  │  ├─ create-bookmark.dto.ts
│  │  │  └─ update-bookmark.dto.ts
│  │  └─ bookmark.entity.ts
│  ├─ app.module.ts
│  └─ main.ts
├─ .gitignore
├─ package.json
└─ README.md
