import React from "react";
import PropTypes from "prop-types";
function Tab({ label, isActive }) {
  return (
    <div className="tab">
      <span className={`tab-${isActive ? "active" : "inactive"} `}>
        {label}
      </span>
      {isActive ? <div className="tab-dot" /> : null}
    </div>
  );
}

Tab.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.bool,
};
export default Tab;
