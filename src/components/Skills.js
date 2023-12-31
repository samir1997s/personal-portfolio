

export const Skills = () => {

    const skills = [
        {
            title: "Java Script",
        },
        {
        title: "Dart",

    },
    {
        title: "Python",
    },
    {
        title: "Nodejs",
    },
    {
        title: "React",
    },
    {
        title: "Flutter",
    },
    {
        title: "PHP",
    },
    {
        title: "Odoo ERP",
    }
];
    return (
        <div className="home-wrpper">
                <div className="skills">
                    <p className="title">

                My Skills 🚀
                    </p>
                    <p className="profile">
                    I Primarily Specialise In Applications Development.
          </p>
                    <hr className="hr-skill"></hr>
                </div>
                <section id="skills">
        
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <div className="skill-wrapp">
            
                <span className="subtitle">
                ✅ {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
     
    </section>
        </div>
    );
}; 