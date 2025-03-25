const galleryConteiner = document.querySelector(".gallery-container");
const galleryControlsConteiner = document.querySelector(".gallery-controls");
const galleryControls = ["", "", "", ""];
const galleryItems = document.querySelectorAll(".gallery-item");

class Carousel {
    constructor (conteiner, items, controls){
        this.carouselConteiner = conteiner;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove("gallery-item-1");
            el.classList.remove("gallery-item-2");
            el.classList.remove("gallery-item-3");
            el.classList.remove("gallery-item-4");
            el.classList.remove("gallery-item-5");
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
        });
    }
    setCurrentState(direction) {
        if (direction.ClassName == "gallery-controls-previous"){
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsConteiner.appendChild(document.createElement("button")).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerHTML = control;
        });
    }
    useControls() {
        const triggers = [...galleryControlsConteiner.childNodes];
        triggers.forEach(control => {
            control.addEventListener("click", e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}
const exempleCarousel = new Carousel(galleryConteiner, galleryItems, galleryControls);
exempleCarousel.setControls();
exempleCarousel.useControls();
