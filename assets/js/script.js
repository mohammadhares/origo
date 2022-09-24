
function darkMode(){
    let viewMode = localStorage.getItem('viewMode')

    if(viewMode){
        if(viewMode == 1){
            var elements = document.querySelectorAll('.dark');
            for(let i = 0; i < elements.length; i++){
                elements[i].classList.add('primary-dark-color')
            }

            var browns = document.querySelectorAll('.brown');
            for(let i = 0; i < browns.length; i++){
                browns[i].classList.add('secondary-dark-color')
            }

            var light = document.querySelectorAll('.light');
            for(let i = 0; i < light.length; i++){
                light[i].classList.add('light-color')
            }

                document.querySelector('.mode').innerHTML = "Light Mode";
                localStorage.setItem('viewMode', 2);

        }else{
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

            document.querySelector('.mode').innerHTML = "Dark Mode";
            localStorage.setItem('viewMode', 1);
        }
        
    }

}
