import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		searchTerm: '',
		data: [],
	},

	reducers: {
		changeSearchTerm(state, action) {
			state.searchTerm = action.payload;
		},

		// NOTE: Assumptions:
		// action.payload === { name: 'abc', cost: 1200 }
		addCar(state, action) {
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(), // Generate a random id
			});
		},

		removeCar(state, action) {
			// Assumptions:
			// action.payload === the id of the car I want to remove
			const updated = state.data.filter((car) => {
				return car.id !== action.payload;
			});

			state.data = updated;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
