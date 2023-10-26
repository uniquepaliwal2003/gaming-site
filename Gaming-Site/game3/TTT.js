var arr = [
["1","2","3","4","5","6","7","8","9"]
]

var chances = 1 ; 


function check(){
    if(chances%2===1){
        document.querySelector("h1").innerHTML = "First Player's Chance"; 
    }else{
        document.querySelector("h1").innerHTML = "Second Player's Chance";
    }


    if(firstwon()){
        document.querySelectorAll("h1")[1].innerHTML = "First Player Won"; 
        document.querySelector("h1").innerHTML = " "; 
    }else if(secondwon()){
        document.querySelectorAll("h1")[1].innerHTML = "Second Player Won"; 
        document.querySelector("h1").innerHTML = " ";
    }else if(chances>9){
        document.querySelectorAll("h1")[1].innerHTML = "Draw"; 
    }
}

function firstwon(){
    if(arr[1]==="X"&&arr[0]==="X"&&arr[2]==="X"){
        return true; 
    }else if(arr[3]==="X"&&arr[4]==="X"&&arr[5]==="X"){
        return true; 
    }else if(arr[6]==="X"&&arr[7]==="X"&&arr[8]==="X"){
        return true; 
    }else if(arr[0]==="X"&&arr[3]==="X"&&arr[6]==="X"){
        return true; 
    }else if(arr[1]==="X"&&arr[4]==="X"&&arr[7]==="X"){
        return true; 
    }else if(arr[2]==="X"&&arr[5]==="X"&&arr[8]==="X"){
        return true; 
    }else if(arr[0]==="X"&&arr[4]==="X"&&arr[8]==="X"){
        return true; 
    }else if(arr[2]==="X"&&arr[4]==="X"&&arr[6]==="X"){
        return true; 
    }else{
        return false; 
    }
}

function secondwon(){
    if(arr[1]==="O"&&arr[0]==="O"&&arr[2]==="O"){
        return true; 
    }else if(arr[3]==="O"&&arr[4]==="O"&&arr[5]==="O"){
        return true; 
    }else if(arr[6]==="O"&&arr[7]==="O"&&arr[8]==="O"){
        return true; 
    }else if(arr[0]==="O"&&arr[3]==="O"&&arr[6]==="O"){
        return true; 
    }else if(arr[1]==="O"&&arr[4]==="O"&&arr[7]==="O"){
        return true; 
    }else if(arr[2]==="O"&&arr[5]==="O"&&arr[8]==="O"){
        return true; 
    }else if(arr[0]==="O"&&arr[4]==="O"&&arr[8]==="O"){
        return true; 
    }else if(arr[2]==="O"&&arr[4]==="O"&&arr[6]==="O"){
        return true; 
    }else{
        return false; 
    }
}

function fun1() {
    if(document.querySelector("h2").innerHTML==="1"){

    if((chances%2)===1){
        document.querySelector("h2").innerHTML = "X"; 
        arr[0]="X"; 
         
    }else{
        document.querySelector("h2").innerHTML = "O"; 
        arr[0]="O"; 
    }
    chances++; 
    check();
}
}


function fun2() {
    if(document.querySelectorAll("h2")[1].innerHTML==="2"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[1].innerHTML = "X"; 
        arr[1]="X";
         
    }else{
        document.querySelectorAll("h2")[1].innerHTML = "O";
        arr[1]="O"; 
    }
    chances++; 
    check();
}
}

function fun3() {
    if(document.querySelectorAll("h2")[2].innerHTML==="3"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[2].innerHTML = "X"; 
        arr[2]="X";
         
    }else{
        document.querySelectorAll("h2")[2].innerHTML = "O"; 
        arr[2]="O";
    }
    chances++; 
    check();
}
}

function fun4() {
    if(document.querySelectorAll("h2")[3].innerHTML==="4"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[3].innerHTML = "X"; 
        arr[3]="X";
         
    }else{
        document.querySelectorAll("h2")[3].innerHTML = "O"; 
        arr[3]="O";
    }
    chances++; 
    check();
}
}

function fun5() {
    if(document.querySelectorAll("h2")[4].innerHTML==="5"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[4].innerHTML = "X"; 
        arr[4]="X";
         
    }else{
        document.querySelectorAll("h2")[4].innerHTML = "O"; 
        arr[4]="O";
    }
    chances++; 
    check();
}
}

function fun6() {
    if(document.querySelectorAll("h2")[5].innerHTML==="6"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[5].innerHTML = "X"; 
        arr[5]="X";
         
    }else{
        document.querySelectorAll("h2")[5].innerHTML = "O"; 
        arr[5]="O";
    }
    chances++; 
    check();
}
}

function fun7() {
    if(document.querySelectorAll("h2")[6].innerHTML==="7"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[6].innerHTML = "X"; 
        arr[6]="X";
         
    }else{
        document.querySelectorAll("h2")[6].innerHTML = "O"; 
        arr[6]="O";
    }
    chances++; 
    check();
}
}

function fun8() {
    if(document.querySelectorAll("h2")[7].innerHTML==="8"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[7].innerHTML = "X"; 
        arr[7]="X";
         
    }else{
        document.querySelectorAll("h2")[7].innerHTML = "O"; 
        arr[7]="O";
    }
    chances++; 
    check();

}
}

function fun9() {
    if(document.querySelectorAll("h2")[8].innerHTML==="9"){

    if((chances%2)===1){
        document.querySelectorAll("h2")[8].innerHTML = "X"; 
        arr[8]="X";
         
    }else{
        document.querySelectorAll("h2")[8].innerHTML = "O"; 
        arr[8]="O";
    }
    chances++; 
    check();

}
}