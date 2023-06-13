import API_DATA from "./data.json";

export const getData = (appliedFilter) => {
  const { searchQuery, cardType, pageNumber, ownerId, status, limit } = {
    searchQuery: "",
    cardType: "",
    ownerId: null,
    status: null,
    pageNumber: 1,
    limit: 10,
    ...appliedFilter,
  };
  const data = API_DATA.data
    .filter((item) =>
      searchQuery?.length
        ? item.name.toLowerCase().includes(searchQuery.toLowerCase())
        : true && cardType?.length
        ? cardType === item.card_type
        : true && ownerId
        ? ownerId === item.owner_id
        : true && status
        ? status === item.status
        : true
    )
    .slice(
      pageNumber - 1 < 0 ? 0 : (pageNumber - 1) * limit,
      pageNumber * limit
    );

  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const newdata = { message: "Data fetched successfully", data };

      resolve(newdata); // Resolving the Promise with the data
    }, 1000); // Simulating a delay.
  });
};
