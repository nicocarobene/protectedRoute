import { useContext } from "react"
import {Link} from "react-router-dom"
import { AuthContext } from "../core"

export function Navbar(){
    const {userInfo,setUserInfo} = useContext(AuthContext)
    const handleClick=()=>{
        setUserInfo(null)
    }
    return (
        <header className="w-full p-4 bg-slate-800 flex justify-center items-center h-20 shadow-md fixed top-0 left-0 right-0 z-10">
            <nav>
              <ul className="flex gap-4">
                <li>
                    <Link to="/">Landing</Link>
                </li>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/list">List</Link>
                </li>
                <li>
                    <Link to="/detail">Detail</Link>
                </li>
                <li>
                    {userInfo
                    ? <button className="bg-inherit p-0 outline-none border-none text-[#646cff] hover:text-[#535bf2]" onClick={handleClick}>LogOut</button>
                    : <Link to="/login">Login</Link>
                }
                </li>
            </ul>
            </nav>
        </header>
    )
}