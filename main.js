document.addEventListener('DOMContentLoaded', () => {
    const handballForm = document.getElementById('handball-form');
    const pianoForm = document.getElementById('piano-form');
    const handballStats = document.getElementById('handball-stats');
    const pianoStats = document.getElementById('piano-stats');

    handballForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Use .value on the input elements correctly
        const wins = document.getElementById('wins').value;
        const losses = document.getElementById('losses').value;

        // Make sure the values are converted to numbers if needed
        if (wins && losses) {
            handballStats.innerHTML = `Wins: ${wins}, Losses: ${losses}`;
        } else {
            handballStats.innerHTML = 'Please enter both wins and losses.';
        }
        
        // Reset the form after submission
        handballForm.reset();
    });

    pianoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const practiceTime = document.getElementById('practice-time').value;
        const piece = document.getElementById('piece').value;

        if (practiceTime && piece) {
            pianoStats.innerHTML = `Practiced "${piece}" for ${practiceTime} minutes`;
        } else {
            pianoStats.innerHTML = 'Please enter both practice time and piece practiced.';
        }

        pianoForm.reset();
    });
});
