import { createBrowserRouter } from "react-router-dom";
import Layout from "./webpages/Layout";
import HomePage from "./webpages/HomePage";
import VideoDetailPage from "./webpages/VideoDetailPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'game/:id', element: <VideoDetailPage />}
        ]
    }
])

export default router;