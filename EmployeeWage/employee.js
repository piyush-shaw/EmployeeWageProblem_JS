console.log("Welcome to Employee Wage Problem Using JavaScript");

//UC 1 - To check employee is present or absent
const IS_Absent=0;
let empCheck = Math.floor(Math.random()*10)%2; 

if(empCheck==IS_Absent)
{
    console.log("Employee is Absent");
}else
{
    console.log("Employee is Present");
}