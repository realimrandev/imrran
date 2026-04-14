import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> training
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Corvit — Web Development</h4>
                <h5>6 months intensive course</h5>
              </div>
              <h3>6M</h3>
            </div>
            <p>
              Training focused on modern frontend foundations (React, UI systems)
              and practical backend integration mindset for production-ready
              deployments.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Keywords</h4>
                <h5>What I optimize for</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Modern UI • React • Fast components • Frontend+Backend • Full‑Stack
              • Practical products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
