"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropTypes = require("prop-types");
var React = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var pagination_1 = require("react-bootstrap-pagination");
var DataTableHeaderCell_1 = require("./DataTableHeaderCell");
;
;
var propTypes = {
    currentPage: PropTypes.number,
    pageSize: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    onPageClick: PropTypes.func.isRequired,
    children: PropTypes.node,
};
var defaultProps = {
    currentPage: 1,
    onPageClick: function () { },
};
var DataTable = (function (_a) {
    var pageSize = _a.pageSize, totalItems = _a.totalItems, currentPage = _a.currentPage, children = _a.children, onPageClick = _a.onPageClick;
    var start = !currentPage
        ? 0
        : Math.min(((currentPage - 1) * pageSize) + 1, totalItems);
    var end = !currentPage
        ? 0
        : Math.min(totalItems, currentPage * pageSize);
    var totalPages = Math.max(0, Math.ceil(totalItems / pageSize));
    return (React.createElement("div", { className: "dataTables_wrapper dt-bootstrap" },
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { sm: 12 },
                React.createElement(react_bootstrap_1.Table, { striped: true, bordered: true, className: "dataTable" }, children))),
        React.createElement(react_bootstrap_1.Row, null,
            React.createElement(react_bootstrap_1.Col, { sm: 5 },
                React.createElement("div", { className: "dataTables_info" },
                    "Showing ",
                    start,
                    " to ",
                    end,
                    " of ",
                    totalItems,
                    " entries")),
            React.createElement(react_bootstrap_1.Col, { sm: 7 },
                React.createElement("div", { className: "dataTables_paginate paging_simple_numbers" },
                    React.createElement(pagination_1.Pagination, { prev: "Previous", next: "Next", ellipsis: true, boundaryLinks: true, maxButtons: 5, items: totalPages, activePage: currentPage, onSelect: onPageClick }))))));
});
DataTable.propTypes = propTypes;
DataTable.defaultProps = defaultProps;
DataTable.HeaderCell = DataTableHeaderCell_1.default;
exports.default = DataTable;
//# sourceMappingURL=DataTable.js.map
