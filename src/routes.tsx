import { createBrowserRouter } from "react-router-dom";
import Layout from "./webpages/Layout";
import HomePage from "./webpages/HomePage";
import VideoDetailPage from "./webpages/VideoDetailPage";
import ErrorPage from "./webpages/ErrorPage";
import GenresPage from "./webpages/GenresPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'games/:slug', element: <VideoDetailPage />},
            {path: '/genres', element: <GenresPage />}
        ]
    }
])

export default router;