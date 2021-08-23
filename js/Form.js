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
        }
        catch(e){
            dateError.textContent = "Invalid Date";
        }
    });
});