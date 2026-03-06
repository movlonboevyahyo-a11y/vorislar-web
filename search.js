let words=[]

fetch("data/words.json")
.then(r=>r.json())
.then(data=>{
words=data
wordOfDay()
})

document.getElementById("searchInput").addEventListener("input",function(){

let input=this.value.toLowerCase()

let results=document.getElementById("results")

results.innerHTML=""

let filtered=words.filter(w=>w.word.toLowerCase().includes(input))

filtered.forEach(w=>{
results.innerHTML+=`

<div class="card">
<h4>${w.word}</h4>
<p>${w.meaning}</p>
<p>${w.synonym}</p>
</div>`
})})

function wordOfDay(){

let random=words[Math.floor(Math.random()*10)]

document.getElementById("wordDay").innerHTML=`

<h4>${random.word}</h4>
<p>${random.meaning}</p>
`}
