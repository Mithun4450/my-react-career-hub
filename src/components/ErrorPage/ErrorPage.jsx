import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Ooops!!!</h1>
            <Link to="/">Go back to Home</Link>
            
        </div>
    );
};

export default ErrorPage;