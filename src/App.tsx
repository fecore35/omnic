import React from "react";
import { Routes, Route } from "react-router-dom";
import { Path } from "static/enums/Path";

import PublicRoute from "routes/PublicRoute";
import PrivateRoute from "routes/PrivateRoute";

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
        <Route
          path={Path.HOME}
          element={<PublicRoute component={<HomePage />} />}
        />
        <Route
          path={Path.PACKAGE}
          element={<PrivateRoute component={<PackagePage />} />}
        />
        <Route
          path={Path.CELLS_SIZE}
          element={<PrivateRoute component={<CellsSizePage />} />}
        />
        <Route
          path={Path.INSTRUCTIONS}
          element={<PublicRoute component={<InstructionsPage />} />}
        />
        <Route
          path={Path.SHOP}
          element={<PublicRoute component={<ShopPage />} />}
        />
        <Route
          path="*"
          element={<PublicRoute component={<NotFoundPage />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
