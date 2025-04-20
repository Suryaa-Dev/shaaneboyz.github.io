// // Script to animate the route path
// const ctx = document.getElementById('routeCanvas').getContext('2d');
// let routeData = {
//   labels: ['Solapur', 'Mahabaleshwar', 'Ganpatipule'],
//   datasets: [{
//     label: 'Trip Route',
//     data: [0, 200, 400],  // Distance in km
//     backgroundColor: 'rgba(75,192,192,0.2)',
//     borderColor: 'rgba(75,192,192,1)',
//     borderWidth: 1,
//     fill: false
//   }],
// };

// let config = {
//   type: 'line',
//   data: routeData,
//   options: {
//     responsive: true,
//     animation: {
//       duration: 2000,  // Animation duration
//       easing: 'easeInOutQuad'
//     },
//     plugins: {
//       legend: { position: 'top' },
//       tooltip: { enabled: true }
//     },
//     scales: {
//       x: {
//         display: true,
//         title: { display: true, text: 'Location' }
//       },
//       y: {
//         display: true,
//         title: { display: true, text: 'Distance (km)' }
//       }
//     }
//   }
// };

// const routeChart = new Chart(ctx, config);

// // Scroll animations
// ScrollReveal().reveal('.card', { 
//   distance: '50px', 
//   duration: 500,
//   origin: 'bottom',
//   delay: 200 
// });


  // window.addEventListener("load", function () {
  //   const canvas = document.getElementById('routeCanvas');
  //   const ctx = canvas?.getContext('2d');

  //   if (ctx) {
  //     ctx.strokeStyle = '#FF5722';
  //     ctx.lineWidth = 3;

  //     let path = [
  //       { x: 50, y: 100, name: 'Solapur' },
  //       { x: 200, y: 80, name: 'Mahabaleshwar' },
  //       { x: 350, y: 120, name: 'Alibaug' },
  //       { x: 450, y: 90, name: 'Alibaug' }
  //     ];

  //     let i = 0;
  //     function drawPath() {
  //       if (i >= path.length - 1) return;
  //       ctx.beginPath();
  //       ctx.moveTo(path[i].x, path[i].y);
  //       ctx.lineTo(path[i + 1].x, path[i + 1].y);
  //       ctx.stroke();
  //       ctx.closePath();

  //       // Draw circle and label
  //       ctx.fillStyle = '#333';
  //       ctx.beginPath();
  //       ctx.arc(path[i].x, path[i].y, 5, 0, 2 * Math.PI);
  //       ctx.fill();
  //       ctx.fillStyle = '#000';
  //       ctx.fillText(path[i].name, path[i].x + 8, path[i].y - 8);

  //       i++;
  //       setTimeout(drawPath, 1000);
  //     }

  //     drawPath();
  //   }
  // });


  window.addEventListener("load", function () {
    const canvas = document.getElementById('routeCanvas');
    const ctx = canvas.getContext('2d');

    // Responsive canvas setup
    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    resizeCanvas();

    // Define your animated path
    const path = [
      { x: 20, y: 100, name: 'Solapur' },
      { x: 80, y: 80, name: 'Mahabaleshwar' },
      { x: 100, y: 120, name: 'Alibaug' },
      { x: 250, y: 90, name: 'Alibaug' }
    ];

    let i = 0;
    function drawPath() {
      if (i >= path.length - 1) return;
      ctx.beginPath();
      ctx.moveTo(path[i].x, path[i].y);
      ctx.lineTo(path[i + 1].x, path[i + 1].y);
      ctx.strokeStyle = '#FF5722';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw point and label
      ctx.fillStyle = '#333';
      ctx.beginPath();
      ctx.arc(path[i].x, path[i].y, 5, 0, 2 * Math.PI);
      ctx.fill();

      ctx.font = '14px Poppins';
      ctx.fillStyle = '#000';
      ctx.fillText(path[i].name, path[i].x + 10, path[i].y - 10);

      i++;
      setTimeout(drawPath, 800);
    }

    drawPath();

    // Redraw on window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      location.reload(); // simple way to refresh canvas for now
    });
  });