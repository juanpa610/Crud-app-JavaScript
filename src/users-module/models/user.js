export class User {

    /**
     * 
     * @param {Object<User>} userData 
     */
    constructor({id, isActive, balance, avatar, first_name, last_name, gender}){
        this.id         = id,
        this.isActive   = isActive,
        this.balance    =  balance
        this.avatar     = avatar,
        this.firstName  = first_name,
        this.lastName   = last_name,
        this.gender     =  gender;
    }
}