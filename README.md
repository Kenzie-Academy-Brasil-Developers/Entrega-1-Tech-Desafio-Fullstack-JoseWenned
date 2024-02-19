# Entrega-1-Tech-Desafio-Fullstack-JoseWenned
 Repository Back End

Clients and Contacts API
The API was developed using Node.js and typescript.

For the API to work, you must do the following:
- Locally clone this repository.
- Use the "yarn" command in your terminal to install all dependencies.
- Define your secret key in the .env, in the JWT_SECRET_KEY field. There is a .env.example in the project to help you with this.
- Use the command "npm run typeorm migration:generate src/migrations/InitialMigration -- -d src/data-source" in your terminal, to obtain new migrations and build a postgresSQL database in your migrations folder. The terminal will ask for a name for your new migration.
- Use the "npm run dev" command to run the server.
To learn more about the routes, and how they work, you can access the swagger documentation at the endpoint: "http://localhost:3000/api-documentation". Note: You need to run the server to access this endpoint.

If you have any questions, just get in touch: "wennedchaves1997@gmail.com"