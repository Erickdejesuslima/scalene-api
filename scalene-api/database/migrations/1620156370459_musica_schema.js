'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MusicaSchema extends Schema {
  up () {
    this.create('musicas', (table) => {
      table.increments()
      table.integer('album_id').references('id').inTable('albums').unsigned().notNullable()
      table.string('nome', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('musicas')
  }
}

module.exports = MusicaSchema
