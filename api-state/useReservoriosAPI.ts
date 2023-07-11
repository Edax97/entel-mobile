import useSWR from "swr";
import { getReservoriosAPI } from "../api/reservorios-api";

export function useReservoriosAPI(codigo_m: string) {
  const { data, isLoading, error } = useSWR(
    ["Consultas/reservorios", codigo_m],
    (args) => getReservoriosAPI()
  );

  return { reservorios: data, loading: isLoading, error: !!error };
}
