'use strict'

/*
|--------------------------------------------------------------------------
| AlbumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Album = use('App/Models/Album')

class AlbumSeeder {
  async run () {
    await Album.createMany([
      {nome: 'Real surreal'},
      {nome: 'Eter'},
      {nome: 'Magnetite'},
      {nome: 'respiro'}

    ])
  }
}

module.exports = AlbumSeeder
