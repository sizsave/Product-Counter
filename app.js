var productName=document.querySelector('.productname');
var productPrice=document.querySelector('.productprice');
var productQuantity=document.querySelector('.productquantity');
var addListButton=document.querySelector('.addlistbutton');
var productData=document.querySelector('.productdata');
addListButton.addEventListener('click',addTolist);

function addTolist(){
    var name=productName.value;
    productName.value="";
    var Price=productPrice.value;
    productPrice.value=""; 
    var quantity=productQuantity.value;
    productQuantity.value="";
    
    
    
    
    var productValue=document.createElement('td');
    productValue.innerHTML=name;
    productValue.innerHTML=Price;
    productValue.innerHTML=quantity;
    
    productData.appendChild('productValue');

    }