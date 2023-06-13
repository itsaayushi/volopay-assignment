import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Tab({ label, isActive, path }) {
  return (
    <Link to={path}>
      <div className="tab">
        <span className={`tab-${isActive ? "active" : "inactive"} `}>
          {label}
        </span>
        {isActive ? <div className="tab-dot" /> : null}
      </div>
    </Link>
  );
}

Tab.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
};
export default Tab;
