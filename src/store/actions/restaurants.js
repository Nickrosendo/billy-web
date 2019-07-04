import axios from "axios";

export function setRestaurants(list) {
  return {
    type: "SET_RESTAURANTS",
    list
  };
}

export function setRestaurant(currentRestaurant) {
  return {
    type: "SET_RESTAURANT",
    currentRestaurant
  };
}

const getCurrentLocation = options => {
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

export const fetchNearRestaurants = () => async dispatch => {
  try {
    const position = await getCurrentLocation();
    if (position) {
      const cordinates = {
        latitude: position.coords.latitude,
        longitute: position.coords.longitude
      };
      const { data } = await axios.post(
        "https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants",
        { cordinates }
      );
      dispatch({
        type: "SET_RESTAURANTS",
        list: data
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

export const fetchRestaurants = () => async dispatch => {
  try {
    const { data } = await axios.get(
      "https://us-central1-billy-web.cloudfunctions.net/funcApp/api/restaurants"
    );
    dispatch({
      type: "SET_RESTAURANTS",
      list: data
    });
    return true;
  } catch (error) {
    if (error) {
      console.error("Error fetching Restaurants: ", error);
      return false;
    }
  }
};
