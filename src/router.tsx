import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {AddTodoNotePage} from "./pages/AddTodoNotePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import {App} from "./App.tsx";
import {TodoListPage} from "./pages/TodoListPage.tsx";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<TodoListPage/>}/>
            <Route path="form" element={<AddTodoNotePage/>}/>
            <Route path="about" element={<AboutPage />} />
        </Route>
    )
)