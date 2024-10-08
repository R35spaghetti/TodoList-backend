import React, {ReactElement, useState} from "react";
import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import "./SortsNotes.css";

export function SortsNotes(): ReactElement {
    const {sortTodos} = useTodoNoteContext();
    const [selectedCriterion, setSelectedCriterion] = useState('date');

    const handleSortingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedCriterion(event.target.value);
        sortTodos(event.target.value as "date" | "author");
    };

    return (
        <article className="sort-options">
            <label>
                <input
                    type="radio"
                    value="date"
                    checked={selectedCriterion === 'date'}
                    onChange={handleSortingChange}
                />
                Date
            </label>
            <label>
                <input
                    type="radio"
                    value="author"
                    checked={selectedCriterion === 'author'}
                    onChange={handleSortingChange}
                />
                Author
            </label>
        </article>
    );
}
