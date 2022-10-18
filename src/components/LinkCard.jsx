import React from 'react';

const withLinkCard =
  (Component, Component2) =>
  ({ ...props }) =>
    (
      <div>
        <a href='/docs/tentacles-ellipsible--default' className='link-item'>
          <Component {...props} />
          <div>
            <strong>Ellipsible</strong>
            <Component2 {...props} />
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
      </div>
    );

export default withLinkCard;
