import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { useState, useEffect } from "react";
import { Home } from "./Home";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const MyNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

 
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    
      <div className="nav-wrapper">
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <div className="nav-c">
            <Nav>
              <Nav.Link
                eventKey="first"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="second"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                eventKey="third"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
          </div>
          <Tab.Content id="slideInUp">
            <Tab.Pane eventKey="first">
              <Home />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Skills />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Projects />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
      

  );
};
