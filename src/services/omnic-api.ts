import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080",
});

export async function fetchDevice() {
  const device_uid = api.defaults.headers.common.Authorization;

  if (!device_uid) return;

  const { data } = await api.get(`/api/2.0.0/public/device/${device_uid}/`);

  return data;
}

export async function fetchCells() {
  const device_uid = api.defaults.headers.common.Authorization;

  if (!device_uid) return;

  const { data } = await api.get(
    `/api/2.0.0/public/orders/device/${device_uid}/cells/statuses/?type=5`
  );

  return data;
}
