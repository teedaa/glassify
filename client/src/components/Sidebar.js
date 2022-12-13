import React, { useState } from 'react';
import { Drawer, Button, Group, ScrollArea } from '@mantine/core';
import { BurgerComponent } from './Burger';
import { useDisclosure } from '@mantine/hooks';

const drinkList = "This is the saved drinks list";
const ingredientsList = "This is the ingredients list";

export function Sidebar() {
    const [opened, setOpened] = useState(false);
    const [title, setTitle] = useState("Saved Drinks");
    const [content, setContent] = useState(drinkList)
    function toggleTitle () {
        console.log(title)
        if (title === "Saved Drinks") {
            setTitle("Ingredients List")
        } else {
            setTitle("Saved Drinks")
        }
        
    }

    function toggleContent () {
        if (content === drinkList) {
            setContent(ingredientsList)
        } else {
            setContent(drinkList)
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
            <stack>
                <container>
                    <ScrollArea.Autosize maxHeight={500} sx={{maxWidth: 400}} mx="auto">
                        <p>{content}</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>                      
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                    </ScrollArea.Autosize>
                </container>
                <Group position="center">
                    <Button onClick={() => {
                        toggleTitle() 
                        toggleContent()}
                    }>Toggle Sidebar Content</Button>
                </Group>
            </stack>
        </Drawer>

        <Group position="center" mb="0">
            <Button onClick={() => setOpened(true)}>Open Drawer</Button>
        </Group>
        
        {/* <Group position="center">
            <BurgerComponent onClick={() => setOpened(true)}>Open Drawer</BurgerComponent>
        </Group> */}
        </>
    );
}

