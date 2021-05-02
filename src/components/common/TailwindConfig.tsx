import useGetTailwindConfig from "../../hooks/useGetTailwindConfig";

const TailwindConfig = () => {
  const config = useGetTailwindConfig();

  console.log(config);
  return <p>{config}</p>;
};

export default TailwindConfig;
