import "../styles/styles.css"
import MenuClass from "./modules/menu"
import scrollRevealClass from "./modules/scrollReveal"


let menu = new MenuClass();
new scrollRevealClass(document.querySelectorAll(".feature-item"));
new scrollRevealClass(document.querySelectorAll(".testimonial"));

if(module.hot)
{
	module.hot.accept();
}

//console.log("test message");


//alert("Hello JS World!!")
