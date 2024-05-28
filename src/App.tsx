import React from "react";
import "./App.scss";
import EnhancedTable from "./components/Table/EnhancedTable";
import { Header } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <Header notificationsCounter={5} />
        

        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/incident" element={<EnhancedTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
