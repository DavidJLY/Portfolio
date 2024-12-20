import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner, Alert } from "react-bootstrap";
import "../styles/Project.scss";

export function Projects({ language }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_AIRTABLE_NAME}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            },
          }
        );
        setProjects(response.data.records);
      } catch (error) {
        setError("Erreur lors de la récupération des projets.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Chargement...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <section className="projects">
      <h2 className="text-center mb-5">
        {language === "fr" ? "Mes projets" : "My projects"}
      </h2>
      <div className="row d-flex justify-content-center">
        {projects.map((project) => (
          <div
            className="col-md-4 mb-5 d-flex justify-content-center"
            key={project.id}
          >
            <Card className="card">
              <div className="imgContainer">
                <a
                  href={project.fields["lien du projet"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <img
                    className="img-card img-fluid"
                    src={project.fields["Image de couverture"]?.[0]?.url}
                    alt={project.fields["Nom"]}
                  />
                </a>
              </div>
              <Card.Body className="content">
                <Card.Title>{project.fields["Nom"]}</Card.Title>
                <Card.Text>{project.fields.Description}</Card.Text>
                <div className="mb-2">
                  {project.fields.Technologies?.map((tech) => (
                    <span key={tech} className="badge bg-secondary me-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
