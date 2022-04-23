import Head from "next/head";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Button,
} from "@chakra-ui/react";

import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Camila Brito</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Camila Brito</Heading>
          <Text color={colorSecondary[colorMode]}>
            Currently an international full time student at Humber College in
            Toronto - ON and Java Software Engineer at CI&T
            <br />
            Technologist Degree - Analysis and Systems Development(Dec 2019)
            <br />
            Computer Technician Course (Dec 2016)
          </Text>
          <Button
            data-splitbee-event="Button Click"
            data-splitbee-event-type="Resume"
            onclick="window.location='https://www.linkedin.com/in/camila-grandini/';"
          >
            View Resume
          </Button>
        </Flex>
      </Stack>
    </Container>
  );
}
