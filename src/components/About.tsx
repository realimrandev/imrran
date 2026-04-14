import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">01 About</h3>
        <p className="para">
          I build web apps that are fast, responsive, and production1ready. From
          prompt engineering to UI/UX, React components, and backend integrations
           I deliver endtoend solutions.
        </p>
        <p className="para" style={{ marginTop: 14 }}>
          <strong>Core focus:</strong> Prompt Engineering, React + TypeScript,
          Frontend Architecture, Backend APIs, and Deployment (Vercel).
        </p>
        <ul style={{ marginTop: 16, paddingLeft: 18 }}>
          <li>Fast, responsive UI</li>
          <li>Clean component systems</li>
          <li>Backend integrations (REST)</li>
          <li>Production-ready deployment</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
