import { Container, SimpleGrid, Card, Title, Text, Button } from '@mantine/core';

const pricingData = [
  {
    title: 'Basic Plan',
    description: 'For individual use',
    price: '$10/month',
  },
  {
    title: 'Pro Plan',
    description: 'For professionals',
    price: '$20/month',
  },
  {
    title: 'Enterprise Plan',
    description: 'For large teams',
    price: 'Contact us',
  },
];

export default function Pricing() {
  return (
    <Container>
      <Title align="center">Pricing</Title>
      <SimpleGrid cols={3}>
        {pricingData.map((plan) => (
          <Card key={plan.title} shadow="sm" padding="lg">
            <Title order={3}>{plan.title}</Title>
            <Text>{plan.description}</Text>
            <Text size="xl" weight={500}>{plan.price}</Text>
            <Button fullWidth mt="md">Get Started</Button>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}