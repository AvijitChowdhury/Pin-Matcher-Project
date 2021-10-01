

//document.getElementById('notify-sec').style.visibility='hidden';
//document.getElementById('action-lef').style.visibility='hidden';


document.getElementById('generate-button').addEventListener('click',function(){
    document.getElementById('generate-display').value=Math.floor(Math.random()*(9999-1000+1)+100);
})


//right side
let screen =document.getElementById('generate-display2');
buttons=document.querySelectorAll('button');
let screenValue="";

for(item of buttons){
    item.addEventListener('click',(event)=>{
        buttonText = event.target.innerText;

        if(buttonText=='C'){
           screenValue="";
           screen.value=screenValue;
            
        }
        else if(buttonText=="<"){
            screen.value=screenValue.substr(0,screen.value.length-1);
        }
        else if(buttonText=='Generate Pin'){
            
        }
        else if(buttonText=='Submit'){
           
        }
        else{
            screenValue  += buttonText;
            screen.value=screenValue;

        }

    })
}



document.getElementById('submit-btn').addEventListener('click',function(){
   
    const pin1=document.getElementById('generate-display').value;
    const pin2=document.getElementById('generate-display2').value;
    
    if(pin1==pin2){
        document.getElementById('notify-2').style.visibility='visible';
        document.getElementById('notify-1').style.visibility='hidden';
        //document.getElementById('action-lef').style.display='none';
    }
    else{
       

        const trynum=document.getElementById('action-left').innerText;
        const num = 3-1;

        document.getElementById('action-left').innerText=num;
        
        document.getElementById('notify-1').style.visibility='visible';
        document.getElementById('notify-2').style.visibility='hidden';
       // document.getElementById('action-lef').style.display='block';
        document.getElementById('action-lef').style.visibility='visible';
        
    }
    

})



