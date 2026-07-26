import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'
import './TaneMahuta.css'

export default function TaneMahuta() {
  const forestProjects = projects.filter((p) => p.category === 'tane-mahuta')

  return (
    <div className="tane-mahuta">
      <h1>Tāne Mahuta: Projects in the Ngahere</h1>
      <div className="project-grid">
        {forestProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}