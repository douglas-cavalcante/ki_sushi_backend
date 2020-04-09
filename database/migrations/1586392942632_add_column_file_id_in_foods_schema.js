"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddColumnFileIdInFoodsSchema extends Schema {
  up() {
    this.alter("foods", (table) => {
      table
        .integer("file_id")
        .unsigned()
        .references("id")
        .inTable("files")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
    });
  }

  down() {
    this.drop("foods");
  }
}

module.exports = AddColumnFileIdInFoodsSchema;
