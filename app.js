var initialPrice=document.querySelector('#intial-price');
var noOfStocks=document.querySelector('#no-of-stocks');
var currentPrice=document.querySelector('#current-price');
var submitBtn=document.querySelector('#submit-btn');
var outputDiv=document.querySelector('#output-div');

function calculateProfitLoss(initial,qtr,current)
{
    
    if(initial>current){
        var loss=(initial-current)*qtr;
        var lossPercentage=(loss/initial)*100;
        outputDiv.innerText="Whoops!! Your loss is " +loss+" and loss Percentage is " +lossPercentage.toFixed(2)+ "%:("
    }
    else
        if(initial<current){
            var profit=(current-initial)*qtr;
            var profitPercentage=(profit/initial)*100;
            outputDiv.innerText="Yay!! Your Profit is "+profit+" and profit Percentage is " +profitPercentage.toFixed(2)+"%";
        }
    else
    {
        outputDiv.innerHTML="No pain No gain, and no gain no pain :)";
    }
}

function submitHandler(){
    var initial=Number(initialPrice.value) ;
    var number=Number(noOfStocks.value);
    var current=Number(currentPrice.value);
    if(initial>0&&number>0&&current>0){
        calculateProfitLoss(initial,number,current);
    }
    else{
        outputDiv.innerText="Please Enter Valid Amount";
    }  
}

submitBtn.addEventListener('click',submitHandler);