const BudgetController = require('../controllers/budget.controller');

module.exports = app => {
    app.post('/api/month', BudgetController.createMonth);
    app.post('/api/month/:id/category', BudgetController.createCategory);
    app.get('/api/month/:id', BudgetController.getAMonth);
    app.get('/api/months', BudgetController.getMonths);
    app.get('/api/month/:id/categories', BudgetController.getCategoriesInMonth);
    app.delete('/api/category/:id', BudgetController.deleteCategory);
}