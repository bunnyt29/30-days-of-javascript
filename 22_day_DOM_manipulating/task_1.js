var c = document.querySelector('.container');
for(var i = 0; i<100; i++){
    var newDiv = c.appendChild(document.createElement('div'));
    newDiv.className = "inner_container";

    var title = newDiv.appendChild(document.createElement('h1'));
    title.textContent= i;
}

const divs = document.querySelectorAll('.inner_container');
divs.forEach((div, i) => {
    if(i%2==0){
        div.style.backgroundColor = 'green';
    }else{
        for(var k = 1; k <= Math. sqrt(i); k += 1){
            if(i % k === 0){
                div.style.backgroundColor = "red"; 
            }
            else{
                div.style.backgroundColor = " yellow"
            }
        }
    }
})

