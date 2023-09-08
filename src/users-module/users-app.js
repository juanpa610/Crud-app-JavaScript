import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async(element) => {
    console.debug(`💎🤑  element`, element);
    await usersStore.loadNextPage();
};  