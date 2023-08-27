import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  HStack,
  Hide,
  Image,
  Link,
  Show,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import {
  close,
  closeWhite,
  menu,
  menuWhite,
  moon,
  sunny,
} from "../assets/images";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    { title: "Services", link: "#services" },
    { title: "About", link: "#about" },
    { title: "Team", link: "#team" },
    { title: "Contact", link: "#contact" },
  ];

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <GridItem>
        <Link href="#" style={{ textDecoration: "none" }}>
          <Box
            textAlign={"center"}
            width={"fit-content"}
            paddingTop={5}
            paddingBottom={6}
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
      </GridItem>
      <Show above="md">
        <GridItem>
          <Grid
            templateColumns="repeat(5, minmax(80px, 1fr))"
            height={"100%"}
            alignItems={"center"}
            textAlign={"center"}
          >
            {links.map((link, idx) => (
              <GridItem key={idx}>
                <Box>
                  <Text>
                    <Link
                      href={link.link}
                      fontSize={18}
                      style={{ textDecoration: "none" }}
                      _hover={{
                        fontWeight: "500",
                      }}
                    >
                      {link.title}
                    </Link>
                  </Text>
                </Box>
              </GridItem>
            ))}
            <GridItem>
              <Image
                src={colorMode === "dark" ? sunny : moon}
                alt="colorMode"
                onClick={toggleColorMode}
                margin={"auto"}
                width={"32px"}
                height={"32px"}
                _hover={{ cursor: "pointer" }}
              />
            </GridItem>
          </Grid>
        </GridItem>
      </Show>
      <Hide above="md">
        <Box textAlign={"right"} paddingTop={6}>
          <Button
            onClick={onOpen}
            colorScheme=""
            background={"green.300"}
            color={"white"}
            padding={3}
          >
            {""}
            <Image
              src={colorMode === "dark" ? menu : menuWhite}
              height={6}
              width={6}
              alt="menu"
            />
          </Button>
        </Box>
        <Drawer
          onClose={onClose}
          isOpen={isOpen}
          placement="right"
          returnFocusOnClose={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Box textAlign={"right"}>
              <Button
                onClick={() => {
                  onClose();
                }}
                background={"transparent"}
                padding={3}
              >
                <Image
                  src={colorMode === "dark" ? closeWhite : close}
                  width={6}
                  height={6}
                  alt="close"
                />
              </Button>
            </Box>
            {links.map((link, idx) => (
              <DrawerHeader key={idx}>
                <Link
                  href={link.link}
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {link.title}
                </Link>
              </DrawerHeader>
            ))}
            <DrawerHeader>
              <HStack onClick={toggleColorMode} _hover={{ cursor: "pointer" }}>
                <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
                <Image src={colorMode === "dark" ? sunny : moon} />
              </HStack>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Hide>
    </Grid>
  );
};

export default NavBar;
