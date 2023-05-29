const firebaseConfig = {
    apiKey: "AIzaSyAgzcbqGAUrg68aOZ1HXZKaLTkZnGvlAmk",
    authDomain: "durga-data-posting-appli-feafb.firebaseapp.com",
	databasedURL: "https://durga-data-posting-appli-feafb-default-rtdb.firebaseio.com",
    projectId: "durga-data-posting-appli-feafb",
    storageBucket: "durga-data-posting-appli-feafb.appspot.com",
    messagingSenderId: "898259804375",
    appId: "1:898259804375:web:f216158af9a2222de75092"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});