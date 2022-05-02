const results = (state = [], action) => {
    switch (action.type) {
        case 'submit':
            return [...action.payload]
        case 'clear':
            return []
        default:
            return state;
    }
}

export default results;