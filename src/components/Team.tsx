import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { cardWhite, text } from "../theme/colors";
import MemberMoreInfo from "./MemberMoreInfo";
import { useState } from "react";
import teamMembers from "../data/teamMembers";

const Team = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [clickedIdx, setClickIdx] = useState(0);
  const team = teamMembers;
  return (
    <>
      <MemberMoreInfo
        isOpen={isOpen}
        onClose={onClose}
        data={team[clickedIdx]}
      />
      <Heading as={"h2"} fontSize={"3xl"} textAlign={"center"}>
        OUR TEAM
      </Heading>
      <SimpleGrid
        paddingTop={10}
        columns={{ sm: 2, md: 3, lg: 3 }}
        spacing={8}
        maxWidth={{ sm: "500px", md: "900px" }}
        margin={"auto"}
        style={{ alignItems: "stretch" }}
      >
        {team.map((member, index) => (
          <Box
            className="custom-box-shadow pop-on-hover"
            data-aos="fade-up"
            key={index}
            borderRadius={10}
            background={cardWhite()}
            margin={"auto"}
            textAlign={"center"}
            padding={5}
            height={"100%"}
            onClick={() => {
              setClickIdx(index);
              onOpen();
            }}
          >
            <Box>
              <Image
                src={member.picture}
                alt={member.name}
                width={"100%"}
                height={"100%"}
                borderRadius={30}
              />
            </Box>
            <Text fontSize={20} paddingTop={3} fontWeight={"medium"}>
              {member.name}
            </Text>
            <Text color={text()}>{member.position}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Team;
