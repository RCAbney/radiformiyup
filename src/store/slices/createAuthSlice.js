export const createAuthSlice = (set) => ({
    isAuth: false,
    loginUser: () => set({ isAuth: true }, false, "authSlice/loginUser"),
    logoutUser: () => set({ isAuth: false }, false, "authSlice/logoutUser")
})