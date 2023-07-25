import { useAsyncError, useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError() as {status: number, statusText: string};

    return (
        <div>
        <h1>{error.status}</h1>
        <p>{error.statusText}</p>
        </div>
    );
}

export default ErrorPage;