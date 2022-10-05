
function darkMode(){
        
    var elements = document.querySelectorAll('.dark');
            
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.add('primary-dark-color')
        elements[i].style.transition = "all 1s ease";
    }

    var browns = document.querySelectorAll('.brown');
    for(let i = 0; i < browns.length; i++){
        browns[i].classList.add('secondary-dark-color')
        browns[i].style.transition = "all 1s ease";
    }

    var light = document.querySelectorAll('.light');
    for(let i = 0; i < light.length; i++){
        light[i].classList.add('light-color')
        light[i].style.transition = "all 1s ease";
    }

    localStorage.setItem('viewMode', 2);
    document.querySelector("#status").innerHTML = "<div class='mode' onclick='lightMode()'><i class='fa fa-sun-o'></i></div>";
}


function  lightMode() {
    var elements = document.querySelectorAll('.dark');
            
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.remove('primary-dark-color')
    }

    var browns = document.querySelectorAll('.brown');
    for(let i = 0; i < browns.length; i++){
        browns[i].classList.remove('secondary-dark-color')
    }

    var light = document.querySelectorAll('.light');
    for(let i = 0; i < light.length; i++){
        light[i].classList.remove('light-color')
    }

    localStorage.setItem('viewMode', 1);

    document.querySelector("#status").innerHTML = "<div class='mode' onclick='darkMode()'><i class='fa fa-moon-o'></i></div>";
}


var status = localStorage.getItem('viewMode');
if (status == 2){
    darkMode();
}else{
    lightMode();
}
