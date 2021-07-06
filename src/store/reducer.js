import {ActionType} from './actions';

const initialState = {
    reviews: [{
        name: `Борис Иванов`,
        odds: `мощность, внешний вид`,
        limitations: `Слабые тормозные колодки (пришлось заменить)`,
        rating: 3,
        comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.`,
        date: new Date("2021-07-04")
    }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_REVIEW:
      return {
        ...state,
        reviews: [action.payload, ...state.reviews]
      };

    default: {
        return {
            ...state
        }
    }

  }
};

export default reducer;