export default function Projects() {
  return (
    <section id="projects" className="page">
      <div className="container">
        <div className="section-card content-block">
          <h2 className="section-title">Projects</h2>

          <div className="timeline-container">
            <div className="timeline-item">
              <h4 className="timeline-title">
                ETL Pipeline for Customer Analytics
              </h4>
              <p className="timeline-date">Apr 2023 - Jun 2023</p>
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
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">
                Text Emotion Detection
              </h4>
              <p className="timeline-date">Jan 2023 - Apr 2023</p>
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
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">
                Recommendation System using Deep Learning
              </h4>
              <p className="timeline-date">Nov 2017 - May 2018</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

