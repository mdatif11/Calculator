let input=document.getElementById('input');
let buttons=document.querySelectorAll('button');
let s="";
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            s=eval(s);
            input.value=s;
        }
        else if(e.target.innerHTML=='AC')
        {
            input.value="";
            s="";
        }
        else if(e.target.innerHTML=='DEL')
        {
            s=input.value;
            s=s.substring(0,s.length-1);
            input.value=s;
        }
        else
        {
        s+=e.target.innerHTML;
        input.value=s;
        }
    }
)
})
