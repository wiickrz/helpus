import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().required("Nome de usuário é obrigatório!"),
  password: yup.string().required("Senha é obrigatório!"),
});

export default formSchema;
