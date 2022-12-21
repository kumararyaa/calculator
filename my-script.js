var string = " ";
var a = document.getElementsByClassName('btn');
// console.log(a);
for (var i = 0; i < a.length; i++) {
  // console.log(i);
  a[i].addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      document.querySelector('.screen').value=string;
    }
    else if(e.target.innerHTML=='AC'){
      string="";
      document.querySelector('.screen').value=string;
    }
    else{console.log(e.target.innerHTML);
    // console.log('a');
    string += e.target.innerHTML;
    var screen = document.querySelector('.screen');
    screen.value = string;
    //  document.write(screen.value);
    }
  });

}

