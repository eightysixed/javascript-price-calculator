/*
This source is shared under the terms of LGPL 3
www.gnu.org/licenses/lgpl.html

You are free to use the code in Commercial or Non-Commercial projects
*/

function getQuantity()
{
    //Assume form with id="theForm"
    var theForm = document.forms["calculator"];
    //Get a reference to the TextBox
    var quantity = theForm.elements["quantity"];
    var howmany = 1;
    //If the TextBox is not blank
    if(quantity.value!="")
    {
        howmany = parseInt(quantity.value);
    }
return howmany;
}

function calculateTotal()
{
    //Get Total Price by Calling the Function
    var widgetPrice = getQuantity()*1.49; //Change 1.49 to Any Multiplier
    var widgetPriceRounded = +((widgetPrice).toFixed(2));  //Round the Result to 2 Decimal Points

    //Display the Result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'block';
    divobj.innerHTML = "Total Price: $"+widgetPriceRounded;
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}
