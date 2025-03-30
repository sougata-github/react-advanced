import { useQuery } from "@tanstack/react-query";

const getRandomNumber = () => {
  return Promise.resolve(Math.random());
};

const Deduplication = () => {
  const { data } = useQuery({
    queryKey: ["randomnumber"],
    queryFn: getRandomNumber,
  });

  return (
    <div className="p-20">
      <p>Random Number: {data ?? ""}</p>
    </div>
  );
};

export default Deduplication;
