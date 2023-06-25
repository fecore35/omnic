import { useSearchParams } from "react-router-dom";

const useDeviceUID = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDeviceUID = searchParams.get("id");

  return { isDeviceUID };
};

export default useDeviceUID;
