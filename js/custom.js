$(document).ready(function () {
    calculate();
});

$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

function calculate()
{
    /* Profit Calculations */
    var initialprice = $("#initialprice").val();
    var finalprice = $("#finalprice").val();
    var shares = $("#shares").val();
    var profit_percent = ((finalprice - initialprice) / initialprice) * 100;
    if(isNaN(profit_percent)) 
        profit_percent = 0;
    jQuery("label[for='profit_percent']").html("Percent Profit: " + profit_percent + " %");
    jQuery("label[for='profit_dollars']").html("Profit: " + (profit_percent * shares * initialprice) + " $");
}