// make this a HOC , generate some api like auth server
// hoc receives a component and injects information or dependencies
import React from 'react';

const withHOC =
  (Component) =>
  ({ ...props }) =>
    (
      <div style={{ border: '2px solid #bebebe', borderRadius: '3px' }}>
        <h1>This is the HOC content</h1>
        <Component {...props} />
      </div>
    );
export default withHOC;
