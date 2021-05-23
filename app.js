productChange = (product , isIncrease) => {
	const productInput = document.getElementById(product + "-count");
	const productCount = parseInt(productInput.value);
            console.log(productCount);
	let productNewCount = productCount;
	if (isIncrease == true) {
		productNewCount = productCount + 1;
	}
	if (isIncrease == false && productCount > 0) {
		productNewCount = productCount - 1;
	}
    productInput.value = productNewCount;
    //price update single product 
    let productTotal =0;
    if (product == "pro1") {
        productTotal = productNewCount * 30;
    }    if (product == "pro2") {
		productTotal = productNewCount * 40;
	}    if (product == "pro3") {
		productTotal = productNewCount * 50;
	}    if (product == "pro4") {
		productTotal = productNewCount * 40;
	} 
    	document.getElementById(product + "-total").innerText=productTotal;
        totalAmount();
};
totalAmount =()=>{
    const pro1Count = getInputValue("pro1");
    const pro2Count = getInputValue("pro2");
    const pro3Count = getInputValue("pro3");
    const pro4Count = getInputValue("pro4");

    const totalPrice = pro1Count  * 30+ pro2Count * 40 + pro3Count * 50 + pro4Count * 40;

    document.getElementById("total-price").innerText =  '$' + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
	document.getElementById("tax-amount").innerText = "$" + tax;

	const grandAmount = totalPrice + tax;
	document.getElementById("grand-total").innerText = "$" + grandAmount;

}
getInputValue =(product)=>{
  	const productInput = document.getElementById(product + "-count");
	const productCount = parseInt(productInput.value);
	return productCount;
}