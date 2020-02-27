'use strict'

export default class SwAPI {

  // instead of manipulating the global.fetch, decide in the constructor, which one to use
  constructor(customFetch){
    this.myfetch = customFetch
  }

  getPerson(id) {
    if (!id) {
      throw new Error('id must be a positive number');
    }

    return this.myfetch(`https://swapi.co/api/people/${id}`)
      .then(response => response.json())
      .then(res => {
        console.log(res)
        return res
      })
  }

  getPeople() {
    return this.myfetch(`https://swapi.co/api/people`)
      .then(response => response.json())
  }
}
