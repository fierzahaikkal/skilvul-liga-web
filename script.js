function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.navbar');
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('active');
}