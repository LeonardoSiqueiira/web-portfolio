import {DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from "react-icons/di";

import '../styles/components/teccontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "react", name: "React", icon: <DiReact /> },
  ];

const TecContainer = () => {
    return (
        <section className="tec-container"> 
            <h2>Tecnologias</h2>
            <div className="tec-grid">
                {technologies.map((tec) => (
                    <div className="tec-card" id={tec.id} key={tec.id}>
                        {tec.icon}
                        <div className="tec-info">
                            <h3>{tec.name}</h3>
                            
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecContainer;