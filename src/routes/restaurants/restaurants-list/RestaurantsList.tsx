import React from 'react';

import RestaurantsListItem from './RestaurantsListItem';

import styles from './RestaurantsList.module.css';

interface IProps {
	restaurants: Array<any>
}

const RestaurantsList:React.SFC<IProps> = (props) => (
	<div>
		<div className={styles.logoContainer}>
			<img className={styles.logoImg} src={require('../../../assets/images/billy-pizza.png')} alt="billy-logo" />
			<span> Billy </span>
		</div>
		<ul className={styles.verticalList}>
			{props.restaurants.map(item => (
				<RestaurantsListItem item={item} key={item._id} />
			))}
		</ul>
	</div>
);

export default RestaurantsList;