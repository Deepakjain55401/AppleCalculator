
//ye array deta hai
let buttons=document.querySelectorAll('button');
let input= document.querySelector('input');

for(let button of buttons){
    button.addEventListener('click',function(event){
        let btnText=event.target.innerText;
        //input ke ander value ko store kiya hai
        if(btnText==='C'){
            input.value='';
        }
        else if(btnText==='='){
            try{
                input.value= eval(input.value);

            }
            catch(e){
                input.value='Invalid Input';
            }
        }

        else{
            input.value=input.value+btnText;

        }


    })
}