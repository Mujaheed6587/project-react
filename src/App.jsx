import {Routes,Route, Navigate } from "react-router";
import Sidebar from "./components/shared/Sidebar.jsx";
import Navbar from "./components/shared/Navbar.jsx";
import Overview from "./pages/dashboard/Overview.jsx";
import Hero from "./pages/Heropage.jsx";
import ProtectedRoute from "./components/home/protectRoute.jsx";
import Login from "./pages/Login.jsx"
     function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected layout */}
      <Route
        path="/Overview"
        element={
          <ProtectedRoute>
            <div style={{ display: "flex", minHeight: "100vh" }}>
              <Sidebar />
              <div style={{ flex: 1 }}>
                <Navbar />
                <Overview />
              </div>
            </div>
            <Routes>
              <Route path="/" element={<h2>Analytics Page</h2>} />
              <Route path="/events" element={<h2>Events Page</h2>} />
              <Route path="/emails" element={<h2>Emails Page</h2>} />
              <Route path="/settings" element={<h2>Settings Page</h2>} />
              <Route path="/sponsors" element={<h2>Sponsors Page</h2>} />
            </Routes>
            <Routes>
      <Route
        path="/Hero" element={<Hero />} />
      </Routes>
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="overview" />} />
        <Route path="overview" element={<Overview />} />
      </Route>
    </Routes>
   
  );
}
  <Routes>
            <Route path="/" element={<h2>Analytics Page</h2>} />
            <Route path="/events" element={<h2>Events Page</h2>} />
            <Route path="/emails" element={<h2>Emails Page</h2>} />
            <Route path="/settings" element={<h2>Settings Page</h2>} />
            <Route path="/sponsors" element={<h2>Sponsors Page</h2>} />
    </Routes>
export default App;
         
          {/* <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes> */}
 
