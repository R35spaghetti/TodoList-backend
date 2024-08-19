import {ITodoNoteContext} from "../interfaces.ts";
import {useOutletContext} from "react-router-dom";

export function useTodoNoteContext(): ITodoNoteContext {
    return useOutletContext<ITodoNoteContext>();
}