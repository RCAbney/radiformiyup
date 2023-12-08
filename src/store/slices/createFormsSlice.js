const initialState = {
    formData: {
        email: "",
        choice: "",
        preference: "",
        question: "",
    },
};

export const createFormsSlice = (set) => ({
    ...initialState,
    resetFormData: () => set(initialState, false, "formsSlice/resetFormData"),
    updateFormData: (key, val) => set((state) => (
        {
        formData: {
            ...state.formData,
            [key]: val
        }
    }
    ), false, `formsSlice/updateFormData/${key}`)
});
