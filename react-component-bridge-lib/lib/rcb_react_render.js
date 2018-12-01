import React from 'react';
import ReactDOM from 'react-dom';

export function rcbReactRender(id, DynamicComponent, props) {
	ReactDOM.render(<DynamicComponent {...props} />, document.getElementById(id));
}