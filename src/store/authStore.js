import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useAuthStore = create(
    persist(
    (set) => ({
    isAuth: false,
    loginUser: () => set({ isAuth: true }),
    logoutUser: () => set({ isAuth: false })
}),
{
    name: 'auth-store',
}
    )
)

export default useAuthStore;