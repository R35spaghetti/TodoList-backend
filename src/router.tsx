import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {AddTodoNote} from "./components/AddTodoNote.tsx";
import About from "./components/About.tsx";
import {App} from "./App.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="form" element={<AddTodoNote/>}/>
            <Route path="about" element={<About />} />
        </Route>
    )
)