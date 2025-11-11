// // import React from 'react';

// // export default function Home(){
// //   const card = {
// //     background: '#fff',
// //     borderRadius: 8,
// //     padding: 20,
// //     boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
// //   };
// //   return (
// //     <div style={{ maxWidth: 900, margin: '0 auto' }}>
// //       <div style={card}>
// //         <h2 style={{ color: 'orange' }}>Welcome to WareTrace</h2>
// //         <p>Warehouse RFID tracking — scan tags, track present cards and alert on missing ones.</p>
// //       </div>
// //     </div>
// //   );
// // }
// import React from 'react';

// export default function Home() {
//   const styles = {
//     heroContainer: {
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       backgroundImage: `url('/images/image.png')`, // replace with your image path
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       color: '#fff',
//       textAlign: 'center',
//       overflow: 'hidden',
//       marginTop: "0px", 
//     },
//     overlay: {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)', // dimmed overlay for text clarity
//       backdropFilter: 'blur(2px)',
//       zIndex: 1,
//     },
//     content: {
//       position: 'relative',
//       zIndex: 2,
//       maxWidth: '800px',
//       padding: '2rem',
//     },
//     title: {
//       fontSize: '3rem',
//       fontWeight: 'bold',
//       color: '#ff7e5f',
//       marginBottom: '1.2rem',
//     },
//     text: {
//       fontSize: '1.2rem',
//       lineHeight: 1.6,
//       color: '#fff',
//     },
//     buttonContainer: {
//       marginTop: '2rem',
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '1rem',
//       flexWrap: 'wrap',
//     },
//     button: {
//       backgroundColor: '#ff7e5f',
//       border: 'none',
//       borderRadius: '8px',
//       padding: '0.8rem 1.6rem',
//       fontSize: '1rem',
//       color: '#fff',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//     },
//   };

//   return (
//     <section style={styles.heroContainer}>
//       <div style={styles.overlay}></div>

//       <div style={styles.content}>
//         <h1 style={styles.title}>About Us</h1>
//         <p style={styles.text}>
//           WareTrace is a leading logistics and warehousing solution provider,
//           dedicated to ensuring fast, safe, and reliable delivery. We leverage
//           advanced technology and proven processes to optimize your supply chain.
//         </p>

//         <div style={styles.buttonContainer}>
//           <button style={styles.button}>Learn More</button>
//           <button style={{ ...styles.button, backgroundColor: '#ffa57a' }}>
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>
            Revolutionizing <span style={styles.highlight}>Warehouse Tracking</span>
          </h1>
          <p style={styles.subtitle}>
            Transform your warehouse operations with IoT-powered RFID tracking,
            real-time analytics, and cloud-based insights — built for
            efficiency and precision.
          </p>

          <div style={styles.buttonGroup}>
            <button
              style={styles.primaryButton}
              onClick={() => navigate("/services")}
            >
              Explore Solutions
            </button>
            <button
              style={styles.secondaryButton}
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </div>

        <div style={styles.heroImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1642/1642125.png"
            alt="Warehouse Illustration"
            style={styles.image}
          />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section style={styles.features}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Key Capabilities</h2>
          <div style={styles.line}></div>

          <div style={styles.featuresGrid}>
            {[
              {
                icon: "📡",
                title: "RFID-Based Tracking",
                text: "Monitor personnel and assets with precision using advanced RFID sensors.",
              },
              {
                icon: "☁️",
                title: "Cloud Integration",
                text: "Seamless connectivity with ThingSpeak Cloud for real-time analytics.",
              },
              {
                icon: "📊",
                title: "Smart Dashboards",
                text: "Interactive React dashboards for live monitoring and insights.",
              },
              {
                icon: "🔒",
                title: "Data Security",
                text: "Enterprise-grade encryption and authentication to protect your data.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 22px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.08)";
                }}
              >
                <div style={styles.icon}>{feature.icon}</div>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardText}>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
    minHeight: "100vh",
    color: "#0d47a1",
    overflowX: "hidden",
  },

  /* HERO SECTION */
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    background: "#ffffff",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    borderRadius: "16px",
    padding: "80px 10%",
    margin: "60px auto 40px",
    maxWidth: "1100px",
  },
  heroContent: {
    flex: "1 1 450px",
    maxWidth: "550px",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    color: "#0d47a1",
    marginBottom: "15px",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#1976d2",
  },
  subtitle: {
    fontSize: "17px",
    color: "#455a64",
    lineHeight: "1.7",
    marginBottom: "30px",
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },
  primaryButton: {
    background: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  secondaryButton: {
    background: "#fff",
    color: "#1976d2",
    border: "2px solid #1976d2",
    padding: "10px 24px",
    borderRadius: "8px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  heroImage: {
    flex: "1 1 400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "85%",
    maxWidth: "400px",
    height: "auto",
  },

  /* FEATURES SECTION */
  features: {
    background: "#f5f9ff",
    padding: "80px 10%",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    padding: "50px 40px",
    maxWidth: "1100px",
    width: "100%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#0d47a1",
  },
  line: {
    width: "70px",
    height: "3px",
    background: "#1976d2",
    borderRadius: "3px",
    margin: "0 auto 40px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  featureCard: {
    background: "#f9fbff",
    borderRadius: "14px",
    padding: "30px 20px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  },
  icon: {
    fontSize: "42px",
    marginBottom: "10px",
    color: "#1976d2",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#0d47a1",
  },
  cardText: {
    fontSize: "15px",
    color: "#455a64",
    lineHeight: "1.6",
  },
};

