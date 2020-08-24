import PropTypes from "prop-types"
import React from "react"

export const Input = ({ id, placeholder, type, handler, error }) => (
  <div className="field">
    <label className="label" htmlFor={id}>
      {placeholder}
    </label>
    <div className="control">
      <input type={type} id={id} onChange={handler} required pattern={"^[a-zA-Z]+$"} />
    {error ? <p className="help is-danger">{error}</p> : null}
  </div>
  </div>
)


Input.propTypes = {
  error: PropTypes.string,
  handler: PropTypes.func,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}

Input.defaultProps = { type: "text" }
