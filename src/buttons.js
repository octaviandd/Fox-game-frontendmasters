import { ICONS } from "./constants"



const toggleHighlighted =  (icon,show) => document.querySelector(`.${ICONS[icon]}-icon`).classList.toggle('highlighted', show)


export default function initButtons(handleUserActions){
  let selectedIcon = 0;

  function buttonClick({target}){
    
    //default starts at fish animation
    if(target.classList.contains('left-btn')){  
      //classList.toggle acts as a true/false check if statement 
      // in other way to put it if boolean is false, remove class
      // if bollean is true, add class
      toggleHighlighted(selectedIcon, false);
      selectedIcon = (2  + selectedIcon) % ICONS.length
      toggleHighlighted(selectedIcon, true)
    }else if(target.classList.contains('right-btn')){
      toggleHighlighted(selectedIcon, false)
      selectedIcon = (1 + selectedIcon) % ICONS.length
      toggleHighlighted(selectedIcon, true)
    }else{
      handleUserActions(ICONS[selectedIcon])
    }
  }
  document.querySelector(".buttons").addEventListener("click", buttonClick);
}

