function toggleMode() {
    const html = document.documentElement
    if (html.classList.contains('ligth'))  {
        (html.classList.remove('light'))
        
    }
    else  {
        html.classList.add('light') 
    }
    
    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets.vs/Mobile/avatar-light.png")
        
    }
    else{
        img.setAttribute("src", "./assets.vs/Mobile/avatar.png")
    }
}

