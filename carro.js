let xCarros=[600,600,600,600,600,600];
let yCarros=[40,96,150, 210, 270, 318];
let velocidadesCarros=[6,5,5.2, 2, 5.5, 8];
let comprimentoDoCarro=50;
let alturaDoCarro=40;


function mostraCarro(){
  for(let i=0; i < imagensDosCarros.length; i++){
    image(imagensDosCarros[i], xCarros[i],yCarros[i],comprimentoDoCarro, alturaDoCarro);

  }

}
function movimentaCarro(){
  for(let i = 0; i < imagensDosCarros.length; i++)
  xCarros[i] -= velocidadesCarros[i];


}
function voltaPosicaoInicialDoCarro(){
    for(let i = 0; i < imagensDosCarros.length; i++)

  if (passouTodaTela(xCarros[i])){
    xCarros[i]=600;
  }
  
}

function passouTodaTela(xCarros){
  return xCarros < - 50
}