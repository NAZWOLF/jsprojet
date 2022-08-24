var mybutton1 = document.querySelectorAll(".plus");
      var mybutton2 = document.querySelectorAll(".moins");
      var myinput = document.querySelectorAll(".numv");
      var price1 = 2000;
      var price2 = 3500;
      var price3 = 7200;
      var price4 = 4300;
      var quantity1 = document.querySelector(".quant1");
      var quantity2 = document.querySelector(".quant2");
      var quantity3 = document.querySelector(".quant3");
      var quantity4 = document.querySelector(".quant4");





 var i = 0 ;
 for (i=0;i<mybutton1.length;i++){
    
    mybutton1[i].addEventListener("click",function(){
        var cont = this.parentNode
        var text = cont.querySelector(".numv")
        var numb = parseInt(text.value);
        numb = numb+1;
        text.value = numb;
       var container = cont.parentNode
       
        var price = container.querySelector(".dav")
        var price = parseInt(text.value);
         

         
         
    })
    mybutton2[i].addEventListener("click",function(){
        var cont = this.parentNode
        var text = cont.querySelector(".numv")
        var numb= parseInt(text.value);
        var container = cont.parentNode
       
        var price = container.querySelector(".dav")
         var price = parseInt(text.value);
        
       if(numb===0){
        
        myinput.value = numb
       }else{
        numb = numb -1
       
        text.value = numb
        total.value = total.value-price
       }
       
     })
 }
function totas() {
 var quant1 = Number(quantity1.value);
 var quant2 = Number(quantity2.value);
 var quant3 = Number(quantity3.value);
 var quant4 = Number(quantity4.value);
 
 
  
  
var total = (price1 * quant1) + (price2 * quant2) + (price3 * quant3) + (price4 * quant4);
 console.log(total) 
  document.getElementById("total").innerHTML = total; 
}
