import { useState } from 'react';
import { Burger } from '@mantine/core';

function BurgerComponent() {
    const [opened, setOpened] = useState(false);
    const title = opened ? 'Close sidebar' : 'Open sidebar';

    return (
        <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            title={title}
        />
    );
}

export default BurgerComponent;