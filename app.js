function showPage(id){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")

}

/* KUN SO'ZI */

const words=[

{word:"Ma'rifat",meaning:"Bilim va madaniyatni yoyish"},
{word:"Ziyo",meaning:"Ma'naviy nur"},
{word:"Tafakkur",meaning:"Fikr yuritish qobiliyati"},
{word:"Adab",meaning:"Odob va hurmat"},
{word:"Ilm",meaning:"Bilim olish jarayoni"}

]

let random=words[Math.floor(Math.random()*words.length)]

document.getElementById("wordDay").innerHTML=
"<b>"+random.word+"</b><p>"+random.meaning+"</p>"

/* OXIRGI QIDIRUV */

let recent=["Istiqlol","Ziyo","Ma'rifat"]

let html=""

recent.forEach(x=>{

html+="<p>"+x+"</p>"

})

document.getElementById("recent").innerHTML=html

/* ESSE WORD COUNT */

const essay=document.getElementById("essayInput")

essay.addEventListener("input",function(){

let words=essay.value.trim().split(/\s+/)

document.getElementById("wordCount").innerText=words[0]==""?0:words.length

})
