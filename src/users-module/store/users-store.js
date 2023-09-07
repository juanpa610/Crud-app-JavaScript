const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    throw new Error('No implementado');
}

const loadPreviosPage = async() => {
    throw new Error('No implementado');
}

// TODO: implementar 
const onUserChange = () => {
    throw new Error('No implementado');
}

const reloadPage = async() => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviosPage,
    onUserChange,
    reloadPage,

    getUsers : () => [...state.users],
    getCurrentPage : () => state.currentPage,
}