import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

export default function Root(){
    return(
        <>
            <NavBar/> 
           <div><Outlet/></div>
        </>
    )
}