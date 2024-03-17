
document.getElementById("faq-1").addEventListener('click',()=>{
  if(document.getElementById("para-1").style.display === "block"){
    document.getElementById("para-1").style.display = "none";
    let image = document.getElementById("image-1");
    image.src = `assets/images/icon-plus.svg`;
  }else{
    document.getElementById("para-1").style.display = "block";
    let image = document.getElementById("image-1");
    image.src = `assets/images/icon-minus.svg`;
  }
})

document.getElementById("para-2").style.display = "none";
document.getElementById("faq-2").addEventListener('click',()=>{
  if(document.getElementById("para-2").style.display === "block"){
    document.getElementById("para-2").style.display = "none";
    let image = document.getElementById("image-2");
    image.src = `assets/images/icon-plus.svg`;
  }else{
    document.getElementById("para-2").style.display = "block";
    let image = document.getElementById("image-2");
    image.src = `assets/images/icon-minus.svg`;
  }
})

document.getElementById("para-3").style.display = "none";
document.getElementById("faq-3").addEventListener('click',()=>{
  if(document.getElementById("para-3").style.display === "block"){
    document.getElementById("para-3").style.display = "none";
    let image = document.getElementById("image-3");
    image.src = `assets/images/icon-plus.svg`;
  }else{
    document.getElementById("para-3").style.display = "block";
    let image = document.getElementById("image-3");
    image.src = `assets/images/icon-minus.svg`;
  }
})

document.getElementById("para-4").style.display = "none";
document.getElementById("faq-4").addEventListener('click',()=>{
  if(document.getElementById("para-4").style.display === "block"){
    document.getElementById("para-4").style.display = "none";
    let image = document.getElementById("image-4");
    image.src = `assets/images/icon-plus.svg`;
  }else{
    document.getElementById("para-4").style.display = "block";
    let image = document.getElementById("image-4");
    image.src = `assets/images/icon-minus.svg`;
  }
})