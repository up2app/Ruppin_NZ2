import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({children}) {

    const [users, SetUser] = useState([
        {email:'a@a.com', password:'111', name:'aaa', msg:'hi KUKU'},
        {email:'b@b.com', password:'222', name:'bbb', msg:'hi LULU'},
        {email:'c@c.com', password:'333', name:'ccc', msg:'hi MOMO'},
        {email:'d@d.com', password:'444', name:'ddd', msg:'hi JOJO'},
        {email:'e@e.com', password:'555', name:'eee', msg:'hi BOBO'}
    ]);

    const [currentUser, SetCurrentUser] = useState(null);

    const FindUser = (email, password) =>{
        let u = users.find((user)=>user.email === email && user.password === password);
        SetCurrentUser(u);
        return u; 
    }    

    return (
        <UserContext.Provider value={{currentUser, FindUser}}>
            {children}
        </UserContext.Provider>
    )


}
