// import * as Form from "@radix-ui/react-form";
import { Formik, Field, Form } from "formik";
import { QuestionFormSchema } from "../validationSchemas/questionFormSchema";
import { useAdminStore } from "../store/adminStore";

function App() {
    const { email, choice, preference, question } = useAdminStore(
        (state) => state.formData
    );
    const updateFormData = useAdminStore((state) => state.updateFormData);
    const resetFormData = useAdminStore((state) => state.resetFormData);

    return (
        <div className="flex flex-col justify-center h-full items-center">
            <Formik
                enableReinitialize
                initialValues={{
                    email: email,
                    choice: choice,
                    preference: preference,
                    question: question,
                }}
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
                    handleBlur,
                    handleChange,
                    isSubmitting,
                }) => (
                    <Form
                        onSubmit={handleSubmit}
                        className="w-96 p-6 border border-gray-300 rounded-md"
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
                                                    updateFormData("choice", e.target.value);
                                                    handleChange(e);
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
                                                    updateFormData("choice", e.target.value);
                                                    handleChange(e);
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
                                                    updateFormData("choice", e.target.value);
                                                    handleChange(e);
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
                                    Preference
                                </label>
                                {errors.preference && touched.preference && (
                                    <div className="mt-2 text-sm text-red-600">
                                        {errors.preference}
                                    </div>
                                )}
                            </div>
                            <div className="mt-2">
                                <Field
                                    as="select"
                                    name="preference"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => {
                                        updateFormData("preference", e.target.value);
                                        handleChange(e);
                                    }}
                                >
                                    <option value="">---</option>
                                    <option value="up">up</option>
                                    <option value="down">down</option>
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
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name="question"
                                    placeholder="type something here pal"
                                    onChange={(e) => {
                                        updateFormData("question", e.target.value);
                                        handleChange(e);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex align-center justify-between">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Post question
                            </button>
                            <button
                                type="reset"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={resetFormData}
                            >
                                Clear Form
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default App;
