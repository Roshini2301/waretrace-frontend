// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Header(){
//   const navStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     background: 'orange',
//     color: '#fff',
//     padding: '10px 20px',
//     borderRadius: 6
//   };
//   const leftStyle = { display: 'flex', alignItems: 'center', gap: 20 };
//   const rightStyle = { display: 'flex', gap: 12 };
//   const brandStyle = { fontWeight: 'bold', fontSize: 22, color: '#fff' };

//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const doLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     navigate('/');
//   }

//   return (
//     <header style={{ margin: 12 }}>
//       <div style={navStyle}>
//         <div style={leftStyle}>
//           <div style={brandStyle}>waretrace</div>
//           <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
//           <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
//           <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
//         </div>

//         <div style={rightStyle}>
//           {token ? (
//             <>
//               <Link to="/scan" style={{ color: '#fff', textDecoration: 'none' }}>Scan</Link>
//               <Link to="/cards-missing" style={{ color: '#fff', textDecoration: 'none' }}>Cards Missing</Link>
//               <button onClick={doLogout} style={{ background: '#fff', color: 'orange', border: 'none', padding: '6px 10px', borderRadius: 4 }}>Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link>
//               <Link to="/signup" style={{ color: '#fff', textDecoration: 'none' }}>Sign Up</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header;






// import React from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   const navStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     background: "orange",
//     color: "#fff",
//     padding: "10px 20px",
//     borderRadius: 6,
//   };
//   const leftStyle = { display: "flex", alignItems: "center", gap: 20 };
//   const brandStyle = { fontWeight: "bold", fontSize: 22, color: "#fff" };

//   return (
//     <header style={{ margin: 12 }}>
//       <div style={navStyle}>
//         <div style={leftStyle}>
//           <div style={brandStyle}>WareTrace</div>
//           <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
//             Home
//           </Link>
//           <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>
//             About
//           </Link>
//           <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>
//             Services
//           </Link>
//           <Link to="/scan" style={{ color: "#fff", textDecoration: "none" }}>
//             Scan
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const doLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  const styles = {
    header: {
      width: "100%",
      background: "#ffffff",
      borderBottom: "1px solid #e0e0e0",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    },
    nav: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 24px",
      fontFamily: "'Inter', sans-serif",
    },
    brand: {
      fontSize: "22px",
      fontWeight: "700",
      color: "#1565c0",
      cursor: "pointer",
      letterSpacing: "0.5px",
    },
    linkGroup: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },
    link: {
      color: "#0d47a1",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "500",
      transition: "color 0.3s ease, transform 0.2s ease",
    },
    button: {
      background: "#1976d2",
      color: "#fff",
      border: "none",
      padding: "8px 18px",
      borderRadius: "6px",
      fontWeight: "600",
      fontSize: "15px",
      cursor: "pointer",
      transition: "background 0.3s, transform 0.2s",
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        {/* Left Section */}
        <div style={styles.linkGroup}>
          <div
            style={styles.brand}
            onClick={() => navigate("/")}
          >
            WareTrace
          </div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>

          {isLoggedIn && <Link to="/scan" style={styles.link}>Scan</Link>}
        </div>

        {/* Right Section */}
        <div style={styles.linkGroup}>
          {isLoggedIn ? (
            <button
              onClick={doLogout}
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#0d47a1")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "#1976d2")
              }
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <button
                onClick={() => navigate("/signup")}
                style={{
                  ...styles.button,
                  background: "#ffffff",
                  color: "#1976d2",
                  border: "2px solid #1976d2",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#e3f2fd";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
