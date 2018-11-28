


$(document).ready(function () {
  var stop = false;
  var sprite = [0,0];
  var x= 62;
  var y = -89;
  var ctx = document.getElementById("canvas").getContext("2d");
  var sentido = 'adelante';
  var sentidoAnterior = 'izquierda';
  var estado = 'nuevo';
  var animContador = 0;
  var ruta = new Image();
  var auto = new Image();
  var posSprite;
  var mar = new Image();
  mar.src = "img/background/mar.png";
  ruta.src = "img/background/ruta.png";
  var ambulancia = new Image();
  ambulancia.ancho = 0;
  ambulancia.alto = 0;
  auto.src = "img/sprites/jugador/sprite-auto.png";
  auto.posX = 345;
  auto.posY = 415;
  ambulancia.src = "img/sprites/oponente/sprite-ambulancia.png";
  ambulancia.posX = 0;
  ambulancia.posY = 415;
  ruta.onload = function(){
  var sprites = {
    dimension: {
      ancho: 62,
      alto: 89
    },
    auto: {
      nuevo:{
        adelante: [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]],
        izquierda: [[0,1],[1,1],[0,1],[0,1],[1,1],[1,1]],
        derecha:[[0,2],[2,0],[0,0],[0,0],[0,0],[0,0]]
      },
      roto:{
        adelante: [[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],
        izquierda: [[0,1],[1,1],[0,1],[0,1],[0,1],[0,1],],
        derecha:[[0,1],[2,1],[0,1],[0,1],[0,1],[0,1]]
      },
      destrozado:{
        adelante: [[0,2],[0,2],[0,2],[0,2],[0,2],[0,2]],
        izquierda: [[0,2],[1,2],[0,2],[0,2],[0,2],[0,2]],
        derecha:[[0,2],[2,2],[0,2],[0,2],[0,2],[0,2]]
      },
      explosion: [[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],
      [0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],
      [0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],
      [0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[0,10],[1,10],[2,10],[3,10],[4,10],[3,10]]
    }
  };

document.addEventListener('keypress', doblar);


function doblar(evt){
  if (!stop) {
    var codigo = evt.keyCode;
    switch (codigo) {
     case 97:case 37:  sentidoAnterior = sentido;
          sentido = 'izquierda';
          if(estado == 'nuevo'){
            sprite[0] = 62;
            sprite[1] = 0;
          }else if (estado == 'roto'){
            sprite[0] = 62;
            sprite[1] = 89;
          }else{
            sprite[0] = 62;
            sprite[1] = 178;
          }
          if(auto.posY>400){
            auto.posY -=70;
          }
       break;
     case 100:case 39: sentidoAnterior = sentido;
          sentido = 'derecha';
          if(estado == 'nuevo'){
            sprite[0] = 124;
            sprite[1] = 0;

          }else if (estado == 'roto'){
            sprite[0] = 124;
            sprite[1] = 89;
          }else{
            sprite[0] = 124;
            sprite[1] = 178;
          }
          if(auto.posY<550){
            auto.posY +=70;
          }
       break;

   }
  }


}


    function dibujarAutos(auto){
     ctx.drawImage(auto,sprite[0],sprite[1],sprites.dimension.ancho,sprites.dimension.alto,auto.posY,auto.posX,62,89);
    // imagen, posY del sprite, posX del sprite, ancho auto, alto auto, posY auto en pantalla, posX, tamaño si se quiere estirar ancho,alto



    }


function resetAuto(){
  sentido = 'adelante';
  if (estado == 'nuevo'){
    sprite[0]=0;
    sprite[1]=0;
  } else if (estado == 'roto'){
    sprite[0]=0;
    sprite[1]=89;
  } else {
    sprite[0]=0;
    sprite[1]=178;
  }
}
function detectarChoque(){
  ambulancias.forEach(deteccionChoque);
}

  setInterval(animarExplosion(x+=62,y+=89),5);
  var set1 = setInterval(dibujarRuta, 2);
  //var set7 = setInterval(dibujarContrarios, 1);
  var set2 = setInterval(dibujarMar,30);
  var set3 = setInterval(resetAuto, 110);
  var set4 = setInterval(avanzarContrarios, 4);
  var set5 = setInterval(crearContrario,1000);
  var set6 = setInterval(detectarChoque,1);

ruta.height = 503;
mar.height = 503;
function dibujarRuta(){

  ctx.drawImage(ruta,0, ruta.height,433,502,270, 0,433,502);

  // imagen, ancho auto, alto auto, posY auto en pantalla, posX, tamaño si se quiere estirar ancho,alto
  if(!stop){
    ruta.height = ruta.height-1;
    if(ruta.height <= 0){
      ruta.height = 503;
  }
dibujarContrarios();
dibujarAutos(auto);
} else {
  texto();
  if(x<=445){
      animarExplosion(x+=62,y);
  }
  else if(y<=694){
    x=0;
    animarExplosion(x,y+89);
  }else{
    x= 694;
    y= 267;
      animarExplosion(x,y);
  }

}




}
function dibujarMar(){

  ctx.drawImage(mar,0, mar.height,270,502,0, 0,270,502);
  ctx.drawImage(mar,0, mar.height,270,502,703, 0,270,502);
  mar.height = mar.height-1;
  if(mar.height <= 0){
    mar.height = 503;
  }
  switch (estado) {
    case 'nuevo':ctx.drawImage(auto,0,0,sprites.dimension.ancho,sprites.dimension.alto,10,20,46,67);ctx.drawImage(auto,0,0,sprites.dimension.ancho,sprites.dimension.alto,50,20,46,67);
    case 'roto':ctx.drawImage(auto,0,0,sprites.dimension.ancho,sprites.dimension.alto,10,20,46,67);
    break;
    default:

  }
}
function dibujarContrarios(){
ambulancias.forEach(dibujarC);

}
var cant = 0;
function dibujarC(contrario){
  ctx.drawImage(contrario.tipo,contrario.ancho,contrario.alto,sprites.dimension.ancho,sprites.dimension.alto,contrario.posY,contrario.posX,62,89);
  if (contrario.ancho == 0 && cant >= 20 && cant <40){
    contrario.ancho =62;
  } else if (contrario.ancho == 62  && cant >= 40 && cant < 60){
    contrario.ancho = 124;
  } else  if (cant >= 60 && cant < 80){
    contrario.ancho = 0;

  } else if (cant == 80){
    cant = 0;
  }
    cant++;
}

function deteccionChoque(np){
  if (auto.posX == np.posX && auto.posY == np.posY) {
    //alert("autoX: " +auto.posX + " y: " +auto.posY + " - ambulancia X: " + np.posX + " y: " + np.posY);
    switch (estado) {
      case 'nuevo': estado = 'roto';
        break;
      case 'roto': estado = 'destrozado';
      break;
      case 'destrozado':  pararJuego();
        break;
      default:

    }
}
}
function pararJuego(){



  //setInterval(animarExplosion(x+=62,y+=89),5);
  //  dibujarRuta();
  clearInterval(set2);
  stop = true;
  clearInterval(set3);
  clearInterval(set4);
  clearInterval(set5);
  clearInterval(set6);
//setInterval(animarExplosion(x+=62,y+=89),5);


}

function animarExplosion(x,y){
      ctx.drawImage(auto,x,y,sprites.dimension.ancho,sprites.dimension.alto,auto.posY,auto.posX,62,89);

}

function texto(){
  ctx.font = '35px sans-serif';
  ctx.fillStyle = 'red';
  ctx.fillText("GAME   OVER",370,75,500);
}
function avanzarContrarios(np){
  ambulancias.forEach(avanzar);

}
function avanzar(np){
    np.posX = np.posX+3;
}
var ambulancias = new Array();

function crearContrario(){ // se crean siempre 2 contrarios, pero si salen en el 5 o 6 o se repiten no sirve
                            // por lo que pueden aparecer  0 (numeros sorteados 5 y 6)
                            // o bien 1 ( ej. sorteo 1 y 6 ---- ej2, 4 y 4)
                            // o 2 ( ej. 3 y 4)

  var n = Math.floor((Math.random() * 6) + 1);
  var m = Math.floor((Math.random() * 6) + 1);
  if (n != m){
    switch (n) {
      case 1: ambulancias.push(new NPC(ambulancia,345));
        break;
      case 2: ambulancias.push(new NPC(ambulancia,415));
        break;
      case 3: ambulancias.push(new NPC(ambulancia,485));
        break;
      case 4: ambulancias.push(new NPC(ambulancia,555));
        break;
      }

    }
    switch (m) {
      case 1: ambulancias.push(new NPC(ambulancia,345));
        break;
      case 2: ambulancias.push(new NPC(ambulancia,415));
        break;
      case 3: ambulancias.push(new NPC(ambulancia,485));
        break;
      case 4: ambulancias.push(new NPC(ambulancia,555));
        break;
      }


}


class NPC {
  constructor(tip,columna) {
    this.tipo = tip;
    this.ancho = 0;
    this.alto = 0;
    this.src = tip.src;
    this.posX = 0;
    this.posY = columna;
 }
}

function MousePos(canvas, evt) {
this.ClientRect = canvas.getBoundingClientRect();
posMouseX = evt.clientX - ClientRect.left;
posMouseY = evt.clientY - ClientRect.top;


};

var down = false;
var check = false;
var turno = 1;
canvas.addEventListener('mousedown', function (evt) {
    down = true;
    check = true;
    MousePos(canvas, evt);



}, false);




canvas.addEventListener('mouseup', function (event) {
  MousePos(canvas, event);

}, false);


canvas.addEventListener('mousemove', function (event) {

    if (down){



    }


    },false);


}

});
