$(document).ready(function () {

  var ctx = document.getElementById("canvas").getContext("2d");
  var casillas ={
    columna1: { fila1: null, fila2:null, fila3: null, fila4: null , fila5: null, fila6:null},
    columna2: { fila1: null, fila2:null , fila3: null, fila4: null, fila5: null, fila6:null },
    columna3: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null } ,
    columna4: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null },
    columna5: { fila1: null, fila2:null , fila3: null, fila4: null, fila5: null, fila6:null },
    columna6: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null } ,
    columna7: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null }
}
  var fichaActual = {
    aInternal: null,
    aListener: function(val) {},
    set a(val) {
      this.aInternal = val;
      this.aListener(val);
    },
    get a() {
      return this.aInternal;
    },
    registerListener: function(listener) {
      this.aListener = listener;
    }
  }
  var tablero = new Image();
  var fichaAmarilla = new Image();
  fichaAmarilla.src = "img/fichaA.png";
  var fichaRoja = new Image();
  fichaRoja.src = "img/fichaR.png";
  tablero.src = "img/tablero.png";

  tablero.onload = function(){
  ctx.drawImage(tablero, 220, 140);
  var posMouseX = null;
  var posMouseY = null;

  function Ficha(pX,pY,colorin,idFicha){
    this.bloqueado = false;
    this.id = idFicha;
    this.color = colorin;
    this.posInicialX = pX;
    this.posInicialY = pY;
    this.posX = pX;
    this.posY = pY;
    this.imag = colorin;

  }
  Ficha.prototype.contains = function() {
    // All we have to do is make sure the Mouse X,Y fall in the area between
    // the shape's X and (X + Width) and its Y and (Y + Height)
    return  (this.posX <= posMouseX) && (this.posX + 45 >= posMouseX) &&
            (this.posY <= posMouseY) && (this.posY + 45 >= posMouseY);
  }
  function dibujarFicha(fichin){
    ctx.drawImage(fichin.imag, fichin.posX, fichin.posY);

  }
  function Recuadro(pX,pY,idRecuadro){
    this.id = idRecuadro;
    this.color = "#000000";
    this.posX = pX;
    this.posY = pY;
  }
  Recuadro.prototype.contains = function() {
    return  (this.posX-20 <= posMouseX) && (this.posX + 40 >= posMouseX) &&
            (this.posY-20 <= posMouseY) && (this.posY + 40 >= posMouseY);
  }
  var sectorColumnas = [];
  var fichas = [];
  //-----------------Recuadros de Dropeo en columnas------------------
  var recuadro1 = new Recuadro(250+15,110,'columna1');
  sectorColumnas[1] = recuadro1;

  var recuadro2 = new Recuadro(325+15,110,'columna2');
  sectorColumnas[2] = recuadro2;

  var recuadro3 = new Recuadro(400+15,110,'columna3');
  sectorColumnas[3] = recuadro3;

  var recuadro4 = new Recuadro(475+13,110,'columna4');
  sectorColumnas[4] = recuadro4;

  var recuadro5 = new Recuadro(550+11,110,'columna5');
  sectorColumnas[5] = recuadro5;

  var recuadro6 = new Recuadro(625+10,110,'columna6');
  sectorColumnas[6] = recuadro6;

  var recuadro7 = new Recuadro(700+9,110,'columna7');
  sectorColumnas[7] = recuadro7;

dibujarRecuadros();
function dibujarRecuadros(){
  for (var i = 1; i < 8; i++) {
    ctx.fillStyle = sectorColumnas[i].color;
    ctx.beginPath();
    ctx.arc(sectorColumnas[i].posX,sectorColumnas[i].posY,26,0,Math.PI *2);
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
}

//-----------------FIN Recuadros de Dropeo en columnas------------------


//--------------ARMADO DE TABLERO---------------------------
function Casilla(f,c,pX,pY){
  this.ocupado = false;
  this.fila=f;
  this.columna=c;
  this.ficha = null;
  this.posX= pX;
  this.posY= pY;
}
//----------colA
llenarMatriz();
function llenarMatriz(){


var c1A = new Casilla(1,1,242,474);
casillas['columna1']['fila1']=c1A;
var c2A = new Casilla(1,1,242,412);
casillas['columna1']['fila2']=c2A;
var c3A = new Casilla(1,1,242,350);
casillas['columna1']['fila3']=c3A;
var c4A = new Casilla(1,1,242,288);
casillas['columna1']['fila4']=c4A;
var c5A = new Casilla(1,1,242,226);
casillas['columna1']['fila5']=c5A;
var c6A = new Casilla(1,1,242,164);
casillas['columna1']['fila6']=c6A;

//------------colB
var c1B = new Casilla(1,1,315,474);
casillas['columna2']['fila1']=c1B;
var c2B = new Casilla(1,1,315,412);
casillas['columna2']['fila2']=c2B;
var c3B = new Casilla(1,1,315,350);
casillas['columna2']['fila3']=c3B;
var c4B = new Casilla(1,1,315,288);
casillas['columna2']['fila4']=c4B;
var c5B = new Casilla(1,1,315,226);
casillas['columna2']['fila5']=c5B;
var c6B = new Casilla(1,1,315,164);
casillas['columna2']['fila6']=c6B;

//------------colC
var c1C = new Casilla(1,1,388,474);
casillas['columna3']['fila1']=c1C;
var c2C = new Casilla(1,1,388,412);
casillas['columna3']['fila2']=c2C;
var c3C = new Casilla(1,1,388,350);
casillas['columna3']['fila3']=c3C;
var c4C = new Casilla(1,1,388,288);
casillas['columna3']['fila4']=c4C;
var c5C = new Casilla(1,1,388,226);
casillas['columna3']['fila5']=c5C;
var c6C = new Casilla(1,1,388,164);
casillas['columna3']['fila6']=c6C;

//------------colD
var c1D = new Casilla(1,1,461,474);
casillas['columna4']['fila1']=c1D;
var c2D = new Casilla(1,1,461,412);
casillas['columna4']['fila2']=c2D;
var c3D = new Casilla(1,1,461,350);
casillas['columna4']['fila3']=c3D;
var c4D = new Casilla(1,1,461,288);
casillas['columna4']['fila4']=c4D;
var c5D = new Casilla(1,1,461,226);
casillas['columna4']['fila5']=c5D;
var c6D = new Casilla(1,1,461,164);
casillas['columna4']['fila6']=c6D;

//------------colE
var c1E = new Casilla(1,1,534,474);
casillas['columna5']['fila1']=c1E;
var c2E = new Casilla(1,1,534,412);
casillas['columna5']['fila2']=c2E;
var c3E = new Casilla(1,1,534,350);
casillas['columna5']['fila3']=c3E;
var c4E = new Casilla(1,1,534,288);
casillas['columna5']['fila4']=c4E;
var c5E = new Casilla(1,1,534,226);
casillas['columna5']['fila5']=c5E;
var c6E = new Casilla(1,1,534,164);
casillas['columna5']['fila6']=c6E;

//------------colF
var c1F = new Casilla(1,1,607,474);
casillas['columna6']['fila1']=c1F;
var c2F = new Casilla(1,1,607,412);
casillas['columna6']['fila2']=c2F;
var c3F = new Casilla(1,1,607,350);
casillas['columna6']['fila3']=c3F;
var c4F = new Casilla(1,1,607,288);
casillas['columna6']['fila4']=c4F;
var c5F = new Casilla(1,1,607,226);
casillas['columna6']['fila5']=c5F;
var c6F = new Casilla(1,1,607,164);
casillas['columna6']['fila6']=c6F;

//------------colG
var c1G = new Casilla(1,1,680,474);
casillas['columna7']['fila1']=c1G;
var c2G = new Casilla(1,1,680,412);
casillas['columna7']['fila2']=c2G;
var c3G = new Casilla(1,1,680,350);
casillas['columna7']['fila3']=c3G;
var c4G = new Casilla(1,1,680,288);
casillas['columna7']['fila4']=c4G;
var c5G = new Casilla(1,1,680,226);
casillas['columna7']['fila5']=c5G;
var c6G = new Casilla(1,1,680,164);
casillas['columna7']['fila6']=c6G;




//--------------FIN de ARMADO DE TABLERO---------------------------



  //----------------FICHAS Rojas------------------------
  var fr1 = new Ficha(25,140,fichaRoja,1);

  fichas[1] = fr1;
  var fr2 = new Ficha(80,140,fichaRoja,2);

  fichas[2] = fr2;
  var fr3 = new Ficha(135,140,fichaRoja,3);

  fichas[3] = fr3;
  var fr4 = new Ficha(25,195,fichaRoja,4);

  fichas[4] = fr4;
  var fr5 = new Ficha(80,195,fichaRoja,5);

  fichas[5] = fr5;
  var fr6 = new Ficha(135,195,fichaRoja,6);

  fichas[6] = fr6;
  var fr7 = new Ficha(25,250,fichaRoja,7);

  fichas[7] = fr7;
  var fr8 = new Ficha(80,250,fichaRoja,8);

  fichas[8] = fr8;
  var fr9 = new Ficha(135,250,fichaRoja,9);

  fichas[9] = fr9;
  var fr10 = new Ficha(25,305,fichaRoja,10);

  fichas[10] = fr10;
  var fr11 = new Ficha(80,305,fichaRoja,11);

  fichas[11] = fr11;
  var fr12 = new Ficha(135,305,fichaRoja,12);

  fichas[12] = fr12;
  var fr13 = new Ficha(25,360,fichaRoja,13);

  fichas[13] = fr13;
  var fr14 = new Ficha(80,360,fichaRoja,14);

  fichas[14] = fr14;
  var fr15 = new Ficha(135,360,fichaRoja,15);

  fichas[15] = fr15;
  var fr16 = new Ficha(25,415,fichaRoja,16);

  fichas[16] = fr16;
  var fr17 = new Ficha(80,415,fichaRoja,17);

  fichas[17] = fr17;
  var fr18 = new Ficha(135,415,fichaRoja,18);

  fichas[18] = fr18;
  var fr19 = new Ficha(25,470,fichaRoja,19);

  fichas[19] = fr19;
  var fr20 = new Ficha(80,470,fichaRoja,20);

  fichas[20] = fr20;
  var fr21 = new Ficha(135,470,fichaRoja,21);

  fichas[21] = fr21;
  //------------------FIN FICHAS ROJAS------------------------------


  //----------------FICHAS Amarillas------------------------
  var fa1 = new Ficha(775,140,fichaAmarilla,22);

  fichas[22] = fa1;
  var fa2 = new Ficha(830,140,fichaAmarilla,23);

  fichas[23] = fa2;
  var fa3 = new Ficha(885,140,fichaAmarilla,24);

  fichas[24] = fa3;
  var fa4 = new Ficha(775,195,fichaAmarilla,25);

  fichas[25] = fa4;
  var fa5 = new Ficha(830,195,fichaAmarilla,26);

  fichas[26] = fa5;
  var fa6 = new Ficha(885,195,fichaAmarilla,27);

  fichas[27] = fa6;
  var fa7 = new Ficha(775,250,fichaAmarilla,28);

  fichas[28] = fa7;
  var fa8 = new Ficha(830,250,fichaAmarilla,29);

  fichas[29] = fa8;
  var fa9 = new Ficha(885,250,fichaAmarilla,30);

  fichas[30] = fa9;
  var fa10 = new Ficha(775,305,fichaAmarilla,31);

  fichas[31] = fa10;
  var fa11 = new Ficha(830,305,fichaAmarilla,32);

  fichas[32] = fa11;
  var fa12 = new Ficha(885,305,fichaAmarilla,33);

  fichas[33] = fa12;
  var fa13 = new Ficha(775,360,fichaAmarilla,34);

  fichas[34] = fa13;
  var fa14 = new Ficha(830,360,fichaAmarilla,35);

  fichas[35] = fa14;
  var fa15 = new Ficha(885,360,fichaAmarilla,36);

  fichas[36] = fa15;
  var fa16 = new Ficha(775,415,fichaAmarilla,37);

  fichas[37] = fa16;
  var fa17 = new Ficha(830,415,fichaAmarilla,38);

  fichas[38] = fa17;
  var fa18 = new Ficha(885,415,fichaAmarilla,39);

  fichas[39] = fa18;
  var fa19 = new Ficha(775,470,fichaAmarilla,40);

  fichas[40] = fa19;
  var fa20 = new Ficha(830,470,fichaAmarilla,41);

  fichas[41] = fa20;
  var fa21 = new Ficha(885,470,fichaAmarilla,42);

  fichas[42] = fa21;
  //------------------FIN FICHAS AMARILLAS------------------------------
  dibujarTodasLasFichas();
  }
function dibujarTodasLasFichas(){for (var i = 1; i < 43; i++) {
dibujarFicha(fichas[i]);
}
}
function dibujarTurno(){
  if(turno%2 != 0){
    ctx.strokeStyle = '#33CC33';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(50, 125);
    ctx.lineTo(160, 125);
    ctx.quadraticCurveTo(195, 125, 200, 150);
    ctx.lineTo(200, 510);
    ctx.quadraticCurveTo(200, 535, 165, 535);
    ctx.lineTo(50, 535);
    ctx.quadraticCurveTo(20, 535, 15, 515);
    ctx.lineTo(15, 165);
    ctx.quadraticCurveTo(15, 130, 50, 125);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = 'rgb(173,216,230)';
    ctx.lineWidth = 17;
    ctx.beginPath();
    ctx.moveTo(800, 125);
    ctx.lineTo(910, 125);
    ctx.quadraticCurveTo(945, 125, 950, 150);
    ctx.lineTo(950, 510);
    ctx.quadraticCurveTo(950, 535, 910, 535);
    ctx.lineTo(800, 535);
    ctx.quadraticCurveTo(770, 535, 765, 515);
    ctx.lineTo(765, 165);
    ctx.quadraticCurveTo(765, 130, 800, 125);
    ctx.stroke();
    ctx.closePath();
  }
  else{
    ctx.strokeStyle = '#33CC33';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(800, 125);
    ctx.lineTo(910, 125);
    ctx.quadraticCurveTo(945, 125, 950, 150);
    ctx.lineTo(950, 510);
    ctx.quadraticCurveTo(950, 535, 910, 535);
    ctx.lineTo(800, 535);
    ctx.quadraticCurveTo(770, 535, 765, 515);
    ctx.lineTo(765, 165);
    ctx.quadraticCurveTo(765, 130, 800, 125);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle = 'rgb(173,216,230)';
    ctx.lineWidth = 17;
    ctx.beginPath();
    ctx.moveTo(50, 125);
    ctx.lineTo(160, 125);
    ctx.quadraticCurveTo(195, 125, 200, 150);
    ctx.lineTo(200, 510);
    ctx.quadraticCurveTo(200, 535, 165, 535);
    ctx.lineTo(50, 535);
    ctx.quadraticCurveTo(20, 535, 15, 515);
    ctx.lineTo(15, 165);
    ctx.quadraticCurveTo(15, 130, 50, 125);
    ctx.stroke();
    ctx.closePath();
  }



}
  function borrarFicha(){

      ctx.fillStyle = "rgb(173,216,230)";
      ctx.beginPath();
      ctx.moveTo(posMouseX, posMouseY); // ubicamos el cursor en la posicion (10,10)
      ctx.lineTo(posMouseX,posMouseY);
      ctx.arc(fichaActual.a.posX+25,fichaActual.a.posY+25,26,0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

//-------------reglas del Juego------------
function comprobarGanadorVertical(){
  var contador = 0;
  var anterior = null;
  for (var i = 1; i < 8; i++) {

    for (var j = 1; j < 7; j++) {
      if (j == 1 && casillas['columna'+i]['fila' +j].ocupado){
        if(casillas['columna'+i]['fila' +j].ficha.id <= 21){
          anterior = casillas['columna'+i]['fila' +j].ficha.color;
          contador=1;
        } else if(casillas['columna'+i]['fila' +j].ficha.id > 21){
          anterior = casillas['columna'+i]['fila' +j].ficha.color;
          contador=1;
        }
    }else {if (i<8 && casillas['columna'+i]['fila' +j].ocupado){
      if (anterior == casillas['columna'+i]['fila' +j].ficha.color){
        contador++;
        if(contador >= 4){
          if(casillas['columna'+i]['fila' +j].ficha.id <= 21){
              //alert("Juego terminado, ganó el Rojo con una linea Vertical");
              ctx.font = '50px Indie Flower';
              ctx.fillStyle = 'red';
              ctx.fillText("Juego terminado, ganó el Rojo con una linea Vertical",230,50,500);
              return true;
          } else{
            ctx.font = '50px Indie Flower';
            ctx.fillStyle = 'yellow';
            ctx.fillText("Juego terminado, ganó el Amarillo con una linea Vertical",230,50,500);
              return true;
          }

        }
      } else{
        anterior = casillas['columna'+i]['fila' +j].ficha.color;
        contador = 1; //porque es de distinto color pero empieza ya sumando 1
      }
    }}
  }



} return false;
}
function comprobarGanadorHorizontal(){
  var contador = 0;
  var anterior = null;
  for (var j = 1; j < 7; j++) {

    for (var i = 1; i < 8; i++) {
      if (i == 1 && casillas['columna'+i]['fila' +j].ocupado){
        if(casillas['columna'+i]['fila' +j].ficha.id <= 21){
          anterior = casillas['columna'+i]['fila' +j].ficha.color;
          contador=1;
        } else if(casillas['columna'+i]['fila' +j].ficha.id > 21){
          anterior = casillas['columna'+i]['fila' +j].ficha.color;
          contador=1;
        }
    }else {
      if (j<7 && casillas['columna'+i]['fila' +j].ocupado){
      if (anterior == casillas['columna'+i]['fila' +j].ficha.color){
        contador++;
        if(contador >= 4){
          if(casillas['columna'+i]['fila' +j].ficha.id <= 21){
            ctx.font = '50px Indie Flower';
            ctx.fillStyle = 'red';
            ctx.fillText("Juego terminado, ganó el Rojo con una linea Horizontal",230,50,500);
              return true;
          } else{
            ctx.font = '50px Indie Flower';
            ctx.fillStyle = 'yellow';
            ctx.fillText("Juego terminado, ganó el Amarillo con una linea Horizontal",230,50,500);
              return true;
          }

        }
      } else{
        anterior = casillas['columna'+i]['fila' +j].ficha.color;
        contador = 1; //porque es de distinto color pero empieza ya sumando 1
      }
    } else{contador = 0;} } //porque hay un espacio en blanco, en vertical no es necesario porque nunca
                            //hay espacio en blanco entre dos fichas
  }



} return false;
}
//--------------DIAGONALES------------------------
var d1 = [];
d1[1] = casillas['columna1']['fila1'];
d1[2] = casillas['columna2']['fila2'];
d1[3] = casillas['columna3']['fila3'];
d1[4] = casillas['columna4']['fila4'];
d1[5] = casillas['columna5']['fila5'];
d1[6] = casillas['columna6']['fila6'];


var d2 =[];
d2[1] = casillas['columna1']['fila2'];
d2[2] = casillas['columna2']['fila3'];
d2[3] = casillas['columna3']['fila4'];
d2[4] = casillas['columna4']['fila5'];
d2[5] = casillas['columna5']['fila6'];

var d3 =[];
d3[1] = casillas['columna1']['fila3'];
d3[2] = casillas['columna2']['fila4'];
d3[3] = casillas['columna3']['fila5'];
d3[4] = casillas['columna4']['fila6'];

var d4 =[];
d4[1] = casillas['columna1']['fila4'];
d4[2] = casillas['columna2']['fila3'];
d4[3] = casillas['columna3']['fila2'];
d4[4] = casillas['columna4']['fila1'];

var d5 =[];
d5[1] = casillas['columna1']['fila5'];
d5[2] = casillas['columna2']['fila4'];
d5[3] = casillas['columna3']['fila3'];
d5[4] = casillas['columna4']['fila2'];
d5[5] = casillas['columna5']['fila1'];

var d6 = [];
d6[1] = casillas['columna1']['fila6'];
d6[2] = casillas['columna2']['fila5'];
d6[3] = casillas['columna3']['fila4'];
d6[4] = casillas['columna4']['fila3'];
d6[5] = casillas['columna5']['fila2'];
d6[6] = casillas['columna6']['fila1'];

var d7 = [];
d7[1] = casillas['columna7']['fila1'];
d7[2] = casillas['columna6']['fila2'];
d7[3] = casillas['columna5']['fila3'];
d7[4] = casillas['columna4']['fila4'];
d7[5] = casillas['columna3']['fila5'];
d7[6] = casillas['columna2']['fila6'];


var d8 =[];
d8[1] = casillas['columna7']['fila2'];
d8[2] = casillas['columna6']['fila3'];
d8[3] = casillas['columna5']['fila4'];
d8[4] = casillas['columna4']['fila5'];
d8[5] = casillas['columna3']['fila6'];

var d9 =[];
d9[1] = casillas['columna7']['fila3'];
d9[2] = casillas['columna6']['fila4'];
d9[3] = casillas['columna5']['fila5'];
d9[4] = casillas['columna4']['fila6'];

var d10 =[];
d10[1] = casillas['columna7']['fila4'];
d10[2] = casillas['columna6']['fila3'];
d10[3] = casillas['columna5']['fila2'];
d10[4] = casillas['columna4']['fila1'];

var d11 =[];
d11[1] = casillas['columna7']['fila5'];
d11[2] = casillas['columna6']['fila4'];
d11[3] = casillas['columna5']['fila3'];
d11[4] = casillas['columna4']['fila2'];
d11[5] = casillas['columna3']['fila1'];

var d12 = [];
d12[1] = casillas['columna7']['fila6'];
d12[2] = casillas['columna6']['fila5'];
d12[3] = casillas['columna5']['fila4'];
d12[4] = casillas['columna4']['fila3'];
d12[5] = casillas['columna3']['fila2'];
d12[6] = casillas['columna2']['fila1'];

var todasDiagonales = [];
todasDiagonales[1] = d1;
todasDiagonales[2] = d2;
todasDiagonales[3] = d3;
todasDiagonales[4] = d4;
todasDiagonales[5] = d5;
todasDiagonales[6] = d6;
todasDiagonales[7] = d7;
todasDiagonales[8] = d8;
todasDiagonales[9] = d9;
todasDiagonales[10] = d10;
todasDiagonales[11] = d11;
todasDiagonales[12] = d12;

//----------------Fin DIAGONALES-----------
function comprobarGanadorDiagonal(){
  var contador = 0;
  var anterior = null;
  for (var i = 1; i < 13; i++) {
    for (var j = 1; j < todasDiagonales[i].length; j++) {
      if (j == 1 && todasDiagonales[i][j].ocupado){
        if(todasDiagonales[i][j].ficha.id <= 21){
          anterior = todasDiagonales[i][j].ficha.color;
          contador=1;
        } else if(todasDiagonales[i][j].ficha.id > 21){
          anterior = todasDiagonales[i][j].ficha.color;
          contador=1;
        }
    }else {if (i<13 && todasDiagonales[i][j].ocupado){
      if (anterior == todasDiagonales[i][j].ficha.color){
        contador++;
        if(contador >= 4){
          if(todasDiagonales[i][j].ficha.id <= 21){
            ctx.font = '50px Indie Flower';
            ctx.fillStyle = 'red';
            ctx.fillText("Juego terminado, ganó el Rojo con una linea Diagonal",230,50,500);
              return true;
          } else{
            ctx.font = '50px Indie Flower';
            ctx.fillStyle = 'yellow';
            ctx.fillText("Juego terminado, ganó el Amarillo con una linea Diagonal",230,50,500);
              return true;
          }

        }
      } else{
        anterior = todasDiagonales[i][j].ficha.color;
        contador = 1; //porque es de distinto color pero empieza ya sumando 1
      }
    } else{contador = 0;}}
  }



} return false;
}

//-------------FIN reglas del Juego------------



//----------------------------





function MousePos(canvas, evt) {
this.ClientRect = canvas.getBoundingClientRect();
posMouseX =   evt.pageX - canvas.offsetLeft;
posMouseY = evt.pageY - canvas.offsetTop;
//alert("xxxxxxxxx"+posMouseX +"yyyyyyyyyyy" + posMouseY);

  //alert("alert1" + casillas['columna2','fila1']);

};

function reiniciarMatriz(){
  casillas ={
    columna1: { fila1: null, fila2:null, fila3: null, fila4: null , fila5: null, fila6:null},
    columna2: { fila1: null, fila2:null , fila3: null, fila4: null, fila5: null, fila6:null },
    columna3: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null } ,
    columna4: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null },
    columna5: { fila1: null, fila2:null , fila3: null, fila4: null, fila5: null, fila6:null },
    columna6: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null } ,
    columna7: { fila1: null, fila2:null, fila3: null, fila4: null, fila5: null, fila6:null }
}
llenarMatriz();
}
var down = false;
var check = false;
var turno = 1;
canvas.addEventListener('mousedown', function (evt) {
    down = true;
    check = true;
    MousePos(canvas, evt);
  //alert("alert2" + casillas['columna2','fila1']);
    //alert("llegoasd" + posMouseX);
    if(turno%2 != 0){
    for (var i = 1; i < 22; i++) {
    //alert(i + " espacio " + fichas[i].posX)
      if(fichas[i].contains() && !fichas[i].bloqueado ){
        //alert("ficha seleccionada" + i);
        fichaActual.a = fichas[i];
        break;
      }
      }
} else{
  for (var i = 22; i < 43; i++) {
  //alert(i + " espacio " + fichas[i].posX)
    if(fichas[i].contains() && !fichas[i].bloqueado ){
      //alert("ficha seleccionada" + i);
      fichaActual.a = fichas[i];
      break;
    }
    }
}


}, false);

function calcularFila(colum){
for (var i = 1; i < 7; i++) {
  if(!casillas[colum]['fila' + i].ocupado){
    return 'fila' + i;
  }
}
return false;
}
canvas.addEventListener('mouseup', function (event) {
  //alert("x= "+ event.clientX + " y= " + event.clientY);
  MousePos(canvas, event);
  var colum = false;
  if(check && fichaActual.a != null){
    for (var i = 1; i < 8; i++) {
      if(sectorColumnas[i].contains()){
        colum = true;
        borrarFicha();
        var fila = calcularFila(sectorColumnas[i].id);
        if(fila!=false){
          fichas[fichaActual.a.id].posX = casillas[sectorColumnas[i].id][fila].posX;
          fichas[fichaActual.a.id].posY = casillas[sectorColumnas[i].id][fila].posY;
          casillas[sectorColumnas[i].id][fila].ocupado = true;
          casillas[sectorColumnas[i].id][fila].ficha =  fichas[fichaActual.a.id];
          fichas[fichaActual.a.id].bloqueado = true;

          turno++;
          dibujarTurno();
        } else{
          colum = false;
        }

        borrarFicha();
        dibujarRecuadros();
        ctx.drawImage(tablero, 220, 140);
        dibujarTodasLasFichas();
        dibujarTurno();
        if(comprobarGanador()){
          for (var i = 1; i < 43; i++) {
            fichas[i].bloqueado=true;
              }
        } else if(todasLasFichasEstanBloqueadas()){  //no hay ganador ni fichas para mover es decir empate
          ctx.font = '50px Indie Flower';
          ctx.fillStyle = 'darkgreen';
          ctx.fillText("Juego terminado, he aquí un empate",230,53,500);
        }

      }


    }
    if(!colum && fichaActual.a != null) {

      borrarFicha();
      fichas[fichaActual.a.id].posX = fichas[fichaActual.a.id].posInicialX;
      fichas[fichaActual.a.id].posY = fichas[fichaActual.a.id].posInicialY;
      dibujarTurno();
      dibujarRecuadros();
      ctx.drawImage(tablero, 220, 140);
      dibujarTodasLasFichas();
    }
    check = false;
    column =false;

  }


    down = false;

    fichaActual.a = null;

}, false);
function comprobarGanador(){
  return comprobarGanadorHorizontal() || comprobarGanadorDiagonal() || comprobarGanadorVertical();
}
function todasLasFichasEstanBloqueadas(){
  var contador = 0;
  for (var i = 1; i < 43; i++) {
    if(fichas[i].bloqueado == true){
      contador++;
    }
  }
  return contador ==42;
}
function reiniciarCasillasDiagonales(){
  d1[1] = casillas['columna1']['fila1'];
  d1[2] = casillas['columna2']['fila2'];
  d1[3] = casillas['columna3']['fila3'];
  d1[4] = casillas['columna4']['fila4'];
  d1[5] = casillas['columna5']['fila5'];
  d1[6] = casillas['columna6']['fila6'];



  d2[1] = casillas['columna1']['fila2'];
  d2[2] = casillas['columna2']['fila3'];
  d2[3] = casillas['columna3']['fila4'];
  d2[4] = casillas['columna4']['fila5'];
  d2[5] = casillas['columna5']['fila6'];


  d3[1] = casillas['columna1']['fila3'];
  d3[2] = casillas['columna2']['fila4'];
  d3[3] = casillas['columna3']['fila5'];
  d3[4] = casillas['columna4']['fila6'];


  d4[1] = casillas['columna1']['fila4'];
  d4[2] = casillas['columna2']['fila3'];
  d4[3] = casillas['columna3']['fila2'];
  d4[4] = casillas['columna4']['fila1'];


  d5[1] = casillas['columna1']['fila5'];
  d5[2] = casillas['columna2']['fila4'];
  d5[3] = casillas['columna3']['fila3'];
  d5[4] = casillas['columna4']['fila2'];
  d5[5] = casillas['columna5']['fila1'];


  d6[1] = casillas['columna1']['fila6'];
  d6[2] = casillas['columna2']['fila5'];
  d6[3] = casillas['columna3']['fila4'];
  d6[4] = casillas['columna4']['fila3'];
  d6[5] = casillas['columna5']['fila2'];
  d6[6] = casillas['columna6']['fila1'];


  d7[1] = casillas['columna7']['fila1'];
  d7[2] = casillas['columna6']['fila2'];
  d7[3] = casillas['columna5']['fila3'];
  d7[4] = casillas['columna4']['fila4'];
  d7[5] = casillas['columna3']['fila5'];
  d7[6] = casillas['columna2']['fila6'];



  d8[1] = casillas['columna7']['fila2'];
  d8[2] = casillas['columna6']['fila3'];
  d8[3] = casillas['columna5']['fila4'];
  d8[4] = casillas['columna4']['fila5'];
  d8[5] = casillas['columna3']['fila6'];


  d9[1] = casillas['columna7']['fila3'];
  d9[2] = casillas['columna6']['fila4'];
  d9[3] = casillas['columna5']['fila5'];
  d9[4] = casillas['columna4']['fila6'];


  d10[1] = casillas['columna7']['fila4'];
  d10[2] = casillas['columna6']['fila3'];
  d10[3] = casillas['columna5']['fila2'];
  d10[4] = casillas['columna4']['fila1'];


  d11[1] = casillas['columna7']['fila5'];
  d11[2] = casillas['columna6']['fila4'];
  d11[3] = casillas['columna5']['fila3'];
  d11[4] = casillas['columna4']['fila2'];
  d11[5] = casillas['columna3']['fila1'];


  d12[1] = casillas['columna7']['fila6'];
  d12[2] = casillas['columna6']['fila5'];
  d12[3] = casillas['columna5']['fila4'];
  d12[4] = casillas['columna4']['fila3'];
  d12[5] = casillas['columna3']['fila2'];
  d12[6] = casillas['columna2']['fila1'];

}


dibujarTurno();


    var reinicio = document.getElementById('reinicio');
    reinicio.addEventListener('mousedown',function(){
      for (var i = 1; i < 43; i++) {
        fichas[i].bloqueado = false;
        fichas[i].posX = fichas[i].posInicialX;
        fichas[i].posY = fichas[i].posInicialY;
      }
      turno = 1;
      ctx.clearRect(230,10,550,550);
      dibujarRecuadros();
      ctx.drawImage(tablero, 220, 140);
      dibujarTurno();
      dibujarTodasLasFichas();
      reiniciarMatriz();
      reiniciarCasillasDiagonales();
    },false);
}, false);

//var reinicio = document.getElementById('#reinicio');
//reinicio.addEventListener('mousedown',reiniciar(),false);
//$("#reinicio").click(reiniciar());
}

});
