import React from "react";
import Card from "../Card";

function Mainpage() {
  return (
    <>
      <Card
        name="minmax"
        budgetName="budget name"
        cardType="card type"
        expiryDate="2022-01-01T00:00:00Z"
        spentAmount="963.62"
        availableAmount="4550.84"
        currency="SGD"
        limit="161.89"
      />
    </>
  );
}

export default Mainpage;
