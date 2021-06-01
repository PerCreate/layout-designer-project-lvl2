let section = document.querySelector('.page-price');
let arrowLeft = section.querySelector('.arrow-left');
let arrowRight = section.querySelector('.arrow-right');

window.addEventListener(`resize`, event => {
    if(section.clientWidth <= 958 && section.clientWidth > 414) {
        let cardsContainer = section.querySelector('.cards').querySelectorAll('.price-card');
        arrowLeft.style.display = "block";
        arrowRight.style.display = "block";
        cardsContainer[0].style.display = "flex";
        cardsContainer[1].style.display = "none";
        cardsContainer[2].style.display = "none";
    
        arrowRight.onclick = function () {
            let counter = 0;
            if(cardsContainer[0].style.display == "flex"){
                cardsContainer[0].style.display = "none";
                cardsContainer[1].style.display = "flex";
                return;
            }
            if(cardsContainer[1].style.display == "flex"){
                cardsContainer[1].style.display = "none";
                cardsContainer[2].style.display = "flex";
                return;
            }
            if(cardsContainer[2].style.display == "flex"){
                return;
            }
        }
    
        arrowLeft.onclick = function () {
            if(cardsContainer[2].style.display == "flex"){
                cardsContainer[2].style.display = "none";
                cardsContainer[1].style.display = "flex";
                return;
            }
            if(cardsContainer[1].style.display == "flex"){
                cardsContainer[1].style.display = "none";
                cardsContainer[0].style.display = "flex";
                return;
            }
            if(cardsContainer[0].style.display == "flex"){
                return;
            }
        }
    }
    
    if(section.clientWidth > 958) {
        let cardsContainer = section.querySelector('.cards');
        cardsContainer.children[2].style.display = "flex";
        cardsContainer.children[3].style.display = "flex";
    }

    if(section.clientWidth <= 414){
        let cardsContainer = section.querySelector('.cards').querySelectorAll('.price-card');
        cardsContainer[0].style.display = "flex";
        cardsContainer[1].style.display = "flex";
        cardsContainer[2].style.display = "flex";
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
    }
  }, false);
