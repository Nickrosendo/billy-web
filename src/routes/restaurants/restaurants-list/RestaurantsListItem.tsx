import React from 'react';
import { Link } from "react-router-dom";
import styles from './RestaurantsListItem.module.css';

interface IProps {
	item: any
}

const RestaurantListItem: React.SFC<IProps> = (props) => (
	<Link className={styles.verticalListItem} to={`/restaurantes/${props.item._id}`}>
		<img className={styles.verticalListItemImg} src={props.item.logo} alt={props.item.name} />
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
	</Link>
);


export default RestaurantListItem;