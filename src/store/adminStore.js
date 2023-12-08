import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { createAuthSlice } from "./slices/createAuthSlice";
import { createFormsSlice } from "./slices/createFormsSlice";

export const useAdminStore = create(
    devtools(
        persist(
            (...a) => ({
                ...createAuthSlice(...a),
                ...createFormsSlice(...a),
            }),
            { name: "adminStore" }
        )
    )
);
