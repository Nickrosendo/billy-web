import React from 'react';
import styles from './RestaurantsListItem.module.css';

const RestaurantListItem=(props) => (
	<li className={styles.verticalListItem} >
		<img className={styles.verticalListItemImg} src={props.item.logo} alt={props.item.name}/>
		<div className={styles.itemContent}>
			<p>{props.item.name}</p>
			<p> Aberto - 10h ~ 22h</p>
			<p> Hambúrgueria</p>
			<div className={styles.itemContainer}>
				<p>
					<i className="icon-map-marker" /> 200m
				</p>
				<p>
					<i className="icon-clock-o" /> 40min
				</p>
			</div>
			<p className={styles.rateContainer}> <i className="icon-star" /> <i className="icon-star" /> <i className="icon-star" /> <i className="icon-star-half-empty" /> (9000+)</p>
		</div>
	</li>
);


export default RestaurantListItem;