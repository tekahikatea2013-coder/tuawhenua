import { useNavigate } from "react-router-dom"
import "./projectCard.css"


function ProjectCard(project){
    const navigate = useNavigate();
    return (
        <div
            className="project-card"
            onClick={() => navigate(`/projects/${project.id}`)}
        >
        <div className="project-poster">
            <img src={project.url} alt={project.title} />
        </div>
        <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
        </div>
        </div>
    )
}

export default ProjectCard