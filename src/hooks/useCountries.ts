import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Country {
  strArea: string;
}

interface FetchCountriesResponse {
  meals: Country[];
}

const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
  
      setIsLoading(true);
  
      apiClient
        .get<FetchCountriesResponse>("/list.php?a=list", { signal: signal })
        .then((res) => {
          console.log(res.data.meals)
          setCountries(res.data.meals);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
  
      return () => controller.abort();
    }, []);
  
    return { countries, error, isLoading };
}

export default useCountries;