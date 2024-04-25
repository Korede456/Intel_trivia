import { Button, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Trivia from "./Trivia"; // Make sure this import is correct

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const Categories = [
    "science",
    "math",
    "history",
    "entertainment",
    "programming",
  ];

  const handleComponent = (category) => {
    setSelectedCategory(category);
    setIsActive(true);
  };

  return (
    <Container>
      {!isActive ? (
        <Container>
          <Heading> Please Select a Category</Heading>
          {Categories.map((item, index) => (
            <Button key={index} onClick={() => handleComponent(item)}>
              {item.toUpperCase()}
            </Button>
          ))}
        </Container>
      ) : (
        <Trivia prop={selectedCategory} /> // Render the Trivia component when isActive is false
      )}
    </Container>
  );
};

export default Category;
