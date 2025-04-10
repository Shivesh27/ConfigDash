import { useEffect, useState } from "react";

const ObjectInputField = ({currValue, update}) => {
    const [valueField, setValueField] = useState(JSON.stringify(currValue, null, 2));


    useEffect(() => {
        try {
            const obj = JSON.parse(valueField)
            update(obj)
        } catch(err) {

        }
    }, [valueField])

    return (
        <textarea
            className="w-fit"
            value={valueField}
            onChange={(e) => {
                setValueField(e.target.value)
            }}
        />
        
    )
}

export default ObjectInputField;