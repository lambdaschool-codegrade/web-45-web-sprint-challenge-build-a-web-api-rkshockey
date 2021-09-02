const Actions = require('./actions-model')
const Projects = require ('../projects/projects-model')

function validateActionId (req, res, next){
    Actions.get(req.params.id)
        .then(action => {
            if (action){
                req.action = action;
                next();
            }else{
                next({ status: 404, message: 'Action not found' });
            }
        })
        .catch(next);
}

function validateProjectId (req, res, next){
    Projects.get(req.body.project_id)
        .then(() => next())
        .catch(next);
}

function validateAction (req, res, next){
    if (req.body.project_id && req.body.description && req.body.notes){
        if (req.body.description.length > 128){
            next({ status: 400, message: "Description must be no more than 128 characters long"})
        }else{
            next()
        }
    }else{
        next({ status: 400, message: "project_id, description and notes are required"})
    }
}

function validateActionPut (req, res, next){
    if (req.body.project_id && req.body.description && req.body.notes && req.body.completed){
        if (req.body.description.length > 128){
            next({ status: 400, message: "Description must be no more than 128 characters long"})
        }else{
            next()
        }
    }else{
        next({ status: 400, message: "project_id, description,notes and completed status are required"})
    }
}

module.exports = { validateActionId, validateProjectId, validateAction, validateActionPut }