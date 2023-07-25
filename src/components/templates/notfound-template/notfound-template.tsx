import { Link } from "react-router-dom";

function NotFoundTemplate({homeLink}: {homeLink: string}) {
    return (
        <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={homeLink}>Go back home</Link>
        </div>
    );
}

export default NotFoundTemplate;