const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      github: {
        type: String,
        required: true,
      },
      live: {
        type: String,
        required: true,
      },
      technologies: {
        type: [String], 
        required: true,
      },
})

const Projects = mongoose.model('Projects', projectSchema, "projectCollection")

module.exports = Projects;