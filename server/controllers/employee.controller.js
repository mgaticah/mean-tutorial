const Employee=require('../models/employee');
const employeeController = {};
employeeController.getEmployees = async (req, res) => {
    const employees= await Employee.find();
    res.json(employees);
 };

employeeController.createEmployee=()=>{};
employeeController.getEmployee=()=>{};
employeeController.editEmployee=()=>{};
employeeController.deleteEmployee=()=>{};

module.exports = employeeController;