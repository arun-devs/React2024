import { useRouteError } from "react-router-dom";
const Error=()=>{ 
    const errr= useRouteError()
            console.log(errr);
    return(
        <div>
            
            <h1>Oops error ..!!!</h1>
            <h2>Something issue occured..!!</h2>
            <h3>{errr.status}</h3>
        </div>
    );
}

export default Error