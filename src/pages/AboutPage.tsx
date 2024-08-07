import {useTodoNoteContext} from "../hooks/useTodoNoteContext.ts";

export default function AboutPage() {

    const {todoNotes} = useTodoNoteContext();

    return (
        <div>
            <h1>About Us</h1>
            <p>This is an about page</p>
            <p>Amount of notes: {todoNotes.length}</p>
        </div>
    );
}
