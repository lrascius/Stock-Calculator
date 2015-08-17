/*global $, jQuery */

$(document).ready(function () {
    calculateProfit();
//    calculateEarnings();
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
    var netprofit = net_profit(initialprice, finalprice, buycommision, sellcommision, allotment);
    var cost = allotment * initialprice + parseFloat(buycommision) + parseFloat(sellcommision);
    var roi = (netprofit / cost) * 100;
    if(isNaN(roi))
        roi = 0;
    
    /* Add the results to the labels */
    if(allotment != 0)
    {
        jQuery("label[for='marketvalue']").html(accounting.formatMoney(allotment * finalprice));
        jQuery("label[for='cost']").html(accounting.formatMoney(cost));
        jQuery("label[for='netprofit']").html(accounting.formatMoney(netprofit));
        jQuery("label[for='returnoninvestment']").html(roi.toFixed(2) + " %");
        if(netprofit < 0)
        {
            jQuery("label[for='netprofit']").css("color", "red");
            jQuery("label[for='returnoninvestment']").css("color", "red");
        }
        if(netprofit > 0)
        {
            jQuery("label[for='netprofit']").css("color", "green");
            jQuery("label[for='returnoninvestment']").css("color", "green");
        }
    }
    else 
    {
        jQuery("label[for='marketvalue']").html(accounting.formatMoney(0));
        jQuery("label[for='cost']").html(accounting.formatMoney(0));
        jQuery("label[for='netprofit']").html(accounting.formatMoney(0));
        jQuery("label[for='returnoninvestment']").html("0.00 %");
        jQuery("label[for='netprofit']").css("color", "black");
        jQuery("label[for='returnoninvestment']").css("color", "black");
    }
}

function calculateEarnings()
{
    /* Remove the previous price labels */
    $( ".pricelabels" ).remove();
    /* Earning Calculations */
    
    /* Get the input values */
    var allotment = $('#allotment2').val();
    var initialprice = $("#initialprice2").val();
    var buycommision = $('#buycommision2').val();
    var sellcommision = $('#sellcommision2').val();
    var price = $("#price").val();
    var number = $("#number").val();
    
    var cost = allotment * initialprice + parseFloat(buycommision) + parseFloat(sellcommision);
    if(allotment != 0)
    {
        for(var i = 1; i <= number; i++)
        {
            var marketvalue = i*price + cost;
            var $label = $("<label class='pricelabels'>").text("Profit of " + accounting.formatMoney(i*price) + ": " + accounting.formatMoney(marketvalue / allotment));
            $('#earningstab').append($label);
        }
    }
}

function net_profit(initialprice, finalprice, buycommision, sellcommision, allotment)
{
    return (allotment * (finalprice - initialprice)) - sellcommision - buycommision;
}

