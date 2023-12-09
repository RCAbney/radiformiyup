const initialState = {
    isAuth: false,
    user: {
        userName: null,
        canSubmit: false,
    },
};

export const createAuthSlice = (set) => ({
    ...initialState,
    loginUser: () =>
        set(
            {
                isAuth: true,
                user: {
                    userName: "rabney",
                    canSubmit: true,
                },
            },
            false,
            "authSlice/loginUser"
        ),
    logoutUser: () => set(initialState, false, "authSlice/logoutUser"),
});
