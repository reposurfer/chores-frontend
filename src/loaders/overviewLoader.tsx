import { Chore } from "../types/chore.type";

async function OverviewLoader() {
    const res: Response = await fetch("http://localhost:5013/api/Chores");
    if(res.status !== 200) {
        throw new Response(res.statusText, {status: res.status, statusText: res.statusText});
    }

    const chores: Chore[] = await res.json();
    return chores;
}

export default OverviewLoader;