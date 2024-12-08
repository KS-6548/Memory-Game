let Cardarray = [
    {
        name:"Forg",
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:"pen",
        icon:'<i class="fa-solid fa-pen"></i>'
    },
    {
        name:"drum",
        icon:'<i class="fa-solid fa-drum"></i>'
    },
    {
        name:"heart",
        icon:'<i class="fa-solid fa-heart"></i>'
    },
    {
        name:"broke heart",
        icon:'<i class="fa-solid fa-heart-crack"></i>'
    },
    {
        name:"moon",
        icon:'<i class="fa-solid fa-moon"></i>'
    },
    {
        name:"Forg",
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:"pen",
        icon:'<i class="fa-solid fa-pen"></i>'
    },
    {
        name:"drum",
        icon:'<i class="fa-solid fa-drum"></i>'
    },
    {
        name:"heart",
        icon:'<i class="fa-solid fa-heart"></i>'
    },
    {
        name:"broke heart",
        icon:'<i class="fa-solid fa-heart-crack"></i>'
    },
    {
        name:"moon",
        icon:'<i class="fa-solid fa-moon"></i>'
    }
]

let card_body = document.getElementById("card-body")
let flippedcards =[]
let chances =5 ;
let win_count =0;

Shufflecard()
displayCard()
console.log(Cardarray);


function Shufflecard()
{
    for(let i=Cardarray.length-1; i>=0; i--)
        {
            let randIndex = Math.floor(Math.random()*(i+1));
            [Cardarray[i],Cardarray[randIndex]] = [Cardarray[randIndex],Cardarray[i]]
        }
}

function displayCard()
{
    Cardarray.forEach(
        (curr,index)=>{
            const card = document.createElement('div')
            card.setAttribute("id",index)
            card.classList.add("cardback")
            card.classList.add("active")
            card_body.appendChild(card)
            
            card.addEventListener("click",flipcard)
        }
    )
}

function flipcard()
{
    if(flippedcards.length<2 && this.classList.contains('active'))
        {
            this.style.animation = "flip 0.5s ease";
            let careIndex = this.getAttribute("id")
            flippedcards.push(this)
            this.classList.remove("cardback")
            this.classList.remove("active")
            
            this.style.border = "2px solid black"
            this.innerHTML = Cardarray[careIndex].icon
            if(flippedcards.length == 2)
                {
                    setTimeout(checkmatch,1000)
                }
                console.log(flippedcards);
            }
            
        }
        
        
        function checkmatch()
        {
            let card1index = flippedcards[0].getAttribute("id")
    let card2index = flippedcards[1].getAttribute("id")

    if (Cardarray[card1index].name === Cardarray[card2index].name) {
        flippedcards[0].innerHTML = ""
        flippedcards[1].innerHTML = ""
        flippedcards[0].style.background = "white"
        flippedcards[1].style.background = "white"
        flippedcards[0].style.border = "none"
        flippedcards[1].style.border = "none"
        win_count++
        
        if(win_count>=6){
            document.getElementById("chance").innerHTML = "YOU WIN"
            card_body.innerHTML = ""
            alert(`WIN in ${chances} chances`)
            Shufflecard()
            displayCard()
            flippedcards =[]
            chances=5
            document.getElementById("chance").innerHTML = chances
        }
        console.log(win_count);
    }
    else{
        flippedcards[0].classList.add("active")
        flippedcards[1].classList.add("active")
        flippedcards[0].classList.add("cardback")
        flippedcards[1].classList.add("cardback")

        flippedcards[0].style.border = "none"
        flippedcards[1].style.border = "none"
        flippedcards[0].style.animation = "none"
        flippedcards[1].style.animation = "none"
        flippedcards[0].innerHTML = ""
        flippedcards[1].innerHTML = ""
        chances--
        document.getElementById("chance").innerHTML = chances
        if(chances<=0){
            document.getElementById("chance").innerHTML = "GAME OVER"
            card_body.innerHTML = ""
            alert("GAME OVER")
            Shufflecard()
            displayCard()
            flippedcards =[]
            chances=5
            document.getElementById("chance").innerHTML = chances
        }
    }
    
    flippedcards = []
}



