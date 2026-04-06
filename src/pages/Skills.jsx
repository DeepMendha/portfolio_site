export default function Skills() {
  return (
    <section id="skills" className="page">
      <div className="container">
        <div className="section-card content-block">
          <h2 className="section-title">Skills</h2>

          <details className="skill-accordion" open>
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Programming & Scripting
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>Python</li>
                <li>R</li>
                <li>SQL</li>
                <li>Java</li>
                <li>Bash / shell</li>
              </ul>
            </div>
          </details>

          <details className="skill-accordion">
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Machine Learning & AI
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>
                  scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, Seaborn
                </li>
                <li>NLP (NER, Text Classification, Sentiment Analysis)</li>
                <li>Deep Learning (CNN, DNN)</li>
              </ul>
            </div>
          </details>

          <details className="skill-accordion">
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Data Engineering & Analytics
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>Apache Airflow</li>
                <li>Databricks</li>
                <li>PySpark</li>
                <li>ETL Pipelines</li>
                <li>Data Cleaning & Transformation</li>
                <li>Power BI, Tableau</li>
              </ul>
            </div>
          </details>

          <details className="skill-accordion">
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Cloud & Big Data Platforms
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>
                  Microsoft Azure (Databricks, ML Studio, Storage)
                </li>
                <li>AWS (S3, Lambda)</li>
                <li>Google Cloud Platform (GCP)</li>
                <li>Docker</li>
              </ul>
            </div>
          </details>

          <details className="skill-accordion">
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Databases
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>NoSQL</li>
              </ul>
            </div>
          </details>

          <details className="skill-accordion">
            <summary className="skill-summary">
              <h3 className="section-subtitle" style={{ margin: 0 }}>
                Tools & DevOps
              </h3>
            </summary>
            <div className="skill-content">
              <ul className="list">
                <li>FastAPI, REST APIs</li>
                <li>Git, GitLab, PyTest</li>
                <li>Jira, ServiceNow, VS Code</li>
                <li>Jupyter, Postman</li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}

