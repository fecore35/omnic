import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { getDeviceUID } from "redux/device/device-selectors";
import * as actions from "redux/device/device-reducer";

const useDeviceUID = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isDeviceUIDStore = useSelector(getDeviceUID);
  const isDeviceUIDParams = searchParams.get("device_uid");
  const isDeviceUID = isDeviceUIDParams || isDeviceUIDStore;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isDeviceUIDParams) {
      dispatch(actions.setDeviceUID(isDeviceUIDParams));
    }
  }, [dispatch, isDeviceUIDParams]);

  return { isDeviceUID };
};

export default useDeviceUID;
