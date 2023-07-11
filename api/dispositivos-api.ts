import { API } from "./api";
import { postMethod, putMethod } from "./methods";

export interface DispositivoAPIType {
  dis_id: number;
  dis_mas: number;
  dis_loc: string;
  dis_locacion: string;
  dis_sensor_id: string;
  dis_nom: string;
  dis_maxt: string;
  dis_mint: string;
  dis_maxh: string;
  dis_minh: string;
  dis_status: string;
  dis_last_up: string;
  loc_nom: string;
  temp: number;
  hum: number;
  bat: number;
}

export interface DispositivosDataType {
  status: boolean;
  totalRegistros: number;
  listaDatos: DispositivoAPIType[];
  mensaje: string;
}
export const getDispostivosAPI = (loc_codigo: string) =>
  postMethod<DispositivosDataType>(
    `${API}/api/Consultas/dispositivoslista?codigo=${loc_codigo}&tipo=0`
  ).then(({ status, listaDatos }) => {
    if (!status) throw Error("API Error");
    return listaDatos;
  });

export const getAllDevicesAPI = (devicesAPI: string, codigo_m: string) =>
  postMethod<DispositivosDataType>(
    `${API}/api/${devicesAPI}?codigo=${codigo_m}&tipo=1`
  ).then(({ status, totalRegistros, listaDatos }) => {
    if (!status) throw Error("API Error");
    return { totalRegistros, listaDatos };
  });

export interface DispositivoUpdateType {
  [key: string]: string;
}
interface UpdateRes {
  rpta: number;
  mensaje: string;
}
export const updateDispositivoAPI = (dis: DispositivoUpdateType) => {
  const query = Object.keys(dis)
    .map((key) => `${key}=${dis[key]}`)
    .join("&");
  return putMethod<UpdateRes>(
    `${API}/api/Consultas/actualizardispositivo?${query}`
  );
};
