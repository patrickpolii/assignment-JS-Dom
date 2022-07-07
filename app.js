// Kumpulan semua UI element
const nama = document.getElementById('nama');
const address = document.getElementById('address');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const btnSubmit = document.getElementById('submit');
const tableContent = document.getElementById('tableContent');
let i = 1;
btnSubmit.addEventListener('click', validation);


function validation(){
    //var regex = '\+6+[2]+[0-9]{9,11}'
    //var regexPhone = new RegExp(regex);
    //var phoneMatched = regexPhone.test(phone);
    //var emailRegex = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    //var regexEmail = new RegExp(emailRegex);
    //var isMatched = regexEmail.test(email);
    if(nama.value === ""){
        alert("Input name");
    }
    if(address.value === ""){
        alert("Input address");
    }
    
    if(phone.value === ""){
        alert("Input Phone Number");
    }
    if(!phone.value.match(/\+62?(\d+)+|\(\d+\)(\d+)/g)){
        alert("input phone number with +62")
    }
    if(email.value === "") {
        alert("Input Email"); 
    }

    if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
        alert("Input email with string and @ value");
        //return false;
    } 
    
    let checkbox = document.querySelectorAll('input[type="checkbox"]');
    var countCheckbox = 0;
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            countCheckbox++;
        }    
    }
    if (countCheckbox == 0) {
        alert("Checkbox wajib diisi")
    }
    
    //var backend = document.getElementById('backend');
    //var frontend = document.getElementById('frontend');
    //var fullstack = document.getElementById('fullstack');
    //var mobile = document.getElementById('mobile');
    //var iot = document.getElementById('iot');
    //if (backend.checked == true && frontend.checked == true && mobile.checked == true && fullstack.checked == true && iot.checked == true){  
        //alert ("Please mark only one checkbox");  
      //}  
    if(nama.value !== "" && address.value !== "" && phone.value !== "" && email.value !== ""){
        
        //if(backend.value !== "" || frontend.value !== ""){
            //alert("Data complete")
        //}
        let tr = document.createElement('tr');
        let td = "";
        td += `<td>${i}</td>`;                    
        td += `<td>${nama.value}</td>`;                    
        td += `<td>${address.value}</td>`;                    
        td += `<td>${phone.value}</td>`;
        td += `<td>${email.value}</td>`;
        td += `<td>${checkbox[i].value}</td>`;
        tr.innerHTML = td;
        tableContent.appendChild(tr);                    

        nama.value = "";
        address.value = "";
        phone.value = "";
        email.value = "";
        checkbox.values = "";
        i++;
    }
}

