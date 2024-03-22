import { createBrowserRouter } from "react-router-dom";
import Layout from "./webpages/Layout";
import HomePage from "./webpages/HomePage";
import VideoDetailPage from "./webpages/VideoDetailPage";
import ErrorPage from "./webpages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'games/:slug', element: <VideoDetailPage />}
        ]
    }
])

export default router;