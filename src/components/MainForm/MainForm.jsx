import { useState } from "react";
import { Formik, Field, Form } from "formik";
import { QuestionFormSchema } from "../../validationSchemas/questionFormSchema"
import { useAdminStore } from "../../store/adminStore";
import usePokemonData from "../../queryHooks/usePokemonData";

function MainForm() {
    const formData = useAdminStore((state) => state.formData);
    const updateFormData = useAdminStore((state) => state.updateFormData);
    const resetFormData = useAdminStore((state) => state.resetFormData);
    const { user, canSubmit } = useAdminStore((state) => state.user);

    const useInitialValues = (input) => {
        const [initialValues] = useState(input);
        return initialValues;
    };

    const pokemonData = usePokemonData();

    return (
        <Formik
            enableReinitialize
            validateOnMount
            initialValues={useInitialValues(formData)}
            validationSchema={QuestionFormSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));

                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                errors,
                touched,
                handleSubmit,
                handleChange,
                handleBlur,
                isSubmitting,
                resetForm,
            }) => {
                return (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-96 p-6 m-6 border border-gray-300 rounded-md"
                    >
                        <div name="email" className="mb-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </label>
                            </div>
                            {errors.email && touched.email && (
                                <div className="mt-2 text-sm text-red-600">
                                    {errors.email}
                                </div>
                            )}
                            <div className="mt-2">
                                <Field
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="email"
                                    name="email"
                                    placeholder="email address"
                                    onChange={(e) => {
                                        updateFormData("email", e.target.value);
                                        handleChange(e);
                                    }}
                                    onBlur={(e) => {
                                        updateFormData("email", e.target.value);
                                        handleBlur(e);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="mb-6">
                            <fieldset>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Choose something
                                    </label>
                                </div>
                                {errors.choice && touched.choice && (
                                    <div className="mt-2 mb-1 text-sm text-red-600">
                                        {errors.choice}
                                    </div>
                                )}
                                <div className="space-y-5">
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <Field
                                                type="radio"
                                                name="choice"
                                                value="yes"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                onChange={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleChange(e);
                                                }}
                                                onBlur={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleBlur(e);
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label
                                                htmlFor="yes"
                                                className="font-medium text-gray-900"
                                            >
                                                Yes
                                            </label>{" "}
                                            <span className="text-gray-500">
                                                alright chums let&rsquo;s do
                                                this
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <Field
                                                type="radio"
                                                name="choice"
                                                value="no"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                onChange={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleChange(e);
                                                }}
                                                onBlur={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleBlur(e);
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label
                                                htmlFor="no"
                                                className="font-medium text-gray-900"
                                            >
                                                No
                                            </label>{" "}
                                            <span className="text-gray-500">
                                                Not on ur life pal
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-5">
                                    <div className="relative flex items-start">
                                        <div className="flex h-6 items-center">
                                            <Field
                                                type="radio"
                                                name="choice"
                                                value="idk"
                                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                onChange={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleChange(e);
                                                }}
                                                onBlur={(e) => {
                                                    updateFormData(
                                                        "choice",
                                                        e.target.value
                                                    );
                                                    handleBlur(e);
                                                }}
                                            />
                                        </div>
                                        <div className="ml-3 text-sm leading-6">
                                            <label
                                                htmlFor="iDontKnow"
                                                className="font-medium text-gray-900"
                                            >
                                                I don&rsquo;t know
                                            </label>{" "}
                                            <span className="text-gray-500">
                                                Hello there.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="mb-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Choose a pokemon!
                                </label>
                                {errors.pokemon && touched.pokemon && (
                                    <div className="mt-2 text-sm text-red-600">
                                        {errors.pokemon}
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <Field
                                    as="select"
                                    name="pokemon"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {
                                        updateFormData(
                                            "pokemon",
                                            e.target.value
                                        );
                                        handleChange(e);
                                    }}
                                    onBlur={(e) => {
                                        updateFormData(
                                            "pokemon",
                                            e.target.value
                                        );
                                        handleBlur(e);
                                    }}
                                >
                                    <option value="">---</option>
                                    {pokemonData.isLoading
                                        ? null
                                        : pokemonData.data.results &&
                                          pokemonData.data.results.map(
                                              (pokemon) => (
                                                  <option
                                                      key={pokemon.name}
                                                      value={pokemon.name}
                                                  >
                                                      {pokemon.name}
                                                  </option>
                                              )
                                          )}
                                </Field>
                            </div>
                        </div>
                        <div name="question" className="mb-6">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Question
                                </label>
                                {errors.question && touched.question && (
                                    <div className="mt-2 text-sm text-red-600">
                                        {errors.question}
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <Field
                                    as="textarea"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"
                                    name="question"
                                    placeholder="type something here pal"
                                    onChange={(e) => {
                                        updateFormData(
                                            "question",
                                            e.target.value
                                        );
                                        handleChange(e);
                                    }}
                                    onBlur={(e) => {
                                        updateFormData(
                                            "question",
                                            e.target.value
                                        );
                                        handleBlur(e);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex align-center justify-between">
                            <button
                                type="submit"
                                disabled={
                                    (!user && !canSubmit) ||
                                    Object.keys(errors).length > 0 ||
                                    isSubmitting
                                }
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Post question
                            </button>
                            <button
                                type="reset"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={() => {
                                    resetForm({
                                        values: {
                                            email: "",
                                            choice: "",
                                            pokemon: "",
                                            question: "",
                                        },
                                    });
                                    resetFormData();
                                }}
                            >
                                Clear Form
                            </button>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default MainForm;
