import { Container, SimpleGrid, Image, Title } from '@mantine/core';

const logos = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
];

export default function TrustedBy() {
  return (
    <Container>
      <Title align="center">Trusted by teams at</Title>
      <SimpleGrid cols={3}>
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </SimpleGrid>
    </Container>
  );
}