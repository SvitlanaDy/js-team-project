// document.querySelector('.themes').addEventListener('change', (event) => {
//     if(event.target.nodeName === 'INPUT') {
//         console.log('abcde');
//         document.documentElement.classList.remove('dark', 'light');
//         document.documentElement.classList.add(event.target.value);
//         //locale.storage(event.target.value )
//     }
// })

const themeSwitcher = document.getElementById('theme-switch');
themeSwitcher.checked = false;
function clickHandler(){
    if(this.checked){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');

    } else {
        document.body.classList.add('light'); 
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}
themeSwitcher.addEventListener('click',clickHandler);