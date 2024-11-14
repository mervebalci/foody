import useCountries from "../hooks/useCountries";
import American from "../assets/flags/American.webp";
import British from "../assets/flags/British.webp";
import Canadian from "../assets/flags/Canadian.webp";
import Chinese from "../assets/flags/Chinese.webp";
import Croatian from "../assets/flags/Croatian.webp";
import Dutch from "../assets/flags/Dutch.webp";
import Egyptian from "../assets/flags/Egyptian.webp";
import Filipino from "../assets/flags/Filipino.webp";
import French from "../assets/flags/French.webp";
import Greek from "../assets/flags/Greek.webp";
import Indian from "../assets/flags/Indian.webp";
import Irish from "../assets/flags/Irish.webp";
import Italian from "../assets/flags/Italian.webp";
import Jamaican from "../assets/flags/Jamaican.webp";
import Japanese from "../assets/flags/Japanese.webp";
import Kenyan from "../assets/flags/Kenyan.webp";
import Malaysian from "../assets/flags/Malaysian.webp";
import Mexican from "../assets/flags/Mexican.webp";
import Moroccan from "../assets/flags/Moroccan.webp";
import Polish from "../assets/flags/Polish.webp";
import Portuguese from "../assets/flags/Portuguese.webp";
import Russian from "../assets/flags/Russian.webp";
import Spanish from "../assets/flags/Spanish.webp";
import Thai from "../assets/flags/Thai.webp";
import Tunisian from "../assets/flags/Tunisian.webp";
import Turkish from "../assets/flags/Turkish.webp";
import Ukrainian from "../assets/flags/Ukrainian.webp";
import Unknown from "../assets/flags/Unknown.webp";
import Vietnamese from "../assets/flags/Vietnamese.webp";
import {
  HStack,
  Image,
  ImageProps,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

export default function CountryList() {
  const { data, isLoading, error } = useCountries();

  const flagMap: { [key: string]: ImageProps } = {
    American: { src: American, alt: "American Flag" },
    British: { src: British, alt: "British Flag" },
    Canadian: { src: Canadian, alt: "Canadian Flag" },
    Chinese: { src: Chinese, alt: "Chinese Flag" },
    Croatian: { src: Croatian, alt: "Croatian Flag" },
    Dutch: { src: Dutch, alt: "Dutch Flag" },
    Egyptian: { src: Egyptian, alt: "Egyptian Flag" },
    Filipino: { src: Filipino, alt: "Filipino Flag" },
    French: { src: French, alt: "French Flag" },
    Greek: { src: Greek, alt: "Greek Flag" },
    Indian: { src: Indian, alt: "Indian Flag" },
    Irish: { src: Irish, alt: "Irish Flag" },
    Italian: { src: Italian, alt: "Italian Flag" },
    Jamaican: { src: Jamaican, alt: "Jamaican Flag" },
    Japanese: { src: Japanese, alt: "Japanese Flag" },
    Kenyan: { src: Kenyan, alt: "Kenyan Flag" },
    Malaysian: { src: Malaysian, alt: "Malaysian Flag" },
    Mexican: { src: Mexican, alt: "Mexican Flag" },
    Moroccan: { src: Moroccan, alt: "Moroccan Flag" },
    Polish: { src: Polish, alt: "Polish Flag" },
    Portuguese: { src: Portuguese, alt: "Portuguese Flag" },
    Russian: { src: Russian, alt: "Russian Flag" },
    Spanish: { src: Spanish, alt: "Spanish Flag" },
    Thai: { src: Thai, alt: "Thai Flag" },
    Tunisian: { src: Tunisian, alt: "Tunisian Flag" },
    Turkish: { src: Turkish, alt: "Turkish Flag" },
    Ukrainian: { src: Ukrainian, alt: "Ukrainian Flag" },
    Unknown: { src: Unknown, alt: "Unknown Flag" },
    Vietnamese: { src: Vietnamese, alt: "Vietnamese Flag" },
  };

  if (error) return null;

  if (isLoading) return <Spinner marginTop={5} />;

  return (
    <List marginTop={5}>
      {data.map((country) => (
        <ListItem key={country.strArea} paddingY={1}>
          <HStack>
            <Image
              src={flagMap[country.strArea]?.src}
              width={8}
              height={5}
              borderRadius={2}
            />
            <Text fontSize={"lg"}>{country.strArea}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
