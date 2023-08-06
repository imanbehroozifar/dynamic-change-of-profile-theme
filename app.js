const btnsColorElm = document.querySelectorAll('.btn')


btnsColorElm.forEach(color => {
    color.addEventListener('click', (event) => {
        document.documentElement.style.setProperty('--theme',event.target.dataset.color)
    })
})



