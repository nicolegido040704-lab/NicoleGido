const skills = ["Multitasking", "Critical Thinking", "Team Work", "HTML", "CSS", "Willingness to Learn"];

export default function Skills() {
  return (
    <section id="skills" className="section pale">
      <div className="container">
        <h2>Skills</h2>
        <ul className="pills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}