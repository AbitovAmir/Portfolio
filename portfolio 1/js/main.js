const btnDarkMode =document.querySelector(".dark-mode-btn");
let header = document.querySelector('.js-header'),
    headerH = document.querySelector('.js-header').clientHeight;

document.onscroll = function (){
    let scroll = window.scrollY;
    if (scroll > headerH){
        header.classList.add('fixed')
    }else {
        header.classList.remove('fixed')
    }
}

//1.проверка темной темы в системы
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

//2.проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark'){
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}else if (localStorage.getItem('darkMode') === 'light'){
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}




// если миняется системние настройки меняем тему
window
   .matchMedia("(prefers-color-scheme: dark)")
   .addEventListener('change',(event)=>{
   const newColorScheme = event.matches ? "dark" : 'light'

   if (newColorScheme === 'dark'){
       btnDarkMode.classList.add("dark-mode-btn--active");
       document.body.classList.add("dark");
       localStorage.setItem("darkMode","dark");
   }else {
       btnDarkMode.classList.remove("dark-mode-btn--active");
       document.body.classList.remove("dark");
       localStorage.setItem("darkMode","light");
   }
})

//вкл начного режима по кнопке
btnDarkMode.onclick = function (){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");


    if (isDark){
        localStorage.setItem('darkMode','dark');
    }else {
        localStorage.setItem('darkMode','light');
    }

}
