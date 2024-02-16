import { Box, Heading, Text } from "@chakra-ui/react";

const PortfolioItem = ({ title, description, imageUrl }: any) => {
  return (
    <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "auto" }}
      />
      <Heading mt={2} size="md">
        {title}
      </Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

export default PortfolioItem;
