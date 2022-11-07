$(document).ready(function(){  
    $("#myForm").on("submit", function(event) {
        event.preventDefault();
        console.log($(this).serialize());
        alert("Thank you. The form information has been received.");
      });
});



/*Vanilla javascript version below--------------
function logForm(){
    const fields = ['Name', 'contactEmail', 'streetAddress', 'cityAddress', 'state', 'zipCode', 'special', 'pickupLocal'];
    for (let i = 0; i < fields.length; i++) {
    let x = document.forms["myForm"][fields[i]].value;
    console.log(x);
    }
    
    alert("Thank you. The form information has been received.");
    
}

const theForm = document.createElement('form');
const fields = ['Name', 'Email Address', 'Street Address'];

let divElement = document.createElement('div');
document.body.appendChild(divElement); 

for (let i = 0; i < fields.length; i += 1) {
const label = document.createElement('label');
label.textContent = fields[i];
label.setAttribute('for', fields[i]);


const input = document.createElement('input');
input.setAttribute('id', fields[i]);
theForm.appendChild(label);
theForm.appendChild(input);

}

//'City', 'State', 'Zip Code', 'First Time Adopter?', 'Pickup Location'

let divEl = document.createElement('div');
divElement.appendChild(divEl); 
divEl.classList.add('flex-left'); 


//city
const label2 = document.createElement('label');
label2.textContent = 'City';
label2.setAttribute('for', 'City');

const input2 = document.createElement('input');
input2.setAttribute('id', 'City');
theForm.appendChild(label2);
theForm.appendChild(input2);

//state
const label3 = document.createElement('label');
label3.textContent = 'City';
label3.setAttribute('for', 'City');

const input3 = document.createElement('input');
input3.setAttribute('id', 'City');
theForm.appendChild(label3);
theForm.appendChild(input3);



const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
theForm.appendChild(submitButton);
theForm.addEventListener('submit', 
alert("Thank you. The form information has been received.")
);


//document.getElementById('theForm').submit();*/



