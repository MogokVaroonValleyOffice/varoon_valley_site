import {
  AlertDialogFooter,
  Box,
  Center,
  GridItem,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { text } from "../theme/colors";

interface Member {
  name: string;
  position: string;
  picture: string;
  education: string[];
  experience: string[];
  languages: string[];
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: Member;
}

const MemberMoreInfo = ({ isOpen, onClose, data }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"xl"}>
      <ModalOverlay>
        <ModalContent margin={3} borderRadius={10}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              columns={{ base: 1, sm: 2 }}
              //   gridTemplateColumns={{ md: "230px 1fr" }}
              overflow={"hidden"}
            >
              <GridItem textAlign={{ sm: "center" }} data-aos="fade-right">
                <Center>
                  <Image
                    borderRadius={"50%"}
                    width={"80%"}
                    margin={{ sm: "auto" }}
                    src={data.picture}
                    alt={data.name}
                  />
                </Center>

                <Text fontSize={20} paddingTop={3} fontWeight={"medium"}>
                  {data.name}
                </Text>
                <Text color={text()}>{data.position}</Text>
                <Box paddingY={3}>
                  <Heading as={"h3"} fontSize={"md"} color={"#68D391"} pb={1}>
                    Tools & Languages
                  </Heading>
                  <Text fontSize={14}>
                    {data.languages.map((lang, idx) => (
                      <span key={idx}>
                        {lang}
                        {idx + 1 == data.languages.length ? "" : ", "}
                      </span>
                    ))}
                  </Text>
                </Box>
              </GridItem>
              <GridItem data-aos="fade-left">
                <Box paddingY={3}>
                  <Heading as={"h3"} fontSize={"lg"} color={"#68D391"}>
                    Education
                  </Heading>
                  {data.education.map((edu, idx) => (
                    <Text key={idx} fontSize={14}>
                      {edu}
                      {idx + 1 == data.education.length ? "" : ","}
                    </Text>
                  ))}
                </Box>
                <Box paddingY={3}>
                  <Heading as={"h3"} fontSize={"lg"} color={"#68D391"}>
                    Experience
                  </Heading>
                  {data.experience.map((exp, idx) => (
                    <Text key={idx} fontSize={14} paddingTop={"5px"}>
                      {exp}
                      {idx + 1 == data.experience.length ? "" : ","}
                    </Text>
                  ))}
                </Box>
              </GridItem>
            </SimpleGrid>
          </ModalBody>

          <AlertDialogFooter>
            {/* <Button onClick={onClose}>Close</Button> */}
          </AlertDialogFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default MemberMoreInfo;
