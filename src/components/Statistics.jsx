function Statistics({ projects }) {
    const stats = { todo: 0, doing: 0, done: 0 };
    projects.forEach((p) => stats[p.status]++);

    return (
        <div style={{ marginTop: "20px" }}>
            <h3>Statistiques</h3>
            <p>Todo: {stats.todo}</p>
            <p>Doing: {stats.doing}</p>
            <p>Done: {stats.done}</p>
        </div>
    );
}

export default Statistics;
