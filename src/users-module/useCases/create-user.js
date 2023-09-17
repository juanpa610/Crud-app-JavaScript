import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

const url = `${import.meta.env.VITE_BASE_URL}/users`;

/**
 * 
 * Funcion que hace el llamado a un servicio post para crear un usuario 
 * 
 * @param  {Like<User>} userLike
 * @returns {Promise<User>}
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);
    const userToSave = userModelToLocalhost(user);
    let userUpdated = {};

    if( user.id){
        userUpdated = await updateInfoUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);



};

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {
    
    const res = await fetch(url, {
        method : 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await res.json();
    return newUser;
};


/**
 * 
 * @param {Like<User>} user 
 * @returns 
 */
const updateInfoUser = async (user) => {
    const res = await fetch(`${url}/${user.id}`, {
        method : 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return await res.json();;
};