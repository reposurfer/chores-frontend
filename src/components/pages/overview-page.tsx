import { useState, useEffect } from "react";
import { Chore } from "../../models/Chore";
import OverviewTemplate from "../templates/overview-template/overview-template";

function OverviewPage() {
    const [chores, setChores] = useState<Chore[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<Error>();
    useEffect(() => {
        fetch("http://localhost:5013/api/Chores")
        .then((res) => res.json())
        .then((data) => {
        setIsLoaded(true);
        setChores(data);
        },
        (error) => {
        setIsLoaded(true);
        setError(error);
        });
    }, []);

    return (
    <OverviewTemplate chores = {chores} isLoaded = {isLoaded} error = {error} />
    );
}

export default OverviewPage;