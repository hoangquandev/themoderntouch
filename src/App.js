import { useEffect, useState } from "react";
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import "./App.css";
// import Footer from "./common/Footer";
import BottomBar from "./common/BottomBar";
// import { makeStyles } from "@mui/styles";
document.title = "The Modern Touch"
// const useStyles = makeStyles((theme) => ({
//   noZoom: {
//     height: "calc(100vh + 1px)",
//     overflow: "hidden",
//   },
//   zoom: {
//     height: "100%",
//     overflow: "hidden",
//   }
// }))
function App() {
  // const classes = useStyles()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        // <div className={zoom ? classes.zoom : classes.noZoom} >
        <div style={{ position: "relative" }}>
          <TopBar />
          <Header />
          <HomePage />
          {/* <Footer />
          <BottomBar /> */}
          {/* <BottomBar /> */}
        </div>
        // </div>
      )}
    </div>
  );
}

export default App;
