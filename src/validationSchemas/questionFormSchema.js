import * as Yup from 'yup'

export const QuestionFormSchema = Yup.object().shape({
    email: Yup.string().email("Not a valid email").required('You must provide an email address'),
    choice: Yup.string().required('you must choose wisely'),
    pokemon: Yup.string().required("Please select a pokemon"),
    question: Yup.string().required('Please ask a question').max(150, "That's too much!"),
})