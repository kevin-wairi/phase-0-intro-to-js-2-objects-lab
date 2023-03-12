const employee = {
};
let pairs ={}
function updateEmployeeWithKeyAndValue(employee,key,value){
  const  newEmployee = {...employee};
  return employee = { name: 'Sam',streetAddress:"11 Broadway" };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key] = value; 
      return employee;
  
};

function  deleteFromEmployeeByKey(employee,key,value){
  const  newEmployee = {...employee};
  delete newEmployee[key];
  return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee,key,value){
  // employee[key] = value; 
  delete employee[key];
      return employee;
  
};

// updateEmployeeWithKeyAndValue(employee,"name","sam",);
// updateEmployeeWithKeyAndValue(employee,"name","sam", "streetAddress","11 Broadway");

// function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
//   employee[key] = value; 
//   newEmployee["name"] = "sam";
//   newEmployee[streetAddress] = "11 Broadway";
//       return employee;
  
// };
