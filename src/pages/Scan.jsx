// // import React, { useEffect, useState, useRef } from 'react';
// // import { getStatus } from '../api';

// // export default function Scan(){
// //   const [status, setStatus] = useState({ totalCards: 0, totalPresent: 0, presentCards: [] });
// //   const [loading, setLoading] = useState(true);
// //   const intervalRef = useRef(null);

// //   const fetchStatus = async () => {
// //     try {
// //       const res = await getStatus();
// //       if (res && !res.message) {
// //         setStatus(res);
// //       } else {
// //         // error
// //       }
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }

// //   useEffect(() => {
// //     fetchStatus();
// //     intervalRef.current = setInterval(fetchStatus, 3000);
// //     return () => clearInterval(intervalRef.current);
// //   }, []);

// //   return (
// //     <div style={{ maxWidth: 1000, margin: '0 auto' }}>
// //       <h2 style={{ color: 'orange' }}>Scan Status</h2>
// //       {loading ? <div>Loading...</div> : (
// //         <>
// //           <div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
// //             <div style={{ fontSize: 18 }}>Total Registered Cards: <strong>{status.totalCards}</strong></div>
// //             <div style={{ fontSize: 18 }}>Currently Present: <strong>{status.totalPresent}</strong></div>
// //           </div>

// //           <div style={{ marginTop: 16 }}>
// //             <h3>Present Cards</h3>
// //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
// //               {status.presentCards.map(c => (
// //                 <div key={c._id} style={{ minWidth: 200, padding: 10, borderRadius: 6, background: '#fff' }}>
// //                   <div><strong>{c.tagId}</strong></div>
// //                   {c.label && <div>{c.label}</div>}
// //                   <div style={{ fontSize: 12, color: '#666' }}>Last seen: {new Date(c.lastSeen).toLocaleString()}</div>
// //                 </div>
// //               ))}
// //               {status.presentCards.length === 0 && <div>No cards present</div>}
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }



// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// export default function Scan() {
//   const [status, setStatus] = useState({
//     totalCards: 0,
//     totalPresent: 0,
//     presentCards: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const intervalRef = useRef(null);

//   // 🔑 ThingSpeak configuration
//   const channelID = "3158040";
//   const readAPIKey = "XOVSFC9NC4IV78B0";

//   // ✅ Fetch latest warehouse data from ThingSpeak
//   const fetchStatus = async () => {
//     try {
//       const url = "https://api.thingspeak.com/channels/3158040/feeds.json?api_key=XOVSFC9NC4IV78B0&results=20";
//       const res = await axios.get(url);
//       const feeds = res.data.feeds;

//       if (feeds && feeds.length > 0) {
//         const latest = feeds[feeds.length - 1];
//         const presentCount = parseInt(latest.field3 || "0");

//         // Keep track of latest action per card
//         const cardMap = {};
//         feeds.forEach((f) => {
//           if (f.field1) {
//             cardMap[f.field1] = {
//               tagId: f.field1,
//               action:
//                 f.field2 === "1"
//                   ? "IN"
//                   : f.field2 === "0"
//                   ? "OUT"
//                   : f.field2 || "N/A",
//               lastSeen: f.created_at,
//             };
//           }
//         });

//         // Filter cards that are currently "IN"
//         const presentCards = Object.values(cardMap)
//           .filter((c) => c.action === "IN")
//           .reverse();

//         setStatus({
//           totalCards: Object.keys(cardMap).length,
//           totalPresent: presentCount,
//           presentCards,
//         });
//       }
//     } catch (err) {
//       console.error("❌ Error fetching ThingSpeak data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔁 Refresh every 5 seconds
//   useEffect(() => {
//     fetchStatus();
//     intervalRef.current = setInterval(fetchStatus, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div style={{ maxWidth: 1000, margin: "0 auto", padding: "20px" }}>
//       <h2 style={{ color: "orange" }}>📡 Warehouse Scan Status</h2>
//       {loading ? (
//         <div>Loading latest data...</div>
//       ) : (
//         <>
//           <div
//             style={{
//               background: "#fff",
//               padding: 16,
//               borderRadius: 8,
//               boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//               marginBottom: 20,
//             }}
//           >
//             <div style={{ fontSize: 18 }}>
//               Total Registered Cards:{" "}
//               <strong>{status.totalCards}</strong>
//             </div>
//             <div style={{ fontSize: 18 }}>
//               Currently Inside:{" "}
//               <strong>{status.totalPresent}</strong>
//             </div>
//           </div>

//           <h3>🟢 Cards Currently Inside</h3>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 10,
//               marginTop: 10,
//             }}
//           >
//             {status.presentCards.length > 0 ? (
//               status.presentCards.map((c) => (
//                 <div
//                   key={c.tagId}
//                   style={{
//                     minWidth: 200,
//                     padding: 10,
//                     borderRadius: 6,
//                     background: "#fff",
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   <div>
//                     <strong>{c.tagId}</strong>
//                   </div>
//                   <div
//                     style={{
//                       color: c.action === "IN" ? "green" : "red",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {c.action}
//                   </div>
//                   <div style={{ fontSize: 12, color: "#666" }}>
//                     Last seen: {new Date(c.lastSeen).toLocaleString()}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No cards currently inside.</div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }





// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// export default function Scan() {
//   const [status, setStatus] = useState({
//     totalCards: 0,
//     totalPresent: 0,
//     presentCards: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const intervalRef = useRef(null);

//   // 🔑 ThingSpeak configuration
//   const channelID = "3158040";
//   const readAPIKey = "XOVSFC9NC4IV78B0";

//   // ✅ Fetch latest warehouse data from ThingSpeak
//   const fetchStatus = async () => {
//     try {
//       const url = `https://api.thingspeak.com/channels/3158040/feeds.json?api_key=XOVSFC9NC4IV78B0&results=20`;
//       const res = await axios.get(url);
//       const feeds = res.data.feeds;

//       if (feeds && feeds.length > 0) {
//         const latest = feeds[feeds.length - 1];
//         const presentCount = parseInt(latest.field3 || "0");

//         // Keep track of latest action per card
//         const cardMap = {};
//         feeds.forEach((f) => {
//           if (f.field1) {
//             cardMap[f.field1] = {
//               tagId: f.field1,
//               action:
//                 f.field2 === "1"
//                   ? "IN"
//                   : f.field2 === "0"
//                   ? "OUT"
//                   : f.field2 || "N/A",
//               lastSeen: f.created_at,
//             };
//           }
//         });

//         // Filter cards that are currently "IN"
//         const presentCards = Object.values(cardMap)
//           .filter((c) => c.action === "IN")
//           .reverse();

//         setStatus({
//           totalCards: Object.keys(cardMap).length,
//           totalPresent: presentCount,
//           presentCards,
//         });
//       }
//     } catch (err) {
//       console.error("❌ Error fetching ThingSpeak data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStatus();
//     intervalRef.current = setInterval(fetchStatus, 5000);
//     return () => clearInterval(intervalRef.current);
//   }, []);

//   return (
//     <div style={{ maxWidth: 1000, margin: "0 auto", padding: "20px" }}>
//       <h2 style={{ color: "orange" }}>📡 Warehouse Scan Status</h2>
//       {loading ? (
//         <div>Loading latest data...</div>
//       ) : (
//         <>
//           <div
//             style={{
//               background: "#fff",
//               padding: 16,
//               borderRadius: 8,
//               boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//               marginBottom: 20,
//             }}
//           >
//             <div style={{ fontSize: 18 }}>
//               Total Registered Cards: <strong>{status.totalCards}</strong>
//             </div>
//             <div style={{ fontSize: 18 }}>
//               Currently Inside: <strong>{status.totalPresent}</strong>
//             </div>
//           </div>

//           <h3>🟢 Cards Currently Inside</h3>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: 10,
//               marginTop: 10,
//             }}
//           >
//             {status.presentCards.length > 0 ? (
//               status.presentCards.map((c) => (
//                 <div
//                   key={c.tagId}
//                   style={{
//                     minWidth: 200,
//                     padding: 10,
//                     borderRadius: 6,
//                     background: "#fff",
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
//                   }}
//                 >
//                   <div>
//                     <strong>{c.tagId}</strong>
//                   </div>
//                   <div
//                     style={{
//                       color: c.action === "IN" ? "green" : "red",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     {c.action}
//                   </div>
//                   <div style={{ fontSize: 12, color: "#666" }}>
//                     Last seen: {new Date(c.lastSeen).toLocaleString()}
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>No cards currently inside.</div>
//             )}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }



/*

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Scan() {
  const [status, setStatus] = useState({
    totalCards: 0,
    totalPresent: 0,
    missingCount: 0,
    presentCards: [],
    missingCards: [],
  });
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  // 🔑 ThingSpeak configuration
  const channelID = "3158040";
  const readAPIKey = "XOVSFC9NC4IV78B0";

  // 🧠 Missing threshold in ms (same as Arduino)
  const MISSING_THRESHOLD = 60000; // 1 minute

  // ✅ Fetch latest warehouse data from ThingSpeak
  const fetchStatus = async () => {
    try {
      const url = `https://api.thingspeak.com/channels/3158040/feeds.json?api_key=XOVSFC9NC4IV78B0&results=20`;
      const res = await axios.get(url);
      const feeds = res.data.feeds;

      if (feeds && feeds.length > 0) {
        const latest = feeds[feeds.length - 1];

        const presentCount = parseInt(latest.field3 || "0");
        const missingCount = parseInt(latest.field4 || "0");

        const cardMap = {};
        feeds.forEach((f) => {
          if (f.field1) {
            cardMap[f.field1] = {
              tagId: f.field1,
              action: f.field2 || "N/A",
              lastSeen: f.created_at,
            };
          }
        });

        // 🕒 Calculate missing vs present
        const now = new Date().getTime();
        const presentCards = [];
        const missingCards = [];

        Object.values(cardMap).forEach((card) => {
          const lastSeenTime = new Date(card.lastSeen).getTime();
          const timeDiff = now - lastSeenTime;

          if (card.action === "IN") {
            if (timeDiff > MISSING_THRESHOLD) {
              missingCards.push(card);
            } else {
              presentCards.push(card);
            }
          }
        });

        setStatus({
          totalCards: Object.keys(cardMap).length,
          totalPresent: presentCount,
          missingCount,
          presentCards,
          missingCards,
        });
      }
    } catch (err) {
      console.error("❌ Error fetching ThingSpeak data:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔁 Auto-refresh every 5s
  useEffect(() => {
    fetchStatus();
    intervalRef.current = setInterval(fetchStatus, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "20px" }}>
      <h2 style={{ color: "orange" }}>📡 Warehouse Scan Status</h2>
      {loading ? (
        <div>Loading latest data...</div>
      ) : (
        <>
          <div
            style={{
              background: "#fff",
              padding: 16,
              borderRadius: 8,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 18 }}>
              Total Registered Cards:{" "}
              <strong>{status.totalCards}</strong>
            </div>
            <div style={{ fontSize: 18 }}>
              Currently Inside:{" "}
              <strong style={{ color: "green" }}>
                {status.totalPresent}
              </strong>
            </div>
            <div style={{ fontSize: 18 }}>
              Missing Cards:{" "}
              <strong style={{ color: "red" }}>
                {status.missingCount}
              </strong>
            </div>
          </div>

          <h3>🟢 Cards Currently Inside</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 10,
            }}
          >
            {status.presentCards.length > 0 ? (
              status.presentCards.map((c) => (
                <div
                  key={c.tagId}
                  style={{
                    minWidth: 200,
                    padding: 10,
                    borderRadius: 6,
                    background: "#e8f5e9",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div>
                    <strong>{c.tagId}</strong>
                  </div>
                  <div style={{ color: "green", fontWeight: "bold" }}>
                    IN
                  </div>
                  <div style={{ fontSize: 12, color: "#666" }}>
                    Last seen: {new Date(c.lastSeen).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <div>No cards currently inside.</div>
            )}
          </div>

          <h3 style={{ marginTop: 30, color: "red" }}>❌ Missing Cards</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 10,
            }}
          >
            {status.missingCards.length > 0 ? (
              status.missingCards.map((c) => (
                <div
                  key={c.tagId}
                  style={{
                    minWidth: 200,
                    padding: 10,
                    borderRadius: 6,
                    background: "#ffebee",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <div>
                    <strong>{c.tagId}</strong>
                  </div>
                  <div style={{ color: "red", fontWeight: "bold" }}>
                    MISSING
                  </div>
                  <div style={{ fontSize: 12, color: "#666" }}>
                    Last seen: {new Date(c.lastSeen).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <div>No missing cards detected.</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
*/
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function Scan() {
  const [status, setStatus] = useState({
    totalCards: 0,
    totalPresent: 0,
    missingCount: 0,
    presentCards: [],
    missingCards: [],
  });
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  // ThingSpeak configuration
  const channelID = "3158040";
  const readAPIKey = "XOVSFC9NC4IV78B0";
  const MISSING_THRESHOLD = 60000; // 1 minute

  // Fetch latest data
  const fetchStatus = async () => {
    try {
      const url = `https://api.thingspeak.com/channels/${channelID}/feeds.json?api_key=${readAPIKey}&results=20`;
      const res = await axios.get(url);
      const feeds = res.data.feeds;

      if (feeds && feeds.length > 0) {
        const latest = feeds[feeds.length - 1];
        const presentCount = parseInt(latest.field3 || "0");
        const missingCount = parseInt(latest.field4 || "0");

        const cardMap = {};
        feeds.forEach((f) => {
          if (f.field1) {
            cardMap[f.field1] = {
              tagId: f.field1,
              action: f.field2 || "N/A",
              lastSeen: f.created_at,
            };
          }
        });

        const now = new Date().getTime();
        const presentCards = [];
        const missingCards = [];

        Object.values(cardMap).forEach((card) => {
          const lastSeenTime = new Date(card.lastSeen).getTime();
          const timeDiff = now - lastSeenTime;

          if (card.action === "IN") {
            if (timeDiff > MISSING_THRESHOLD) missingCards.push(card);
            else presentCards.push(card);
          }
        });

        setStatus({
          totalCards: Object.keys(cardMap).length,
          totalPresent: presentCount,
          missingCount,
          presentCards,
          missingCards,
        });
      }
    } catch (err) {
      console.error("Error fetching ThingSpeak data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh every 5s
  useEffect(() => {
    fetchStatus();
    intervalRef.current = setInterval(fetchStatus, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const accent = "#1565c0";
  const mutedText = "#5f6b7a";

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>📡 Warehouse Scan Dashboard</h1>
        <p style={styles.subtitle}>
          Real-time RFID activity and presence overview
        </p>
      </div>

      {loading ? (
        <div style={styles.loading}>Loading latest data...</div>
      ) : (
        <>
          {/* Summary Cards */}
          <div style={styles.statsRow}>
            <div style={styles.statCard}>
              <h3 style={styles.statLabel}>Total Registered</h3>
              <div style={{ ...styles.statValue, color: accent }}>
                {status.totalCards}
              </div>
            </div>
            <div style={styles.statCard}>
              <h3 style={styles.statLabel}>Currently Inside</h3>
              <div style={{ ...styles.statValue, color: "#2e7d32" }}>
                {status.totalPresent}
              </div>
            </div>
            <div style={styles.statCard}>
              <h3 style={styles.statLabel}>Missing Cards</h3>
              <div style={{ ...styles.statValue, color: "#d32f2f" }}>
                {status.missingCount}
              </div>
            </div>
          </div>

          {/* Present Cards Section */}
          <div style={styles.section}>
            <h2 style={{ ...styles.sectionTitle, color: "#2e7d32" }}>
              🟢 Cards Currently Inside
            </h2>
            <div style={styles.cardsGrid}>
              {status.presentCards.length > 0 ? (
                status.presentCards.map((c) => (
                  <div key={c.tagId} style={styles.cardPresent}>
                    <div style={styles.cardHeader}>
                      <strong>{c.tagId}</strong>
                      <span style={styles.statusBadgeIn}>IN</span>
                    </div>
                    <div style={styles.lastSeen}>
                      Last seen: {new Date(c.lastSeen).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div style={styles.emptyState}>No cards currently inside.</div>
              )}
            </div>
          </div>

          {/* Missing Cards Section */}
          <div style={styles.section}>
            <h2 style={{ ...styles.sectionTitle, color: "#d32f2f" }}>
              ❌ Missing Cards
            </h2>
            <div style={styles.cardsGrid}>
              {status.missingCards.length > 0 ? (
                status.missingCards.map((c) => (
                  <div key={c.tagId} style={styles.cardMissing}>
                    <div style={styles.cardHeader}>
                      <strong>{c.tagId}</strong>
                      <span style={styles.statusBadgeOut}>MISSING</span>
                    </div>
                    <div style={styles.lastSeen}>
                      Last seen: {new Date(c.lastSeen).toLocaleString()}
                    </div>
                  </div>
                ))
              ) : (
                <div style={styles.emptyState}>No missing cards detected.</div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Inter', sans-serif",
    background: "#f8fafc",
    minHeight: "100vh",
    padding: "40px 6%",
  },
  header: {
    textAlign: "center",
    marginBottom: 30,
  },
  title: {
    color: "#114b8b",
    fontSize: 32,
    fontWeight: 700,
    marginBottom: 6,
  },
  subtitle: {
    color: "#5f6b7a",
    fontSize: 16,
  },
  loading: {
    textAlign: "center",
    color: "#546e7a",
    marginTop: 60,
    fontSize: 18,
  },
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
    marginBottom: 40,
  },
  statCard: {
    background: "#fff",
    borderRadius: 12,
    padding: "24px 20px",
    textAlign: "center",
    boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
  },
  statLabel: {
    fontSize: 15,
    color: "#546e7a",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 700,
  },
  section: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 15,
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
  },
  cardPresent: {
    background: "#e8f5e9",
    borderRadius: 10,
    padding: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
  },
  cardMissing: {
    background: "#ffebee",
    borderRadius: 10,
    padding: 16,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 8,
    fontSize: 15,
  },
  lastSeen: {
    fontSize: 13,
    color: "#616161",
  },
  statusBadgeIn: {
    background: "#2e7d32",
    color: "#fff",
    borderRadius: 6,
    padding: "2px 8px",
    fontSize: 12,
    fontWeight: 600,
  },
  statusBadgeOut: {
    background: "#d32f2f",
    color: "#fff",
    borderRadius: 6,
    padding: "2px 8px",
    fontSize: 12,
    fontWeight: 600,
  },
  emptyState: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#78909c",
    padding: "30px 0",
  },
};
