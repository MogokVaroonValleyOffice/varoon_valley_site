import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { globe, linkedin, location, mail, phone } from "../assets/images";

const Footer = () => {
  const contact = [
    {
      text: "Kandaw, Mogok, Mandalay, Myanmar",
      icon: location,
      clickable: false,
      link: "https://goo.gl/maps/EZYWitDGTYegUT9EA",
      styles: false,
    },
    {
      text: "North 20th Way, Phoenix, AZ",
      icon: location,
      clickable: false,
      link: "https://goo.gl/maps/5Aj73BNwYK1LP56a6",
      styles: false,
    },
    {
      text: "job@varoonvalley.com",
      icon: mail,
      clickable: true,
      link: "mailto: contact@varoonvalley.com",
      styles: true,
    },
    {
      text: "+1 641-819-8225",
      icon: phone,
      clickable: false,
      link: "#",
      styles: false,
    },
  ];

  const social = [
    {
      text: "Linked In",
      icon: linkedin,
      link: "https://www.linkedin.com/in/mohanlar96",
    },
    {
      text: "varronvalley.com",
      icon: globe,
      link: "https://www.varoonvalley.com",
    },
  ];

  const quick = [
    { text: "Home", link: "#" },
    { text: "Service", link: "#services" },
    { text: "About", link: "#about" },
    { text: "Contact", link: "#contact" },
  ];

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 4, lg: 4 }}
      maxWidth={{ base: "500px", md: "100%" }}
      margin={"auto"}
      spacing={3}
    >
      <Box textAlign={{ base: "left", lg: "center" }}>
        <Link href="#" style={{ textDecoration: "none" }}>
          <Box
            textAlign={"center"}
            width={{ base: "fit-content", lg: "100%" }}
            paddingTop={{ base: 0, md: 10 }}
            paddingBottom={3}
          >
            <Text fontSize={"xl"} color={"green.300"} fontWeight={"bold"}>
              Varoon
            </Text>
            <Text
              fontSize={"xl"}
              color={"green.300"}
              fontWeight={"bold"}
              lineHeight={0.5}
            >
              Valley
            </Text>
          </Box>
        </Link>
        <Text>&copy; 2023 Varoon Valley.</Text>
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Social
        </Heading>
        {social.map((soc, idx) => (
          <Box key={idx} marginTop={2}>
            <Link target="_blank" href={soc.link}>
              <HStack>
                <Image
                  src={soc.icon}
                  alt={soc.text}
                  width={"24px"}
                  height={"24px"}
                />
                <Text>{soc.text}</Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Quick Links
        </Heading>
        {quick.map((qui, idx) => (
          <Box key={idx} marginTop={2}>
            <Link href={qui.link}>
              <HStack>
                <Text>{qui.text}</Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
      <Box paddingTop={2}>
        <Heading as={"h3"} fontSize={"2xl"}>
          Contact
        </Heading>
        {contact.map((con, idx) => (
          <Box key={idx} marginTop={4}>
            <Link target="_blank" href={con.link}>
              <HStack>
                <Image
                  src={con.icon}
                  alt={con.text}
                  width={"24px"}
                  height={"24px"}
                  marginEnd={"5px"}
                />
                <Text
                  style={
                    con.styles
                      ? {
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                      : {}
                  }
                >
                  {con.text}
                </Text>
              </HStack>
            </Link>
          </Box>
        ))}
      </Box>
    </SimpleGrid>
  );
};

export default Footer;
