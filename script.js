$(document).ready(function () {
    // Matrix animation
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create matrix characters
    const matrixChars = '01';
    const matrixCharsArr = matrixChars.split('');

    // Set font and text size
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Create columns array
    const columnsArr = [];
    for (let i = 0; i < columns; i++) {
        columnsArr[i] = 1;
    }

    // Draw function
    function draw() {
        // Black background with opacity
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Blue text color
        ctx.fillStyle = '#00f'; // Blue color for matrix text
        ctx.font = fontSize + 'px Courier';

        // Loop through columns
        for (let i = 0



