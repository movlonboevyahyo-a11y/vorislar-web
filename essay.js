let text=document.getElementById("essayText")

text.addEventListener("input",function(){

let words=text.value.trim().split(/\s+/)

if(words[0]==""){

document.getElementById("count").innerText=0

}else{

document.getElementById("count").innerText=words.length

}

})
