import { User } from "../models/user";

/**
 * 
 * @param {User} localhostUser 
 * @returns {any}
 */
export const userModelToLocalhost = ( localhostUser ) => {

    
    const {
        avatar, 
        balance, 
        firstName, 
        gender, 
        id, 
        isActive, 
        lastName,  
    } = localhostUser;

    return { 
        avatar, 
        balance, 
        first_name : firstName, 
        gender, 
        id, 
        isActive, 
        last_name: lastName
    };
};  