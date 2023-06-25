import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "redux/hooks";
import { getDeviceName } from "redux/device/device-selectors";
import { fetchDeviceInformation } from "redux/device/device-operations";

const useDeviceName = () => {
  const deviceName = useSelector(getDeviceName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDeviceInformation());
  }, [dispatch]);

  return { deviceName };
};

export default useDeviceName;
