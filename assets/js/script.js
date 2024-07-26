console.log('Hello World!')

//INSTRUCTION STEPS

const steps = [
    "Welcome to Beerline Buddy!",
    "Follow the steps below to ensure your beer line is clean",
    "Before you start, you will need two buckets, some line cleaner and some litmus paper.",
    "Ensure you are wearing gloves and eye protection at all times",
    "Good luck!"
];

let currentStep = 0;

function updateStep() {
    document.getElementById('instruction-text').innerText = steps[currentStep];
    document.getElementById('previous-button').disabled = currentStep === 0;
    document.getElementById('next-button').disabled = currentStep === steps.length - 1;
}

document.getElementById('previous-button').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
    }
});

updateStep(); // Initialize with the first step


// ICONS

document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelectorAll(".icon");
    icons[0].classList.add("clickable"); // Make the first icon clickable

    icons.forEach((icon, index) => {
        icon.addEventListener("click", function () {
            if (icon.classList.contains("clickable")) {
                icon.classList.remove("clickable");
                if (index + 1 < icons.length + 1) {
                    icons[index + 1].classList.change("clickable");
                    icons[index + 1].classList.add("clickable");
                    icons[index].classList.remove("fa-circle");
                    icons[index].classList.add("fa-circle-check");
                }
            }
        });
    });
});

// // Change Div Color 
function ticketBox(event) {
    const targetDivId = event.target.getAttribute('data-target');
    const targetDiv = document.getElementById(targetDivId);
    
    if (targetDiv) {
        targetDiv.style.backgroundColor = '#2d6ed9';
        targetDiv.style.borderRadius = '0 0 10px 10px';
        targetDiv.style.transition = '0.7s';
    }
}
// Add click event

document.querySelectorAll('.fa-circle').forEach(faCircleElement => {
    faCircleElement.addEventListener('click', ticketBox);
});

document.getElementById('timer-button-one').addEventListener('click', () => {

    let timerOne = 900;
    
    const intervalOne = setInterval(() => {
        timerOne--;
    
        const mm = Math.floor(timerOne / 60);
        const ss = timerOne % 60;
        
        const constructMinutes = mm.toString().padStart(2, '0');
        const constructSeconds = ss.toString().padStart(2, '0');
    
        document.getElementById('timer1').innerText = `${constructMinutes}:${constructSeconds}`;
        if (timerOne < 1) {
            clearInterval(intervalOne);
            document.getElementById('timer1').innerText = "Pull through half a jug and start Timer 2";
        }
        console.log(timerOne);
    }, 1000);
    });
    
    //Timer Two
    
    document.getElementById('timer-button-two').addEventListener('click', () => {
    
    let timerTwo = 900;
    
    const intervalTwo = setInterval(() => {
        timerTwo--;
    
        const mm = Math.floor(timerTwo / 60);
        const ss = timerTwo % 60;
        
        const constructMinutes = mm.toString().padStart(2, '0');
        const constructSeconds = ss.toString().padStart(2, '0');
    
        document.getElementById('timer2').innerText = `${constructMinutes}:${constructSeconds}`;
        if (timerTwo < 1) {
            clearInterval(intervalTwo);
            document.getElementById('timer2').innerText = "Pull through half a jug and start Timer 3";
        }
        console.log(timerTwo);
    }, 1000);
    });
    
    //Timer Three
    
    document.getElementById('timer-button-three').addEventListener('click', () => {
    
        let timerThree = 900;
    
        const intervalThree = setInterval(() => {
            timerThree--;
        
            const mm = Math.floor(timerThree / 60);
            const ss = timerThree % 60;
            
            const constructMinutes = mm.toString().padStart(2, '0');
            const constructSeconds = ss.toString().padStart(2, '0');
        
            document.getElementById('timer3').innerText = `${constructMinutes}:${constructSeconds}`;
            if (timerThree < 1) {
                clearInterval(intervalThree);
                document.getElementById('timer3').innerText = "Final pull complete. Start step 6.";
            }
            console.log(timerThree);
        }, 1000);
        });
    
        //Reset Button
//https://developer.mozilla.org/en-US/docs/Web/API/Location/reload

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("reset-button");

    resetButton.addEventListener('click', function() {
        window.location.reload();
        window.scrollTo(0, 0);
    });
});

// Hidden Div

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.clickable-button');
    const hiddenDiv = document.getElementById('hiddenDiv');
    const clickedButtons = new Set();

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            clickedButtons.add(button);

            // Check if the number of clicked buttons matches the total number of buttons
            if (clickedButtons.size === buttons.length) {
                hiddenDiv.style.display = 'block';
                hiddenDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});