export interface ITodoNoteList
{
    collection: ITodoNote[];
}

export interface ITodoNote {
    id: number;
    date: Date;
    author: string;
    name: string;
    description: string;
    completed: boolean;
}