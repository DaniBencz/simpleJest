'use strict'

import SwAPI from './SwAPIclass'

global.fetch = require('cross-fetch');

let api = new SwAPI(fetch)
console.log(api.getPerson(1))