import weather from "../assets/img/weather.jpg";
import bmi1 from "../assets/img/bmi1.png";
import oldPort from "../assets/img/oldPort.png";
import currant from "../assets/img/currant.png";
import expenses from "../assets/img/expenses.png";
import music from "../assets/img/music.jpg";

export const Projects = () => {
  const projects = [
    {
      title: "☁️ Weather App",
      p: [
        "simple weather applcation that depends on openweatherapi.",
      
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1", },
        { name: "Getx", classn: "bg-success badge mx-1", },
        { name: "Openweather Api", classn: "bg-primary badge mx-1", },
      ],
      photo: weather,
      photoWidth: "200px", 
      photoHeight: "400px", 
    },
    {
      title: "💪 Body Mass Index App",
      p: [
        "the app start with home page you specify your gender, age, height and weight.",
        "click on calculate and the app will follow some algorithm to give you the result how your body look like.",
        
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1", },
        { name: "SetState", classn: "bg-success badge mx-1", },
        
      ],
      photo: bmi1,
      photoWidth: "300px", 
      photoHeight: "220px", 
    },
    {
      title: "🎵 Music App",
      p: [
        "plays audio files encoded in MP3 and other audio formats.",
        "On the software side, enable you to play music on the internet without downloading any song.",
        
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1", },
        { name: "Provider", classn: "bg-success badge mx-1", },
        { name: "Custome api", classn: "bg-primary badge mx-1", },
      ],
      photo: music,
      photoWidth: "200px", 
      photoHeight: "400px", 
    },
    {
      title: "💰 Expenses App",
      p: [
        "the app start with login screen if you want to sign up you can click on sign up text button after you login you will see all the transaction you have did if you want to add new transaction click on add icon you have tow option expense and income transaction.",
        "the transacton stay on app unless you click on synce button in settings, if you click on chart in navigation bar you will know how numer you have income and expense and look in a specifice day what transaction you have made, in setting you can change the theme of the app, synce your data to firebase and logout.",
        
      ],
      technologes: [
        {
          name: "Flutter",
          classn: "bg-primary badge mx-1",
        },
        { name: "Dart", classn: "bg-danger badge mx-1", },
        { name: "Provider", classn: "bg-success badge mx-1", },
        { name: "Firebase", classn: "bg-primary badge mx-1", },
      ],
      photo: expenses,
      photoWidth: "250px", 
      photoHeight: "400px", 
    },
    {
      title: "🌐 old portifiolo ",
      url: "http://samir-alkhalil.000webhostapp.com/",
      p: [
        "thats the old portifiolo",
      ],
      technologes: [
        {
          name: "PHP",
          classn: "bg-primary badge mx-1",
        },
        { name: "HTML", classn: "bg-danger badge mx-1", },
        { name: "CSS", classn: "bg-success badge mx-1", },
        
      ],
      photo: oldPort,
      photoWidth: "400px", 
      photoHeight: "200px", 
    },
    {
      title: "💼 current portifiolo",
      p: [
        "thats the current portifiolo",
     
        
      ],
      technologes: [
        {
          name: "React Js",
          classn: "bg-primary badge mx-1",
        },
        { name: "React-bootstrap", classn: "bg-danger badge mx-1", },
        { name: "HTML", classn: "bg-success badge mx-1", },
        { name: "CSS", classn: "bg-success badge mx-1", },
        
      ],
      photo: currant,
      photoWidth: "400px", 
      photoHeight: "200px", 
    },
    


  ];
  return (
    <div className="home-wrpper">
      <p className="title skills">Stuff I Made 🔗 </p>
      <hr className="hr-skill"></hr>

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div  className="my-row">
              <div className="flex-column d-flex responsive-mb-2">

                {Object.hasOwn(project, 'url') ? 
                
                <a href={project.url} target='_blank' className="title-href">

                  <span className="subtitle">{project.title}</span>
                </a>
                :
                <span className="subtitle">{project.title}</span>
                
                }

                {project.p.map((ps) => (
                  <p className="p-details" key={ps}>
                    =&gt; {ps}
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
                <img src={project.photo} width="250px" height={project.photoHeight} alt="w"></img>
              </div>
            </div>
            <hr className="hr-skill"></hr>
          </div>
        ))}
      </div>
    </div>
  );
};
