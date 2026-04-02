export default function Projects() {
  return (
    <section className="page">
      <div className="container">
        <div className="section-card content-block">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Selected work focusing on scalable ETL, NLP, and recommender systems.
          </p>

          <div className="projects-grid">
            <article className="project-card">
              <h3 className="section-subtitle" style={{ marginTop: 0 }}>
                ETL Pipeline for Customer Analytics
              </h3>
              <p className="muted" style={{ marginTop: -4 }}>
                Apr 2023 - Jun 2023
              </p>
              <ul className="list">
                <li>
                  End-to-end ETL pipeline to ingest, clean, and transform data
                  from multiple sources.
                </li>
                <li>
                  Used Apache Airflow for workflow automation and AWS S3 for
                  storage.
                </li>
                <li>
                  Optimized SQL queries to improve Power BI dashboard
                  performance by 40%.
                </li>
              </ul>
            </article>

            <article className="project-card">
              <h3 className="section-subtitle" style={{ marginTop: 0 }}>
                Text Emotion Detection
              </h3>
              <p className="muted" style={{ marginTop: -4 }}>
                Jan 2023 - Apr 2023
              </p>
              <ul className="list">
                <li>
                  Text-based emotion detection algorithm using machine learning
                  (85% accuracy).
                </li>
                <li>
                  Applied NLP techniques such as normalization, tokenization, and
                  stemming to improve accuracy by 25%.
                </li>
              </ul>
            </article>

            <article className="project-card">
              <h3 className="section-subtitle" style={{ marginTop: 0 }}>
                Recommendation System using Deep Learning
              </h3>
              <p className="muted" style={{ marginTop: -4 }}>
                Nov 2017 - May 2018
              </p>
              <ul className="list">
                <li>
                  Improved recommender system performance by addressing the
                  cold-start issue.
                </li>
                <li>
                  Compared ML and DL approaches, improving performance metrics by
                  15%.
                </li>
                <li>
                  Leveraged scikit-learn and TensorFlow to build scalable models,
                  handling datasets with over 1 million entries.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

