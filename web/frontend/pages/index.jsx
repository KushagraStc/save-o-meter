import React from 'react'
import { AppProvider, Card, Tabs } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import Uisettings from './Uisettings';
import Discount from './Discount';

const index = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );
  const tabs = [
   
   
    {
      id: 'Uisettings',
      content: 'U.I. Settings',
    },
    {
      id: 'Discount',
      content: 'Discount',
    },
  ];

  return (
    <>

      <AppProvider>

        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>

            {
              selected == 0 &&
              <Card.Section >
                <Uisettings />
              </Card.Section>
            }
            {
              selected == 1 &&
              <Card.Section >
                <Discount />
              </Card.Section>
            }

          </Tabs>
        </Card>
      </AppProvider>

    </>
  )
}

export default index