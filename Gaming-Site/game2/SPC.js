
 var image1 = document.querySelectorAll("img")[0]; 
 var image2 = document.querySelectorAll("img")[1];

function showresultsrock() {
         var ans = randomimg(); 
        image1.setAttribute("src","images/LeftAns1.png"); 
        if(ans === 1){
            document.querySelector("h1").innerHTML = "Draw !"; 
        }else if(ans===2){
            document.querySelector("h1").innerHTML = "You Lost"; 
        }else{
            document.querySelector("h1").innerHTML = "😄You won🚩"; 
        }
        
}
function showresultspaper() {
    var ans = randomimg(); 
    image1.setAttribute("src","images/LeftAns2.png"); 
    if(ans === 2){
        document.querySelector("h1").innerHTML = "Draw !"; 
    }else if(ans===3){
        document.querySelector("h1").innerHTML = "You Lost"; 
    }else{
        document.querySelector("h1").innerHTML = "😄You won🚩"; 
    }
    
}
function showresultsscissor() {
    var ans = randomimg(); 
    image1.setAttribute("src","images/LeftAns3.png"); 
    if(ans === 3){
        document.querySelector("h1").innerHTML = "Draw !"; 
    }else if(ans===1){
        document.querySelector("h1").innerHTML = "You Lost"; 
    }else{
        document.querySelector("h1").innerHTML = "😄You won🚩"; 
    }
   
}

function randomimg() {
    var randomno = Math.floor(Math.random()*3)+1; 
    var randomimgsrc = "images/RightAns"+randomno+".png"; 
    image2.setAttribute("src",randomimgsrc);
    return randomno; 
    
}
