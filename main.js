function createTower() {
    const tower = document.getElementById('tower');
    for (let i = 0; i < 24; i++) {
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('hour');
        hourDiv.id = `hour-${i}`;
        hourDiv.textContent = `${i}:00`;
        tower.appendChild(hourDiv);
    }
}

// Function to update the active hour, mark passed hours, and adjust fill for the current hour
function updateTower() {
    // Get the current hour and minutes from the system clock
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Calculate percentage of the current hour that has passed
    const hourFillPercentage = (currentMinute / 60) * 100;

    // Loop through each hour div and apply appropriate classes
    for (let i = 0; i < 24; i++) {
        const hourDiv = document.getElementById(`hour-${i}`);

        // Reset classes and inline style
        hourDiv.classList.remove('active', 'passed');
        hourDiv.style.background = '';

        if (i < currentHour) {
            // Passed hours
            hourDiv.classList.add('passed');
        } else if (i === currentHour) {
            // Current hour with gradient fill based on the percentage
            hourDiv.classList.add('active');
            hourDiv.style.setProperty('--hour-fill', `${hourFillPercentage}%`);
        }
    }
}

// Initialize tower and update every minute
createTower();
updateTower();
setInterval(updateTower, 60000); // Corrected to update every minute
