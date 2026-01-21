import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Privacy Policy for Diji Dynamics</h1>
      <p style={styles.text}>
        At <strong>Diji Dynamics</strong> (https://dijidynamics.in), the privacy
        of our visitors is extremely important to us. This Privacy Policy
        document outlines the types of information that are collected and
        recorded by Diji Dynamics and how we use it.
      </p>

      <h2 style={styles.subHeading}>Information We Collect</h2>
      <p style={styles.text}>
        We do not collect personal information unless you voluntarily provide it
        by contacting us through email or a contact form. Any information you
        provide is used only to respond to your inquiries.
      </p>

      <h2 style={styles.subHeading}>Log Files</h2>
      <p style={styles.text}>
        Diji Dynamics follows a standard procedure of using log files. These
        files log visitors when they visit websites. The information collected
        may include IP addresses, browser type, Internet Service Provider (ISP),
        date and time stamp, referring/exit pages, and number of clicks. This
        information is not linked to any personally identifiable data.
      </p>

      <h2 style={styles.subHeading}>Cookies and Web Beacons</h2>
      <p style={styles.text}>
        Diji Dynamics uses cookies to store information about visitors’
        preferences and to optimize user experience by customizing our web page
        content based on visitors’ browser type or other information.
      </p>

      <h2 style={styles.subHeading}>Google AdSense</h2>
      <p style={styles.text}>
        Google is a third-party vendor on this site. Google uses cookies, known
        as DART cookies, to serve ads to users based on their visit to this and
        other websites.
      </p>
      <p style={styles.text}>
        Users may opt out of the use of DART cookies by visiting Google’s Ad and
        Content Network Privacy Policy.
      </p>

      <h2 style={styles.subHeading}>Third-Party Privacy Policies</h2>
      <p style={styles.text}>
        Diji Dynamics’ Privacy Policy does not apply to other advertisers or
        websites. We advise you to consult the respective Privacy Policies of
        third-party ad servers for more detailed information about their
        practices and instructions on how to opt out of certain options.
      </p>

      <h2 style={styles.subHeading}>Children’s Information</h2>
      <p style={styles.text}>
        Diji Dynamics does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you believe that your
        child provided this kind of information on our website, please contact
        us immediately and we will do our best to promptly remove such
        information from our records.
      </p>

      <h2 style={styles.subHeading}>Consent</h2>
      <p style={styles.text}>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <p style={styles.updated}>
        <strong>Last updated:</strong> January 2026
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    lineHeight: "1.7",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "22px",
    marginTop: "25px",
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginTop: "10px",
  },
  updated: {
    marginTop: "30px",
    fontSize: "14px",
    color: "#666",
  },
};

export default PrivacyPolicy;
