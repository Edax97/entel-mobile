const reservoriosURL = "data-api/reservorios.json";
export interface ReservorioLevelType {
  id: string;
  imei: string;
  maximo: number;
  minimo: number;
  nivel: number;
  volumen: number;
  bateria: number;
  signal: number;
}
interface DataReservoriosType {
  status: boolean;
  totalRegistros: number;
  listaDatos: ReservorioLevelType[];
  mensaje: string;
}

export const getReservoriosAPI = () =>
  fetch(reservoriosURL)
    .then<DataReservoriosType>((data) => data.json())
    .then(({ status, listaDatos }) => {
      if (!status) throw Error("API error");
      return listaDatos;
    });
