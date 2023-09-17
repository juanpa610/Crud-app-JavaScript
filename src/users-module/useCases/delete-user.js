const url = `${import.meta.env.VITE_BASE_URL}/users`;

/**
 * 
 * @param { String } id 
 * @returns 
 */
export const deleteUser = async (id) => {
    const res = await fetch(`${url}/${id}`, {
        method : 'DELETE',
    });
};