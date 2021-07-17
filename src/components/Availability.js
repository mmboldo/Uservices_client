import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";


export default function App() {
    const options = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' }
    ];

    const [selected, setSelected] = useState([]);

    return (
        <div style={{ width: '30%', display: "inline-block" }}>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={"Select"}
            />
        </div>
    );
}
