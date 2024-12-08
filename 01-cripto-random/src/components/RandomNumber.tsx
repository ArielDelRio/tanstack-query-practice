import { useGetRandomNumber } from "../hooks/queries/useGetRandomNumber";

const RandomNumber = () => {
  const randomQuery = useGetRandomNumber();

  return (
    <>
      {randomQuery.error && (
        <h1>Error: {randomQuery.error.message || "Unknown error"}</h1>
      )}
      <h1>{randomQuery.data}</h1>
    </>
  );
};

export const RandomNumberButton = () => {
  const randomQuery = useGetRandomNumber();

  return (
    <button
      disabled={randomQuery.isFetching}
      onClick={() => randomQuery.refetch()}
    >
      {randomQuery.isFetching ? "fetching..." : "Get random number"}
    </button>
  );
};

export default RandomNumber;
