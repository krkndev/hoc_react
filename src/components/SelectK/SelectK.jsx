import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
const SelectK = ({
  content,
  multiOps = false,
  colors = ['#ddd', '#bbb'],
  defaults,
  onChange,
  label,
  id,
  className,
  borderRadius = 0,
  closeOnSelect,
}) => {
  return (
    <Col>
      <Row xs={1}>
        <Select
          className={className}
          inputId={id}
          closeMenuOnSelect={closeOnSelect ? true : false}
          placeholder={label}
          isMulti={multiOps ? true : false}
          options={content}
          defaultValue={defaults ? content : false}
          onChange={onChange}
          theme={(theme) => ({
            ...theme,
            borderRadius: borderRadius,
            colors: {
              ...theme.colors,
              primary25: colors[0],
              primary: colors[1],
            },
          })}
        />
      </Row>
    </Col>
  );
};

SelectK.propTypes = {
  /** Receives an array of objects with value , label pair */
  content: PropTypes.any,
  /** If set, can pick multiple options */
  multiOps: PropTypes.bool,
  /** Recieves an array of 2 colors to set the theme */
  colors: PropTypes.array,
  /** If set , content will be showed as default */
  defaults: PropTypes.bool,
  /** Takes a function to handle onChange events */
  onChange: PropTypes.func,
  /** Takes a string to display text inside the select */
  label: PropTypes.string,
  /** Takes a string to change the border radius */
  borderRadius: PropTypes.string,
  /** If set closes the dropdown after select */
  closeOnSelect: PropTypes.bool,
};

export default SelectK;
