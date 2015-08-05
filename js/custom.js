/*global $, jQuery */

$(document).ready(function () {
    calculateProfit();
    calculateEarnings();
});

$('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'accordion'
});

function calculateProfit()
{
    /* Profit Calculations */
    
    /* Get the input values */
    var allotment = $('#allotment').val();
    var initialprice = $("#initialprice").val();
    var buycommision = $('#buycommision').val();
    var finalprice = $("#finalprice").val();
    var sellcommision = $('#sellcommision').val();
//    console.log("Allotment" + allotment);
//    console.log("Initial price " + initialprice);
//    console.log("Buy commision " + buycommision);
//    console.log("Final price " + finalprice);
//    console.log("Sell commision " + sellcommision);
    
    /* Calculate the profits */
//    var profit_percent = percent_profit();
    var netprofit = net_profit(initialprice, finalprice, buycommision, sellcommision, allotment);
    console.log("Net " + netprofit);
    
    /* Add the results to the labels */
    //    jQuery("label[for='profit_percent']").html("Return on Investment: " + percent_profit(initialprice, finalprice) + " %");
    jQuery("label[for='marketvalue']").html("Market Value: $" + allotment * finalprice);
    jQuery("label[for='cost']").html("Cost: $" + (allotment * initialprice + parseInt(buycommision) + parseInt(sellcommision)));
    jQuery("label[for='netprofit']").html("Return on Investment: $" + netprofit);
    jQuery("label[for='returnoninvestment']").html("Return on Investment: $" + netprofit);
}

function calculateEarnings()
{
    /* Earning Calculations */
    
    /* Get the input values */
    var allotment = $('#allotment2').val();
    var initialprice = $("#initialprice2").val();
    var buycommision = $('#buycommision2').val();
    var price = $("#price").val();
    var number = $("#number").val();
    
    
    console.log("Allotment" + allotment);
    console.log("Initial price " + initialprice);
    console.log("Buy commision " + buycommision);
    console.log("Price " + price);
    console.log("Number " + number);
}

function net_profit(initialprice, finalprice, buycommision, sellcommision, allotment)
{
    return (allotment * (finalprice - initialprice)) - sellcommision - buycommision;
}

function percent_profit(initialprice, finalprice)
{
    var profit_percent = ((finalprice - initialprice) / initialprice) * 100;
    if(isNaN(profit_percent)) 
        profit_percent = 0;
    return profit_percent;
}
