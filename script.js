// Interactive Environmental Impact Calculator Logic
function calculateImpact() {
    // Get the slider value
    const trees = document.getElementById("treeRange").value;
    
    // Calculate estimates:
    // 1 mature tree absorbs approx 22 kg CO2 per year
    // 1 mature tree produces approx 116 kg Oxygen per year
    const co2 = trees * 22;
    const oxygen = trees * 116;

    // Update HTML content in real-time
    document.getElementById("treeCount").innerText = trees;
    document.getElementById("co2Result").innerText = co2;
    document.getElementById("oxygenResult").innerText = oxygen;
}

// Volunteer Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents actual page reload
    
    // Show success alert message
    const alertBox = document.getElementById("successAlert");
    alertBox.classList.remove("d-none");
    
    // Clear form fields
    document.getElementById("volunteerForm").reset();

    // Scroll smoothly down to alert message
    alertBox.scrollIntoView({ behavior: 'smooth' });
}