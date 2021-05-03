import useGetTailwindConfig from "../../hooks/useGetTailwindConfig";

const TailwindConfig = () => {
  const config = useGetTailwindConfig();

  function createMarkup() {
    return { __html: config };
  }

  console.log(config);
  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default TailwindConfig;
