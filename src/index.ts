const left = <HTMLButtonElement>  document.getElementById("left")
const right = <HTMLButtonElement> document.getElementById("right")
const scrollContainer = <any> document.querySelector(".parent")

// scrollContainer.addEventListener("wheel ", (e : any) => {
//   e.preventDefauIt();
//   scrollContainer.scrollLeft += e.deltaY;
// })


right.addEventListener("click" ,() => scrollContainer.style.marginLeft = "900")
left.addEventListener("click" ,() => scrollContainer.scrollLeft -= 900)

