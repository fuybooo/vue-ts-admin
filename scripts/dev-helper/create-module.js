const createModule = require('./create').createModule
const config = require('./create-config')
config.forEach((item) => createModule(item))
