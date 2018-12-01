import {rcbReactRender} from './rcb_react_render';
import {rcbContainerChecker, rcbGetProps} from './rcb_helper';
import {rcb_debug} from '../rcb_register';

export default function rcbRender(type, id, component, use_props = null) {
	let Components = rcbContainerChecker(type);
	if(document.getElementById(id) && Components) {
		let DynamicComponent = Components[component];
		let props = use_props && rcbGetProps(id);
		rcbReactRender(id, DynamicComponent, props);
	} else {
		if(rcb_debug === true) {
			if(!document.getElementById(id)) {
				console.error(`${id} id is not found. but render with rcbRender()`);
				return false;
			}
			console.error(`Component Container for ${id} is not found.`);
			return false;
		}
	}
}