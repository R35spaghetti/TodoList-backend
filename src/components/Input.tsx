import {ChangeEventHandler, ReactElement} from "react";

interface IInputProps {
    label: string;
    type: "text" | "textarea" | "date";
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
}

export function Input(inputs: IInputProps): ReactElement {
    const classes = inputs.type === "text" ? "input-text"
        : inputs.type === "date" ? "input-date" : "input-textarea";

    const renderInput = (): ReactElement => {
        if (inputs.type === 'textarea') {
            return (
                <textarea>
                    className="input"
                    id={inputs.label}
                    value={inputs.value}
                </textarea>
            );
        } else if (inputs.type === 'date') {
            return (
                <input
                    className="input"
                    id={inputs.label}
                    type="date"
                    value={inputs.value}
                />
            );
        }

        return (
            <input
                className="input"
                id={inputs.label}
                type="text"
                value={inputs.value}
            />
        )
    };

    return (
        <div className={classes}>
            <label className="label" htmlFor={inputs.label}>
                {inputs.label}
            </label>
            {renderInput()}
        </div>
    )
}