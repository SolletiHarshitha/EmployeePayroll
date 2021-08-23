window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    name.addEventListener('input', function(){
        if(name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }
        catch(e){
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function(){
    output.textContent = salary.value;
    });

    const startDate = document.querySelector("#startDate");
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const dateError = document.querySelector(".date-error");
    startDate.addEventListener('input', async function(){
        try{
            (new EmployeePayrollData()).startDate = new Date(parseInt(year), parseInt(month), parseInt(day));
            dateError.textContent = "";
            console.log(day, month, year);
        }
        catch(e){
            dateError.textContent = "Invalid Date";
        }
    });
});

function save(){
    let employee = new EmployeePayrollData();
    employee.name = document.getElementById("name").value;
    employee.profilePic = document.querySelector('input[name = profile] : checked').value;
    employee.gender = document.querySelector('input[name = gender] : checked').value;
    employee.department = document.querySelector('input[name = department] : checked').value;
    employee.salary = document.getElementById("salary").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById('year').value;
    employee.startDate = new Date(parseInt(year),parseInt(month),parseInt(day));
    employee.note = document.getElementById("notes").value;

    alert("Your data is successfully added!" + employee.toString());
}