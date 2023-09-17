import { renderModal, showModal } from "../render-modal/render-modal";
import "./rende-botton.css";


let modal;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderAddButton = (element ) => {

    const fabButton = document.createElement( 'button' );
    fabButton.innerHTML = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener( 'click', () =>{
        showModal();
    });
}
