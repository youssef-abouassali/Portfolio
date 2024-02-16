import { SimpleGrid } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = ({ portfolioData }: any) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
      {portfolioData.map((item: any, index: any) => (
        <PortfolioItem key={index} {...item} />
      ))}
    </SimpleGrid>
  );
};
export default PortfolioList;
