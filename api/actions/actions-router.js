const router = require('express').Router();
const Actions = require('./actions-model');
const { validateActionId, validateAction, validateProjectId, validateActionPut } = require('./actions-middlware')

router.get('/', (req, res, next) => {
    Actions.get()
        .then(actList => {
            res.status(200).json(actList);
        })
        .catch(next);
});

router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action);
});

router.post('/', validateAction, validateProjectId, (req, res, next) => {
    Actions.insert(req.body)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(next);
});

router.put('/:id', validateActionId, validateActionPut, (req, res, next) => {
    Actions.update(req.params.id, req.body)
        .then(action => {
            res.status(200).json(action);
        })
        .catch(next);
});

router.delete('/:id', validateProjectId, (req, res, next) => {
    Actions.remove(req.params.id)
        .then(() => {
            res.status(200).send('');
        })
        .catch(next);
})

module.exports = router