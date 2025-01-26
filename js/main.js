document.addEventListener("DOMContentLoaded",()=>{
  const seven = document.getElementById ("seven");
  const eight = document.getElementById ("eight");
  const nine = document.getElementById ("nine");
  const plus = document.getElementById ("plus");
  const moins = document.getElementById ("moins");
  const times = document.getElementById ("times");
  const divide = document.getElementById ("divide");
  const one = document.getElementById ("one");
  const two = document.getElementById ("two");
  const three = document.getElementById ("three");
  const four = document.getElementById ("four");
  const five = document.getElementById ("five");
  const six = document.getElementById ("six");
  const zero = document.getElementById ("zero");
  const clear = document.getElementById ("clear");
  const equal = document.getElementById ("equal");
  const input = document.getElementById ("input");


  let input1 = 0; //1
  let input2 = 0; //2

  let results = 0; // result

  zero.addEventListener ("click", ()=>{

    input.innerHTML += '0'
  })

  one.addEventListener ("click", ()=>{

    input.innerHTML += '1' // 1 or 1111
  })

  two.addEventListener ("click", ()=>{

    input.innerHTML += '2'
  })

  three.addEventListener ("click", ()=>{

    input.innerHTML += '3'
  })

  four.addEventListener ("click", ()=>{

    input.innerHTML += '4'
  })

  five.addEventListener ("click", ()=>{

    input.innerHTML += '5'
  })

  six.addEventListener ("click", ()=>{

    input.innerHTML += '6'
  })

  seven.addEventListener("click", ()=>{
    input.innerHTML += '7'
  })

  eight.addEventListener ("click", ()=>{

    input.innerHTML += '8' 
  })

  
  nine.addEventListener ("click", ()=>{

    input.innerHTML += '9' 
  })

  
  plus.addEventListener ("click", ()=>{

    input1 = parseFloat(input.innerHTML);
    input.innerHTML = '';
  })

  
  moins.addEventListener ("click", ()=>{

    input.innerHTML = '-'
  })

  
  times.addEventListener ("click", ()=>{

    input.innerHTML = '*'
  })

  
  divide.addEventListener ("click", ()=>{
    input.innerHTML = '/'
  })

  clear.addEventListener ("click", ()=>{

    input.innerHTML = ''
  })

  equal.addEventListener ("click", () =>{
    input2 = parseFloat(input.innerHTML);
    results = input1 + input2;
    input.innerHTML = results;
  })

  equal.addEventListener ("click", () =>{
    input2 = parseFloat(input.innerHTML);
    results = input1 - input2;
    input.innerHTML = results;
  })

});


