import { renderAddButton } from "./presentation/rende-add-button/rende-botton";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { saveUser } from "./useCases/create-user";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    RenderTable(element);
    if(usersStore.getUsers().length === 0)  return;
    renderButtons(element);
    renderAddButton(element);
    renderModal(element, async (userLike) => {
        const newUser = await saveUser(userLike);
        usersStore.onUserChange(newUser);
        RenderTable();
    });
};  