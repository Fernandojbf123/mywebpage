let isModalActive = false;


/*PLAY SOUND FUNCTION */ 
window.addEventListener("keydown", e => playSound(e))

function playSound (e) {
    
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    if (!audio || isModalActive) return

    key.classList.add('playing')
    
    setTimeout(() => {
        key.classList.remove("playing")    
    }, 100);
    
    audio.currentTime = 0.001;
    audio.play()
}

/*RE MAP KEY FUNCTIONS  -> open modal --> close modal*/
const  remapKeysBtn = Array.from(document.getElementsByClassName("remapKey"));
remapKeysBtn.forEach( remapKeyBtn => remapKeyBtn.addEventListener("click", e => configMenu(e)))
window.addEventListener("click", e => clickCloseModal(e))

function configMenu(e) {
    
    const dDiv = e.target.parentNode;
    const currentKey = dDiv.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${currentKey}"]`)

    openModal()
    const  keyEvent = ev => {
        const newKey = ev.keyCode.toString();
        const newletter = ev.key.toUpperCase();
        /* verify that key is not used */
        const keys = Array.from(document.querySelectorAll(".key"))
        const currentKeys = keys.map( key => key.getAttribute("data-key"))
        
        if (!isModalActive){
            window.removeEventListener("keydown", keyEvent)
        }
        else {
            if (currentKeys.includes(newKey)){
                window.alert("The key is already in use.")
            }
            
            else {
    
                dDiv.setAttribute("data-key",newKey)
                dP = dDiv.children[0];
                dP.innerText = newletter; // assing new letter to <p></p>
                audio.setAttribute("data-key",newKey) //assing new key to <audio></audio>
                window.removeEventListener("keydown", keyEvent)
                closeModal()
            }
        }
        
    }
    window.addEventListener("keydown", keyEvent);
}

function openModal () {
    const modal = document.getElementsByClassName("modal")
    modal[0].classList.add("modal-active")
    const modalContents = Array.from(document.getElementsByClassName("modal-content"))
    modalContents.forEach( modalContent => modalContent.classList.add("modal-content-active"))
    return isModalActive = true;
}

function clickCloseModal (e) {
    const clickedIn = e.target.getAttribute("id");
    if (clickedIn === "closebtn"){
        const modal = document.getElementsByClassName("modal")
        modal[0].classList.remove("modal-active")
        const modalContents = Array.from(document.getElementsByClassName("modal-content"))
        modalContents.forEach( modalContent => modalContent.classList.remove("modal-content-active"))
        return isModalActive = false;
    }
}

function closeModal() {
    const modal = document.getElementsByClassName("modal")
    modal[0].classList.remove("modal-active")
    const modalContents = Array.from(document.getElementsByClassName("modal-content"))
    modalContents.forEach( modalContent => modalContent.classList.remove("modal-content-active"))
    return isModalActive = false;
}


