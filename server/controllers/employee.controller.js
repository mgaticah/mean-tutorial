const employeeController = {};
employeeController.getEmployees = (req, res) => {
    res.json({ message: 'employees goes here' });
};

module.exports = employeeController;