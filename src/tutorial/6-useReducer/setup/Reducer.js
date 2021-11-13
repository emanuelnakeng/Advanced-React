//reducer function
const reducer = (state, action) => {
	console.log(state);
	if (action.type === 'ADD_ITEM') {
		return {
			...state,
			people: [...state.people, action.payload],
			isModalOpen: true,
			modalContent: 'Item Added',
		};
	}
	if (action.type === 'NO_ITEM') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'Please enter name',
		};
	}

	if (action.type === 'CLOSE_MODAL') {
		return { ...state, isModalOpen: false };
	}

	if (action.type === 'REMOVE_PERSON') {
		const newPeople = state.people.filter(
			person => person.id !== action.payload
		);
		return { ...state, people: newPeople };
	}

	throw new Error('No matchin action type');
};

export default reducer;
