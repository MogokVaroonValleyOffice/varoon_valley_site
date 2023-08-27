import { SimpleGrid, Image, Heading, Button, Box } from "@chakra-ui/react";
import { typing } from "../assets/images";
import { btnText } from "../theme/colors";

const Landing = () => {
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={3}
        alignItems={"center"}
      >
        <Box
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="linear"
        >
          <Heading as={"h1"} fontSize={"4xl"}>
            We are looking forward to{" "}
            <span style={{ color: "#68D391" }}>collaborate with you</span> and
            turning your ideas into reality.
          </Heading>
          <Button
            as={"a"}
            colorScheme=""
            background={"green.300"}
            color={btnText()}
            marginY={2}
            href="#contact"
          >
            Tell us your idea
          </Button>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="600"
          data-aos-duration="700"
          data-aos-easing="linear"
        >
          <Image
            src={typing}
            width={"100%"}
            height={"100%"}
            className="bounce"
            alt="typing"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default Landing;
