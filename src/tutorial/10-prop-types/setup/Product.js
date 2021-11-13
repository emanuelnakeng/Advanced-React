import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ id, name, image, price }) => {
	console.log(image.url);

	return (
		<article className='product'>
			<img src={image.url ? image.url : defaultImage} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

Product.defaultProps = {
	name: 'product name',
	price: 3.99,
	image: defaultImage,
};

export default Product;
