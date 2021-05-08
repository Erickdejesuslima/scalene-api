'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IntegranteAlbumSchema extends Schema {
  up () {
    this.create('integrante_albums', (table) => {
      table.increments()
      table.integer('musica_id').references('id').inTable('musicas').unsigned().notNullable()
      table.integer('integrante_id').references('id').inTable('integrantes').unsigned().notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('integrante_albums')
  }
}

module.exports = IntegranteAlbumSchema
