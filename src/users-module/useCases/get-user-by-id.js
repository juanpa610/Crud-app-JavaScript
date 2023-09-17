import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number} id 
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, {
        method : 'GET',
    });

    const data = await res.json();
    const user =  localhostUserToModel(data);

    return user;
};

