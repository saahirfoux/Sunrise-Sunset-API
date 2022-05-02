const blankState = {index: 0, longitude: '', latitude: ''};
const list = (state = [blankState], action) => {
    const update = (item) => {
        if (item.index === action.payload.index) {
            item.longitude = action.payload.longitude;
            item.latitude = action.payload.latitude;
        }
        return item;
    }
    switch (action.type) {
        case 'add':
            return [...state.map(update), {index: action.payload.index + 1, longitude: '', latitude: ''}];
        case 'update':
            return [...state.map(update), {index: action.payload.index + 1, longitude: '', latitude: ''}];
        case 'remove':
            let copy = [...state];
            return copy.filter(item => item.index !== action.payload.index)
        case 'reset':
            return [blankState];
        default:
            return state;
    }
}

export default list;