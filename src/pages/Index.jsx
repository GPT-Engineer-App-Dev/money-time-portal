import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Box as="header" bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">
              Financial Times
            </Heading>
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">News</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Top Stories */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Top Stories</Heading>
            <Divider />
            <Text mt={4}>Top story content goes here...</Text>
          </Box>

          {/* Latest News */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Latest News</Heading>
            <Divider />
            <Text mt={4}>Latest news content goes here...</Text>
          </Box>

          {/* Featured Articles */}
          <Box>
            <Heading as="h2" size="md" mb={4}>Featured Articles</Heading>
            <Divider />
            <Text mt={4}>Featured articles content goes here...</Text>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={8}>
              <Link href="#" color="white">Contact</Link>
              <Link href="#" color="white">Privacy Policy</Link>
              <Link href="#" color="white">Terms of Service</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;