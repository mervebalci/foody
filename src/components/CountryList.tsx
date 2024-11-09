import useCountries from "../hooks/useCountries";

export default function CountryList() {
  const { countries } = useCountries();

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.strArea}>{country.strArea}</li>
      ))}
    </ul>
  );
}
