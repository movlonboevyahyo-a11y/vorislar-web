let words=[]

fetch("words.json")
.then(res=>res.json())
.then(data=>{
words=data
})

document.getElementById("searchInput").addEventListener("input",function(){

let input=this.value.toLowerCase()

let results=document.getElementById("results")

results.innerHTML=""

let filtered=words.filter(w=>w.word.toLowerCase().includes(input))

filtered.forEach(w=>{

results.innerHTML+=`

<div><h3>${w.word}</h3><p>${w.meaning}</p></div>`

})

})
