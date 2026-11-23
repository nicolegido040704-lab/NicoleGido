const achievements = [
  { title: "TOP 1", detail: "Elementary: GRADE 1" },
  { title: "TOP 1", detail: "Elementary: GRADE 2" },
  { title: "TOP 2", detail: "Elementary: GRADE 3" },
  { title: "TOP 1", detail: "Elementary: GRADE 4" },
  { title: "TOP 1", detail: "Elementary: GRADE 5" },
  { title: "TOP 1", detail: "Elementary: GRADE 6"},

  { title: "TOP 4", detail: "Junior Highschool: 1st year" },
  { title: "TOP 5", detail: "Junior Highschool: 2nd year" },
  { title: "TOP 3", detail: "Junior Highschool: 3rd year" },
  { title: "TOP 2", detail: "Junior Highschool: 4th year" },

  { title: "WITH HONOR", detail: "Senior Highschool: Grade 11" },
  { title: "WITH HIGH HONOR", detail: "Senior Highschool: Grade 12" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2>Achievements</h2>
        <ul className="achievements">
          {achievements.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              {item.detail}
              
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}