import {ChangeEventHandler, ReactElement} from "react";

interface IInputProps {
    label: string;
    type: "text" | "textarea" | "date" | "checkbox";
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string | Date | boolean;
}

export function Input(props: IInputProps): ReactElement {
    const classes = props.type === "text" ? "input-text"
        : props.type === "date" ? "input-date"
            : props.type === "textarea" ? "input-textarea"
                : "input-checkbox";

    const renderInput = (): ReactElement => {
        switch (props.type) {
            case "textarea":
                return (
                    <textarea
                        className="input"
                        id={props.label}
                        onChange={props.onChange}
                        value={props.value.toString()}
                    >
                </textarea>
                );
            case "date":
                return (
                    <input
                        className="input"
                        id={props.label}
                        type="date"
                        onChange={props.onChange}
                        value={props.value instanceof Date ? props.value.toISOString().split('T')[0] : ""}
                    />
                );
            case "checkbox":
                return (
                    <input
                        className="input"
                        id={props.label}
                        type="checkbox"
                        onChange={props.onChange}
                        checked={!!props.value}
                    />
                );
            case "text":
                return (
                    <input
                        className="input"
                        id={props.label}
                        type="text"
                        onChange={props.onChange}
                        value={props.value.toString()}
                    />
                )
        }
    }

    return (
        <div className={classes}>
            <label className="label" htmlFor={props.label}>
                {props.label}
            </label>
            {renderInput()}
        </div>
    )
}