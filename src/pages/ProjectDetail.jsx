import { useParams } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <p>Project not found.</p>
  }

  return (
    <div className="project-detail">
      <img src={project.url} alt={project.title} className="project-detail-image" />
      <h1>{project.title}</h1>
      <p>{project.summary}</p>
    </div>
  )
}