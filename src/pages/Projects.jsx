import "../styles/Projects.css";
// import Placeholder from "../assets/elementor-placeholder-image.webp";
import README from "../assets/VSCode-markdown-preview.png";
import Candidate from "../assets/candidatesearch.png";
import Kanban from "../assets/kanbanboard.png";
import SocialMedia from "../assets/Deep-Dive-Fake-Social-Media-Accounts.webp";

const Projects = () => {
  const projects = [
    {
      title: "README Generator",
      image: README,
      gitHub: "https://github.com/azachman66/README-Generator",
      deployed: "https://drive.google.com/file/d/1yk-ADIMTT0HQiul4owN6NggBKeJZezC9/view"
    },
    {
      title: "Candidate Search",
      image: Candidate,
      gitHub: "https://github.com/azachman66/Candidate-Search",
      deployed: "https://candidate-search-ofr2.onrender.com/"
    },
    {
      title: "Kanban Board",
      image: Kanban,
      gitHub: "https://github.com/azachman66/Kanban-Board",
      deployed: "https://kanban-board-28hg.onrender.com/"
    },
    {
      title: "Social Media Mockup",
      image: SocialMedia,
      gitHub: "https://github.com/azachman66/Social-Media",
      deployed: "https://drive.google.com/file/d/1w6lIQ5xKbIIWidHCnGaS-QmBL5-QFu55/view"
    }

  ]
  return (
    <section id="projects">
      <h1>Projects</h1>
        {projects.map((element) => (<div key={element.title} className="projectCard">
          <div>{element.title}</div>
          <img src={element.image} alt="project image" />
          <a href={element.gitHub}><button>GitHub</button></a>
          <a href={element.deployed}><button>Live</button></a>
        </div>))}
    </section>
  )
}

export default Projects