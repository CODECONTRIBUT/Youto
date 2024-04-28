import { createBrowserRouter } from "react-router-dom";
import Layout from "./webpages/Layout";
import HomePage from "./webpages/HomePage";
import VideoDetailPage from "./webpages/VideoDetailPage";
import ErrorPage from "./webpages/ErrorPage";
import GenresPage from "./webpages/GenresPage";
import GenreDetailPage from "./webpages/GenreDetailPage";
import StoresPage from "./webpages/StoresPage";
import StoreDetailPage from "./webpages/StoreDetailPage";
import ContactUsPage from "./webpages/ContactUsPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'products/:id', element: <VideoDetailPage />},
            {path: 'genres', element: <GenresPage />},
            {path: 'genres/:genreId', element: <GenreDetailPage />},
            {path: 'stores', element: <StoresPage />},
            {path: 'stores/:storeId', element: <StoreDetailPage />},
            {path: 'constactus', element: <ContactUsPage />}
        ]
    }
])

export default router;