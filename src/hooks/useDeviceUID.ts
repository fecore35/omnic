import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { getDeviceUID } from "redux/device/device-selectors";
import { setDeviceUID } from "redux/device/device-reducer";
import { api } from "services/omnic-api";

const useDeviceUID = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const isDeviceUIDStore = useSelector(getDeviceUID);
  const isDeviceUIDParams = searchParams.get("device_uid");
  const isDeviceUID = isDeviceUIDParams || isDeviceUIDStore;
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.defaults.headers.common["Authorization"] = isDeviceUID;

    if (isDeviceUIDParams) {
      dispatch(setDeviceUID(isDeviceUIDParams));
    }
  }, [dispatch, isDeviceUID, isDeviceUIDParams]);

  return { isDeviceUID };
};

export default useDeviceUID;
