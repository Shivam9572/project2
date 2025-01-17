let gamesq=[];
let usersq=[];
let colors=["red","yellow","purple","green"];
let game=false;
let level=0;
let h2=document.querySelector("h2");
let btn_start=document.getElementById("start");
btn_start.addEventListener("click",function(){
    if(game==false)
    {
        console.log("game started!");
        game=true;
    }
    levelup();
})
function flash(btn)
{
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },300);

}

function levelup(){
   usersq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=colors[randomidx];
    let btn=document.querySelector(`.${randomcolor}`);
    
    gamesq.push(randomcolor);
    flash(btn);
    console.log(gamesq);
    console.log(randomidx);
   

}
function check(indx){
  if(usersq[indx]==gamesq[indx])
  {
    if(indx==gamesq.length-1)
    {
      levelup();
    }
  }
  else{
    
    h2.innerHTML=`Game over,your score is <b>${level}</b> <br>`;
    h2.appendChild(btn_start);

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="rgb(115, 106, 106)";
    },150);
    reset();
  }
}
function userflash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },300);
}
let btns=document.querySelectorAll(".btn");
for(btnbox of btns)
{
  btnbox.addEventListener("click",function(){
    let btn=this;

    userflash(btn);
    usercolor=btn.getAttribute("id");
    usersq.push(usercolor);
    check(usersq.length-1);
  });
}

function reset(){
  game=false;
  level=0;
  gamesq=[];
  usersq=[];
}