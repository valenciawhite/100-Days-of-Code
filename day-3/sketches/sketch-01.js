const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1200, 1200 ],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    let w = width * 0.10;
    let h = height * 0.10;
    let gap = width * 0.10;
    let ix = width * -0.01;
    let iy = height * 0.03;
    let off = width * 0.70; 

    for(let i = 0; i < 5; i++){
      for(let j = 0; j < 5; j++){
          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;
  
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();  
          context.strokeStyle = "#00FF41"  
  
          if (Math.random() > .01){
          context.beginPath();
          context.rect(x + off/2.5, y + off/2.5, w - off/3, h - off/2);
          context.stroke();
          }    
      }
      
  }
  };
};

canvasSketch(sketch, settings);



