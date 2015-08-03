$(document).ready(function () {
    calculate();
});


function calculate()
{
    /* Profit Calculations */
    var initialprice = $("#initialprice").val();
    var finalprice = $("#finalprice").val();
    var profit_percent = ((finalprice - initialprice) / initialprice) * 100;
    if(isNaN(profit_percent)) 
        profit_percent = 0;
    jQuery("label[for='profit_percent']").html(profit_percent + " %");
}