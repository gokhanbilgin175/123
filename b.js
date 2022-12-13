
const inputEl1 = document.querySelector("#inpt-1")
const inputEl2 = document.querySelector("#inpt-2")
const selectEL = document.querySelector("#select")
const labelEl = document.querySelector("#label")
const butonEl = document.querySelector("#btn")

function snc(){

  let islem = selectEL.value;
  let sonuc;

  if(islem == "topla"){
    sonuc = Number(inputEl1.value) + Number(inputEl2.value)
  }
 else if(islem == "cıkar"){
  sonuc = Number(inputEl1.value) - Number(inputEl2.value)
  }
  else if(islem == "carp" ){
    sonuc = Number(inputEl1.value) * Number(inputEl2.value)
  }
  else if(islem == "böl"){
    sonuc =Number(inputEl1.value) / Number(inputEl2.value)
  }
  labelEl.innerHTML = `sonuc : ${sonuc} `

 }
 
