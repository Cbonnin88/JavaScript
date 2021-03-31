let btn = document.getElementById('btn');
let output = document.getElementById('number');

let guess = Math.floor(Math.random()* 20) + 1;

let tries = 0
btn.addEventListener('click',function (){

    let answer = Number(document.getElementById('userInput').value);
    tries++

    if(answer === guess){
        output.innerHTML = `You got it !!!, the right number was ${guess}. it only took you ${tries} tries`
    } else if(answer > guess){
        output.innerHTML = "Too high, try again"
    } else if(answer < guess){
        output.innerHTML = 'Too low, try again'
    }
});







