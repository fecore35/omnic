import React from "react";
import { Routes, Route } from "react-router-dom";
import { Path } from "static/enums/Path";
import HomePage from "pages/HomePage";
import PackagePage from "pages/PackagePage";
import CellsSizePage from "pages/CellsSizePage";
import InstructionsPage from "pages/InstructionsPage";
import NotFoundPage from "pages/NotFoundPage";
import ShopPage from "pages/ShopPage";
import Header from "components/Header/Header";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path={Path.HOME} element={<HomePage />} />
        <Route path={Path.PACKAGE} element={<PackagePage />} />
        <Route path={Path.CELLS_SIZE} element={<CellsSizePage />} />
        <Route path={Path.INSTRUCTIONS} element={<InstructionsPage />} />
        <Route path={Path.SHOP} element={<ShopPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
