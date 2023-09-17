import "./render-modal.css";
import html from "./render-modal.html?raw";


let modalEditUser, form;

export const showModal = () => {
    modalEditUser?.classList.remove('hide-modal');
};

export const hideModal = () => {
    modalEditUser?.classList.add('hide-modal');
    form?.reset();
};


/**
 * 
 * 
 */
export const renderModal = (element) => {
    if(modalEditUser)return;

    modalEditUser = document.createElement('div')
    modalEditUser.innerHTML = html;
    modalEditUser.classList.add('modal-container', 'hide-modal');

    form = modalEditUser.querySelector('form');

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formData = new FormData( form );
        const userLike = {};
        for (const [key, value] of formData) {
            
            if( key === 'balance'){
                userLike[key] = parseInt(value);
                continue; // Para que continue y despues no sobre estcriba el balance 
            } 
            
            if( key === 'isActive'){
                userLike[key] = value === 'on' ? true : false;
                continue
            } 

            userLike[key] = value;
        }
        // console.log(userLike);
    });

    modalEditUser.addEventListener('click', (event) =>{
        if (event.target.className === 'modal-container') hideModal();
    });

    element.append( modalEditUser );
};