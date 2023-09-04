import {
  Box,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  figma,
  illustrator,
  laravel,
  mongodb,
  mysql,
  nodejs,
  photoshop,
  react,
  vuejs,
} from "../assets/images";
import { cardWhite, secHeading } from "../theme/colors";
import React from "react";

const Technologies = () => {
  const languages = [
    { title: "Front end :", images: [react, vuejs] },
    { title: "Back end :", images: [laravel, nodejs] },
    { title: "Database :", images: [mysql, mongodb] },
    { title: "UI/UX :", images: [figma, illustrator, photoshop] },
  ];
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        TECHNOLOGIES
      </Heading>
      <Heading
        as={"h3"}
        fontSize={"lg"}
        fontWeight={"medium"}
        textAlign={"center"}
        color={secHeading()}
        padding={2}
      >
        Our technology expertise includes but is not limited to
      </Heading>
      <Box
        paddingTop={{ base: 5, md: 10 }}
        margin={"auto"}
        maxWidth={{ base: "500px", md: "900px" }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          {languages.map((lan, idx) => (
            <Box
              className="custom-box-shadow"
              data-aos="zoom-in-down"
              data-aos-delay={idx * 100}
              key={idx}
              background={cardWhite()}
              borderRadius={10}
              padding={5}
              textAlign={"center"}
            >
              <Text paddingBottom={5} fontWeight={"bold"} fontSize={20}>
                {lan.title}
              </Text>
              <HStack
                justifyContent={{ base: "center", md: "left" }}
                gap={10}
                style={{ justifyContent: "center" }}
              >
                {lan.images.map((img, idx) => (
                  <Box width={"80px"} height={"80px"} key={idx}>
                    <Image
                      width={"100%"}
                      height={"100%"}
                      src={img}
                      alt={lan.title + idx}
                    />
                  </Box>
                ))}
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Technologies;
