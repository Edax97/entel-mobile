const resGraficasURL = "data-api/reservorios-graficas.json";

interface LevelDatumAPI {
  fecha: string;
  nivel: number;
}

interface ResGraficaType {
  reservorioId: string;
  trama: LevelDatumAPI[];
}

interface DataGraficasType {
  status: boolean;
  totalRegistros: number;
  listaDatos: ResGraficaType[];
  mensaje: string;
}

export const getResGraficasAPI = (desde: string, hasta: string) =>
  fetch(resGraficasURL)
    .then<DataGraficasType>((data) => data.json())
    .then(({ status, listaDatos }) => {
      if (!status) throw Error("API error");
      return listaDatos;
    });
