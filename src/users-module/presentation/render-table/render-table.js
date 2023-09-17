import usersStore from "../../store/users-store";
import { deleteUser } from "../../useCases/delete-user";
import { showModal } from "../render-modal/render-modal";
import "./render-table.css";

let table;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderTable = ( element ) => {

    const users = usersStore.getUsers();
    debugger
    
    if( !table ){
        table = createTable();
        element.append(table);
        
        //TODO: listeners a la tabla
        // table.target.closest('[data-id]');
        // console.debug(`💎🤑  table.target`, table.closest())
        table.addEventListener('click', event => {
            tableSelectButtonsListener(event);
        });
        
    }
    
    let tbodyHtml = '';
    users.forEach(user => {
        tbodyHtml += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href="#/" class="select-user" data-id="${user.id}">Select</a>
                    <a href="#/" class="delete-user" data-id="${user.id}">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tbodyHtml;
    // const a = table.querySelectorAll('a');
    //     console.debug(`💎🤑  a`, a)
};


const createTable = () => {
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    tableHead.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FistName </th>
            <th>LastName </th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append( tableHead, tableBody);
    return table;
};

/**
 * 
 * @param {MouseEvent} event 
 */
const tableSelectButtonsListener = async (event) => {
    const element = event.target;
    if (!element) return;

    const id = element.getAttribute('data-id');
    
    if(element.classList.contains( 'select-user')){
        showModal(id);
    }

    if(element.classList.contains('delete-user')){
        await deleteUser(id);
        // usersStore.onUserDeleted(id);
        await usersStore.reloadPage();
        document.querySelector('#current-page').innerHTML = usersStore.getCurrentPage();
        await RenderTable();

    }

};