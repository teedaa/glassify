import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function SavedDrinkCard() {
    // const drinkData = ({
    //     imageLink,
    //     drinkName,
    // })
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section component="a" href="https://mantine.dev/">
            <Image
            src="https://www.thecocktaildb.com/images/media/drink/usspxq1441553762.jpg"           
           // src="https://www.thecocktaildb.com/images/media/drink/4vo5651493068493.jpg"
            height={160}
            alt=""
            />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>The Addisson Special</Text>
            <Badge color="pink" variant="light">
            Alcoholic
            </Badge>
        </Group>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Remove
        </Button>
        </Card>
    );
}