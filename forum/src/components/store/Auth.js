import { makeAutoObservable } from "mobx";
import axios from 'axios';

class Auth {
    auth = false;
    name;
    roles;
    constructor(){
        makeAutoObservable(this);
    }
    async getUserData() {
        await axios.get('http://localhost:5000/auth/getDataUser', { withCredentials: true }).then(e => {
            if(e.data === false) return 
            console.log(e.data)
            this.name = e.data.username;
            this.roles = e.data.roles;
            this.auth = true;
        });
    }
}
export default new Auth();