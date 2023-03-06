const slideshowElements = document.querySelectorAll(".slideshow-element");
// console.log(slideshowElements);

let countElements = 1;
setInterval(() => {
    countElements ++;
    let currentElement = document.querySelector(".current");  //1st- Found the current element.

    currentElement.classList.remove("current");  //2nd- Remove current element, found next element and show it.

    if(countElements > slideshowElements.length) {
        slideshowElements[0].classList.add("current")
        countElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current") //3rd- current class add to the next elements
    }

}, 2000);
