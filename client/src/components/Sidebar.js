import React, { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import { BurgerComponent } from './Burger';
import { useDisclosure } from '@mantine/hooks';

export function Sidebar() {
    const [opened, setOpened] = useState(false);
    const [title, setTitle] = useState("Saved Drinks");
    function toggleTitle () {
        console.log(title)
        if (title === "Saved Drinks") {
            setTitle("Ingredients List")
        } else {
            setTitle("Saved Drinks")
        }
        
    }

    return (
        <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            // title will be where we switch the List Title
            title={title}
            position="left"
            padding="xl"
            size="25%"
        >
            {
            /* Drawer content */
                // <h3>Saved List or Ingredients List</h3>
            }
            <Group position="center">
                <Button onClick={() => toggleTitle() }>Toggle Sidebar Content</Button>
            </Group>
        </Drawer>

        <Group position="center">
            <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        </Group>
        
        {/* <Group position="center">
            <BurgerComponent onClick={() => setOpened(true)}>Open Drawer</BurgerComponent>
        </Group> */}
        </>
    );
}

