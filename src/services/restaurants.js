import axios from "axios";

import { apis } from "../config";

export class RestaurantsServices {
  constructor() {
    this.client = axios.create({ baseURL: apis.billy_server });
  }

  async fetchNearRestaurants(coordinates) {
    try {
      if (!coordinates) {
        throw new Error("missing coordinates");
      }
      const { data } = await this.client.post("/restaurants", coordinates);
      return data;
    } catch (err) {
      if (err) {
        throw new Error("Error on fetchNearRestaurants: " + err.message);
      }
    }
  }

  async fetchAllRestaurants() {
    try {
      const { data } = await this.client.get("/restaurants");
      return data;
    } catch (err) {
      if (err) {
        throw new Error("Error on fetchAllRestaurants: " + err.message);
      }
    }
  }
}
