 var sum=0;
var avgPrice;
items.forEach(function(elements){
  sum +=elements.price;

});
avgPrice = (sum/items.length);
console.log(avgPrice);

document.getElementById("answer1").innerHTML=avgPrice.toFixed(2);
// Items $14-$18

var priceArr = items.filter(function (element) {
  return element.price >14 && element.price <18;
});
newArr= priceArr.map(function(elements){
  return {
    title: elements.title,
    price: elements.price,
  };
});

var newPriceStr= "";
newArr.forEach(function(elements){
  newPriceStr +="<h5>" + elements.title + "price" + elements.price+"</h5";
});

document.getElementById("answer2").innerHTML = "Cost $" + newPriceStr;



var gbpArray = items.filter(function(elements){
  return elements.currency_code === "GBP";
});
newGbpArr=gbpArray.map(function(elements){
  return{
    title: elements.title,
    currency_code: elements.currency_code,
    price: elements.price
  };
});
codeGbpArray="";
newGbpArr.forEach(function(elements){
  codeGbpArray+="<h5>"+ elements.title +"currency_code" + elements.currency_code+ "</h5>";
});

document.getElementById("answer3").innerHTML = "GBP is" + codeGbpArray;

///Wood///

var woodArray = items.filter(function(elements){
  return elements.materials.includes("wood") ;
});
 var woodStr="";
woodArray.forEach(function(elements){
woodyArray="<h5>"+elements.title+"materials"+elements.materials+"</h5>" ;
});
document.getElementById("answer4").innerHTML = "Items with Wood"+ woodyArray;
////Materials/////

var eightArr =items.filter(function(elements){
  return elements.materials.length >= 8;

});

var eightStr="";
eightArr.forEach(function(elements){

eightStr="<h5>"+elements.title+"materials"+ elements.materials+"</h5>";
});
document.getElementById("answer5").innerHTML= "Eight items are" + eightStr;


var giantList ="";
items.filter(function(el){
  return el.who_made === 'i_did';
}).forEach(function(el){
  giantList += "<p>"+ el.title +"</p>";
});

document.getElementById('answer6').innerHTML = giantList;
