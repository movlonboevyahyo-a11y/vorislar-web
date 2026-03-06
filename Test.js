let tests=[]
let index=0
let score=0

fetch("data/tests.json")
.then(r=>r.json())
.then(data=>{
tests=data
show()
})

function show(){

let q=tests[index]

document.getElementById("testBox").innerHTML=
`

<h3>${q.question}</h3>
<button onclick="answer('a')">${q.a}</button>
<button onclick="answer('b')">${q.b}</button>
<button onclick="answer('c')">${q.c}</button>
`}

function answer(a){

if(a==tests[index].correct){
score++
}

index++

if(index<tests.length){
show()
}else{
document.getElementById("result").innerText="Natija: "+score
}

}

function nextTest(){

index++
show()

}
