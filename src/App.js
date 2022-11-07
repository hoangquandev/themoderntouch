import { useEffect, useState } from "react";
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";
import "./App.css";
import Footer from "./common/Footer";
import BottomBar from "./common/BottomBar";
document.title = "The Modern Touch"
function App() {
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
        <div>
          <TopBar />
          <Header />
          <HomePage />
          <Footer />
          <BottomBar />
        </div>
      )}
    </div>
  );
}

export default App;
