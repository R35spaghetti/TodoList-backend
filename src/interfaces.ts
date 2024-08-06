export interface ITodoNote {
    date: Date;
    author: string;
    name: string;
    description: string;
    completed: boolean;
}
export interface ITodoNoteContext {
    todoNotes: ITodoNote[];
    onSubmit: (note: ITodoNote) => void;
    onDelete: (data: string) => void;
    onToggleCompleted: ToggleCompleted;
    onUpdate: (data: string) => void;
}
type ToggleCompleted = (name: string) => void;
