const create = require('./create')
const config = require('./create-config');
(Array.isArray(config) ? config : [config]).forEach((item) => create(item))
