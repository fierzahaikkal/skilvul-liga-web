
// MENU TOGGLE FUNCTIOn
function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navbar');
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('active');
}


// NUM COUNT FUNCTION
let valuesWrap = document.querySelectorAll(".num");
let interval = 5000;

valuesWrap.forEach((valDisplay) => {
  let start = 0;
  let end = parseInt(valDisplay.getAttribute("data-val"));
  let time = Math.floor(interval / end);
  let count = setInterval(function (){
    start += 1;
    valDisplay.textContent = start;
    if(start === end){
      clearInterval(count);
    }
  }, time);
});


// IMAGE SLIDER FUNCTION
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery-img .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name");
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name");
        
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); 
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}


//fullscreen preview image
const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");
function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; 
  let selectedImgCategory = element.getAttribute("data-name");
  previewImg.src = selectedPrevImg;
  categoryName.textContent = selectedImgCategory; 
  previewBox.classList.add("show"); 
  shadow.classList.add("show"); 
  closeIcon.onclick = ()=>{ 
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto"; 
  }
}