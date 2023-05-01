import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Header from "./header";

export default function Root(){
    return(
        <>
         <Header id="header">
             
         </Header>

         <main>
            <div><Outlet/></div>
         </main>
            
         <footer>

         </footer>
           
        
        
        
              
           
        </>
    )
}