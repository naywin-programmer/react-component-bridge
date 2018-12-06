# React Component Bridge for Laravel

- react-component-bridge code library is development by Nay Win (naywinwd@gmail.com)(https://github.com/naywin-programmer)
- this would be really useful and will help to reduce unnecessary api request for frontend when using with reactjs and laravel.

### Using rcbRender
```js
rcbRender(ContainerKey, id, reactComponent, props)
```
- ContainerKey have in rcb_register.js
- id is html element id
- react component name is to load react component
- props is optional. default is false. If true, element data attribute will change to props for react component.

### rcb_register.js
- this file used to register react components container

## Installation
- php artisan preset react (in Terminal)
- Download this folder and put inside your laravel project -> resources -> js
- Change the folder name to src
- You can remove js -> components folder if you want. It was inclued by default.
- change in app.js like:

from
```js
 require('./components/Example');
```
to
```js
 require('./src/main');
```
### Usage
- Note: In this Example, I assumed that the downloaded library folder name (react-component-bridge) already renamed to <b>src</b> folder name.

#### 1. Using data attribute for react component props

##### 1.1 react component (resources/js/src/components/UserAvatar.js)
```js
import React from 'react';

export class UserAvatar extends React.Component
{
	render() {
		return <img src={this.props.src} 
				width={this.props.width || 140} 
				height={this.props.height || 90} />;
	}
}
```
##### 1.2 register component in related index.js (resources/js/src/components/index.js)
```js
export * from './UserAvatar'
```
##### 1.3 add in main.js for component render (resources/js/src/main.js)
- Note: first parameter - container_key(default is same with foldername), second - html element id, third - React Component, fourth - use react props (true or false) 
```js
rcbRender('components', 'user-avatar', 'UserAvatar', true)
```
##### 1.4 now we will use in laravel blade template
```html
<div id='user-avatar' data-src='{{ asset("storage/test.jpg") }}' data-width='120'></div>
```
#### 2. Debugging, Using debugging in Development (show error about wrong id, wrong component container, etc...)

##### 2.1 set true rcb_debug (resources/js/src/react-component-bridge-lib/rcb_register.js)
```js
export const rcb_debug = true
```
#### 3. Custom Usage, Using custom folder for React components container
##### 3.1 change in rcb_register.js (resources/js/src/react-component-bridge-lib/rcb_register.js)
```js
import * as YourCustomComponentContainer from '../YourComponentContainerFolder'
export const rcb_register = {
  'your_custom_container_key': YourCustomComponentContainer
}
```
##### 3.2 now you can call your custom container from rcbRender
```js
rcbRender('your_custom_container_key', 'id', 'component')
```
#### 4. Tutorial Videos
##### 4.1 Introduction react component bridge for laravel - 01
http://bit.ly/rcblib01
