import { useRouteError } from "react-router-dom";
import { authenticate } from "../api";

export default function ErrorPage(){
    const error = useRouteError();
    console.error(error);

    return(
        <div id="error-page">
            <p>C'è stato un errore imprevisto!</p>
        </div>
    )
}