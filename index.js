const popup = document.querySelector('.popup')
const popupBlock = document.querySelectorAll('.popup-item');
const cancelBtn = document.querySelectorAll('.cancel')
const openPopupBtn = document.querySelectorAll('.open-popup')


openPopupBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute(`data-path`)

        popupBlock.forEach(el => {
            el.style.display = 'none'
        })

        popup.style.display = 'flex'

        document.querySelector(`[data-target="${path}"]`).style.display = 'block'

    })
})

popup.addEventListener('click', (e) => {

    cancelBtn.forEach(el => {
        e.target === el ? popup.style.display = 'none' : ''
    })
    e.target === popup ?  popup.style.display = 'none' : ''

})

