import React from 'react'
import { Card, TextField, Button, Popover, ActionList, Stack, RadioButton, Page } from "@shopify/polaris";
import { useState, useCallback } from 'react';
const UiSettings = () => {

  const [value, setValue] = useState('disabled');
  const [value2, setValue2] = useState('');

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    [],
  );
  const handleChangeSelect = useCallback((newValue) => setValue2(newValue), []);


  return (
    <>
      <Card>
      <div style={{margin:"1rem"}}>

        <h1>Type of meter</h1>
      </div>

        <Stack vertical title={'Types of meter'}>
          <RadioButton
            label="Bar filler"
            helpText="The discount can be shown in the bar form"
            checked={value === 'disabled'}
            id="disabled"
            name="accounts"
            onChange={handleChange}
          />
          <RadioButton
            label="circullar form"
            helpText="The discount can be shown in the bar form"
            id="optional"
            name="accounts"
            checked={value === 'optional'}
            onChange={handleChange}
          />
        </Stack>
        <TextField
                label="Selector"
                value={value2}
                onChange={handleChangeSelect}
                // autoComplete="off"
            />

      </Card>
    </>
  )
}

export default UiSettings