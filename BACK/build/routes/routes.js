"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staticFilesRoute = exports.fileRoutes = void 0;
var angularRoutePaths = ['/', '/listings', '/contact/{id}', '/edit-listing/{id}', '/listings/{id}', '/my-listing', '/new/listing'];
var fileRoutes = angularRoutePaths.map(function (path) {
  return {
    method: 'GET',
    path: path,
    handler: function handler(req, h) {
      return h.file('dist/buy-and-sell/index.html');
    }
  };
});
exports.fileRoutes = fileRoutes;
var staticFilesRoute = {
  method: 'GET',
  path: '/{params*}',
  handler: {
    directory: {
      path: 'dist/buy-and-sell'
    }
  }
};
exports.staticFilesRoute = staticFilesRoute;