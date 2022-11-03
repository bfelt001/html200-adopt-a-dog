function clickDog(dogname,breed,fees){
    
    let dogs = ('Name: ' + dogname + ' Breed: ' +breed +  ' Fee: ' + fees);
    
alert(dogs);
}


var total = 0;
function addFee(fee) {
    var a = Number(fee);
    total += a;
    document.getElementById("totalFee").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
    alert(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total));
}

