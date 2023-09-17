import usersStore from "../../store/users-store";
import "./render-table.css";

let table;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const RenderTable = ( element ) => {

    const users = usersStore.getUsers();
    
    if( !table ){
        table = createTable();
        element.append(table);
        
        //TODO: listeners a la tabla
        // table.target.closest('[data-id]');
        // console.debug(`💎🤑  table.target`, table.closest())
        
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
                    <a href="#/" data-id="${user.id}">Select</a>
                    <a href="#/" data-id="${user.id}">Delete</a>
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