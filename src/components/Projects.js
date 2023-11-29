import weather from "../assets/img/weather.jpg";
import bmi4 from "../assets/img/bmi4.png";
import oldPort from "../assets/img/old_p.png";
import currant from "../assets/img/current_p.png";
import expenses from "../assets/img/expenses.png";
import music from "../assets/img/music.jpg";
import tool_increment from "../assets/img/tool_increment.png";
import svu from "../assets/img/svu.png";

export const Projects = () => {
  const projects = [
    {
      title: "☁️ Weather App",
      p: ["Simple weather applcation that depends on openweatherapi."],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1" },
        { name: "Getx", classn: "bg-success badge mx-1" },
        { name: "Openweather Api", classn: "bg-primary badge mx-1" },
      ],
      photo: weather,
      photoWidth: "200px",
      photoHeight: "400px",
    },
    {
      title: "💪 Body Mass Index App",
      p: [
        "The app start with home page you specify your gender, age, height and weight.",
        "Click on calculate and the app will follow some algorithm to give you the result how your body look like.",
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1" },
        { name: "SetState", classn: "bg-success badge mx-1" },
      ],
      photo: bmi4,
      photoWidth: "300px",
      photoHeight: "200px",
    },
    {
      title: "🎵 Music App",
      p: [
        "Plays audio files encoded in MP3 and other audio formats.",
        "On the software side, enable you to play music on the internet without downloading any song.",
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1" },
        { name: "Provider", classn: "bg-success badge mx-1" },
        { name: "Custome api", classn: "bg-primary badge mx-1" },
      ],
      photo: music,
      photoWidth: "200px",
      photoHeight: "400px",
    },
    {
      title: "💰 Expenses App",
      p: [
        "The app start with login screen if you want to sign up you can click on sign up text button after you login you will see all the transaction you have did if you want to add new transaction click on add icon you have tow option expense and income transaction.",
        // "the transacton stay on app unless you click on synce button in settings, if you click on chart in navigation bar you will know how numer you have income and expense and look in a specifice day what transaction you have made, in setting you can change the theme of the app, synce your data to firebase and logout.",
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1" },
        { name: "Provider", classn: "bg-success badge mx-1" },
        { name: "Firebase", classn: "bg-primary badge mx-1" },
      ],
      photo: expenses,
      photoWidth: "250px",
      photoHeight: "300px",
    },
    {
      title: "🌐 Old Portifiolo ",
      url: "http://samir-alkhalil.000webhostapp.com/",
      p: ["That's the old portifiolo."],
      technologes: [
        {
          name: "PHP",
          classn: "bg-primary badge mx-1",
        },
        { name: "HTML", classn: "bg-danger badge mx-1" },
        { name: "CSS", classn: "bg-success badge mx-1" },
      ],
      photo: oldPort,
      photoWidth: "400px",
      photoHeight: "400px",
    },
    {
      title: "💼 Current Portifiolo",
      url: "https://samir1997s.github.io/personal-portfolio/",
      p: ["That's the current portifiolo."],
      technologes: [
        {
          name: "React Js",
          classn: "bg-primary badge mx-1",
        },
        { name: "React-bootstrap", classn: "bg-danger badge mx-1" },
        { name: "HTML", classn: "bg-success badge mx-1" },
        { name: "CSS", classn: "bg-success badge mx-1" },
      ],
      photo: currant,
      photoWidth: "400px",
      photoHeight: "400px",
      classph: "frame",
    },
    {
      title: "🌐 Auto-increment String Generator",
      url: "http://samir-alkhalil.000webhostapp.com/tool_incrementstr.php",
      p: ["Auto generate strings with incremental numbers. Execute by pressing the generate button you can make a full m3u8 playlist."],
      technologes: [
        
        { name: "Javascript", classn: "bg-danger badge mx-1" },
        { name: "HTML", classn: "bg-success badge mx-1" },
        { name: "CSS", classn: "bg-success badge mx-1" },
      ],
      photo: tool_increment,
      photoWidth: "400px",
      photoHeight: "400px",
      classph: "frame",
    },
    {
      title: "🎓 SVU Extention",
      p: ["Simplify every thing for students at syrian virtual universtiy."],
      technologes: [
        {
          name: "Chrome Manifest V3",
          classn: "bg-primary badge mx-1",
        },
        { name: "Javascript", classn: "bg-danger badge mx-1" },
        { name: "HTML", classn: "bg-success badge mx-1" },
        { name: "CSS", classn: "bg-success badge mx-1" },
      ],
      photo: svu, 
      photoWidth: "400px",
      photoHeight: "400px",
      classph: "frame",
    },
  ];
  return (
    <div className="home-wrpper">
      <p className="title skills">Stuff I Made 🔗 </p>
      <hr className="hr-skill"></hr>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="my-row">
              <div className="flex-column d-flex responsive-mb-2">
                {Object.hasOwn(project, "url") ? (
                  <a href={project.url} target="_blank" className="title-href subtitle">
                    <span >{project.title}</span>
                  </a>
                ) : (
                  <span className="subtitle">{project.title}</span>
                )}

                {project.p.map((ps) => (
                  <p className="p-details" key={ps}>
                    - {ps}
                  </p>
                ))}

                <div className="d-flex flex-row">
                  {project.technologes.map((tech) => (
                    <div key={tech.name}>
                      <span className={tech.classn}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-column">
                {Object.hasOwn(project, "url") ? (
                  <a href={project.url} target="_blank" className="title-href">
                    <img
                      src={project.photo}
                      width="220px"
                      height={project.photoHeight}
                      className={project.classph}
                      alt="w"
                    ></img>
                  </a>
                ) : (
                  <img
                    src={project.photo}
                    width="220px"
                    height={project.photoHeight}
                    className={project.classph} 
                    alt="w"
                  ></img>
                )}
              </div>
            </div>
            <hr className="hr-skill"></hr>
          </div>
        ))}
      </div>
    </div>
  );
};
