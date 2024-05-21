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

        // Green text color
        ctx.fillStyle = '#0f0';
        ctx.font = fontSize + 'px Courier';

        // Loop through columns
        for (let i = 0; i < columnsArr.length; i++) {
            const text = matrixCharsArr[Math.floor(Math.random() * matrixCharsArr.length)];
            ctx.fillText(text, i * fontSize, columnsArr[i] * fontSize);

            // Reset column when reaching bottom
            if (columnsArr[i] * fontSize > canvas.height && Math.random() > 0.975) {
                columnsArr[i] = 0;
            }

            // Increment column position
            columnsArr[i]++;
        }
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        draw();
    }

    animate();

    // Initialize Typed.js for the intro text
    new Typed("#pro-text", {
        strings: ["Ethical Hacker"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

