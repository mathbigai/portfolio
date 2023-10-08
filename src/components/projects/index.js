import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projet1 from "../../assets/img/projeto1.png";
import projet2 from "../../assets/img/projeto2.png";
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./projectsCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export const Projects = () => {

  const projects = [
    {
      title: "Magalhães Engenharia",
      description: "Design & Desenvolvimento",
      imgUrl: projet1,
      url: "https://magalhaesengenharia.com/",
    },
    {
      title: "AquiFilmes!",
      description: "Design & Desenvolvimento",
      imgUrl: projet2,
      url: "https://aquifilmes-4600a.web.app/",
    },
  ];

  const projectsJava = [
    {
      title: "NovaHotel",
      description: "Design & Desenvolvimento",
      imgUrl: projet1,
      url: "https://magalhaesengenharia.com/",
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Java</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      {
                            projectsJava.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}