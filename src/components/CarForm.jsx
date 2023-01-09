import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost } from '../store';

const CarForm = () => {
	const dispatch = useDispatch();

	// Access state from formSlice
	const { name, cost } = useSelector((state) => {
		return {
			name: state.form.name,
			cost: state.form.cost,
		};
	});

	const handleNameChange = (event) => {
		dispatch(changeName(event.target.value));
	};

	const handleCostChange = (event) => {
		const carCost = parseInt(event.target.value) || 0;
		dispatch(changeCost(carCost));
	};

	return (
		<div className="car-form panel">
			<h4 className="subtitle is-3">Add Car</h4>
			<form action="">
				<div className="field-group">
					<div className="field">
						<label className="label">Name</label>
						<input
							className="input is-expanded"
							type="text"
							value={name}
							onChange={handleNameChange}
						/>
					</div>
					<div className="field">
						<label className="label">Cost</label>
						<input
							className="input is-expanded"
							type="number"
							value={cost || ''}
							onChange={handleCostChange}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CarForm;
