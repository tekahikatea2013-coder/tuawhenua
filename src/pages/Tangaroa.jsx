import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import './Tangaroa.css'

export default function Tangaroa() {
  const oceanProjects = projects.filter((p) => p.category === 'tangaroa')

  return (
    <div className="tangaroa">
      <h1>Tangaroa: Projects in the Moana </h1>
      <div className="project-grid">
        {oceanProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}