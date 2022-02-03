import cuid from 'cuid';
export const cuidFn = cuid;
 
export default function manageRestaurants(
    state = {
        restaurants: [],
        reviews: []
    }, action) {

    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {id: cuidFn(), text: action.text}
            return {...state, restaurants: [...state, restaurant]}

        // case 'DELETE_RESTAURANT':
        //     return 1

        default:
            return state
    }

}
