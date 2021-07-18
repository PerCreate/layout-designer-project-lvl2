let section = document.querySelector('.page-price');
let arrowLeft = section.querySelector('.arrow-left');
let arrowRight = section.querySelector('.arrow-right');

window.addEventListener(`resize`, event => {
    setSizeChanges();
  }, false);

const setSizeChanges = () => {
    if(section.clientWidth > 958) {
        let cardsContainer = section.querySelector('.cards');
        cardsContainer.children[2].style.display = "flex";
        cardsContainer.children[3].style.display = "flex";
    }

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
    if(section.clientWidth <= 618 && section.clientWidth > 414) {
        let cardsContainer = section.querySelector('.cards');
        cardsContainer.children[2].style.display = "flex";
        cardsContainer.children[3].style.display = "flex";
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
        let currentMargin = 420;
        let x1 = null;
        cardsContainer.addEventListener("touchstart", (event) => {
            x1 = event.touches[0].clientX;
        })
        cardsContainer.addEventListener("touchmove", (event) => {
            let x2 = event.touches[0].clientX;
            let xDiff = x2 - x1;
            
            if (currentMargin >= -420 && currentMargin <= 420) {
                console.log(currentMargin);
                currentMargin += xDiff / 10;
                cardsContainer.style.transform=`translateX(${currentMargin}px)`;
            }
            if (currentMargin > 420) currentMargin = 420;
            if (currentMargin < -420) currentMargin = -420;
        })
    }
 

    if(section.clientWidth <= 414){
        let cardsContainer = section.querySelector('.cards');
        cardsContainer.style.transform="translateX(0px)";
        let cardsContainerArray = section.querySelector('.cards').querySelectorAll('.price-card');
        
        cardsContainerArray[0].style.display = "flex";
        cardsContainerArray[1].style.display = "flex";
        cardsContainerArray[2].style.display = "flex";
        arrowLeft.style.display = "none";
        arrowRight.style.display = "none";
    }
}
setSizeChanges();