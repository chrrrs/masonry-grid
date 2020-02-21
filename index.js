"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stylesModule = _interopRequireDefault(require("./styles.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MasonryGrid = function MasonryGrid(_ref) {
  var children = _ref.children,
      gap = _ref.gap,
      minWidth = _ref.minWidth;
  var columns = [];
  var grid = (0, _react.useRef)();

  var _useState = (0, _react.useState)(3),
      _useState2 = _slicedToArray(_useState, 2),
      numberOfColumns = _useState2[0],
      setNumberOfColumns = _useState2[1];

  var calculateNumberOfColumns = function calculateNumberOfColumns() {
    var columns = Math.round(grid.current.offsetWidth / minWidth);

    if (columns === 0) {
      setNumberOfColumns(1);
    } else {
      setNumberOfColumns(columns);
    }
  };

  var createColumns = function createColumns() {
    for (var i = 0; i < numberOfColumns; i++) {
      columns[i] = [];
    }

    children.forEach(function (child, index) {
      return columns[index % numberOfColumns].push(child);
    });
  };

  (0, _react.useEffect)(function () {
    calculateNumberOfColumns();
    window.addEventListener("resize", calculateNumberOfColumns);
    return function () {
      return window.removeEventListener("resize", calculateNumberOfColumns);
    };
  });
  createColumns();
  return _react["default"].createElement("div", {
    className: _stylesModule["default"].grid,
    ref: grid,
    style: {
      gridGap: gap
    }
  }, Array(numberOfColumns).fill().map(function (_, i) {
    return _react["default"].createElement("div", {
      className: _stylesModule["default"].column,
      key: i,
      style: {
        gridGap: gap
      }
    }, columns[i]);
  }));
};

MasonryGrid.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].node), _propTypes["default"].node]).isRequired,
  gap: _propTypes["default"].string,
  minWidth: _propTypes["default"].number
};
MasonryGrid.defaultProps = {
  children: [],
  gap: "100px",
  minWidth: 800
};
var _default = MasonryGrid;
exports["default"] = _default;
