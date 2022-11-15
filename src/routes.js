import { DetailsPage } from "./pages/details-page.jsx"
import { HomePage } from "./pages/home-page.jsx"
import { Login } from "./pages/login-page.jsx"


// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: "/",
        component: <Login />,
        label: "Home",
    },
    {
        path: "/home",
        component: <HomePage />,
        label: "Home",
    },
    {
        path: "/details/:id",
        component: <DetailsPage />,
        label: "Details Page",
    },
]

export default routes
