import PropTypes from "prop-types"
import React from "react"

export const Select = ({ selections, handler }) => (
  <div className="select">
    <select
      id={selections.id}
      onBlur={handler}
      onChange={handler}
    >
      {selections.options.map((option, i) => (
        <option value={option} key={i}>
          {option}
        </option>
      ))}
    </select>
  </div>
)

Select.propTypes = {
  selections: PropTypes.object.isRequired,
  handler: PropTypes.func,
}
