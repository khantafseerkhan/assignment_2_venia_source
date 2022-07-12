"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePagination = exports.DOTS = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var DOTS = '...';
exports.DOTS = DOTS;

var range = function range(start, end) {
  var length = end - start + 1;
  return Array.from({
    length: length
  }, function (_, idx) {
    return idx + start;
  });
};

var usePagination = function usePagination(_ref) {
  var totalCount = _ref.totalCount,
      pageSize = _ref.pageSize,
      _ref$siblingCount = _ref.siblingCount,
      siblingCount = _ref$siblingCount === void 0 ? 1 : _ref$siblingCount,
      currentPage = _ref.currentPage;
  var paginationRange = (0, _react.useMemo)(function () {
    var totalPageCount = Math.ceil(totalCount / pageSize); // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS

    var totalPageNumbers = siblingCount + 5;
    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    var leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    var rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
    /*
      We do not want to show dots if there is only one position left 
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */

    var shouldShowLeftDots = leftSiblingIndex > 2;
    var shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    var firstPageIndex = 1;
    var lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      var leftItemCount = 3 + 2 * siblingCount;
      var leftRange = range(1, leftItemCount);
      return [].concat(_toConsumableArray(leftRange), [DOTS, totalPageCount]);
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      var rightItemCount = 3 + 2 * siblingCount;
      var rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, DOTS].concat(_toConsumableArray(rightRange));
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      var middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS].concat(_toConsumableArray(middleRange), [DOTS, lastPageIndex]);
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};

exports.usePagination = usePagination;
//# sourceMappingURL=core.dev.js.map
