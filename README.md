📚 Bookmark API (NestJS + MongoDB)

A simple API to manage bookmarks, built with NestJS, TypeORM, and MongoDB. Includes full CRUD operations, DTO validation, and testing via Postman.

✅ Features

Create a bookmark (POST /bookmarks)
Get all bookmarks (GET /bookmarks)
Get a bookmark by ID (GET /bookmarks/:id)
Update a bookmark (PATCH /bookmarks/:id)
Delete a bookmark (DELETE /bookmarks/:id)
DTO validation with class-validator
MongoDB _id management with ObjectId

🛠 Prerequisites

Node.js >= 18
Yarn or npm
MongoDB cluster or local MongoDB

1️⃣ Clone the Project

git clone <your-repo-url>
cd <project-folder>
yarn install
# or npm install

2️⃣ Configure MongoDB

Update your app.module.ts with your MongoDB connection string:

TypeOrmModule.forRoot({
  type: 'mongodb',
  url: 'mongodb+srv://<username>:<password>@<cluster-url>/BookMark',
  synchronize: true,
  useUnifiedTopology: true,
  entities: [Bookmark],
}),
