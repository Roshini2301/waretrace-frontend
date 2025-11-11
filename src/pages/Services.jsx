// import React from 'react';
// export default function Services(){
//   return (
//     <div style={{ maxWidth: 900, margin: '0 auto' }}>
//       <h2 style={{ color: 'orange' }}>Services</h2>
//       <ul>
//         <li>Realtime scan logging</li>
//         <li>Missing card alerts</li>
//         <li>Card registration</li>
//       </ul>
//     </div>
//   );
// }


/*import React from "react";

export default function Services() {
  const services = [
    {
      title: "RFID-Based Presence Monitoring",
      description:
        "Track personnel and asset movements in real time using RFID tags integrated with IoT sensors.",
    },
    {
      title: "Cloud Data Logging with ThingSpeak",
      description:
        "Seamlessly store and analyze RFID scan data in the cloud with real-time ThingSpeak integration.",
    },
    {
      title: "Real-Time Dashboard Analytics",
      description:
        "Visualize your warehouse operations with a responsive React dashboard for actionable insights.",
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Our Services</h1>
        <p style={styles.subtitle}>
          Innovative IoT-powered tools to make your warehouse smarter and more connected.
        </p>
        <div style={styles.line}></div>

        <div style={styles.servicesList}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceItem}>
              <div style={styles.icon}>🔹</div>
              <div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    padding: "50px 40px",
    maxWidth: "850px",
    width: "100%",
    textAlign: "center",
  },
  title: {
    color: "#0d47a1",
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#1565c0",
    fontSize: "18px",
    fontWeight: "500",
    marginBottom: "25px",
  },
  line: {
    width: "70px",
    height: "3px",
    background: "#1976d2",
    borderRadius: "3px",
    margin: "0 auto 30px",
  },
  servicesList: {
    textAlign: "left",
    marginTop: "20px",
  },
  serviceItem: {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "25px",
    background: "#f5f9ff",
    borderRadius: "10px",
    padding: "15px 20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  icon: {
    fontSize: "24px",
    color: "#1976d2",
    marginRight: "15px",
    marginTop: "3px",
  },
  serviceTitle: {
    color: "#0d47a1",
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "6px",
  },
  serviceDesc: {
    color: "#455a64",
    fontSize: "15px",
    lineHeight: "1.6",
  },
};
*/
import React from "react";

export default function Services() {
  const services = [
    {
      icon: "📡",
      title: "RFID Presence Monitoring",
      description:
        "Monitor assets and personnel in real time using smart RFID sensors and IoT connectivity for full visibility.",
    },
    {
      icon: "☁️",
      title: "Cloud Data Logging",
      description:
        "Seamlessly log and process IoT data in the cloud with secure, scalable storage and instant access.",
    },
    {
      icon: "📊",
      title: "Real-Time Dashboard Analytics",
      description:
        "View warehouse operations instantly with interactive React dashboards and live analytics.",
    },
    {
      icon: "🔒",
      title: "Secure Authentication",
      description:
        "Protect sensitive data with encrypted communication, secure logins, and role-based access control.",
    },
    {
      icon: "⚙️",
      title: "Automation & Alerts",
      description:
        "Automate key tasks and receive intelligent alerts for critical warehouse events and process updates.",
    },
    {
      icon: "🧠",
      title: "AI-Powered Insights",
      description:
        "Use machine learning to forecast demand, prevent bottlenecks, and optimize your entire supply chain.",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Header Section */}
      <section style={styles.header}>
        <h1 style={styles.title}>Our Services</h1>
        <p style={styles.subtitle}>
          Smart, secure, and scalable IoT solutions designed to transform your warehouse efficiency.
        </p>
        <div style={styles.line}></div>
      </section>

      {/* Services Grid */}
      <section style={styles.servicesSection}>
        <div style={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 22px rgba(0, 64, 128, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 64, 128, 0.06)";
              }}
            >
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "#f7faff",
    minHeight: "100vh",
    padding: "80px 10%",
    color: "#1e3a5f",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#114b8b",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#4a607a",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  line: {
    width: "60px",
    height: "3px",
    backgroundColor: "#1976d2",
    borderRadius: "2px",
    margin: "0 auto",
  },
  servicesSection: {
    display: "flex",
    justifyContent: "center",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    width: "100%",
  },
  card: {
    background: "#ffffff",
    borderRadius: "14px",
    padding: "40px 30px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 64, 128, 0.06)",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "44px",
    color: "#1976d2",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "19px",
    fontWeight: "600",
    color: "#114b8b",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "15.5px",
    color: "#4a607a",
    lineHeight: "1.7",
  },
};
