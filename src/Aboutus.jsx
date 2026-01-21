import React from "react";

const Aboutus = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Diji Dynamics</h1>

      <p style={styles.text}>
        Welcome to <strong>Diji Dynamics</strong> — a platform dedicated to
        helping developers and beginners build modern web and mobile
        applications with confidence.
      </p>

      <p style={styles.text}>
        At Diji Dynamics, we focus on creating beginner-friendly UI templates,
        tutorials, and practical guides using modern technologies such as
        React Native, React.js, Tailwind CSS, MERN stack, and Expo. Our goal is to
        simplify development concepts and provide clean, reusable design code
        that saves time and improves productivity.
      </p>

      <p style={styles.text}>
        This website showcases React Native UI templates, dashboard designs, and
        step-by-step tutorials that developers can learn from and use in
        real-world projects. All templates and examples are created with a focus
        on clean code, responsive design, and best development practices.
      </p>

      <h2 style={styles.subHeading}>What We Publish</h2>
      <ul style={styles.list}>
        <li>React Native UI examples</li>
        <li>Tailwind CSS design templates</li>
        <li>Frontend and backend tutorials</li>
        <li>Deployment and setup guides</li>
        <li>Beginner-friendly coding resources</li>
      </ul>

      <h2 style={styles.subHeading}>Who This Platform Is For</h2>
      <ul style={styles.list}>
        <li>Students learning app development</li>
        <li>Beginner and intermediate developers</li>
        <li>Freelancers and startup founders</li>
        <li>Anyone interested in modern UI/UX development</li>
      </ul>

      <p style={styles.text}>
        Our mission is to make learning development{" "}
        <strong>simple, practical, and accessible</strong> for everyone.
      </p>

      <p style={styles.text}>
        If you have questions, feedback, or collaboration ideas, feel free to
        contact us. We’re always happy to help and grow together with the
        developer community.
      </p>

      <p style={styles.footerText}>
        Thank you for visiting <strong>Diji Dynamics</strong>.
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.8",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "22px",
    marginTop: "30px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "20px",
  },
  footerText: {
    marginTop: "30px",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Aboutus;
