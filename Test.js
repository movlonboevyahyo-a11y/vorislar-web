let tests=[]
let index=0
let score=0

fetch("tests.json")
.then(res=>res.json())
.then(data=>{
tests=data
})

function startTest(){

index=0
score=0

showQuestion()

}

function showQuestion(){

let q=tests[index]

document.getElementById("testBox").innerHTML=

`

<h3>${index+1}. ${q.question}</h3><button onclick="answer('a')">A) ${q.a}</button>

<button onclick="answer('b')">B) ${q.b}</button>

<button onclick="answer('c')">C) ${q.c}</button>
`

}

function answer(a){

if(a==tests[index].correct){
score++
}

index++

if(index<tests.length){

showQuestion()

}else{

document.getElementById("testBox").innerHTML="Test tugadi"

document.getElementById("result").innerText=

"Natija: "+score+" / "+tests.length

}

}

async function generateDictionaryTest(){

let res = await fetch("words.json")

let words = await res.json()

let random = words[Math.floor(Math.random()*words.length)]

document.getElementById("testBox").innerHTML=

`

<h3>"${random.word}" so'zining ma'nosi qaysi?</h3><button onclick="checkAnswer(1)">${random.meaning}</button>

<button onclick="checkAnswer(0)">Noto'g'ri ma'no</button>

<button onclick="checkAnswer(0)">Boshqa ma'no</button>
`

}

function checkAnswer(a){

if(a===1){
alert("To'g'ri javob")
}else{
alert("Noto'g'ri javob")
}

generateDictionaryTest()

}
