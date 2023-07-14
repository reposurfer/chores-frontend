import { useState, useEffect } from "react";
import { Chore } from "../../../models/Chore";
import OverviewTemplate from "../../templates/overview-template/overview-template";
import { useLoaderData } from "react-router-dom";

function OverviewPage() {
    const [chores, setChores] = useState<Chore[]>([]);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const loaderData = useLoaderData() as Chore[];

    useEffect(() => {
        // fetch("http://localhost:5013/api/Chores")
        // .then((res) => res.json())
        // .then((data) => {
        // setIsLoaded(true);
        // setChores(data);
        // },
        // (error) => {
        // setIsLoaded(true);
        // setError(error);
        // });

        console.log('overvieweffect', loaderData);
        setIsLoaded(true);
        setChores(loaderData);
        

    }, []);

    return (
    <OverviewTemplate chores = {chores} isLoaded = {isLoaded} />
    );
}

export default OverviewPage;