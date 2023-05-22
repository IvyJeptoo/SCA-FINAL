import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
import { fileRoutes, staticFilesRoute } from "./routes";
import { getAllListingsRoute } from "./getAllListings"; 
import { getListingsRoute } from "./getListings";
import { getUserListingsRoute }  from "./getUserListings";
import { updateListingRoute } from "./updateListing";

export default [
    addViewToListingRoute,
    createNewListingRoute,
    deleteListingRoute,
    getAllListingsRoute,
    getListingsRoute,
    getUserListingsRoute,
    updateListingRoute,
    staticFilesRoute,
    ...fileRoutes,
];