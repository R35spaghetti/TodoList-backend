import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";
import "./AboutPage.css";
export default function AboutPage() {

    const {todoNotes} = useTodoNoteContext();

    return (
        <article className="about-page-container">
            <h1>About the to-do list</h1>
            <p>This is a collection of tasks that needs to be completed (according to you).<br/> The list can be organized based on author or date</p>
            <p className="notes-counter">Amount of notes: {todoNotes.length}</p>
        </article>
    );
}
