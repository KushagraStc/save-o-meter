import React from 'react'
import { Card, TextField, Button, Popover, ActionList } from "@shopify/polaris";
import { useState, useCallback } from 'react';

const Discount = () => {
    const [value, setValue] = useState(' ');
    const [value2, setValue2] = useState(' ');
    const handleChange = useCallback((newValue) => setValue(newValue), []);
    const handleChange2 = useCallback((newValue) => setValue2(newValue), []);

    const [active, setActive] = useState(true);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const handleImportedAction = useCallback(
        () => console.log('Imported action'),
        [],
    );

    const handleExportedAction = useCallback(
        () => console.log('Exported action'),
        [],
    );

    const activator = (
        <Button onClick={toggleActive} disclosure>
            Select level
        </Button>
    );



    return (
        <Card>
            <TextField
                label="Threshold Limit"
                value={value}
                onChange={handleChange}
                autoComplete="off"
            />

            <div style={{ height: '250px', margin: "2rem" }}>
                <Popover
                    active={active}
                    activator={activator}
                    autofocusTarget="first-node"
                    onClose={toggleActive}
                >
                    <ActionList
                        actionRole="menuitem"
                        items={[
                            {
                                content: 'Level 1',
                                onAction: handleImportedAction,
                            },
                            {
                                content: 'Level 2',
                                onAction: handleExportedAction,
                            },
                        ]}
                    />
                </Popover>
            </div>


            <TextField
                label="Offer Code"
                value={value2}
                onChange={handleChange2}
                autoComplete="off"
            />

        </Card>
    )
}
export default Discount