import { h } from 'preact';

const RestaurantDetails = (props, state) => {
  return (
    <div style="padding-top: 15px;">
      <h1 class="text-center">
        {props.restaurant.name}
      </h1>
      <div style="border: 1px solid #ddd; border-radius: 8px; padding: 8px; margin: 15px 0; text-align: center;">
        <p style="background: #5EC6F0; color: #fff; font-weight: 600; padding: 8px; margin: 8px 0; text-align: center; border-radius: 12px;">
          Empire State Burguer
        </p>
        <img style="width: 50%; height: 100px; border-radius: 8px; display: inline-block;" src={require('../../assets/images/hamburguer-demo.jpg')} />
      </div>
      {/* <p>Id: {props.restaurant._id}</p>
      <p>Nome: {props.restaurant.name}</p> */}
    </div>
  )
}

export default RestaurantDetails;
