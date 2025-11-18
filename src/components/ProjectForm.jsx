import { useState } from "react";

function ProjectForm({ addProject }) {
    const [formData, setFormData] = useState({ title: "", description: "", deadline: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        addProject({ ...formData, id: Date.now(), status: "todo" });
        setFormData({ title: "", description: "", deadline: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <input
                placeholder="Titre"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <input
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <input
                type="date"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                required
                style={{ marginRight: "10px", padding: "5px" }}
            />
            <button type="submit" style={{ padding: "5px 10px" }}>Ajouter</button>
        </form>
    );
}

export default ProjectForm;
