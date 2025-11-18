import ProjectItem from "./ProjectItem";

function ProjectList({ projects, dispatch, filterStatus, searchTerm }) {
    const filtered = projects
        .filter((p) => filterStatus === "all" || p.status === filterStatus)
        .filter(
            (p) =>
                p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    return (
        <div style={{ marginTop: "20px" }}>
            {filtered.length === 0 ? <p>Aucun projet</p> :
                filtered.map((project) => (
                    <ProjectItem key={project.id} project={project} dispatch={dispatch} />
                ))}
        </div>
    );
}

export default ProjectList;
