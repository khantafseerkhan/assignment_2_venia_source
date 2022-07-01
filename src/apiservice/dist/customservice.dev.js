"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getservice = void 0;

var getservice = function getservice(path) {
  var requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return fetch(path, requestOptions).then(function (res) {
    return res.json();
  });
};

exports.getservice = getservice;
//# sourceMappingURL=customservice.dev.js.map
