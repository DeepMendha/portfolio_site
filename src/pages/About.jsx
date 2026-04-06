import { assetUrl } from '../utils/basePath.js'

export default function About() {

  return (
    <section id="about" className="page">
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



          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Education
          </h3>
          <div className="timeline-container">
            <div className="timeline-item">
              <h4 className="timeline-title">Master's in Data Science (Advanced Data Analytics)</h4>
              <p className="timeline-subtitle">Monash University, Melbourne</p>
              <p className="timeline-date">July 2018 - June 2020</p>
            </div>
            <div className="timeline-item">
              <h4 className="timeline-title">Bachelor of Technology (Information Technology)</h4>
              <p className="timeline-subtitle">Charotar University, India</p>
              <p className="timeline-date">Aug 2014 - May 2018</p>
            </div>
          </div>

          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Experience
          </h3>
          <div className="timeline-container">
            <div className="timeline-item">
              <h4 className="timeline-title">Assistant Professor</h4>
              <p className="timeline-subtitle">CHARUSAT (Charotar University of Science and Technology)</p>
              <p className="timeline-date">July 2025 - Present</p>
              <ul className="list">
                <li>Delivered curriculum aligned with Bloom's Taxonomy ensuring student-centered, outcome-based learning.</li>
                <li>Developed innovative assessment strategies and continuous evaluation techniques.</li>
                <li>Mentored 50+ students in academic projects, research, and career development.</li>
                <li>Organised and delivered workshops on AI tools, hands-on programming, and emerging technologies.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">Data Scientist</h4>
              <p className="timeline-subtitle">Fujitsu (Melbourne)</p>
              <p className="timeline-date">Oct 2023 - Feb 2025</p>
              <ul className="list">
                <li>Designed and deployed end-to-end data ingestion and preprocessing on Azure Databricks for multi-modal datasets (images + metadata), reducing data prep time by 35%.</li>
                <li>Built scalable ML training pipelines (feature engineering to distributed training to validation) using Azure Databricks and distributed PyTorch, improving training throughput and reducing iteration time by 35%.</li>
                <li>Developed and deployed machine learning models for predictive analytics, improving model accuracy by 20%.</li>
                <li>Built and fine-tuned transformer models for NER and text classification; explored multimodal fusion for improved scene/context understanding.</li>
                <li>Collaborated with cross-functional teams to automate analytics workflows.</li>
                <li>Created interactive Power BI dashboards to visualise model insights, enabling data-driven decisions across teams.</li>
                <li>Automated model retraining and validation workflows to support real-time analytics.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">Python Developer</h4>
              <p className="timeline-subtitle">Monash University (Melbourne)</p>
              <p className="timeline-date">Sept 2021 - Sept 2024</p>
              <ul className="list">
                <li>Built and maintained ETL pipelines handling 10M+ records/day, reducing data processing time by 40% using Python, Pandas, and SQL.</li>
                <li>Deployed low-latency model inference endpoints (FastAPI + GPU instances), achieving &lt;150ms p95 latency for real-time predictions; instrumented monitoring and canary rollout for safe production updates.</li>
                <li>Integrated scikit-learn models into back-end workflows, improving model accuracy by 15% and enabling automation of key business insights.</li>
                <li>Wrote unit and integration tests with PyTest, achieving 90% test coverage and reducing production bugs by 30%.</li>
                <li>Managed version control with Git/GitLab, supporting collaborative development and CI/CD workflows that cut release time by 25%.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">Teaching Associate</h4>
              <p className="timeline-subtitle">Monash University (Melbourne)</p>
              <p className="timeline-date">July 2020 - Nov 2024</p>
              <ul className="list">
                <li>Assisted professors in course material development, improving content delivery and student engagement.</li>
                <li>Designed and delivered tailored lessons for 200+ students in collaboration with faculty.</li>
                <li>Provided timely feedback to students, fostering a collaborative learning environment.</li>
              </ul>
            </div>

            <div className="timeline-item">
              <h4 className="timeline-title">Intern Data Scientist</h4>
              <p className="timeline-subtitle">Elenium Automation (Melbourne)</p>
              <p className="timeline-date">June 2022 - Aug 2022</p>
              <ul className="list">
                <li>Assisted in data cleaning using Pandas to standardize property attributes, improving search accuracy by 27%.</li>
                <li>Developed and deployed machine learning models for predictive tools, reducing downtime by 20%.</li>
                <li>Optimized an IoT-based ML model, increasing predictive accuracy by 15% and streamlining deployment by 20%.</li>
              </ul>
            </div>
          </div>

          <div style={{ height: 22 }} />

          <h3 className="section-subtitle" style={{ marginTop: 0 }}>
            Certifications
          </h3>
          <div className="timeline-container">
            <div className="timeline-item" style={{ padding: '16px' }}>
              <ul className="list" style={{ margin: 0, paddingLeft: '20px' }}>
                <li style={{ margin: '4px 0' }}><strong>AI Fundamentals and the Cloud</strong> — Aug 2025</li>
                <li style={{ margin: '4px 0' }}><strong>Machine Learning with Python</strong> — Aug 2025</li>
                <li style={{ margin: '4px 0' }}><strong>DeepLearning.AI TensorFlow Developer</strong> — May 2023</li>
                <li style={{ margin: '4px 0' }}><strong>Introduction to TensorFlow for AI, ML &amp; Deep Learning</strong> — Jul 2020</li>
                <li style={{ margin: '4px 0' }}><strong>Automate the Boring Stuff with Python Programming</strong> — Nov 2019</li>
                <li style={{ margin: '4px 0' }}><strong>Oracle Certified Java Programmer</strong> — Aug 2015</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

