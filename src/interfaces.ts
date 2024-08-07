export interface ITodoNote {
    id: number;
    date: Date;
    author: string;
    name: string;
    description: string;
    completed: boolean;
}

export interface ITodoNoteContext {
    todoNotes: ITodoNote[];
    onSubmit: (note: ITodoNote) => void;
    onDelete: (id: number) => void;
    onToggleCompleted: (name: string) => void;
    onUpdate: (note: ITodoNote) => void;
    onUpdateNeighbours: (chosenIndex: number, index: number) => void;
    sortTodos: (criterion: "date" | "author") => void;
}
