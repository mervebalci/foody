import useData from "./useData";

export interface Country {
  strArea: string;
}

const useCountries = () => useData<Country>("/list.php?a=list")

export default useCountries;