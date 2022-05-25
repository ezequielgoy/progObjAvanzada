import { AuthContext } from "../context/AuthContext";
import {Link} from "react-router-dom"
import { useContext } from "react";
function Main () {

    const {user} = useContext(AuthContext);
    


    
    return (<div>
        <Link to="/extract">
            <button type="button" className="extract-btn">Extract products</button>
        </Link>
        <Link to="/restock">
            <button type="button" classname="reStock-btn">Re stock products</button>
        </Link>
        <Link to="/report">
            <button type="button" classname="report-btn">Daily Reports</button>
        </Link>
        <Link to="/signup">
            <button type="button" className="signup">Create Account</button>
        </Link>
    </div>)
}

export default Main 