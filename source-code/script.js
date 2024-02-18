var currentStep = 1;
var totalSteps = 6; // Total number of steps in the form

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        if (currentStep === 6) {
            displayConfirmation();
        }
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
    }
}

function showStep(step) {
    // Hide all steps
    var formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(function(group) {
        group.style.display = 'none';
    });

    // Show only the current step
    var currentStepGroups = document.querySelectorAll('.step' + step);
    currentStepGroups.forEach(function(group) {
        group.style.display = 'block';
    });

    // Show or hide previous and next buttons based on the current step
    if (step === 1) {
        document.querySelector('.prevBtn').style.display = 'none';
        document.querySelector('.nextBtn').style.display = 'inline-block';
    } else if (step === totalSteps) {
        document.querySelector('.prevBtn').style.display = 'inline-block';
        document.querySelector('.nextBtn').style.display = 'none';
    } else {
        document.querySelector('.prevBtn').style.display = 'inline-block';
        document.querySelector('.nextBtn').style.display = 'inline-block';
    }
}
