class modal{

    constructor()
    {
        document.body.insertAdjacentHTML("beforeend", `
      <div class="modal">
        <div class="modal--inner">
          <h2 class="section-title section-title--blue section-title--less-margin"><img src="assets/images/icons/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
          <div class="wrapper wrapper--narrow">
            <p class="modal--description">We will have an online order system in place soon. Until then, connect with us on any of the platforms below!</p>
          </div>
    
          <div class="social-icons">
            <a href="#" class="social-icons--icon"><img src="assets/images/icons/facebook.svg" alt="Facebook"></a>
            <a href="#" class="social-icons--icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
            <a href="#" class="social-icons--icon"><img src="assets/images/icons/instagram.svg" alt="Instagram"></a>
            <a href="#" class="social-icons--icon"><img src="assets/images/icons/youtube.svg" alt="YouTube"></a>
          </div>
        </div>
        <div class="modal--close">X</div>
      </div>
        `);
        
       this.modalDiv = document.querySelector(".modal");
       this.closeButton = document.querySelector(".modal--close");
//       this.openModalButtons = document.querySelectorAll(".open-modal");
       
        //listen for open
//       this.openModalButtons.forEach(element => element.addEventListener("click", event => this.openModal(event)));
        
        //listen for close
       this.closeButton.addEventListener("click", () => this.closeModal(event));
        
        //listen for escape
        document.addEventListener("keyup", event => this.keyUp(event))
    }


    keyUp(event)
    {
        if(event.keyCode == 27)
        {
            this.closeModal();
        }
    }


    openModal()
    {
        //event.preventDefault();
        this.modalDiv.classList.add("modal--is-visible");
    }
    
    closeModal()
    {
        this.modalDiv.classList.remove("modal--is-visible");
    }
    
}

export default modal;