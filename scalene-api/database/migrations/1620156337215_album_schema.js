'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlbumSchema extends Schema {
  up () {
    this.create('albums', (table) => {
      table.increments()
      table.string('nome', 30)
      table.timestamps()
    })
  }

  down () {
    this.drop('albums')
  }
}

module.exports = AlbumSchema
