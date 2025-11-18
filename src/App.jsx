import { useEffect, useReducer, useState } from 'react'
import './App.css'
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import Statistics from './components/Statistics';
import { initialState, projectReducer } from './reducers/projectReducer';

function App() {
  const [projects, dispatch] = useReducer(projectReducer, initialState);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Gestionnaire de Projets</h1>
      <ProjectForm addProject={(project) => dispatch({ type: "ADD_PROJECT", payload: project })} />
      <div style={{ marginTop: "20px" }}>
        <input
          placeholder="Recherche..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: "5px", width: "200px", marginRight: "10px" }}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: "5px" }}>
          <option value="all">Tous</option>
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <ProjectList
        projects={projects}
        dispatch={dispatch}
        filterStatus={filterStatus}
        searchTerm={searchTerm}
      />
      <Statistics projects={projects} />
    </div>
  );
}

export default App
