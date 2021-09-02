const Projects = require('./projects-model')

function validateProjectId (req, res, next){
    Projects.get(req.params.id)
        .then(project => {
            if (project){
                req.project = project;
                next();
            }else{
                next({ status: 404, message: "project not found" });
            }
        })
        .catch(next);
}

function validateProject (req, res, next){
    if (req.body.name && req.body.description){
        next();
    }else{
        next({ status: 400, message: 'Project must include name and description' });
    }
}

module.exports = { validateProjectId, validateProject }