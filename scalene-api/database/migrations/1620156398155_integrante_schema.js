'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class IntegranteSchema extends Schema {
  up () {
    this.create('integrantes', (table) => {
      table.increments()
      table.string('nome', 30)
      table.string('tipo', 1)
      table.timestamps()
    })
  }

  down () {
    this.drop('integrantes')
  }
}

module.exports = IntegranteSchema
