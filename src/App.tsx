import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutUs, BrowseAllCurrencies, ExchangePlatforms, Home } from "./pages";
import { DefaulRoutes } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaulRoutes />}>
            <Route index element={<Home />} />
            <Route path="browse-all-currencies" element={<BrowseAllCurrencies />} />
            <Route path="exchange-platforms" element={<ExchangePlatforms />} />
            <Route path="about-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
