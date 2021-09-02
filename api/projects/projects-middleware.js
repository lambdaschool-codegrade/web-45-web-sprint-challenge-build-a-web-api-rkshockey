const Projects = require('./projects-model')

function validateProjectId (req, res, next){
    const project = Projects.get(req.params.id);
    if (project){
        req.project = project;
        next()
    }else{
        next({ status: 404, message: "project not found" });
    }
}

module.exports = validateProjectId