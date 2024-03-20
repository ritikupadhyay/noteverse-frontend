import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";

export default function Homepage() {
  return (
    <Box padding={8}>
      <Image
        position={"absolute"}
        right={0}
        top={120}
        src={
          "https://play-lh.googleusercontent.com/5CVU5FxK4zV4l1v64zULcyjogYToTJjgeN8HN1uID_0MizgBCfC97ixIB0EQ4OHz7zI"
        }
      />
      <Heading mt={16} textAlign="start" size={"3xl"}>
        NoteVerse
      </Heading>
      <Text mt={8} maxW={"50%"} textAlign={"justify"}>
        Namaste ,Bonjour ,Nǐ hǎo, Hola 🙏🏻🙏🏻🙏🏻🙏🏻 <br /><br />
        Welcome to NoteVerse, your
        ultimate digital notebook companion. With NoteVerse, capturing,
        organizing, and accessing your thoughts has never been easier. Whether
        you're jotting down ideas, keeping track of tasks, or collaborating with
        others, NoteVerse offers intuitive features and seamless synchronization
        across all your devices. Say goodbye to scattered notes and hello to
        streamlined organization with NoteVerse. Start your journey to enhanced
        productivity and creativity today!
      </Text>
    </Box>
  );
}
