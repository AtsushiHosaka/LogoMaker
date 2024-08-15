const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fan properties for 4 fans
const fans = [
    {
        radius: document.getElementById('radius1').value,
        color: document.getElementById('color1').value,
        startAngle: document.getElementById('startAngle1').value,
        angle: document.getElementById('angle1').value
    },
    {
        radius: document.getElementById('radius2').value,
        color: document.getElementById('color2').value,
        startAngle: document.getElementById('startAngle2').value,
        angle: document.getElementById('angle2').value
    },
    {
        radius: document.getElementById('radius3').value,
        color: document.getElementById('color3').value,
        startAngle: document.getElementById('startAngle3').value,
        angle: document.getElementById('angle3').value
    },
    {
        radius: document.getElementById('radius4').value,
        color: document.getElementById('color4').value,
        startAngle: document.getElementById('startAngle4').value,
        angle: document.getElementById('angle4').value
    }
];

// Draw a fan shape
function drawFan(x, y, radius, startAngle, endAngle, color) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// Update the canvas with the current fan shapes
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fans.forEach(fan => {
        const startAngle = fan.startAngle * Math.PI / 180;
        const endAngle = startAngle + fan.angle * Math.PI / 180;
        drawFan(200, 200, fan.radius, startAngle, endAngle, fan.color);
    });
}

// Add event listeners to update fan properties and redraw the canvas
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        fans[0].radius = document.getElementById('radius1').value;
        fans[0].color = document.getElementById('color1').value;
        fans[0].startAngle = document.getElementById('startAngle1').value;
        fans[0].angle = document.getElementById('angle1').value;

        fans[1].radius = document.getElementById('radius2').value;
        fans[1].color = document.getElementById('color2').value;
        fans[1].startAngle = document.getElementById('startAngle2').value;
        fans[1].angle = document.getElementById('angle2').value;

        fans[2].radius = document.getElementById('radius3').value;
        fans[2].color = document.getElementById('color3').value;
        fans[2].startAngle = document.getElementById('startAngle3').value;
        fans[2].angle = document.getElementById('angle3').value;

        fans[3].radius = document.getElementById('radius4').value;
        fans[3].color = document.getElementById('color4').value;
        fans[3].startAngle = document.getElementById('startAngle4').value;
        fans[3].angle = document.getElementById('angle4').value;

        updateCanvas();
    });
});

// Save the canvas image as a PNG file
function saveImage() {
  canvas.toBlob(function(blob) {
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.href = url;
      link.download = 'fan_image.png';
      
      // Trigger a click event to open the save dialog
      const clickEvent = new MouseEvent('click');
      link.dispatchEvent(clickEvent);
      
      // Revoke the object URL after the download
      URL.revokeObjectURL(url);
  });
}

// Initial draw
updateCanvas();
