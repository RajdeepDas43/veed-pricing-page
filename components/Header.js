import { Header, Group, Button, Menu, Text } from '@mantine/core';

export default function AppHeader() {
  return (
    <Header height={60} padding="md">
      <Group position="apart" sx={{ height: '100%' }}>
        <Text>Logo</Text>
        <Group>
          <Menu>
            <Menu.Target>
              <Button>For Business</Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Option 1</Menu.Item>
              <Menu.Item>Option 2</Menu.Item>
              <Menu.Item>Option 3</Menu.Item>
            </Menu.Dropdown>
          </Menu>
          <Button>Sign In</Button>
        </Group>
      </Group>
    </Header>
  );
}