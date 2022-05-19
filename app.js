/*const cakeLink = document.querySelector(".l-cake");
const doughnutLink = document.querySelector(".l-doughnut");
const cupcakeLink = document.querySelector(".l-cupcake");
const sweetLink = document.querySelector(".l-sweet");
const allLink = document.querySelector(".l-all");

const cakeCard = document.querySelectorAll(".cake");
const doughnutCard = document.querySelectorAll(".doughnut");

const sweetCard = document.querySelectorAll(".sweet");
const cupcakeCard = document.querySelectorAll(".cupcake");

cakeLink.addEventListener("click", function () {
				for(let i=0; i<cupcakeCard.length; i++) {			
				doughnutCard[i].classList.add("hide");
    cupcakeCard[i].classList.add("hide");
    sweetCard[i].classList.add("hide");
    cakeCard[i].classList.remove("hide");
				}	;
});

cupcakeLink.addEventListener("click", function () {
				for(let i=0; i<cakeCard.length; i++) {			
				doughnutCard[i].classList.add("hide");
    cakeCard[i].classList.add("hide");
    sweetCard[i].classList.add("hide");
    cupcakeCard[i].classList.remove("hide");
				}	;
});

sweetLink.addEventListener("click", function () {
				for(let i=0; i<cupcakeCard.length; i++) {	
				cakeCard[i].classList.add("hide");		
				doughnutCard[i].classList.add("hide");
    cupcakeCard[i].classList.add("hide");
    sweetCard[i].classList.remove("hide");
				}	;
});

doughnutLink.addEventListener("click", function () {
				for(let i=0; i<cupcakeCard.length; i++) {		
				cakeCard[i].classList.add("hide");	
				doughnutCard[i].classList.remove("hide");
    cupcakeCard[i].classList.add("hide");
    sweetCard[i].classList.add("hide");
				}	;
});

allLink.addEventListener("click", function () {
				for(let i=0; i<cupcakeCard.length; i++) {		
				cakeCard[i].classList.remove("hide");	
				doughnutCard[i].classList.remove("hide");
    cupcakeCard[i].classList.remove("hide");
    sweetCard[i].classList.remove("hide");
				}	;
});
*/

var searchLinks = document.querySelectorAll(".search-link");
var productCards = document.querySelectorAll(".product-card");

searchLinks.forEach(function(searchLink) {
				searchLink.addEventListener("click", function(e) {
								e.preventDefault();
								const x = e.target.dataset.value;
						productCards.forEach(function(productCard) {
										if (x === "all") {
														productCard.style.display = "inline-block"
										} else {
														if (productCard.classList.contains(x)) {
													productCard.style.display = "inline-block"
														} else {
											productCard.style.display = "none"
														}
										}
						})
				})
})

var input = document.querySelector(".input");
var productCards = document.querySelectorAll(".product-card");

input.addEventListener("keyup", function(e) {
	const y = e.target.value.toLowerCase().trim();
	productCards.forEach(function(productCard) {
					if (productCard.textContent.includes(y)) {
									productCard.style.display = "inline-block"
					} else {
									productCard.style.display = "none"
					}
	})
})