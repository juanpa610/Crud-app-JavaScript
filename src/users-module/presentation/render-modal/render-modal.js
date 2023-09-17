import { User } from "../../models/user";
import { getUserById } from "../../useCases/get-user-by-id";
import "./render-modal.css";
import html from "./render-modal.html?raw";

let modalEditUser, form;
let loaderUser = {};

/**
 * 
 * @param {String || null} id 
 */
export const showModal = async ( id ) => {
    modalEditUser?.classList.remove('hide-modal');
    loaderUser = {};
    if(!id) return;

    const user = await getUserById(id);
    setFormValues(user);

};

export const hideModal = () => {
    modalEditUser?.classList.add('hide-modal');
    form?.reset();
};

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector("[name='firstName']").value = user.firstName;
    form.querySelector("[name='lastName']").value = user.lastName;
    form.querySelector("[name='balance']").value = user.balance;
    form.querySelector("[name='isActive']").checked = user.isActive;
    loaderUser = user;
};

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} userSaveCallback 
 * @returns 
 */
export const renderModal = (element, userSaveCallback) => {
    if(modalEditUser)return;

    modalEditUser = document.createElement('div')
    modalEditUser.innerHTML = html;
    modalEditUser.classList.add('modal-container', 'hide-modal');

    form = modalEditUser.querySelector('form');

    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        const formData = new FormData( form );
        
        const userLike = {...loaderUser};
        
        for (const [key, value] of formData) {
            if( key === 'balance'){
                userLike[key] = parseFloat(value);
                continue; // Para que continue y despues no sobre estcriba el balance 
            } 
            
            if( key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue
            } 

            userLike[key] = value;
        }
    
        hideModal();
        await userSaveCallback(userLike);
    });

    modalEditUser.addEventListener('click', (event) =>{
        if (event.target.className === 'modal-container') hideModal();
    });

    element.append( modalEditUser );

};