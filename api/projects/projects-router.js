const router = require('express').Router()
const Projects = require('./projects-model')
const validateProjectId = require('./projects-middleware')

router.get('/', (req, res, next) => {
    Projects.get()
        .then(projList => {
            res.status(200).json(projList);
        })
        .catch(next);
});

router.get('/:id', validateProjectId, (req, res) => {
    res.status(200).json(req.project);
})



module.exports = router