import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './basket/reducer';
import IntemsInOption from './option/reducer';
import ItemsDisable from './disable/reducer'
import ItemBooking from './booking/reducer'
import ItemNavigate from './navigate/navigate'
import ItemLocation from './location/reducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    option: IntemsInOption,
    disable: ItemsDisable,
    booking: ItemBooking,
    navigate: ItemNavigate,
    location: ItemLocation,
  },
});
 