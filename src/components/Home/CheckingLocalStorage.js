function CheckingLocalStorage() {
    if (JSON.parse(localStorage.getItem("favorite")) != null) {
        JSON.parse(localStorage.getItem("favorite")).map((item, key) => {
            Array.from(document.querySelectorAll('.menu_card')).map(menu => {
                if (item.name === menu.querySelector('h3').textContent) {
                    menu.querySelector('.menu_favorite').classList.add("menu_favorite_none")
                }
            })
        })
    }
    else {
        Array.from(document.querySelectorAll('.menu_card')).map(menu => {
            menu.querySelector('.menu_favorite').classList.remove("menu_favorite_none")
        })
    }
}

export default CheckingLocalStorage