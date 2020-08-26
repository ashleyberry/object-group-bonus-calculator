const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
//I am a ghost. Boooooooo

//1.take in information from employees object
//2.do bonus calcuations
//3.push results into new object

/*
for(let i = 0; i < employees.length; i++){
  bonusCalcuations(employee[i])
}
*/
/*
function bonusCalculation(employee){
  let total = 0;

  if(employee.reviewRating <= 2){
    let total = employee.annualSalary(0);
  } else if (employee.reviewRating === 3){
      let total = employee.annualSalary*.04;
    } else
  }
}



*/

for (let employee of employees) {
  let bonusInfo = takesOneEmployeeObjectAndReturnsNewObject(employee);
  console.log(bonusInfo);
}


function takesOneEmployeeObjectAndReturnsNewObject( employee ){

  //console.log('takesOneEmployeeObjectAndReturnsNewObject:', employee)
  let newEmployee = {
    name: employee.name,
    // bonusPercentage: employeeBonusPercentage,
    //compensation = base salary + (base salary * bonus percentage)
    totalCompensation: employee.annualSalary
    //total bonus = base salary * bonus percentage
    //totalBonus: //
  }
    //console.log('newEmployee:', newEmployee)
    if (employee.reviewRating <= 2 && employee.employeeNumber.length === 4) {
      console.log('employee.bonusPercentage:', employee.bonusPercentage)
       newEmployee.bonusPercentage = .05;
       console.log('newEmployee:', newEmployee)
    } else if (employee.reviewRating <= 2){
      newEmployee.bonusPercentage = 0;
    } else if (employee.reviewRating === 3 && employee.employeeNumber.length === 4){
      newEmployee.bonusPercentage = .09;
    } else if (employee.reviewRating === 3){
      newEmployee.bonusPercentage = .04;
    } else if (employee.reviewRating === 4 && employee.employeeNumber.length === 4){
      newEmployee.bonusPercentage = .11;
    } else if (employee.reviewRating === 4){
      newEmployee.bonusPercentage = .06;
    } else if (employee.reviewRating === 5 && employee.employeeNumber.length === 4){
      newEmployee.bonusPercentage = .15;
    } else if (employee.reviewRating === 5){
      newEmployee.bonusPercentage = .10;
    } // end conditionals
    return newEmployee;
  } //end function
 
    console.log(takesOneEmployeeObjectAndReturnsNewObject(employees))
   /*
    

*/

console.log('takesOneEmployeeObjectAndReturnsNewObject(employees):', takesOneEmployeeObjectAndReturnsNewObject(employees));
