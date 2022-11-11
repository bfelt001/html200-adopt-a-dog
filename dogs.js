//jQuery version

$(document).ready(function(){  
    $("img").on("click", function() {    
    
    alert('Name: ' + $(this).data('name') + ' Breed: ' +$(this).data('breed') +  ' Fee: ' + $(this).data('fees'));

});
});


$(document).ready(function(){ 
    var $total = 0;
    $(".add-fee").on("click", function() {
    
    var $a = $(this).data('fee');
    $total += $a;
    
    //alert($total.toFixed(2));
    $("#totalFee").html($total.toFixed(2));
    

});
});

/*vanilla javascript version
var total = 0;
function addFee(fee) {
    var a = Number(fee);
    total += a;
    document.getElementById("totalFee").innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
    alert(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total));
};
*/
