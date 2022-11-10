import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import AOS from "aos";
import "aos/dist/aos.css";

// import LoadingPage from "./pages/LoadingPage";
import "./App.css";
import { routes } from "./routes/index";
import { useEffect } from "react";
document.title = "The Modern Touch";

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* {loading ? ( */}
      {/* <LoadingPage /> */}
      {/* ) : ( */}
      <div style={{ position: "relative" }}>
        <TopBar />
        <Header />
        <Router>
          <Routes>
            {routes.map((route, key) => {
              const Page = route.page;
              return <Route key={key} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </Router>
      </div>
      {/* </div> */}
      {/* )} */}
    </div>
  );
}

export default App;
