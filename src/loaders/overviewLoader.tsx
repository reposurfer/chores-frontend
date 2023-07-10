function OverviewLoader() {
    const data = fetch("http://localhost:5013/api/Chores").then((res) => res.json())
    return data;
}

export default OverviewLoader;