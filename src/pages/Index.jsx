import { Box, Button, Container, Flex, Heading, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaUser, FaChartPie, FaCog } from "react-icons/fa";

const Index = () => {
  const primaryColor = "#3182ce"; // Vibrant blue for accents
  const secondaryColor = "#e53e3e"; // Vibrant red for secondary accents

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh" bg="gray.50">
        {/* Navigation Bar */}
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={4} bg="white" color="gray.600" borderBottom="1px" borderColor="gray.200">
          <IconButton icon={<FaHome />} aria-label="Home" variant="ghost" />
          <IconButton icon={<FaChartPie />} aria-label="Dashboard" variant="ghost" />
          <IconButton icon={<FaUser />} aria-label="Profile" variant="ghost" />
          <IconButton icon={<FaCog />} aria-label="Settings" variant="ghost" />
        </Flex>

        {/* Main Content */}
        <Flex direction="column" flex="1" p={5}>
          <Heading as="h1" size="xl" mb={4} color="gray.800">
            Dashboard
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {/* Card 1 */}
            <Box p={5} shadow="md" borderWidth="1px" bg="white" borderRadius="md">
              <Heading fontSize="xl">Sales Metrics</Heading>
              <Text mt={4} color="gray.600">
                An overview of the sales performance.
              </Text>
            </Box>
            {/* Card 2 */}
            <Box p={5} shadow="md" borderWidth="1px" bg="white" borderRadius="md">
              <Heading fontSize="xl">User Activity</Heading>
              <Text mt={4} color="gray.600">
                Insights into user behavior and engagement.
              </Text>
            </Box>
            {/* Card 3 */}
            <Box p={5} shadow="md" borderWidth="1px" bg="white" borderRadius="md">
              <Heading fontSize="xl">Operational Health</Heading>
              <Text mt={4} color="gray.600">
                Current status of system operations.
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>

        {/* Footer */}
        <Flex as="footer" py={4} px={5} justify="center" bg="white" borderTop="1px" borderColor="gray.200">
          <Text fontSize="sm" color="gray.600">
            © 2023 Your Company. All rights reserved.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
