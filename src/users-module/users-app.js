import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';
    
    RenderTable(element);
    renderButtons(element);
};  