var myinput = document.querySelector('input')
var mybutton1 = document.querySelectorAll('.plus')
var mybutton2 = document.querySelectorAll('.moins')
 

mybutton1.addEventListener ("click", function(){

    var numb = parseInt(myinput.value)
    
    numb = numb +1
   
    myinput.value = numb

    })
    mybutton2.addEventListener ("click", function(){

        var numb = parseInt(myinput.value)
        
       if (numb===0){
        
        myinput.value = numb
       }else{
        numb = numb -1
       
        myinput.value = numb
       }
    
        })
      var trash = document.querySelector(".trash");
      trash.addEventListener("click", function() {
        document.getElementById("trashcan").value = 0
      })