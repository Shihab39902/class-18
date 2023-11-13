let increment = document.querySelector('#increment');
 let decrement = document.querySelector('#decrement');
 let cert = document.querySelector('#cert');


 increment.addEventListener("click", () =>{
     let certvalue =Number(cert.value);
     cert.value = ++certvalue;
 });

 decrement.addEventListener("click", () =>{
    let certvalue =Number(cert.value);
    if(certvalue > 1){
        cert.value = --certvalue;
    }
});


let password_btn = document.querySelector('.password_box .btn');
let password_input = document.querySelector('.password_box .password');

password_btn.addEventListener('click', ()=>{
    if(password_input.type === 'text'){
        password_input.type='password';
    }else{
        password_input.type='text';
    }
})

let range = document.querySelector('#customRange1');

range.addEventListener('input', ()=>{
    document.querySelector('h3').innerHTML = range.value;
})

setInterval(() => {
    let date = new Date();
    document.querySelector('h4').innerHTML = date;
},2000);

setTimeout(()=>{
    document.write('hello');
}, 50000)
