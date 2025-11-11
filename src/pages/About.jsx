// import React from 'react';
// export default function About(){
//   return (
//     <div style={{ maxWidth: 900, margin: '0 auto' }}>
//       <h2 style={{ color: 'orange' }}>About WareTrace</h2>
//       <p>Simple RFID-based system to monitor cards in a warehouse. Uses Node/Express backend and MongoDB, frontend built with React + Vite.</p>
//     </div>
//   );
// }
/*import React from "react";

export default function About() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h2 style={{ color: "orange" }}>About WareTrace</h2>
      <p>
        WareTrace is an IoT-based RFID tracking solution that helps monitor
        assets and personnel inside a warehouse in real-time. It uses an
        ESP-based RFID reader, ThingSpeak cloud for data storage, and a React
        dashboard for visualization.
      </p>
    </div>
  );
}*/
import React from "react";

export default function About() {
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            About <span style={styles.highlight}>WareTrace</span>
          </h1>
          <p style={styles.subtitle}>
            Smart Warehouse Asset & Personnel Tracking — Powered by IoT
          </p>
          <div style={styles.line}></div>
          <p style={styles.text}>
            WareTrace is an innovative IoT-powered platform that transforms
            traditional warehouse management into a connected, intelligent
            ecosystem. With RFID-based tracking, ESP microcontrollers, and
            real-time data analytics, WareTrace empowers industries to achieve
            full operational visibility.
          </p>
        </div>

        <div style={styles.imageWrapper}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/5538/5538672.png"
            alt="IoT Warehouse Illustration"
            style={styles.image}
          />
        </div>
      </section>

      {/* Details Section */}
      <section style={styles.details}>
        <div style={styles.detailsCard}>
          <h2 style={styles.sectionTitle}>Our Mission</h2>
          <p style={styles.text}>
            At <strong>WareTrace</strong>, our mission is to help warehouses
            operate smarter, safer, and more efficiently. We blend cutting-edge
            IoT technology with intelligent data visualization to track every
            movement — ensuring assets, goods, and personnel are always
            accounted for.
          </p>
          <p style={styles.text}>
            By integrating seamlessly with <strong>ThingSpeak Cloud</strong>,
            we offer scalable data storage and real-time analytics — providing
            instant insight into your warehouse operations through our React-based
            dashboard.
          </p>
          <p style={styles.text}>
            Our vision is to revolutionize logistics with intelligent tracking
            solutions that bring transparency, accuracy, and automation to every
            corner of your warehouse.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    color: "#0d47a1",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* HERO SECTION */
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "80px 10%",
    background: "#ffffff",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
  },
  heroContent: {
    flex: "1 1 450px",
    maxWidth: "550px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#0d47a1",
    marginBottom: "10px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#1976d2",
  },
  subtitle: {
    fontSize: "18px",
    color: "#1565c0",
    fontWeight: "500",
    marginBottom: "20px",
  },
  line: {
    width: "70px",
    height: "3px",
    background: "#1976d2",
    borderRadius: "3px",
    margin: "0 0 25px",
  },
  text: {
    fontSize: "16px",
    color: "#37474f",
    lineHeight: "1.7",
    marginBottom: "18px",
  },
  imageWrapper: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    maxWidth: "380px",
    height: "auto",
  },

  /* DETAILS SECTION */
  details: {
    padding: "80px 10%",
    background: "#f5f9ff",
    display: "flex",
    justifyContent: "center",
  },
  detailsCard: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "50px 40px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#0d47a1",
    marginBottom: "20px",
  },
};
