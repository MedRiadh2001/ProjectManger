export const initialState = JSON.parse(localStorage.getItem("projects")) || [];

export function projectReducer(state, action) {
    switch (action.type) {
        case "ADD_PROJECT":
            return [...state, action.payload];

        case "UPDATE_STATUS":
            return state.map((p) =>
                p.id === action.payload.id ? { ...p, status: action.payload.status } : p
            );

        case "DELETE_PROJECT":
            return state.filter((p) => p.id !== action.payload.id);

        case "UPDATE_PROJECT":
            return state.map((p) =>
                p.id === action.payload.id ? { ...p, ...action.payload.data } : p
            );

        default:
            return state;
    }
}