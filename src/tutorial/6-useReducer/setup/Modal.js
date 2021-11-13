import React, { useEffect } from 'react';

const Modal = ({ modalContent, onClose }) => {
	useEffect(() => {
		setTimeout(() => {
			onClose();
		}, 3000);
	});
	return (
		<div className='modal'>
			<p>{modalContent}</p>
		</div>
	);
};

export default Modal;
