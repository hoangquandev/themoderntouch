import { useEffect, useState } from "react";
import './App.css'
import Header from "./common/Header";
import TopBar from "./common/TopBar";
import HomePage from "./pages/HomePage";
import LoadingPage from "./pages/LoadingPage";


function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div>
      {
        loading ?
          <LoadingPage />
          :
          <div>
            <TopBar />
            <Header />
            <HomePage />
          </div>

      }

    </div>
  );
}

export default App;
