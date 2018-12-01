import React from 'react';

export class UserAvatar extends React.Component
{
	render() {
		return <img src={this.props.src} 
					width={this.props.width || 140} 
					height={this.props.height || 90} />;
	}
}