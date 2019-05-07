const employeeController = {};
employeeController.getEmployees = (req, res) => {
    res.json({ message: 'employees goes here' });
};

employeeController.createEmployee=()=>{};
employeeController.getEmployee=()=>{};
employeeController.editEmployee=()=>{};
employeeController.deleteEmployee=()=>{};

module.exports = employeeController;