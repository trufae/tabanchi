// TAMAGOTCHI FOR BANGLEJS2 -- GPLv3 - pancake 2022

var hs = require("heatshrink");

var scale = 6;
var tool = -1;
var w = g.getWidth();
var h = g.getHeight();
var hd = 1;
var vd = 1;
var x = 20;
var sx = 0; // screen scroll x position
var y = 40-scale;
var animated = true;
var transition = false;
var caca = null;
var egg = null;
var cacas = 1;
var mode = '';
var evolution = 1;

var egg00 = {
  width : 16, height : 16, bpp : 1,
  transparent : 1,
  buffer : atob("/////////D/7n/GP8e/n9+537nfvx/OP+Z/wD/////8=")
}

var egg01 = {
  width : 16, height : 16, bpp : 1,
  transparent : 1,
  buffer : atob("///////////8P/uf8Y/x7+P37nfud/PP+Z/gB/////8=")
}

var caca00 = {
  width : 12, height : 12, bpp : 1,
  transparent : 1,
  buffer : atob("/////733v72/+f4vw3wH////")
}

var caca01 = {
  width : 12, height : 12, bpp : 1,
  transparent : 1,
  buffer : atob("////v/33v7+3+f4v0HwH////")
}

//var img = hs.decompress(atob("sFggP/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A+A"));
var tama00 = {
  width : 16, height : 16, bpp : 1,
  transparent : 1,
  buffer : atob("///////////8H/vv9oHvveuB793vwd/34A////////8=")
}
var tama01 = {
  width : 16, height : 16, bpp : 1,
  transparent : 1,
  buffer : atob("/////////AH7vfeB7sfvwevd78Hv7+/v7+/33/g///8=")
}

var tool00 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("//////7v4f8zHwP8zHwP8zHwP8zHwP8THwP8DHwP8BHgP8AHgP8AHgP+AHgP+APgP/AfAP/g/AP/x/AP/x/AP/x/AP/w/gP/w/8P/w/8P/gf8P/gf8P/AP8P/AP4P/AP4P/gf4P/wf4P/4/8f/////A=")
}

var tool01 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("///////D///fD4/+Pn4/+P/4//P/7/v+Af3n4APjDwAHDjgADP/AGD//DPh/+H/h/+O5x/GOkxxCOkxBOG8xh/GYz//HBz//jBn//xjmPw4/ODx///Dx+AfH/8AP///////+Af//8AP///////////A=")
}

var tool02 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("///////////////+D///4B///x8///xUf/hmTf+An/f4AmTfwAmTfgAl8fABx8+AD4B8AH8D4AP//wAf//gA///AB//+AH//8AP//4A///wD//8AP//4A///4H///4H///8H///+P/////////////A=")
}

var tool03 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("/////////////x////g////gf//fwP/+P4P/+OMH/+GEH/8DCD/4BjB/wxhB/h4xg/D8Qw8H8Yw4H+M5wH+H/gD/H/gD/D/wB8B/wAwB/wAAz/wAD//gAH//CAf//PB////n//////////////////A=")
}

var tool10 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("////////////////wf///AH//yAD/Dkfh8B0/wAA8/wA44vnD545Bgx8ZA4x4H58xznP8RjjH8ZnmP8ZmGPw5gPAB58fAHx8fw/x4///j8///j8f//D8f/8H+D/gf/AAA//gAD//+Af///////////A=")
}

var tool11 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("//////////////////////B///wAD/+AAA/8D/wPwfz+Hg/z/Dj7z3xH5znYM5znIM5TmIOdT8YGeL85GOP45neP/xj+P/zz+P/zx+H/nx+H/n4///H4/h/P8QAGP+AAAf/D/g////////////////A=")
}
var tool12 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("/////////////////////////////z////5////5///94///48/g/8c8AH8M4AGcEwAOEEgAyAgAAwAgAB4YwAH8YwAH+c4AH/c4AAf84gAB/4gAB/5wAB/54AD//8AH///gf/////////////////A=")
}

var tool13 = {
  width : 30, height : 30, bpp : 1,
  transparent : 1,
  buffer : atob("/////////////////////////+A///8AP//weH//x/jg/j/yAPnPwOHnM4/jnM9/5n8//5k/+fkk/vHEmPPgMjAbgcxxjmc4fD/48AB/4+AQ/x//4fj//+AH///AP/////////////////////////A=")
}

var shower = {
  width : 8, height : 16, bpp : 1,
  transparent : 1,
  buffer : atob("5cuXy+XLl8vly5fL5cuXyw==")
}

var tools = [
  tool00, tool01,tool02,tool03,
  tool10,tool11,tool12, tool13
  ];

var tamabg = {
  width : 176, height : 176, bpp : 8,
  buffer : require("heatshrink").decompress(atob("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"))
}
                                            
                                            
g.clear()
g.setColor(1,1,1);
g.fillRect(0,0,200,200);

g.setColor(0);

g.drawString("Loading...", 10, 10);
egg = egg00;
n = tama00;

function drawScene() {
    g.setColor(0,0,0);
  g.fillRect(0,0,200,200);
  g.drawImage(tamabg,0,0,{scale:1});
    g.setColor(1,1,1);

  if (evolution == 0) {
    g.drawImage(egg, w / 4, 32, {scale:scale});
    return;
  }
  // draw tamagotchi
  g.drawImage(n,x+sx,y, {scale:scale});
  // draw caca
  drawCaca();
  
  if (tool >= 0) {
  // top actions
  if (tool == 0)
  g.drawImage(tool00, 10, 2);
    if (tool==1)
  g.drawImage(tool01, 10 + 30 + 10, 2);
    if (tool==2)
  g.drawImage(tool02, 10 + 30 + 10 + 30 + 10, 2);
    if (tool==3)
  g.drawImage(tool03, 10 + 30 + 10 + 30 + 10 + 30 + 10, 2);
  // bottom actions
    if (tool==4)
  g.drawImage(tool10, 10, 135);
    if (tool==5)
  g.drawImage(tool11, 10 + 30 + 10, 135);
    if (tool==6)
  g.drawImage(tool12, 10 + 30 + 10 + 30 + 10, 135);
    if (tool==7)
  g.drawImage(tool13, 10 + 30 + 10 + 30 + 10 + 30 + 10, 135);
  }
}

// this function is executed once per second. so the animations look stable and consistent
function updateAnimation() {
  if (evolution == 0) {
    // animate the egg
    egg = (egg == egg00)? egg01: egg00;
    return;
  }
  x += (scale)*hd;
  if (x + (tama00.width*scale)>=w) {
    hd = -hd;
  }
  if (x < 0) {
    hd = -hd;
  }
  caca = (caca == caca00)? caca01: caca00;
 // y += vd * scale;
  vd = -vd;
  var width = (w / scale);
  n = n == tama00 ? tama01: tama00;
  if (cacas > 0) {
    if (x > (width/2)) {
      hd = -1;
      x = (width/2);
    }
  }
}

function nextItem() {
  tool++;
  if (tool>7) tool = 0;
}
function prevItem() {
  tool--;
  if (tool<0) tool=7;
}
function activateItem() {
  if (mode != '') {
    return;
  }
  switch (tool) {
    case -1:
      animateToClock();
      break;
    case 0:
    case 1:
      evolution = 0; // reset to the egg
      break;
    case 4:
      animateShower();
      break;
  }
  tool = -1;
}



function drawCaca() {
  if (!caca) {
    caca = caca00;
  }
  if (cacas == 0) {
    return;
  }
  g.setColor(0,0,0);
  g.drawImage(caca, sx + w - (scale * 11), 32 + (scale * 6), {scale:scale});
  if (cacas == 1) {
    return;
  }
  g.drawImage(caca, sx + w - (scale * 11), 32-scale, {scale:scale});
}

function animateShower() {
  if (transition) {
    return;
  }
  transition = true;
  var width = w / scale;
  var cx = w;
  var iv = setInterval(function() {
    sx -= scale * 4;
    drawScene();
    cx -= scale * 4;
    g.setColor(1,1,1);
    g.drawImage(shower, cx, 40-scale, {scale: scale});
      if (cx < 0) {
        clearInterval(iv);
        mode = '';
        transition = false;
        animated = true;
        sx += width;
        if (sx < 0) sx = 40;
        if (cacas > 0) {
              // if it was dirty, play the happy animation
        }
        cacas = 0;
        drawScene();
      }
    }, 100);
}


function animateToClock() {
  if (transition) {
    return;
  }
  if (mode == 'clock') {
    return;
  }
  mode = 'clock';
  transition = true;
  console.log('atc');
  var width = w / scale;
  var cx = w;
  animated = false;
   var iv = setInterval(function() {
    sx -= scale*4;
    drawScene();
    cx -= scale*4;
    g.setColor(0,0,0);
    g.fillRect(cx, 38, w, h-50);
    if (cx < 0) {
        clearInterval(iv);
        mode = 'clock';
        transition = false;
        animated = true;
        drawScene();

    }
  }, 100);
}

function animateFromClock() {
  if (transition) {
    return;
  }
  if (mode != 'clock') {
      return;
  }
  transition = true;
  var cx = 0;
    var width = w / scale;
    animated = false;
    var iv = setInterval(function() {
    sx += scale*4;
    drawScene();
    cx += scale*4;
    g.drawString('CLOCK', cx, 100);
      g.setColor(0,0,0);
      g.fillRect(cx, 38, w, h - 50);
      if (cx > w) {
        clearInterval(iv);
        mode = '';
        animated = true;
        transition = false;
        drawScene();
      }
    }, 100);
  
}

function button(n) {
  Bangle.beep(150);
  
  if (evolution == 0) {
    evolution = 1;
  }
  switch(n) {
    case 1:
      switch(mode) {
        case 'clock':
          animateFromClock();
          break;
        default:
          nextItem();
          drawScene();
          break;
      }
      break;
    case 2:
      if (mode == 'clock') {
        animateFromClock();
      } else {
        activateItem();
        tool = -1;
        drawScene();
      }
      break;
    case 3:
      if (mode == 'clock') {
        animateFromClock();
      } else {
          mode = '';
      tool = -1;
        drawScene();
      }
      break;
  }
}

function drawClock() {

}

setInterval(function() {
  if (animated) {
    drawScene();
    updateAnimation();
  }
},1000);

Bangle.on('touch', function(r,s) {
  const w4 = w/3;
  if (s.x > w - w4) {
    button(3);
  } else if (s.x < w4) {
      button(1);
  } else {
    button(2);
  }
});
