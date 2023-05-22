"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _addViewToListing = require("./addViewToListing");
var _createNewListing = require("./createNewListing");
var _deleteListing = require("./deleteListing");
var _routes = require("./routes");
var _getAllListings = require("./getAllListings");
var _getListings = require("./getListings");
var _getUserListings = require("./getUserListings");
var _updateListing = require("./updateListing");
var _default = [_addViewToListing.addViewToListingRoute, _createNewListing.createNewListingRoute, _deleteListing.deleteListingRoute, _getAllListings.getAllListingsRoute, _getListings.getListingsRoute, _getUserListings.getUserListingsRoute, _updateListing.updateListingRoute, _routes.staticFilesRoute].concat((0, _toConsumableArray2["default"])(_routes.fileRoutes));
exports["default"] = _default;