$(document).ready(function () {
    // Matrix animation
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix characters
    const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const matrixCharsArray = matrixChars.split("");

    // Set font size
    const fontSize = 16;
    const columns = canvas.width / fontSize;

    // Create columns array
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }

    // Draw function
    function draw() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00f"; // Blue characters
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = matrixCharsArray[Math.floor(Math.random() * matrixCharsArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 33);
});

