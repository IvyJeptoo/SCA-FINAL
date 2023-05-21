import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteListing";
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
    updateListingRoute
];