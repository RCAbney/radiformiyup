import * as Form from "@radix-ui/react-form";
import { Formik } from "formik";
import { QuestionFormSchema } from "./validationSchemas/questionFormSchema";
import "./App.css";

function App() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Formik
                initialValues={{ email: "", question: "", preference: "" }}
                validationSchema={QuestionFormSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form.Root
                        onSubmit={handleSubmit}
                        className="w-96 p-6 border border-gray-300 rounded-md"
                    >
                        <Form.Field name="email" className="mb-6">
                            <div>
                                <Form.Label className="block text-sm font-medium leading-6 text-gray-900">
                                    Email
                                </Form.Label>
                            </div>
                            {errors.email && touched.email && (
                                <Form.Message className="mt-2 text-sm text-red-600">
                                    {errors.email}
                                </Form.Message>
                            )}
                            <Form.Control asChild className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="email"
                                    placeholder="example@email.com"
                                    required
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="preference" className="mb-6">
                            <div>
                                <Form.Label className="block text-sm font-medium leading-6 text-gray-900">
                                    Preference
                                </Form.Label>
                                {errors.preference && touched.preference && (
                                    <Form.Message className="mt-2 text-sm text-red-600">
                                        {errors.preference}
                                    </Form.Message>
                                )}
                            </div>
                            <Form.Control asChild className="mt-2">
                                <select
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={values.preference}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                >
                                    <option value="">---</option>
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </Form.Control>
                        </Form.Field>
                        <Form.Field name="question" className="mb-6">
                            <div>
                                <Form.Label className="block text-sm font-medium leading-6 text-gray-900">
                                    Question
                                </Form.Label>
                                {errors.question && touched.question && (
                                    <Form.Message className="mt-2 text-sm text-red-600">
                                        {errors.question}
                                    </Form.Message>
                                )}
                            </div>
                            <Form.Control asChild className="mt-2">
                                <textarea
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    required
                                    value={values.question}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </Form.Control>
                        </Form.Field>
                        <Form.Submit asChild>
                            <button
                                disabled={isSubmitting}
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Post question
                            </button>
                        </Form.Submit>
                    </Form.Root>
                )}
            </Formik>
        </div>
    );
}

export default App;
