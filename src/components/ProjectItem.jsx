import PomodoroTimer from "./PomodoroTimer";

function ProjectItem({ project, dispatch }) {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{project.title} ({project.status})</h3>
            <p>{project.description}</p>
            <p>Deadline: {project.deadline}</p>
            <div>
                {["todo", "doing", "done"].map((status) =>
                    status !== project.status ? (
                        <button
                            key={status}
                            onClick={() => dispatch({ type: "UPDATE_STATUS", payload: { id: project.id, status } })}
                            style={{ marginRight: "5px", padding: "3px 8px" }}
                        >
                            {status}
                        </button>
                    ) : null
                )}
                <button
                    onClick={() => dispatch({ type: "DELETE_PROJECT", payload: { id: project.id } })}
                    style={{ padding: "3px 8px", background: "red", color: "white" }}
                >
                    Supprimer
                </button>
            </div>
            <PomodoroTimer projectId={project.id} />
        </div>
    );
}

export default ProjectItem;
