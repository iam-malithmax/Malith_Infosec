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
    const drops =

