const themeBtn = document.querySelector('.theme-btn')
const toggleBtn = document.querySelector('.toggle-btn')
const main = document.querySelector('.theme-container')

themeBtn.addEventListener('input', () => {
    toggleBtn.classList.toggle('toggle')
    document.body.classList.toggle('theme')
})