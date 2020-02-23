import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

const MasonryGrid = ({ children, gap, minWidth }) => {
  const columns = [];
  const grid = useRef();
  const [numberOfColumns, setNumberOfColumns] = useState(3);

  const calculateNumberOfColumns = () => {
    const columns = Math.round(grid.current.offsetWidth / minWidth);

    if (columns === 0) {
      setNumberOfColumns(1);
    } else {
      setNumberOfColumns(columns);
    }
  };

  const createColumns = () => {
    for (let i = 0; i < numberOfColumns; i++) columns[i] = [];
    children.forEach((child, index) =>
      columns[index % numberOfColumns].push(child)
    );
  };

  useEffect(() => {
    calculateNumberOfColumns();

    window.addEventListener("resize", calculateNumberOfColumns);
    return () => window.removeEventListener("resize", calculateNumberOfColumns);
  });
  createColumns();

  return (
    <div
      ref={grid}
      style={{ display: "grid", gridAutoFlow: "column", gridGap: gap }}
    >
      {Array(numberOfColumns)
        .fill()
        .map((_, i) => (
          <div
            className={styles.column}
            key={i}
            style={{
              display: "grid",
              gridAutoRows: "max-content",
              gridGap: gap,
            }}
          >
            {columns[i]}
          </div>
        ))}
    </div>
  );
};

MasonryGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  gap: PropTypes.string,
  minWidth: PropTypes.number,
};

MasonryGrid.defaultProps = {
  children: [],
  gap: "100px",
  minWidth: 800,
};

export default MasonryGrid;
