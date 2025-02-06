import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar imageName="profile.jpeg" />
      <div className="data">
        <Intro
          name="Manoel Lima"
          bio="Software Engineer with over 13 years of experience
          specializing in Java, REST APIs, and Spring Boot."
        />
        <SkillList
          skills={[
            { tech: "java", color: "#0aF", emoji: "0x1F4AA" },
            { tech: "spring boot", color: "#0F0", emoji: "0x1F4AA" },
            { tech: "AWS", color: "#F00", emoji: "0x1F466" },
            { tech: "React", color: "#FF0", emoji: "0x1F476" },
            { tech: "PostgreSQL", color: "#0FF", emoji: "0x1F4AA" },
          ]}
        />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imageName} alt={props.imageName} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.bio}</div>
    </div>
  );
}

/* should have one Skill component for each
web dev skill that you have, customized
with props */
function SkillList(props) {
  const skillList = props.skills;
  const skill_result = [];
  for (let index = 0; index < skillList.length; index++) {
    const tech = skillList[index].tech;
    const color = skillList[index].color;
    const emoji = skillList[index].emoji;
    skill_result.push(
      <Skill tech={tech} color={color} emoji={emoji} key={index} />
    );
  }
  return <div className="skill-list">{skill_result}</div>;
}

// each skill must have a name, a color and an emoji
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.tech} {String.fromCodePoint(props.emoji)}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
