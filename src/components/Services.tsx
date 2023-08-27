import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { coding, maintenance } from "../assets/images";
import { cardWhite, secHeading } from "../theme/colors";

const Services = () => {
  const services = [
    {
      heading: "WEB DEVELOPMENT",
      description:
        "With a team of experienced professionals, we excel in web development, crafting engaging and user-friendly websites that leave a lasting impression.",
      image: coding,
    },
    {
      heading: "MINTENANCE",
      description:
        "We understand the importance of maintaining web applications to ensure their optimal performance and security.",
      image: maintenance,
    },
  ];
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        OUR SERVICE
      </Heading>
      <Heading
        as={"h3"}
        fontSize={"lg"}
        fontWeight={"medium"}
        textAlign={"center"}
        color={secHeading()}
        padding={2}
      >
        Our Diverse Range of Services
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={5}
        alignItems={"center"}
        maxWidth={{ base: "400px", md: "750px" }}
        margin={"auto"}
        paddingY={10}
        paddingX={30}
        style={{ alignItems: "stretch" }}
        overflowX={"hidden"}
      >
        {services.map((service, index) => (
          <Box
            className="custom-box-shadow"
            borderRadius={10}
            key={index}
            data-aos={index / 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Card
              height={"100%"}
              borderRadius={10}
              variant={"filled"}
              background={cardWhite()}
            >
              <CardBody>
                <Image
                  className="scale"
                  src={service.image}
                  alt={service.heading}
                  width={272}
                  height={300}
                  margin={"auto"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign={"center"} color={"green.300"}>
                    {service.heading}
                  </Heading>
                  <Text fontSize={16}>{service.description}</Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Services;
