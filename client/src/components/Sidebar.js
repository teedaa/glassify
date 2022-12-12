import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';

export function Sidebar() {
    const [opened, setOpened] = useState(false);

    return (
        <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Saved Drinks"
            position="left"
            padding="xl"
            size="25%"
        >
            {
            /* Drawer content */
                // <h3>Saved List or Ingredients List</h3>
            }
        </Drawer>

        <Group position="center">
            <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        </Group>
        </>
    );
}

