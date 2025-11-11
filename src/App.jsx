// // // import React from 'react';
// // // import { Routes, Route } from 'react-router-dom';
// // // import Header from './components/Header';
// // // import Home from './pages/Home';
// // // import About from './pages/About';
// // // import Services from './pages/Services';
// // // import Login from './pages/Login';
// // // import Signup from './pages/Signup';
// // // import Scan from './pages/Scan';
// // // import CardsMissing from './pages/CardsMissing';
// // // import ProtectedRoute from './ProtectedRoute';

// // // function App(){
// // //   const appStyle = {
// // //     fontFamily: 'Arial, sans-serif',
// // //     background: '#fff',
// // //     minHeight: '100vh'
// // //   };

// // //   return (
// // //     <div style={appStyle}>
// // //       <Header />
// // //       <div style={{ padding: 20 }}>
// // //         <Routes>
// // //           <Route path="/" element={<Home />} />
// // //           <Route path="/about" element={<About />} />
// // //           <Route path="/services" element={<Services />} />
// // //           <Route path="/login" element={<Login />} />
// // //           <Route path="/signup" element={<Signup />} />

// // //           <Route path="/scan" element={<ProtectedRoute><Scan/></ProtectedRoute>} />
// // //           <Route path="/cards-missing" element={<ProtectedRoute><CardsMissing/></ProtectedRoute>} />
// // //         </Routes>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;





// // import React from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Header from "./components/Header";
// // import Home from "./pages/Home";
// // import About from "./pages/About";
// // import Services from "./pages/Services";
// // import Scan from "./pages/Scan";

// // function App() {
// //   const appStyle = {
// //     fontFamily: "Arial, sans-serif",
// //     background: "#f7f7f7",
// //     minHeight: "100vh",
// //   };

// //   return (
// //     <div style={appStyle}>
// //       <Header />
// //       <div style={{ padding: 20 }}>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/services" element={<Services />} />
// //           <Route path="/scan" element={<Scan />} />
// //           <Route path="*" element={<div>404 - Page not found</div>} />
// //         </Routes>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;




// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Scan from "./pages/Scan";
// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   const appStyle = {
//     fontFamily: "Arial, sans-serif",
//     background: "#f9f9f9",
//     minHeight: "100vh",
//   };

//   return (
//     <div style={appStyle}>
//       <Header />
//       <div style={{ padding: 20 }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/scan"
//             element={
//               <ProtectedRoute>
//                 <Scan />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;





import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Scan from "./pages/Scan";
import ProtectedRoute from "./ProtectedRoute";  // ✅ import here

function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    background: "#f9f9f9",
    minHeight: "100vh",
  };

  return (
    <div style={appStyle}>
      <Header />
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />

          {/* ✅ Protect Scan page */}
          <Route
            path="/scan"
            element={
              <ProtectedRoute>
                <Scan />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;

