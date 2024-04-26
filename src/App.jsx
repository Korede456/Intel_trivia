import { Flex, Button } from "@chakra-ui/react";
import Category from "./components/Category";
import Intro from "./components/Intro";
import { useState } from "react";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <Flex maxW="100%" align='center' justify="center" flexDir="column" gap="100px">
      {!isClicked ? (
        <>
          {" "}
          <Intro />
          <Button onClick={handleClick}>Click to start</Button>
        </>
      ) : (
        <Category />
      )}
    </Flex>
  );
};

export default App;
