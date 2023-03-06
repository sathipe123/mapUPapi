import React from 'react'
import { Button, Card, Select } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { countryAction, coordinatesAction, infoAction } from "../storageBox/reducer"
import Info from './info';

const options = [
    {
        label: "India",
        value: "india"
    },
    {
        label: "United States",
        value: "united_states"
    },
    {
        label: "United Kingdom",
        value: "united_kingdom"
    }
]

const Form = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(countryAction.getInitialState());

    const updateCountry = () => {
        dispatch(countryAction.actions.update(selected));
        dispatch(coordinatesAction.actions.update(selected));
        dispatch(infoAction.actions.update(selected));
    }

    return (<div className="float">
        <Card title="Search Location" style={{ background: "#803008", textAlign: 'center', }}>
            <Select
                defaultValue={selected}
                style={{ width: 150, marginRight: 10 ,}}
                options={options}
                onChange={(value) => setSelected(value)}
            />
            <Button onClick={updateCountry}>Load</Button>
        </Card>
        <Info />
    </div>
    )
}

export default Form;