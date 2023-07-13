let string="";
let buttons = document.querySelectorAll(".button");
let buttons1 = document.querySelectorAll(".button1");
let buttons2 = document.querySelectorAll(".button2");
let buttons3 = document.querySelectorAll(".button3");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
         if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '%') {
            string = (eval(string) / 100).toString();
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML === '⌫') {
            string = string.slice(0, -1); // Remove the last character from the string
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })

})
Array.from(buttons1).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='0'){
            string=string+e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons2).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string= eval(string);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons3).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            string= eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML=='5'){
            string= string+5;
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})