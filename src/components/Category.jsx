import { Button, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Trivia from "./Trivia"; // Make sure this import is correct

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleComponent = (category) => {
    setSelectedCategory(category);
    setIsActive(true);
  };

  return (
    <Container>
      {!isActive ? (
        <Container>
          <Heading> Please Select a Category</Heading>
          <Button onClick={() => handleComponent("science")}>Science</Button>
          <Button onClick={() => handleComponent("math")}>Math</Button>
          <Button onClick={() => handleComponent("history")}>History</Button>
          <Button onClick={() => handleComponent("entertainment")}>
            Entertainment
          </Button>
          <Button onClick={() => handleComponent("programming")}>
            Programming
          </Button>
        </Container>
      ) : (
        <Trivia prop={selectedCategory} /> // Render the Trivia component when isActive is false
      )}
    </Container>
  );
};

export default Category;
