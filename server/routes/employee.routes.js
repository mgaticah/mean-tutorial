const express=require('express');
const router=express.Router();
const employeeCtrl=require('../controllers/employee.controller');

router.get('/',employeeCtrl.getEmployees);
module.exports=router;