// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Brocoli (Organic) - $1.99",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 1.99
	},
	{
		name: "Bread - $2.35",
		Organic: false,
		Lactoseintolerant: true,
		NutFree: true,
		price: 2.35
	},
	{
		name: "Mars bar - $2.99",
		Organic: false,
		Lactoseintolerant: false,
		NutFree: true,
		price: 2.99
	},
	{
		name: "Peanut Butter - $4.00",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: false,
		price: 4.00
	},
	{
		name: "Milk (Organic) - $5.99",
		Organic: true,
		Lactoseintolerant: false,
		NutFree: true,
		price: 5.99
	},
	{
		name: "Vanilla Ice Cream - $6.99 ",
		Organic: false,
		Lactoseintolerant: false,
		NutFree: true,
		price: 6.99
	},
	{
		name: "Mortadella - 7.00$",
		Organic: false,
		Lactoseintolerant: true,
		NutFree: true,
		price: 7.00
	},
	{
		name: "Salmon (Organic) - $10.00",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 10.00
	},
	
	{
		name: "Steak (Organic) - $14.99",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 14.99
	},
	
	{
		name: "Eggs (Organic) - $15.00",
		Organic: true,
		Lactoseintolerant: true,
		NutFree: true,
		price: 15.00
	}
	
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	if(restriction["none"]==true) {
		for (let i=0; i<prods.length; i+=1) {
			product_names.push(prods[i]);
		}
	} else {
		for (let i=0; i<prods.length; i+=1) {
			var toAdd = true;
			if (restriction["NutFree"]==true && prods[i]["NutFree"]!=true){
				toAdd = false;		
			}
			if (restriction["Lactoseintolerant"]==true && prods[i]["Lactoseintolerant"]!=true){
				toAdd = false;		
			}
			if (restriction["Organic"]== true && prods[i]["Organic"]!=true){
				toAdd = false;		
			}
			if(toAdd==true){
				product_names.push(prods[i]);
			}
		}	
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}