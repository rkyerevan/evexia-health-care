var burger = document.getElementById("Burger");
var closeBurger = document.getElementById("CloseBurger")
var menu  = document.getElementById('Menu')

burger.onclick = function(){

    this.classList.add('hidden')
    this.classList.remove('open')

    closeBurger.classList.add('open')
    closeBurger.classList.remove("hidden")

    menu.classList.remove("hidden")
    menu.classList.add("open")

}

closeBurger.onclick = function(){

    this.classList.add("hidden")
    this.classList.remove("open")

    burger.classList.remove("hidden")
    burger.classList.add("open")

    menu.classList.remove("open")
    menu.classList.add("hidden")
}

window.onresize = function (){
                   if(window.screen.width > 992){

                        burger.classList.contains("open") ? burger.classList.remove("open"): null
                        burger.classList.contains("hidden") ? burger.classList.remove("hidden"): null

                        closeBurger.classList.contains("open") ? closeBurger.classList.remove("open") : null
                        closeBurger.classList.contains("hidden") ? closeBurger.classList.remove("hidden") : null

                        menu.classList.contains("open") ? menu.classList.remove("open") : null
                        menu.classList.contains("hidden") ? menu.classList.remove("hidden") : null
                   }

}