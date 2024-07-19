import dotenv from "dotenv";
import type { Knex } from "knex";

dotenv.config();

const tabela = process.env.TABLE_REGSITROS || "";

export async function up(knex: Knex): Promise<void> {
  console.log(">>> - MIGRACAO-CREATE-TBL - <<<");
  const existe = await knex.schema.hasTable(tabela);
  if (existe) return;

  return knex.schema.createTable(tabela, (table) => {
    table.uuid("id").primary();
    table.string("descricao", 80).notNullable();
    table.date("data").notNullable();
    table.string("tipo", 10).notNullable();
    table.decimal("valor", 2).notNullable();
    table.string("status", 15).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(tabela);
}
