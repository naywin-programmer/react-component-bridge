import {rcb_register, rcb_debug} from '../rcb_register';
import _ from 'lodash';

export function rcbGetProps(id = null) {
	if(!document.getElementById(id)) {
		console.error(`${id} id is not defined.`);
		return null;
	}

	var dataset = document.getElementById(id).dataset;
	if(rcb_debug === true) {
		if(!_.size(dataset)) {
			console.error(`(Warning Id: ${id}) props option set true in rcbRender (in main.js) for ${id} id but it is not defined any props (in project template). 
						\neg. you can define props like <div id='${id}' data-exampleprops='anything'></div>.`);
		}
	}
	return {...dataset};
}

export function rcbContainerChecker(type) {
	if(rcb_register.hasOwnProperty(type)) {
		return rcb_register[type];
	}
	console.error(`${type} key is not register in rcb_register.js.`);
	return false;
}