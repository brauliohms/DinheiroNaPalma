import dotenv from "dotenv";
import { Knex, knex } from "knex";
// import path from "path";

// Usando path.resolve para carregar .env da raiz
// dotenv.config({ path: path.resolve(__dirname, "../../../../.env") });
dotenv.config();

const knexConfig: Knex.Config = {
  client: process.env.CLIENT || "",
  connection: {
    filename: process.env.FILENAME || "",
    host: process.env.DB_HOST || "",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "migrations",
  },
  seeds: {
    directory: "./seeds",
  },
  useNullAsDefault: true,
};

export const conexao: Knex = knex(knexConfig);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };
