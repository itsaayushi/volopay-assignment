import API_DATA from "./data.json";

export const getData = (appliedFilter) => {
  const { ownerId, status } = {
    ownerId: null,
    status: null,
    ...appliedFilter,
  };
  const data = API_DATA.data
    .filter((item) =>
      ownerId
        ? ownerId === item.owner_id
        : true && status
        ? status === item.status
        : true
    )
    .slice(1, 10);

  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const newdata = { message: "Data fetched successfully", data };

      resolve(newdata); // Resolving the Promise with the data
    }, 1000); // Simulating a delay.
  });
};
