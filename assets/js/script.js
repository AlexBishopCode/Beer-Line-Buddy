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
