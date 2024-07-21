function GuessNum() {
    let num = ("Enter the Number between 1 to 100 :")
    let ran = Math.floor(1+Math.random()*99)
    let result;

    if (num<=1 || num>=99) {
        result = ("Invalid Number")
    }
    else if(num == ran){
        result = ("you win")
    }else{
        result = ("Sorry Better luck Next Time .The correct number:"+ ran)
    }
    return result
}
GuessNum();

   document.getElementById("btn").addEventListener('click',() => {
     document.getElementById("demo").innerHTML  = GuessNum()
   })
