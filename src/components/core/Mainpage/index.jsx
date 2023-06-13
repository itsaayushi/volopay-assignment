import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card";
import { getData } from "../../../data";

function Mainpage({ pageType }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const mydata = async () => {
    setLoading(true);
    const apiData = await getData({
      limit: 10,
      ...(pageType === "your" ? { ownerId: 1 } : {}),
      ...(pageType === "blocked" ? { status: "block" } : {}),
    });
    setData([...apiData?.data]);

    console.log(apiData.data);
    setLoading(false);
  };

  useEffect(() => {
    mydata();
  }, [pageType]);

  return (
    <div className="p-20">
      <div className="p-30 pl-100 pr-100 gap-30 flex flex-wrap justify-between">
        {data?.length
          ? data.map((card) => (
              <Card
                name={card.name}
                budgetName={card.budget_name}
                cardType={card.card_type}
                expiryDate={card.expiry}
                spentAmount={card.spent.value}
                availableAmount={card.available_to_spend.value}
                currency={card.available_to_spend.currency}
                limit={card.limit}
              />
            ))
          : null}
      </div>
      {loading ? <div className="my-loader"></div> : null}
      {!data?.length && !loading ? (
        <div className="no-data-text">Data not available</div>
      ) : null}
    </div>
  );
}

export default Mainpage;
