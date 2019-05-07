const Employee=require('../models/employee');
const employeeController = {};
employeeController.getEmployees = async (req, res) => {
    const employees= await Employee.find();
    res.json(employees);
 };

employeeController.createEmployee= async(req, res)=>{
   const employee= new Employee(req.body);
   console.log(employee);
   employee.save();
   res.json({"status":"OK"});
};
employeeController.getEmployee=async (req,res)=>{
    const employee= await Employee.findById(req.params.id);
    res.json(employee);
};
employeeController.editEmployee=()=>{};
employeeController.deleteEmployee=()=>{};

module.exports = employeeController;