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
