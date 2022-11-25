import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";

// import LoadingPage from "./pages/LoadingPage";
import "./App.css";
import { routes } from "./routes/index";
import { useEffect, useState } from "react";
import LoadingPage from "./pages/LoadingPage";
document.title = "The Modern Touch";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div style={{ position: "relative" }}>
          <TopBar />
          <Router>
            <Header />
            <Routes>
              {routes.map((route, key) => {
                const Page = route.page;
                return <Route key={key} path={route.path} element={<Page />} />;
              })}
            </Routes>
          </Router>
        </div>)

      }
    </div>
  );
}

export default App;
