import axios from "axios";
import { RestaurantsServices } from "../../services";

export function setRestaurants(list) {
  return {
    type: "SET_RESTAURANTS",
    list,
  };
}

export function setRestaurant(currentRestaurant) {
  return {
    type: "SET_RESTAURANT",
    currentRestaurant,
  };
}

const getCurrentLocation = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      resolve,
      ({ code, message }) =>
        reject(
          Object.assign(new Error(message), { name: "PositionError", code })
        ),
      options
    );
  });
};

export const fetchNearRestaurants = () => async (dispatch) => {
  try {
    const position = await getCurrentLocation();
    if (position) {
      const coordinates = [position.coords.latitude, position.coords.longitude];
      const restaurantService = new RestaurantsServices();
      const list = await restaurantService.fetchNearRestaurants(coordinates);
      dispatch({
        type: "SET_RESTAURANTS",
        list,
      });
      return true;
    }
  } catch (error) {
    if (error) {
      console.error("Error fetching Restaurants: ", error);
      return false;
    }
  }
};

export const fetchRestaurants = () => async (dispatch) => {
  try {
    const restaurantService = new RestaurantsServices();
    const list = await restaurantService.fetchAllRestaurants();

    dispatch({
      type: "SET_RESTAURANTS",
      list,
    });
    return true;
  } catch (error) {
    if (error) {
      console.error("Error fetching Restaurants: ", error);
      return false;
    }
  }
};
