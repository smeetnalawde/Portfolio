export const resumeData = {
  name: "Smeet Nalawade",
  contact: {
    phone: "201-464-0721",
    email: "smeet.n@itjobinbox.com",
    github: "github.com/smeetnalawde",
    linkedin: "linkedin.com/in/smeetnalawde/",
  },
  title: "Resume",
  subtitle: "Machine Learning Engineer · Full Stack Data Scientist",
  summary: "AI/ML Engineer with 2 years of experience designing and deploying scalable machine learning, Generative AI and cloud-based AI solutions across enterprise environments. Specialized in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), predictive analytics, MLOps and real-time inference architectures using Python, AWS, TensorFlow, PyTorch and MLflow. Proven track record of improving model accuracy, accelerating deployment cycles, optimizing operational efficiency and delivering measurable business impact through data-driven AI initiatives. Adept at building production-grade ML systems, automating model lifecycle management and transforming complex data into actionable insights.",
  education: [
    {
      degree: "M.S. in Data Science (Finance, Data Engineering, Business Analytics)",
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      date: "Expected May 2026", // Corrected per source
      highlights: [
        "Specialization in mathematical foundations for ML and complex data structures.",
      ],
    },
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning", // Corrected per source [cite: 53]
      school: "D.Y. Patil College of Technology", // Corrected per source [cite: 51]
      location: "Kolhapur, India",
      date: "June 2024", // Corrected per source [cite: 54]
      highlights: [
        "Core focus on AI-driven automation, Computer Vision, and Reinforcement Learning.",
      ],
    },
  ],
  skills: [
    {
      label: "Machine Learning & AI",
      items: [
        "Supervised Learning",
        "Predictive Modeling",
        "Feature Engineering",
        "Classification",
        "Regression",
        "Clustering",
        "Recommendation Systems",
        "Time Series Forecasting",
        "Anomaly Detection",
        "Model Evaluation",
        "Hyperparameter Tuning",
      ],
    },
    {
      label: "Generative AI & NLP",
      items: [
        "Large Language Models (LLMs)",
        "Prompt Engineering",
        "Retrieval-Augmented Generation (RAG)",
        "Text Embeddings",
        "Semantic Search",
        "NLP Pipelines",
        "Transformer Architectures",
        "Fine-Tuning",
        "AI Chatbots",
      ],
    },
    {
      label: "MLOps & Model Deployment",
      items: [
        "MLflow",
        "Model Monitoring",
        "Drift Detection",
        "Experiment Tracking",
        "CI/CD for ML Pipelines",
        "Real-Time Inference Pipelines",
        "Automated Model Retraining",
        "Production Model Deployment",
      ],
    },
    {
      label: "Programming & AI Frameworks",
      items: [
        "Python",
        "SQL",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "Pandas",
        "NumPy",
        "XGBoost",
        "Hugging Face Transformers",
      ],
    },
    {
      label: "Data Engineering & Processing",
      items: [
        "ETL Pipelines",
        "AWS Glue",
        "Amazon Kinesis",
        "Data Pipeline Automation",
        "Feature Data Processing",
      ],
    },
    {
      label: "Cloud & AI Infrastructure",
      items: [
        "AWS SageMaker",
        "AWS Lambda",
        "EC2",
        "S3",
        "API Gateway",
        "Serverless AI Architecture",
        "Cloud-Based Model Serving",
      ],
    },
    {
      label: "Monitoring & Visualization",
      items: [
        "Prometheus",
        "Grafana",
        "AWS CloudWatch",
        "AWS QuickSight",
        "KPI Reporting",
        "Data Visualization",
      ],
    },
  ],
  experience: [
    {
      role: "AI/ML Engineer",
      company: "ServiceNow",
      location: "NJ",
      date: "Feb 2026 – Current",
      bullets: [
        "Architected a Retrieval-Augmented Generation (RAG) platform leveraging LLMs, text embeddings and semantic search, improving enterprise knowledge retrieval accuracy by 42% and reducing response latency by 35%.",
        "Engineered scalable machine learning pipelines using AWS SageMaker, MLflow, and automated retraining workflows, accelerating model deployment cycles by 60% while maintaining 99.5% service availability.",
        "Optimized predictive analytics models through advanced feature engineering, hyperparameter tuning and ensemble learning techniques, increasing forecasting accuracy by 28% across business-critical datasets.",
        "Developed transformer-based NLP solutions using Hugging Face and PyTorch, enabling intelligent chatbot automation that reduced manual support workload by 50% and improved user satisfaction scores by 32%.",
        "Implemented real-time inference architecture with AWS Lambda, API Gateway and Kinesis streams, supporting 3M+ monthly transactions while lowering infrastructure costs by 25%.",
        "Spearheaded model monitoring and drift detection frameworks using Prometheus, Grafana and CloudWatch, decreasing production model performance degradation incidents by 45% and improving operational reliability.",
      ],
    },
    {
      role: "ML Engineer",
      company: "Infinite Infolab",
      location: "India",
      date: "Jan 2023 – Jul 2024",
      bullets: [
        "Built classification and regression models using Scikit-learn, XGBoost and TensorFlow, improving prediction accuracy by 30% and enabling data-driven business decisions across multiple client engagements.",
        "Designed end-to-end ETL and feature processing pipelines utilizing Python, SQL, AWS Glue and Pandas, reducing data preparation effort by 55% and increasing processing throughput by 3x.",
        "Automated anomaly detection systems for operational datasets, identifying critical incidents 40% faster and reducing unplanned business disruptions by 22%.",
        "Enhanced recommendation engine performance through clustering algorithms and behavioral analytics, increasing user engagement metrics by 27% and boosting conversion rates by 18%.",
        "Integrated cloud-native ML deployment workflows on AWS infrastructure, including EC2 and S3, shortening model release timelines by 50% and improving scalability for growing workloads.",
        "Validated model performance using rigorous evaluation frameworks, cross-validation techniques and experiment tracking, improving production model reliability by 35% and reducing false positives by 24%.",
        "Collaborated with cross-functional stakeholders to deliver AI-driven forecasting solutions, generating actionable insights that improved planning efficiency by 33% and reduced reporting turnaround time by 65%.",
      ],
    },
  ],
  projects: [
    {
      name: "Advanced Portfolio Intelligence System",
      stack: "Python · MongoDB · LLM · RAG · Financial NLP",
      description: "Developed an end-to-end semantic search engine that transforms unstructured financial data into investment-grade intelligence for the Russell 1000. Architected a self-healing ETL pipeline using MongoDB and LLM-powered Map-Reduce summarization to identify thematic investment baskets with a Mean Reciprocal Rank (MRR@10) of 0.4347.",
      tags: ["Python", "LLMs", "Vector Databases", "MongoDB", "Semantic Search", "ETL Pipelines", "Quantitative Finance", "Financial NLP"],
      image: "/projects/Advance-Portfolio-Int.png",
      link: "https://github.com/smeetnalawde/Advance-Portfolio-Intelligence-System",
      bullets: [
        "Developed a semantic search engine using LLM-powered Map-Reduce summarization and hybrid vector retrieval to build thematic investment baskets.",
        "Engineered a self-healing ETL pipeline in MongoDB that outperformed market baselines in 12-month backtesting.",
      ],
    },
    
    {
      name: "Quantitative Stock Forecasting System",
      stack: "Python · LSTM · XGBoost · RL · APIs",
      description: "Architected a multi-modal predictive system to forecast 5-day returns and generate trade signals for high-cap tickers (AAPL, TSLA, NVDA). Built a sophisticated ETL pipeline in PostgreSQL integrating technical indicators, GNews sentiment analysis, and FRED macro-economic data, utilizing XGBoost and LSTM models to optimize risk-adjusted alpha.",
      tags: ["Python", "PostgreSQL", "XGBoost", "Time Series", "Tableau"],
      image: "/projects/jakub-zerdzicki-lnuOh9vs8v0-unsplash.jpg",
      link: "https://github.com/smeetnalawde/Quantitative-Stock-Forecasting-System",
      bullets: [
       "Architected an end-to-end ML pipeline integrating 5+ APIs with LSTM and XGBoost models to process millions of financial and sentiment records.",
        "Enhanced forecasting with RL agents and LLM simulations, boosting model adaptability by 20% across 500+ market scenarios.",
        "Developed financial forecasting MVPs achieving 15–18% improvements in forecast accuracy.",
      ],
    },
    {
      name: "Brain Tumor Segmentation (BraTS2020)",
      stack: "PyTorch · 3D U-Net · Medical Imaging · Preprocessing",
      description: "Built a 3D U-Net pipeline on 1TB+ MRI data with specialized preprocessing and augmentation for multi-modal tumor segmentation.",
      tags: ["PyTorch", "3D U-Net", "Medical Imaging", "Preprocessing"],
      image: "/projects/lonely-blue-n37BD6BFbRQ-unsplash.jpg",
      link: "https://github.com/smeetnalawde",
      bullets: [
        "Built a 3D U-Net pipeline on 1TB+ MRI data with specialized preprocessing and augmentation for multi-modal tumor segmentation.",
      ],
    },
    {
      name: "Emergency Response Optimization",
      stack: "SQL · Python · Predictive Analytics · Risk Management",
      description: "Developed a predictive framework using the 911 NYPD dataset to optimize emergency resource allocation by forecasting high-resolution demand patterns. Leveraged SQL to query 5M+ records and built statistical models to detect spatiotemporal anomalies, successfully improving potential response times by 15% through data-driven patrol strategies.",
      tags: ["Python", "SQL", "Predictive Modeling", "Time Series", "Geospatial Analysis"],
      image: "/projects/campbell-jensen-b6hJHLGpPiI-unsplash.jpg",
      link: "https://github.com/smeetnalawde/Resource-Allocation-Optimization-and-Predictive-Analytics-for-Crime-and-Accidents-based-on-911-NYPD-",
      bullets: [
        "Queried 5M+ records with SQL to model risk-management and incident response resource reallocation.",
        "Optimized deployment strategies to improve emergency response times by 15%.",
      ],
    },
    {
      name: "Computer Vision for Smart Agriculture",
      stack: "TensorFlow · OpenCV · AWS EC2 · Docker",
      description: "Implemented a CNN image classification pipeline to grade 320k+ labeled images with 95.2% accuracy. Deployed a Flask REST API on AWS EC2 to automate real-time fruit grading, reducing interference latency by 40%.",
      tags: ["TensorFlow", "OpenCV", "AWS EC2", "Docker"],
      image: "/projects/luke-chesser-JKUTrJ4vK00-unsplash.jpg",
      link: "https://github.com/smeetnalawde",
      bullets: [
        "Implemented a CNN image classification pipeline to grade 320k+ labeled images with 95.2% accuracy.",
        "Deployed a Flask REST API on AWS EC2 to automate real-time fruit grading, reducing interference latency by 40%.",
      ],
    },
  ],
  interests: [
    {
      label: "Cooking",
      text: "Enjoys cooking a wide range of cuisines and dishes — not limited to any one cuisine.",
    },
    {
      label: "Fitness & Discipline",
      text: "Maintains a disciplined routine with early-morning deep-work blocks, citing Cristiano Ronaldo (CR7) and Virat Kohli as models of the consistency and elite-performance mindset he applies to his work.",
    },
    {
      label: "Entrepreneurial Curiosity",
      text: "Thinks about products and businesses beyond engineering — for example, exploring an idea to import GI-tagged Kolhapuri chappals.",
    },
    {
      label: "Standout Project Moment",
      text: "The \"aha\" of the Multi-Agent Governance System was proving a governance layer could block a rogue agent's unauthorized actions in real time, with a full audit trail, while the agent actively tried to break it.",
    },
  ],
};