import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { formatDate } from "../../../globalfunctions";

function Card({
  name,
  budgetName,
  cardType,
  expiryDate,
  spentAmount,
  availableAmount,
  currency,
  limit,
}) {
  return (
    <div className="flex flex-coll cardbox p-30 gap-25">
      <div className="flex justify-between">
        <div className="flex flex-coll">
          <span className="fontWeight-800  card-name">{name}</span>
          <span className="budget-name">{budgetName}</span>
        </div>
        <div>
          <span
            className={`card-type card-type-${
              cardType === "burner" ? "burner" : "subscription"
            }`}
          >
            {cardType}
          </span>
        </div>
      </div>

      <span>
        {" "}
        {cardType === "burner"
          ? `Expiry: ${formatDate(expiryDate)}`
          : `Limit: ${limit}`}
      </span>
      <div className="flex justify-between">
        <span className="flex items-center gap-4">
          <BsArrowDownRight className="spent-icon p-4" />
          Spent: {spentAmount} {currency}
        </span>
        <span className="flex items-center gap-4">
          <FaRegMoneyBillAlt className="available-icon p-4" />
          Available: {availableAmount} {currency}
        </span>
      </div>
    </div>
  );
}

export default Card;
