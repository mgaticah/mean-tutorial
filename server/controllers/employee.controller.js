const Employee=require('../models/employee');
const employeeController = {};
employeeController.getEmployees = async (req, res) => {
    const employees= await Employee.find();
    res.json(employees);
 };

employeeController.createEmployee= async(req, res)=>{
   const employee= new Employee(req.body);
   employee.save();
   res.json({"status":"OK"});
};
employeeController.getEmployee=async (req,res)=>{
    const employee= await Employee.findById(req.params.id);
    res.json(employee);
};
employeeController.editEmployee= async (req,res)=>{
    const {id}=req.params.id;
    const employee={
        name:req.body.name,
        position:req.body.position,
        salary:req.body.salary,
        office:req.body.office
    };
    await Employee.findOneAndUpdate({ _id: id }, employee, { overwrite: true, new:true });
    
};
employeeController.deleteEmployee=()=>{};

module.exports = employeeController;