import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { getDeviceName, getDeviceUID } from "redux/device/device-selectors";
import { fetchDeviceInformation } from "redux/device/device-operations";
import { api } from "services/omnic-api";

const useDeviceName = () => {
  const deviceUID = useSelector(getDeviceUID);
  const deviceName = useSelector(getDeviceName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.defaults.headers.common["Authorization"] = deviceUID;

    if (deviceUID) {
      dispatch(fetchDeviceInformation());
    }
  }, [deviceUID, dispatch]);

  return { deviceName };
};

export default useDeviceName;
