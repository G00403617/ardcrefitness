function setCart(x){
	if(x== 1){
		
		qty = document.getElementById("qty1").value;
		sessionStorage.qty1 = qty;
		
	}else if{
			qty = document.getElementById("qty2").value;
		sessionStorage.qty2 = qty;
	}else if{
			qty = document.getElementById("qty3").value;
		sessionStorage.qty3 = qty;
	}else if{
			qty = document.getElementById("qty4").value;
		sessionStorage.qty4 = qty;
	}else if{
			qty = document.getElementById("qty5").value;
		sessionStorage.qty5 = qty;
	}else if{
			qty = document.getElementById("qty6").value;
		sessionStorage.qty6 = qty;
	}else if{
			qty = document.getElementById("qty7").value;
		sessionStorage.qty7 = qty;
		
	}else{
			qty = document.getElementById("qty8").value;
		sessionStorage.qty8 = qty;
	alert("item added to cart");
}

function getCart(){
	document.getElementById("dq").textContent = sessionStorage.qty1;
	let orangeTotal = sessionStorage.qty1 * 25;
	document.getElementById("dt").textContent = "€" + orangeTotal;
	
	
	document.getElementById("kq").textContent = sessionStorage.qty2;
	let blueTotal = sessionStorage.qty2 * 25;
	document.getElementById("kt").textContent = "€" + blueTotal;
	
	
	document.getElementById("rq").textContent = sessionStorage.qty3;
	let orangeTotal = sessionStorage.qty3 * 25;
	document.getElementById("rt").textContent = "€" + orangeTotal;
	
	
	document.getElementById("bq").textContent = sessionStorage.qty4;
	let blueTotal = sessionStorage.qty4 * 25;
	document.getElementById("bt").textContent = "€" + blueTotal;
	
	
document.getElementById("gq").textContent = sessionStorage.qty5;
	let orangeTotal = sessionStorage.qty5 * 25;
	document.getElementById("gt").textContent = "€" + orangeTotal;
	
	
	document.getElementById("glq").textContent = sessionStorage.qty6;
	let blueTotal = sessionStorage.qty6 * 25;
	document.getElementById("glt").textContent = "€" + blueTotal;
	
	document.getElementById("hq").textContent = sessionStorage.qty7;
	let orangeTotal = sessionStorage.qty7 * 25;
	document.getElementById("ht").textContent = "€" + orangeTotal;
	
	
	document.getElementById("shq").textContent = sessionStorage.qty8;
	let blueTotal = sessionStorage.qty8 * 25;
	document.getElementById("sht").textContent = "€" + blueTotal;
	document.getElementById("total").textContent= "€" + (bluetotal + orangeTotal)
	}
	
	
	