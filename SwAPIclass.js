'use strict'

// global.fetch = require('cross-fetch');

export default class SwAPI {
  
  getPerson(id) {
    if (!id) {
      throw new Error('id must be a positive number');
    }

    return fetch(`https://swapi.co/api/people/${id}`)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        return res
      })
  }

  getPeople() {
    return fetch(`https://swapi.co/api/people`)
      .then(response => response.json())
  }
}
