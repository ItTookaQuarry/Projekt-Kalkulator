
let table=[]
let wynik=document.querySelector("#wynik")

let kropka=document.querySelector(".kropka")
kropka.addEventListener("click",()=>{
  if(wynik.innerHTML==0){wynik.innerHTML=wynik.innerHTML+"."}
else if(table.length==1||isNaN (wynik.innerHTML+"."+1*1)==true){return;}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+"."
}

})


let liczba2=document.querySelector(".liczba2")
liczba2.addEventListener("click",()=>{
if(table.length==1){return;}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+2}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=2}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=2}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=2}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=2}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=2}
})

let liczba3=document.querySelector(".liczba3")
liczba3.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+3}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=3}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=3}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=3}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=3}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=3}
})

let liczba4=document.querySelector(".liczba4")
liczba4.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+4}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=4}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=4}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=4}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=4}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=4}
})

let liczba5=document.querySelector(".liczba5")
liczba5.addEventListener("click",()=>{

if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+5}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=5}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=5}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=5}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=5}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=5}
})

let liczba6=document.querySelector(".liczba6")
liczba6.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+6}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=6}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=6}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=6}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=6}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=6}
})

let liczba7=document.querySelector(".liczba7")
liczba7.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+7}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=7}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=7}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=7}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=7}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=7}
})

let liczba8=document.querySelector(".liczba8")
liczba8.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+8}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=8}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=8}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=8}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=8}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=8}
})

let liczba1=document.querySelector(".liczba1")
liczba1.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+1}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=1}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=1}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=1}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=1}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=1}
})
let liczba9=document.querySelector(".liczba9")
liczba9.addEventListener("click",()=>{
  
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+9}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=9}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=9}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=9}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=9}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=9}
})


let zero=document.querySelector(".zero")
zero.addEventListener("click",()=>{
if(table.length==1){return}
else if(wynik.innerHTML!=="0"&&wynik.innerHTML!=="*"&&
wynik.innerHTML!=="+"&&wynik.innerHTML!=="-"&&wynik.innerHTML!=="/"){
wynik.innerHTML=wynik.innerHTML+0}
else if(wynik.innerHTML=="0"){
wynik.innerHTML=0}
else if(wynik.innerHTML=="*"){
wynik.innerHTML=0}
else if(wynik.innerHTML=="-"){
wynik.innerHTML=0}
else if(wynik.innerHTML=="+"){
wynik.innerHTML=0}
else if(wynik.innerHTML=="/"){
wynik.innerHTML=0}
})


document.querySelector("#podziel").addEventListener("click",dzielenie)
function dzielenie(){
if(wynik.innerHTML=="*"
||wynik.innerHTML=="/"
||wynik.innerHTML=="+"
||wynik.innerHTML=="-"
||wynik.innerHTML=="="    
){return;}
else if (table.length==1){
table.push("/")
wynik.innerHTML="/"
}
else if(table.length!==1){
let zmienna=wynik.innerHTML*1
table.push(zmienna)
table.push("/")
wynik.innerHTML="/"
}}
console.log(table)

document.querySelector("#pomnożyć").addEventListener("click",mnożenie)
function mnożenie(){
if(wynik.innerHTML=="*"
||wynik.innerHTML=="/"
||wynik.innerHTML=="+"
||wynik.innerHTML=="-"
||wynik.innerHTML=="="  
){return;}
else if (table.length==1){
table.push("*")
wynik.innerHTML="*"

}
else if(table.length!==1){
let zmienna=wynik.innerHTML*1
table.push(zmienna)
table.push("*")
wynik.innerHTML="*"
}
}
    
document.querySelector("#dodać").addEventListener("click",dodawanie)
function dodawanie(){
if(wynik.innerHTML=="*"
||wynik.innerHTML=="/"
||wynik.innerHTML=="+"
||wynik.innerHTML=="-"
||wynik.innerHTML=="="
    
){return;}
else if (table.length==1){
table.push("+")
wynik.innerHTML="+"
}
else if(table.length!==1){
let zmienna=wynik.innerHTML*1
table.push(zmienna)
table.push("+")
wynik.innerHTML="+"
}
}

document.querySelector("#odjąć").addEventListener("click",odjąć)
function odjąć(){
if(wynik.innerHTML=="*"
||wynik.innerHTML=="/"
||wynik.innerHTML=="+"
||wynik.innerHTML=="-"
||wynik.innerHTML=="="
        
){return;}
else if (table.length==1){
table.push("-")
wynik.innerHTML="-"

}
else if(table.length!==1){
let zmienna=wynik.innerHTML*1
table.push(zmienna)
table.push("-")
wynik.innerHTML="-"
}
}

document.querySelector("#Usunąć").addEventListener("click",usunąć)
function usunąć(){
table.splice(0,table.length)
wynik.innerHTML="0"
}
document.querySelector(".równość").addEventListener("click",równość)
function równość(){
if(wynik.innerHTML=="*"
||wynik.innerHTML=="/"
||wynik.innerHTML=="+"
||wynik.innerHTML=="-"
||wynik.innerHTML=="="
){return;}
else if(wynik.innerHTML!=="*"
||wynik.innerHTML!=="/"
||wynik.innerHTML!=="+"
  ||wynik.innerHTML!=="-"
){
table.push(wynik.innerHTML*1)
}    
let i=0
while(i<=table.length){
if(table[i+1]=="*"&&i==0){
table.splice(i,3,table[i]*table[i+2])
i=0}
else if (table[i+1]=="/"&&i==0){
table.splice(i,3,table[i]/table[i+2])
i=0}
if(table[i]=="*"){
    table.splice(i-1,3,table[i-1]*table[i+1])
i=0
}
if(table[i]=="/"){
    table.splice(i-1,3,table[i-1]/table[i+1])
i=0
}
i=i+1
console.log(table)
}
for(let i=0;i<=table.length;i++){
if(table[i]=="+"){
table.splice(i-1,3,table[i-1]+table[i+1])
i=0
}
else if(table[i]=="-"){
table.splice(i-1,3,table[i-1]-table[i+1])
i=0
}
let wyniki=table[0]
wynik.innerHTML=wyniki
}}