/**
 * Premium Data Table Component
 * Modern table with glassmorphism, advanced features, and premium styling
 * Inspired by the premium dashboard examples
 */

import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Avatar,
  Tooltip,
  Checkbox,
  Menu,
  MenuItem,
  Button,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Icons
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GetAppIcon from "@mui/icons-material/GetApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";

// Premium colors
import premiumColors from "assets/theme/base/premiumColors";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  background: premiumColors.components.card.background,
  backdropFilter: "blur(20px)",
  border: `1px solid ${premiumColors.components.card.border}`,
  borderRadius: "20px",
  boxShadow: premiumColors.components.card.shadow,
  overflow: "hidden",
  "& .MuiTable-root": {
    minWidth: 650,
  },
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  "& .MuiTableCell-head": {
    backgroundColor: "transparent",
    color: premiumColors.text.primary,
    fontWeight: 600,
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    borderBottom: `1px solid ${premiumColors.components.card.border}`,
    padding: "16px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "all 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    transform: "translateX(4px)",
  },
  "&.Mui-selected": {
    backgroundColor: "rgba(123, 66, 246, 0.1)",
    border: `1px solid ${premiumColors.primary.light}30`,
  },
  "& .MuiTableCell-root": {
    borderBottom: `1px solid ${premiumColors.components.card.border}`,
    padding: "16px",
    color: premiumColors.text.secondary,
    fontSize: "14px",
  },
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: `1px solid ${premiumColors.components.card.border}`,
  borderRadius: "12px",
  padding: "16px 20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
}));

function PremiumDataTable({
  columns,
  rows,
  title,
  subtitle,
  searchable = true,
  selectable = false,
  actions = [],
  onRowClick,
  loading = false,
  emptyMessage = "No data available",
  ...rest
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  // Filter and sort data
  const filteredRows = useMemo(() => {
    if (!searchTerm) return rows;
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [rows, searchTerm]);

  const sortedRows = useMemo(() => {
    if (!orderBy) return filteredRows;
    return [...filteredRows].sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredRows, orderBy, order]);

  const paginatedRows = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return sortedRows.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedRows, page, rowsPerPage]);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = paginatedRows.map((row, index) => index);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRowSelect = (event, index) => {
    event.stopPropagation();
    const selectedIndex = selected.indexOf(index);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, index);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const renderCellContent = (column, value, row) => {
    switch (column.type) {
      case "avatar":
        return (
          <Avatar
            src={value}
            sx={{
              width: 32,
              height: 32,
              background: premiumColors.primary.gradient,
            }}
          >
            {typeof value === "string" ? value[0] : ""}
          </Avatar>
        );
      case "chip":
        return (
          <Chip
            label={value}
            size="small"
            sx={{
              backgroundColor: column.chipColor || "rgba(255, 255, 255, 0.1)",
              color: premiumColors.text.primary,
              fontSize: "12px",
            }}
          />
        );
      case "progress":
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                flex: 1,
                height: "6px",
                borderRadius: "3px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: premiumColors.primary.main,
                  borderRadius: "3px",
                },
              }}
            />
            <Typography variant="caption" sx={{ color: premiumColors.text.secondary }}>
              {value}%
            </Typography>
          </Box>
        );
      case "status":
        const statusColors = {
          active: "#4CAF50",
          inactive: "#f44336",
          pending: "#FF9800",
          completed: "#2196F3",
        };
        return (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: statusColors[value] || premiumColors.text.secondary,
              }}
            />
            <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
              {value}
            </Typography>
          </Box>
        );
      default:
        return value;
    }
  };

  return (
    <Box {...rest}>
      {/* Header */}
      <SearchContainer>
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: premiumColors.text.primary,
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              sx={{
                color: premiumColors.text.secondary,
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {searchable && (
            <TextField
              placeholder="Search..."
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: premiumColors.text.secondary, fontSize: "20px" }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  },
                },
              }}
            />
          )}

          <Tooltip title="Filter">
            <IconButton
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: premiumColors.text.secondary,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <FilterListIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Refresh">
            <IconButton
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: premiumColors.text.secondary,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <RefreshIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Export">
            <IconButton
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: premiumColors.text.secondary,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <GetAppIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </SearchContainer>

      {/* Table */}
      <StyledTableContainer>
        {loading && (
          <LinearProgress
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: premiumColors.primary.main,
              },
            }}
          />
        )}

        <Table>
          <StyledTableHead>
            <TableRow>
              {selectable && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={selected.length > 0 && selected.length < paginatedRows.length}
                    checked={paginatedRows.length > 0 && selected.length === paginatedRows.length}
                    onChange={handleSelectAllClick}
                    sx={{
                      color: premiumColors.text.secondary,
                      "&.Mui-checked": {
                        color: premiumColors.primary.main,
                      },
                    }}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sortDirection={orderBy === column.field ? order : false}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.field}
                      direction={orderBy === column.field ? order : "asc"}
                      onClick={() => handleSort(column.field)}
                      sx={{
                        color: premiumColors.text.primary,
                        "&.Mui-active": {
                          color: premiumColors.primary.main,
                        },
                      }}
                    >
                      {column.headerName}
                    </TableSortLabel>
                  ) : (
                    column.headerName
                  )}
                </TableCell>
              ))}
              {actions.length > 0 && <TableCell>Actions</TableCell>}
            </TableRow>
          </StyledTableHead>

          <TableBody>
            {paginatedRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (selectable ? 1 : 0) + (actions.length > 0 ? 1 : 0)}
                  sx={{ textAlign: "center", py: 4 }}
                >
                  <Typography variant="body2" sx={{ color: premiumColors.text.secondary }}>
                    {emptyMessage}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginatedRows.map((row, index) => {
                const isItemSelected = isSelected(index);
                return (
                  <StyledTableRow
                    key={row.id || index}
                    selected={isItemSelected}
                    onClick={() => onRowClick && onRowClick(row)}
                  >
                    {selectable && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          onChange={(event) => handleRowSelect(event, index)}
                          sx={{
                            color: premiumColors.text.secondary,
                            "&.Mui-checked": {
                              color: premiumColors.primary.main,
                            },
                          }}
                        />
                      </TableCell>
                    )}
                    {columns.map((column) => (
                      <TableCell key={column.field}>
                        {renderCellContent(column, row[column.field], row)}
                      </TableCell>
                    ))}
                    {actions.length > 0 && (
                      <TableCell>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          {actions.map((action, actionIndex) => (
                            <Tooltip key={actionIndex} title={action.tooltip}>
                              <IconButton
                                size="small"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  action.onClick(row);
                                }}
                                sx={{
                                  color: action.color || premiumColors.text.secondary,
                                  "&:hover": {
                                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                                  },
                                }}
                              >
                                {action.icon}
                              </IconButton>
                            </Tooltip>
                          ))}
                        </Box>
                      </TableCell>
                    )}
                  </StyledTableRow>
                );
              })
            )}
          </TableBody>
        </Table>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={sortedRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            borderTop: `1px solid ${premiumColors.components.card.border}`,
            color: premiumColors.text.secondary,
            "& .MuiTablePagination-selectIcon": {
              color: premiumColors.text.secondary,
            },
            "& .MuiTablePagination-actions": {
              color: premiumColors.text.secondary,
            },
          }}
        />
      </StyledTableContainer>
    </Box>
  );
}

PremiumDataTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      type: PropTypes.oneOf(["text", "avatar", "chip", "progress", "status"]),
      chipColor: PropTypes.string,
    })
  ).isRequired,
  rows: PropTypes.array.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  searchable: PropTypes.bool,
  selectable: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      tooltip: PropTypes.string,
      onClick: PropTypes.func.isRequired,
      color: PropTypes.string,
    })
  ),
  onRowClick: PropTypes.func,
  loading: PropTypes.bool,
  emptyMessage: PropTypes.string,
};

export default PremiumDataTable;
