import useCountries from "../hooks/useCountries";

export default function CountryList() {
  const { data } = useCountries();

  return (
    <ul>
      {data.map((country) => (
        <li key={country.strArea}>{country.strArea}</li>
      ))}
    </ul>
  );
}
