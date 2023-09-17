import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

const url = `${import.meta.env.VITE_BASE_URL}/users`;

/**
 * 
 * Fusion que hace el llamdo a un servicio post para crear un usuario 
 * 
 * @param  {Like<User>} userLike
 * @returns {Promise<User[]>}
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);
    const userToSave = userModelToLocalhost(user);

    if( user.id){
        return;
    }

    const updateUser = await createUser(userToSave);
    return updateUser;
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


const updateInfoUser = async (id) => {
    const res = await fetch(`${url}?id=${id}`, {
        method : 'PUT',
    });
    
    const data = await res.json();
};