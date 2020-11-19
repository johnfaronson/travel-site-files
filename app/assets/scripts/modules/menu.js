class menu
{
    constructor()
    {
        this.menuIcon = document.querySelector(".header--menu-icon");
        this.menuContent = document.querySelector(".header--menu-content");
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }
        
    toggleMenu()
    {
        console.log("toggleMenu");
        this.menuContent.classList.toggle("header--menu-content-is-visible");
        this.menuIcon.classList.toggle("header--menu-icon-close");
        
    }
}

export default menu;