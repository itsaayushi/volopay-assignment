import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card";
import { getData } from "../../../data";
import FilterDropdown from "../FilterDropdown";

function Mainpage({ pageType }) {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchOuery] = useState("");
  const [cardType, setCardType] = useState("");

  const mydata = async () => {
    setLoading(true);
    const apiData = await getData({
      pageNumber: pageNumber,
      limit: 10,
      cardType,
      searchQuery,
      ...(pageType === "your" ? { ownerId: 1 } : {}),
      ...(pageType === "blocked" ? { status: "block" } : {}),
    });

    if (pageNumber === 1) {
      setData([...apiData?.data]);
    } else {
      setData((prevData) => [...prevData, ...apiData?.data]);
    }
    console.log(apiData.data);
    setLoading(false);
  };

  useEffect(() => {
    mydata();
  }, [pageNumber, pageType, searchQuery, cardType]);

  useEffect(() => {
    setPageNumber(1);
    mydata();
  }, [searchQuery, cardType]);

  // infinite scroll
  const handleScroll = useCallback(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPageNumber(pageNumber + 1);
      mydata();
    }
  }, [mydata]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  //  filter
  const handleFilterSelect = (selectedOption) => {
    setCardType(selectedOption);
  };

  const filterOptions = [
    { label: "All", value: "" },
    { label: "Burner", value: "burner" },
    { label: "Subscription", value: "subscription" },
  ];

  return (
    <div className="p-20">
      <div className="flex gap-10 justify-between">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchOuery(e.target.value)}
          className="search-box ml-130 p-4"
          placeholder="Search..."
        />

        <FilterDropdown options={filterOptions} onSelect={handleFilterSelect} />
      </div>
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
