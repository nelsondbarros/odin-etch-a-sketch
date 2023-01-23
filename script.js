const container = document.querySelector('#container');

for (i=0; i<256;i++){
    container.appendChild(document.createElement('div'))

}



let number;
const buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{button.addEventListener('click',()=> {
    do {
        number = window.prompt("Enter a number below 100");
    }
    while (number > 100);


    
})
});
