import { useQuery } from "@tanstack/react-query";

const getCryptoNumber = async () => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((response) => response.json());

  return Number(response);
};

export const useGetRandomNumber = () => {
  const randomQuery = useQuery({
    queryKey: ["cryptoNumber"],
    queryFn: getCryptoNumber,
    refetchOnWindowFocus: false,
  });

  return randomQuery;
};
