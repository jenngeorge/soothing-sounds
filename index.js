var Howler = require('howler');

// gong sounds
var gong0 = new Howl({src: './sounds/gong0.wav'})
var gong1 = new Howl({src: './sounds/gong1.wav'})
var gong2 = new Howl({src: './sounds/gong2.wav'})
var gong3 = new Howl({src: './sounds/gong3.wav'})
var gong4 = new Howl({src: './sounds/gong4.wav'})
var gong5 = new Howl({src: './sounds/gong5.wav'})
var gong6 = new Howl({src: './sounds/gong6.wav'})
var gong7 = new Howl({src: './sounds/gong7.wav'})
var gong8 = new Howl({src: './sounds/gong8.wav'})
var gong9 = new Howl({src: './sounds/gong9.wav'})
var gong10 = new Howl({src: './sounds/gong10.wav'})

//hapi_xylo sounds

var hapi1 = new Howl({src: './sounds/Hapi_vs_Xylophone_001.wav'})
var hapi2 = new Howl({src: './sounds/Hapi_vs_Xylophone_002.wav'})
var hapi3 = new Howl({src: './sounds/Hapi_vs_Xylophone_003.wav'})
var hapi4 = new Howl({src: './sounds/Hapi_vs_Xylophone_004.wav'})
var hapi5 = new Howl({src: './sounds/Hapi_vs_Xylophone_005.wav'})
var hapi6 = new Howl({src: './sounds/Hapi_vs_Xylophone_006.wav'})
var hapi7 = new Howl({src: './sounds/Hapi_vs_Xylophone_007.wav'})
var hapi8 = new Howl({src: './sounds/Hapi_vs_Xylophone_008.wav'})
var hapi9 = new Howl({src: './sounds/Hapi_vs_Xylophone_009.wav'})
var hapi10 = new Howl({src: './sounds/Hapi_vs_Xylophone_010.wav'})


var soundDict = {
  65: gong0,
  83: gong1,
  68: gong2,
  70: gong3,
  71: gong4,
  72: gong5,
  74: gong10,
  75: gong7,
  76: gong8,
  186: gong9,
  81: hapi1,
  87: hapi2,
  69: hapi3,
  82: hapi4,
  84: hapi5,
  89: hapi6,
  85: hapi7,
  73: hapi8,
  79: hapi9,
  80: hapi10
}



window.addEventListener('keydown', function (e) {
  var maxLeft = screen.width;
  var maxHeight = screen.height;
  if (soundDict[e.keyCode]) {
    soundDict[e.keyCode].play()
    var newElement = document.createElement("div")
    newElement.style["position"] = "absolute";
    newElement.className = `key${e.keyCode}`;
    newElement.style["top"] = `${Math.floor(Math.random() * 600)}px`;
    newElement.style["left"] = `${Math.floor(Math.random() * 1000)}px`;
    newElement.style["height"] = `${Math.floor(Math.random() * 500)}px`;
    newElement.style["width"] = `${Math.floor(Math.random() * 500)}px`;
    document.body.append(newElement)
    setTimeout(function(){newElement.parentNode.removeChild(newElement)}, 8000)
  }
})
