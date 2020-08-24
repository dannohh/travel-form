import PropTypes from "prop-types"
import React from "react"

export const Radio = ({ checked, name, value, handler }) => {
  return (
    <div className="control">
      <label className="radio">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handler}
          className="mr-1"
        />
        {value}
      </label>
    </div>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  handler: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}
