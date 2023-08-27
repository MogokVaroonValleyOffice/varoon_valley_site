import { Box, Heading, Text } from "@chakra-ui/react";
import { text } from "../theme/colors";

const About = () => {
  return (
    <>
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        ABOUT
      </Heading>
      <Box maxWidth={"700px"} margin={"auto"} paddingTop={5} data-aos="zoom-in">
        <Text textAlign={"center"} fontSize={"xl"} color={text()}>
          Varoon Valley, established in 2023, is a software development company
          specializing in web development. With a team of talented members, we
          excel in React and Laravel, while also possessing expertise in Vue,
          Flutter, Angular, Node.js, and more. Our goal is to create exceptional
          digital experiences by leveraging cutting-edge technologies. Partner
          with us for robust, scalable, and user-friendly web applications that
          surpass expectations. Experience the power of Varoon Valley and
          transform your digital presence today.
        </Text>
      </Box>
    </>
  );
};

export default About;
