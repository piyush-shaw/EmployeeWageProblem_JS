const IS_Absent=0;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8
const WAGE_PER_HOURS=20;
const NUM_WORKING_DAYS=20;
const MAX_HRS_IN_MONTH=160;

////UC 3 - Refactor code to function to get work hrs
function getWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        
        default:
            return 0;
    }
}

//UC 5 - Calculate Wages Till Working days and Total working hrs per month is reached
let totalEmpHrs=0;
let totalWorkingDays=0;

while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_WORKING_DAYS)
{
    totalWorkingDays++;
let empCheck=Math.floor(Math.random()*10)%3;
totalEmpHrs+=getWorkingHours(empCheck);
}
let empWage=totalEmpHrs*WAGE_PER_HOURS;
console.log("Total Days : " +totalWorkingDays+ " Total Hrs : " +totalEmpHrs+ " Emp Wage : " +empWage);