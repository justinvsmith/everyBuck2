const { Month } = require('../models/month.models');
const { Category } = require('../models/categories.models');


module.exports.createMonth = (req, res) => {
    const { name } = req.body;
    Month.create({
        name
    })
    .then(month => res.json(month))
    .catch(err => res.json(err))
}

module.exports.createCategory = (req, res) => {
    const monthId = req.params.id;
    const { name, planned } = req.body;
    Category.create({
        name,
        planned,
        monthId
    })
        .then(category => res.json(category))
        .catch(err => res.json(err))
}

module.exports.getMonths = (req, res) => {
    Month.find({})
        .then(months => res.json(months))
        .catch(err => res.json(err))
}

module.exports.getAMonth = (req, res) => {
    Month.findById({_id: req.params.id})
        .then(month => res.json(month))
        .catch(err => res.json(err))
}

module.exports.getCategoriesInMonth = (req, res) => {
    Category.find({monthId: req.params.id})
        .then(categories => res.json(categories))
        .catch(err => res.json(err))
}

module.exports.deleteCategory = (req, res) => {
    Category.findByIdAndDelete({_id: req.params.id})
        .then(category => res.json(category))
        .catch(err => res.json(err))
}