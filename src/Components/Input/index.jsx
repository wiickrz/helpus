import * as S from "./style";

export const TextField = ({
  label,
  type,
  icon: Icon,
  register,
  name,
  error = "",
  toggleType = () => {},
  ...props
}) => {
  return (
    <S.Input error={!!error}>
      <label>{label}</label>
      <div>
        <input type={type} {...register(name)} {...props} />
        {Icon && (
          <div onClick={toggleType}>
            <Icon />
          </div>
        )}
        {!!error && <S.Error>{error}</S.Error>}
      </div>
    </S.Input>
  );
};
