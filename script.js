
const cont = document.body.querySelector('.container')
const startbtn = document.body.querySelector('#StartBtn')
const belowbtn = document.body.querySelector('#BelowBtns')
const prev = document.body.querySelector('#b1')
const next = document.body.querySelector('#b2')
const submit = document.body.querySelector('#b3')
const restart = document.body.querySelector('#b4')


let index = 0;
let score = 0;

const arr = [
    {
        Question: 'What is 2 + 9',
        Choice1: '10',
        Choice2: '09',
        Choice3: '11',
        Choice4: '08',
        Answer: '11'
    },
    {
        Question: 'Where is girls Brain',
        Choice1: 'Ankle',
        Choice2: 'Knee',
        Choice3: 'Head',
        Choice4: 'Foot',
        Answer: 'Knee'
    },
    {
        Question: 'Who is Prime Minister of India',
        Choice1: 'Rahul Gandhi',
        Choice2: 'Arvind Kejrival',
        Choice3: 'Narendra Modi',
        Choice4: 'Ankit Pundir',
        Answer: 'Narendra Modi'
    },
    {
        Question: 'Who is Gautams favoirite',
        Choice1: 'Richa',
        Choice2: 'Budia',
        Choice3: 'Ganpat',
        Choice4: 'SipWithBites',
        Answer: 'All'
    },
    {
        Question: 'What is the capital of France?',
        Choice1: 'Paris',
        Choice2: 'Madrid',
        Choice3: 'Rome',
        Choice4: 'London',
        Answer: 'Paris'
    }
]

function check(buttons) {

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {

            if (button.innerText == arr[index].Answer) {
                e.target.style.cssText = "background-color: #19f128"
                    score++;
            }
            else if (arr[index].Answer == 'All') {
                score++
                buttons.forEach(button => {
                    button.style.cssText = "background-color: #19f128"
                })
            }
            else {
                e.target.style.cssText = "background-color: red"
            }
        })
    });
}


function ShowScore() {
    restart.style.cssText = 'display: block;'
    cont.innerHTML = `<div class="box3">
            <h1>Your Score is</h1>
            <div class="score">
            <p>${score}/${arr.length}</p>
        </div>
    </div>`
}

function SetNextQuestion() {
    next.addEventListener('click', () => {
        if (index < arr.length - 1) {
            index++
            StartGame()
        }
        else {
            ShowScore()
            belowbtn.style.cssText = 'display: none;'
        }
    })
}

function SetPrevQuestion() {

    prev.addEventListener('click', () => {
        if (index > 0) {
            index--
            StartGame()
        }
    })
}

function SubmitGame() {

    submit.addEventListener('click', () => {
        ShowScore()
        belowbtn.style.cssText = 'display: none;'
    })
}

function RestartGame() {
    restart.addEventListener('click', () => {
        restart.style.cssText = 'display: none;'
        index = 0;
        score = 0;
        StartGame()
    })
}


function StartGame() {

    const ques = arr[index].Question
    const ch1 = arr[index].Choice1
    const ch2 = arr[index].Choice2
    const ch3 = arr[index].Choice3
    const ch4 = arr[index].Choice4

    cont.innerHTML = `<div class="box">
    <div class="Question">${ques}</div>
        <div class="Option">
            <button>${ch1}</button>
            <button>${ch2}</button>
            <button>${ch3}</button>
            <button>${ch4}</button>
        </div>
</div>`

    const option = document.body.querySelector('.Option')
    const buttons = option.querySelectorAll('button')

    check(buttons)
    belowbtn.style.cssText = 'display: block;'
}

SetNextQuestion()
SetPrevQuestion()
RestartGame()
SubmitGame()



startbtn.addEventListener('click', StartGame)