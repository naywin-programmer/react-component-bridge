# React Component Bridge for Laravel

- react-component-bridge code library is development by Nay Win (naywinwd@gmail.com)(https://github.com/naywin-programmer)
- this would be really useful and will help to reduce unnecessary api request for frontend when using with reactjs and laravel.

### Example
rcbRender(screenContainer, id, reactComponent, useProps)

- screenContainer need to give container file (may be index.js) which included react components.
- id is html element id
- react component name is to load react component
- useProps is default false. If true, element data attribute will change to props for react component.

### rcb_register.js
- this file used to register react components

## Installation
- php artisan preset react (in Terminal)
- Download this folder and put inside your laravel project -> resources -> js
- Change the folder name to src
- You can remove js -> components folder if you want. It was inclued by default.
- change in app.js like:
from

require('./src/components/Example');

to

require('./src/main');

## Tutorial Video will coming soon. :-)