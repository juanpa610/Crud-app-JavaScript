import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * Funcion que hace el consumo de un servicio que retorna la información de los usuarios por pagina 
 * 
 * @param  {Number} page
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    // Esta dos formas de hacerlo es lo mismo que la otra 
    const users = data.map( userLike => localhostUserToModel(userLike));
    // const users = data.map( localhostUserToModel );

    return users;
};

