const inintialState = {
    id: undefined,
    email: undefined,
};

const userReducer = (state = inintialState, action) => {
    switch (action.type) {
        case "NEW_USER":
            return Object.assign({}, ...state, {
                id: action.id,
                email: action.email,
            });
        default:
            return state;
    }
};

export default userReducer;
