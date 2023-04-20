let i = document.getElementById("texto");
let bCopiar = document.getElementById("bCopiar");
let Pcript = document.getElementById("encriptado");
let bEncriptar = document.getElementById("buttonIzq")
let bDesEncriptar = document.getElementById("buttonDer");
let img = document.getElementById("munieco");


function esVocal(letra){
  letraVocal = false;
  vocales = ['a','e','i','o','u']
  let vocal = ""
  for(let letras in vocales){
      if(vocales[letras]==letra){
          //vocal = letra;
          letraVocal = true;
          //document.write("esta letra " + vocal + " si es vocal")
      }
  }
  return letraVocal;
}

function encriptar(text){
  let compuesto = "";
  for(let letras in text){
      if(!esVocal(text[letras])){
      let letra = text[letras];
      compuesto = compuesto + letra;
  }else{
      if(text[letras]=='a'){
          compuesto = compuesto + "ai";
      }
      else if(text[letras]=='o'){
          compuesto = compuesto + "ober"
      }
      else if(text[letras]=='e'){
          compuesto = compuesto + "enter"
      }

      else if(text[letras]=='i'){
          compuesto = compuesto + "imes"
      }

      else if(text[letras]=='u'){
          compuesto = compuesto + "ufat"
      }
  }
  
}
return compuesto;   

}

function desEncriptar(text){
  let frase= text.replace(/enter/igm,'e');
  frase = frase.replace(/ober/igm,'o');
  frase = frase.replace(/imes/igm,'i');
  frase = frase.replace(/ufat/igm,'u');
  frase = frase.replace(/ai/igm,'a');
  return frase;
  
}


bCopiar.addEventListener("click", async ()=>{
if(Pcript.innerText==""){
    return alert("no hay contenido para copiar")
}else{
    await navigator.clipboard.writeText(Pcript.innerText);
    alert("texto copiado")
}
})


bEncriptar.addEventListener("click", function(event) {
  let mensaje = document.getElementById("mensaje");
  mensaje.textContent = "";
  let textoAdicional = document.getElementById("textoAdicional");
  textoAdicional.textContent = "";
  let imgContainer = document.getElementById("imgContainer");
  if(imgContainer.contains(img)){
    imgContainer.removeChild(img);
  }
  let textEn = i.value;
  let valorSalida = encriptar(textEn);
  Pcript.textContent = "el texto encriptado queda: " + valorSalida;
  

  
})

bDesEncriptar.addEventListener("click", function(event) {
  let textDes = i.value;
  let valorSalida = desEncriptar(textDes);
  let Pdecript = document.getElementById("pDesencriptar")
  Pcript.textContent= "el texto desencriptado queda: " + valorSalida;
  
})
