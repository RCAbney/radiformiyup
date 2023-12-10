const initialState = {
    formData: {
        email: "",
        choice: "",
        pokemon: "",
        question: "",
    },
    activeFormNavSection: 0
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
    ), false, `formsSlice/updateFormData/${key}`),
    setActiveFormNavSection: (val) => set({activeFormNavSection: val}, false, `formsSlice/setActiveFormNavSection: ${val}`)
});
