import { User } from "../models/user";
import { loadUsersByPage } from "../useCases/load-users-by-pages";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if( users.length === 0 ) return;
    state.currentPage += 1;
    state.users = users;    
}

const loadPreviosPage = async() => {
    if( state.currentPage === 1 ) return;
    state.users = await loadUsersByPage(state.currentPage - 1);; 
    state.currentPage -= 1;
}

// TODO: implementar 
const onUserChange = () => {
    
}

const reloadPage = async() => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviosPage,
    onUserChange,
    reloadPage,
    /**
     * 
     * @returns {User[]}
     */
    getUsers : () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage : () => state.currentPage,
}