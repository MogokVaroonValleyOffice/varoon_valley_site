import { useColorModeValue } from "@chakra-ui/react";

//Background
const bgWhite = () => useColorModeValue("white", "gray.900");
const bgGray = () => useColorModeValue("gray.50", "gray.800");
const bgGreen = () => useColorModeValue("green.100", "gray.800");

//Text
const secHeading = () => useColorModeValue("blackAlpha.400", "whiteAlpha.600");
const text = () => useColorModeValue("blackAlpha.700", "whiteAlpha.600");

//Card
const cardWhite = () => useColorModeValue("white", "gray.700");

//Button
const btnText = () => useColorModeValue("gray.50", "gray.800");

export {
  //Background
  bgWhite,
  bgGray,
  bgGreen,

  //Text
  secHeading,
  text,

  //Card
  cardWhite,

  //Button
  btnText,
};
