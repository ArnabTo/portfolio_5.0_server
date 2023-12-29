const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({

})

const Projects = mongoose.model('Projects', projectSchema, "projectCollection")

module.exports = Projects;