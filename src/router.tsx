import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {App} from "./App.tsx";
import {PresentForm} from "./components/parents/PresentForm.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path="add-note" element={<PresentForm/>} />
    </Route>
    )
)