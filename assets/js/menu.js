export function menu() {
    class MobileNavBar {
        constructor(btnToggle, navList, navLinks) {
            this.btnToggle = document.querySelector(btnToggle);
            this.navList = document.querySelector(navList);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";
    
            this.clickEvent = this.clickEvent.bind(this);
        }
    
        animacaoLinkmenu() {
            this.navLinks.forEach((link, index) => {
                link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `animacaoLink 0.5s ease forwards ${index / 7 + 0.3}s`);
            });
        }
        
        clickEvent() {
            this.navList.classList.toggle(this.activeClass);
            this.btnToggle.classList.toggle(this.activeClass);
            this.animacaoLinkmenu();
        }
    
        addClickEvent() {
            this.btnToggle.addEventListener("click", this.clickEvent);
            
            for(let i = 0; i < this.navLinks.length; i++) {
                
                let link = this.navLinks[i]

                link.addEventListener("click", this.clickEvent);

            }
        }
    
        init() {
            if(this.btnToggle){
                this.addClickEvent()
            }
    
            return this;
        }
    
    }
    
    const mobileNavBar = new MobileNavBar(".btn-toggle", ".nav-list", ".nav-list li");
    
    mobileNavBar.init();
}
    