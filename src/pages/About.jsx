import { assetUrl } from '../utils/basePath.js'

export default function About() {

  return (
    <section className="page">
      <div className="container">
        <div className="section-card content-block">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Data Scientist and Software Engineer with 4+ years of experience
            developing end-to-end data and machine learning solutions. Skilled
            in Python, SQL, and cloud technologies (Azure, AWS, Databricks),
            with hands-on expertise in data pipelines, API development, and
            model deployment. Experienced in building scalable ETL workflows,
            automating analytics, and deploying ML models for real-time
            insights. Passionate about applying data-driven and AI-powered
            solutions to optimise business processes and improve
            decision-making.
          </p>

          <div className="cta-row">
            <a
              className="btn btn-primary"
              href={assetUrl('assets/resume.pdf')}
              download
            >
              Download Resume (PDF)
            </a>
          </div>

          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Education
          </h3>
          <ul className="list">
            <li>
              Master's in Data Science (Advanced Data Analytics) — Monash
              University, Melbourne (July 2018 - June 2020)
            </li>
            <li>
              Bachelor of Technology (Information Technology) — Charotar
              University, India (Aug 2014 - May 2018)
            </li>
          </ul>

          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Experience
          </h3>
          <ul className="list">
            <li>
              <strong>Assistant Professor</strong> — CHARUSAT (Charotar
              University of Science and Technology), July 2025 - Present
              <ul className="list nested-list">
                <li>
                  Delivered curriculum aligned with Bloom's Taxonomy ensuring
                  student-centered, outcome-based learning.
                </li>
                <li>
                  Developed innovative assessment strategies and continuous
                  evaluation techniques.
                </li>
                <li>
                  Mentored 50+ students in academic projects, research, and
                  career development.
                </li>
                <li>
                  Organised and delivered workshops on AI tools, hands-on
                  programming, and emerging technologies.
                </li>
              </ul>
            </li>

            <li>
              <strong>Data Scientist</strong> — Fujitsu (Melbourne), Oct 2023
              - Feb 2025
              <ul className="list nested-list">
                <li>
                  Designed and deployed end-to-end data ingestion and
                  preprocessing on Azure Databricks for multi-modal datasets
                  (images + metadata), reducing data prep time by 35%.
                </li>
                <li>
                  Built scalable ML training pipelines (feature engineering to
                  distributed training to validation) using Azure Databricks and
                  distributed PyTorch, improving training throughput and reducing
                  iteration time by 35%.
                </li>
                <li>
                  Developed and deployed machine learning models for predictive
                  analytics, improving model accuracy by 20%.
                </li>
                <li>
                  Built and fine-tuned transformer models for NER and text
                  classification; explored multimodal fusion for improved
                  scene/context understanding.
                </li>
                <li>Collaborated with cross-functional teams to automate analytics workflows.</li>
                <li>
                  Created interactive Power BI dashboards to visualise model
                  insights, enabling data-driven decisions across teams.
                </li>
                <li>
                  Automated model retraining and validation workflows to support
                  real-time analytics.
                </li>
              </ul>
            </li>

            <li>
              <strong>Python Developer</strong> — Monash University (Melbourne),
              Sept 2021 - Sept 2024
              <ul className="list nested-list">
                <li>
                  Built and maintained ETL pipelines handling 10M+ records/day,
                  reducing data processing time by 40% using Python, Pandas, and
                  SQL.
                </li>
                <li>
                  Deployed low-latency model inference endpoints (FastAPI + GPU
                  instances), achieving &lt;150ms p95 latency for real-time
                  predictions; instrumented monitoring and canary rollout for safe
                  production updates.
                </li>
                <li>
                  Integrated scikit-learn models into back-end workflows,
                  improving model accuracy by 15% and enabling automation of key
                  business insights.
                </li>
                <li>
                  Wrote unit and integration tests with PyTest, achieving 90%
                  test coverage and reducing production bugs by 30%.
                </li>
                <li>
                  Managed version control with Git/GitLab, supporting
                  collaborative development and CI/CD workflows that cut release
                  time by 25%.
                </li>
              </ul>
            </li>

            <li>
              <strong>Teaching Associate</strong> — Monash University (Melbourne),
              July 2020 - Nov 2024
              <ul className="list nested-list">
                <li>
                  Assisted professors in course material development, improving
                  content delivery and student engagement.
                </li>
                <li>
                  Designed and delivered tailored lessons for 200+ students in
                  collaboration with faculty.
                </li>
                <li>
                  Provided timely feedback to students, fostering a collaborative
                  learning environment.
                </li>
              </ul>
            </li>

            <li>
              <strong>Intern Data Scientist</strong> — Elenium Automation
              (Melbourne), June 2022 - Aug 2022
              <ul className="list nested-list">
                <li>
                  Assisted in data cleaning using Pandas to standardize property
                  attributes, improving search accuracy by 27%.
                </li>
                <li>
                  Developed and deployed machine learning models for predictive
                  tools, reducing downtime by 20%.
                </li>
                <li>
                  Optimized an IoT-based ML model, increasing predictive accuracy
                  by 15% and streamlining deployment by 20%.
                </li>
              </ul>
            </li>
          </ul>

          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Certifications
          </h3>
          <ul className="list">
            <li>AI Fundamentals and the Cloud - Aug 2025</li>
            <li>Machine Learning with Python - Aug 2025</li>
            <li>DeepLearning.AI TensorFlow Developer - May 2023</li>
            <li>
              Introduction to TensorFlow for AI, ML &amp; Deep Learning - Jul
              2020
            </li>
            <li>
              Automate the Boring Stuff with Python Programming - Nov 2019
            </li>
            <li>Oracle Certified Java Programmer - Aug 2015</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

