## Database package

This workspace package contains the database abstractions. The database stack is [PostgreSQL](https://www.postgresql.org/) as relational database and [Prisma](https://www.prisma.io/) as an ORM

With Prisma Migrate, you write the desired database schema in the form of a Prisma data model inside your Prisma schema file. To map the data model to your database schema, you then have to run these two commands:
```
prisma migrate save --experimental
prisma migrate up --experimental
```
The first command saves a new migration to the prisma/migrations directory in the file system of your project and updates the _Migration table in your database. Each time you run this command to save a new migration, it creates a dedicated directory inside of prisma/migrations for that specific migration, which will have its own README.md file containing detailed information about the migration (e.g. the generated SQL statements which will be executed when you run prisma migrate up).


**Commands**

Following npm scripts are available for convenience

* [yarn introspect](https://www.prisma.io/docs/reference/tools-and-interfaces/introspection)

* [yarn generate](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-cli)
run it when data model is changed, added, etc.

* [yarn migrate:save](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate)
saves a new migration to the prisma/migrations

* [yarn migrate:up](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-migrate)
executes the migration against your database

* [yarn studio](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-studio)

**Note** 
On using migration commands `migrations` folder will be created, make sure to add it to your version control, prisma requires that folder to check if migrations matches or not. If the folder was accidentally removed make sure to drop the `_Migration` table in your postgres instance
