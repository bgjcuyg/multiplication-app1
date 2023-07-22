const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const question1= document.getElementById("question")
const inputE1 = document.getElementById("input")
const formE1 = document.getElementById("form")
const scoreE1 =document.getElementById("score")
let score=JSON.parse(localStorage.getItem("score"));

if(score >10|| score < -2)
{
      score=0;
}

scoreE1.innerText=`score: ${score}`
question1.innerText = `what is ${num1} multiply by ${num2}?`
const rightAns = num1*num2;
formE1.addEventListener("submit" , ()=>{
const userAns = +inputE1.value  //+ to convert str into num here input is str so converting// 
  if (userAns === rightAns)
    {
       score++;
       updateLocalStorrage()
    }
  else
    {
       score--;
       updateLocalStorrage()
    }
});

function updateLocalStorrage ()
{
      localStorage.setItem("score" ,JSON.stringify(score))
}
