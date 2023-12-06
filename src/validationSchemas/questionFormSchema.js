import * as Yup from 'yup'

export const QuestionFormSchema = Yup.object().shape({
    email: Yup.string().email("Not a valid email").required('You must provide an email address'),
    choice: Yup.string().required('you must choose wisely'),
    preference: Yup.string().required("Please select a preference"),
    question: Yup.string().required('Please ask a question').max(150, "That's too much!"),
})