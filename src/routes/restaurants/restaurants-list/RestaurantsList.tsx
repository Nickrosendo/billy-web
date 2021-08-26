import React from "react";

import RestaurantsListItem from "./RestaurantsListItem";

import styles from "./RestaurantsList.module.css";

import { MainEmptyState } from "../../../components";

interface IProps {
  restaurants: Array<any>;
}

const RestaurantsList: React.FC<IProps> = ({ restaurants = [] }) => {
  const hasItems = restaurants && restaurants.length;

  return (
    <div>
      <div className={styles.logoContainer}>
        <img
          className={styles.logoImg}
          src={require("../../../assets/images/billy-pizza.png")}
          alt="billy-logo"
        />
        <span> Billy </span>
      </div>
      <ul className={styles.verticalList}>
        {hasItems ? (
          restaurants.map((item) => (
            <RestaurantsListItem item={item} key={item._id} />
          ))
        ) : (
          <MainEmptyState title="Não há restaurantes disponíveis." />
        )}
      </ul>
    </div>
  );
};

export default RestaurantsList;
