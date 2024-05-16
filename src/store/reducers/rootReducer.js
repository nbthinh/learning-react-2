const initState = {
    users: [
        { id: 1, name: "Eric" },
        { id: 2, name: "Hỏi dân IT" },
    ],
    posts: []
}

const rootReducer = (state=initState, action) => {
    console.log("action = ", action.type);
    switch (action.type) {
        case 'DELETE_USER':
            console.log(">>> Mặc cái quần: DELETE_USER: ", action);
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            console.log("users = ", users);
            return {
                ...state, users
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]
            }
    
        default: 
            return state;
    }
}
export default rootReducer