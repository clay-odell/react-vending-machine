import React from "react";
import { Routes, Route } from "react-router-dom";
import Snack from "./Snack";

const RoutesComponent = ({ handleSnackClick, handleGoBack }) => {
  return (
    <Routes>
      <Route path="/" element={<div>Please Make a Selection</div>} />
      <Route
        path="/candybar"
        element={
          <Snack
            name="Candy Bar"
            price="1.50"
            onBuy={() => handleSnackClick("Candy Bar")}
            onGoBack={handleGoBack}
          />
        }
      />
      <Route
        path="/coke"
        element={
          <Snack
            name="Coke"
            price="1.75"
            onBuy={() => handleSnackClick("Coke")}
            onGoBack={handleGoBack}
          />
        }
      />
      <Route
        path="/chips"
        element={
          <Snack
            name="Chips"
            price="1.25"
            onBuy={() => handleSnackClick("Chips")}
            onGoBack={handleGoBack}
          />
        }
      />
    </Routes>
  );
};

export default RoutesComponent;
