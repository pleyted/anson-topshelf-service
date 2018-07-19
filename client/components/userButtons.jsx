import React from 'react';

class UserButtons extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content-user-buttons">
				<button className="reviewButton"><i class="material-icons">star</i><span className="buttonText">Write a Review</span></button>
				<div className="spanDiv">
					<button className="buttonSpans"><i class="material-icons">photo_camera</i><span className="buttonText">Add Photo</span></button>
					<button className="buttonSpans"><i class="material-icons">share</i><span className="buttonText">Share</span></button>
					<button className="buttonSpans"><i class="material-icons">save</i><span className="buttonText">Save</span></button>
				</div>
			</div>
		)
	}
}

export default UserButtons;