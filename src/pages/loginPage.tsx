import { FormEvent, useContext } from "react"
import { Role, User } from "../utils/types";
import { AuthContext } from "../core";
import {Navigate} from "react-router-dom"
import { toast } from "sonner";

export function LoginPage(){
    const {setUserInfo, userInfo} = useContext(AuthContext);
    const handleSubmit=(form: FormEvent<HTMLFormElement>)=>{
        form.preventDefault();
        const formData= Object.fromEntries(new FormData(form.currentTarget));
        const username= formData.username as string;
        const password= formData.password as string;
        const role= formData.role as Role;
        if(userInfo === null && username.trim() === '' || password.trim()=== ''){
            console.log(userInfo,username,password)
            toast.error('Event has not been created')
            return;
        }
        const newUser: User={
            username,
            password,
            role 
        }
        setUserInfo(newUser);
    }
    return(
        <>  
            {userInfo && <Navigate to="/landing" replace={true}  />}
            <h1 className="font-bold m-4">Login Page</h1>
            <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center gap-3 p-6 mt-12 bg-gray-700 rounded" autoComplete="off">
                <input type="text" name="username" placeholder="Username"  className="text-slate-900 rounded p-2"/>
                <input type="password" name="password" placeholder="Password" className="text-slate-900 rounded p-2" />
                <select name="role" id="role" className="text-slate-900 rounded p-2 w-48">
                    <option value={Role.USER}>User</option>
                    <option value={Role.ADMIN}>Admin</option>
                </select>
                <button>Log In</button>
            </form>
        </>
    )
}