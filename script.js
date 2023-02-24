const keys = document.querySelectorAll('li')
const screen1 = document.querySelector('.frist-input input');
const screen2 = document.querySelector('.secend-input input');
const option1 = document.querySelector('.frist-input select');
const option2 = document.querySelector('.secend-input select');

let fristValue = option1.value;
let secendValue = option2.value;

keys.forEach((key)=>{
  key.addEventListener('click',(e)=>{
    calc(e.target.innerText)
  })
})
//update values onchange
option1.onchange = function(){
  fristValue = option1.value;
  calc('');
}
option2.onchange = function() {
  secendValue = option2.value;
  calc('')
}
screen1.addEventListener('input',calc);
//Calculat
function calc(key=''){
  screen1.value += key;
  if (key == 'x') {
    screen1.value = screen1.value.slice(0, -2);
  }
//disabling Year to Ms
  fristValue == 'year' ? option2.lastElementChild.disabled=true : option2.lastElementChild.disabled=false;
  
  secendValue ==  'year' ? option1.lastElementChild.disabled=true : option1.lastElementChild.disabled=false;
//disabling Ms to Year
  fristValue == 'ms' ? option2.children[0].disabled=true : option2.children[0].disabled=false;
  
  secendValue == 'ms' ? option1.children[0].disabled=true : option1.children[0].disabled=false;
  //Calculation
  //milliSecends to .....
  if(fristValue == 'ms' && secendValue == 'ms') {
    screen2.value = screen1.value;
  }else if (fristValue == 'ms' && secendValue == 'secends') {
    screen2.value = screen1.value / 1000;
  }else if (fristValue == 'ms' && secendValue == 'minutes') {
    screen2.value = screen1.value / 1000 / 60;
  }else if (fristValue == 'ms' && secendValue == 'hour') {
    screen2.value = screen1.value / 60 / 60 / 60;
  }else if (fristValue == 'ms' && secendValue == 'day') {
    screen2.value = screen1.value / 60 /24 /60 /1000;
  }else if (fristValue == 'ms' && secendValue == 'week') {
    screen2.value = screen1.value / 7 / 24 / 60 / 60 / 1000;
  }
  //secends to ....
  else if (fristValue == 'secends' && secendValue == 'ms') {
    screen2.value = screen1.value * 1000;
  }else if (fristValue == 'secends' && secendValue == 'secends') {
    screen2.value = screen1.value;
  }else if (fristValue == 'secends' && secendValue == 'minutes') {
    screen2.value = screen1.value / 60;
  }else if(fristValue == 'secends' && secendValue == 'hour') {
    screen2.value = screen1.value / 60 / 60;
  }else if (fristValue == 'secends' && secendValue == 'day') {
    screen2.value = screen1.value / 60 / 24 / 60;
  }else if (fristValue == 'secends' && secendValue == 'week') {
    screen2.value = parseInt(screen1.value / 7 / 24 / 60 / 60);
  }else if (fristValue == 'secends' && secendValue == 'year') {
    screen2.value = screen1.value / 31536000;
  }
  //minutes to ....
  else if (fristValue == 'minutes' && secendValue == 'ms') {
    screen2.value = screen1.value * 1000 * 60;
  }else if (fristValue == 'minutes' && secendValue == 'minutes') {
    screen2.value = screen1.value;
  }else if (fristValue == 'minutes' && secendValue == 'secends') {
    screen2.value = screen1.value * 60;
  }else if (fristValue == 'minutes' && secendValue == 'hour') {
    screen2.value = screen1.value / 60;
  }else if (fristValue == 'minutes' && secendValue == 'day') {
    screen2.value = screen1.value / 60 / 24;
  }else if (fristValue == 'minutes' && secendValue == 'week') {
    screen2.value = parseInt(screen1.value / 7 / 24 / 60);
  }else if (fristValue == 'minutes' && secendValue == 'year') {
    screen2.value = screen1.value / 525600;
  }
  //hours to ....
  else if (fristValue == 'hour' && secendValue == 'ms') {
    screen2.value = screen1.value * 1000 * 60 * 60;
  }else if (fristValue == 'hour' && secendValue == 'secends') {
    screen2.value = screen1.value * 60 * 60;
  }else if (fristValue == 'hour' && secendValue == 'minutes') {
    screen2.value = screen1.value * 60;
  }else if (fristValue == 'hour' && secendValue == 'hour') {
    screen2.value = screen1.value;
  }else if (fristValue == 'hour' && secendValue == 'day') {
    screen2.value = screen1.value / 24;
  }else if (fristValue == 'hour' && secendValue == 'week') {
    screen2.value = parseInt(screen1.value / 7 / 24);
  }else if (fristValue == 'hour' && secendValue == 'year') {
    screen2.value = screen1.value / 8760;
  }
  //days to .....
  else if (fristValue == 'day' && secendValue == 'ms') {
    screen2.value = screen1.value * 60 * 24 * 60 *1000;
  }else if (fristValue == 'day' && secendValue == 'secends') {
    screen2.value = screen1.value * 60 * 24 * 60;
  }else if (fristValue == 'day' && secendValue == 'minutes') {
    screen2.value = screen1.value * 60 * 24;
  }else if (fristValue == 'day' && secendValue == 'hour') {
    screen2.value = screen1.value * 24;
  }else if (fristValue == 'day' && secendValue == 'day') {
    screen2.value = screen1.value;
  }else if (fristValue == 'day' && secendValue == 'week') {
    screen2.value = parseInt(screen1.value / 7);
  }else if (fristValue == 'day' && secendValue == 'year') {
    screen2.value = screen1.value / 365;
  }
  //weeks to .....
  else if (fristValue == 'week' && secendValue == 'ms') {
    screen2.value = screen1.value * 7 * 24 * 60 * 60 * 1000;
  }else if (fristValue == 'week' && secendValue == 'secends') {
    screen2.value = screen1.value * 7 * 24 * 60 * 60;
  }else if (fristValue == 'week' && secendValue == 'minutes') {
    screen2.value = screen1.value * 7 * 24 * 60;
  }else if (fristValue == 'week' && secendValue == 'hour') {
    screen2.value = screen1.value * 7 * 24;
  }else if (fristValue == 'week' && secendValue == 'day') {
    screen2.value = screen1.value * 7;
  }else if (fristValue == 'week' && secendValue == 'week') {
    screen2.value = screen1.value;
  }else if (fristValue == 'week' && secendValue == 'year') {
    screen2.value = screen1.value / parseInt(52.1428572);;
  }
  //years to .....
  else if (fristValue == 'year' && secendValue == 'secends') {
    screen2.value = parseInt(screen1.value * 12 * 30.41666667 * 24 * 60 * 60);
  }else if (fristValue == 'year' && secendValue == 'minutes') {
    screen2.value = parseInt(screen1.value * 12 * 30.41666667 * 24 * 60);
  }else if (fristValue == 'year' && secendValue == 'hour') {
    screen2.value = parseInt(screen1.value * 12 * 30.41666667 * 24);
  }else if (fristValue == 'year' && secendValue == 'day') {
    screen2.value = parseInt(screen1.value * 12 * 30.41666667);
  }else if (fristValue == 'year' && secendValue == 'week') {
    screen2.value = parseInt(screen1.value * 12 * 4.3452381);
  }else if(fristValue == 'year' && secendValue == 'year') {
    screen2.value = screen1.value;
  };

  screen1.value =='' ? screen2.value =0 : screen2.value;
}
calc();

//kshapi