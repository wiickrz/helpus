import { StyledComponents } from "./style";

export const Button = ({
  children,
  cadastroDesk = false,
  cadastroMobi = false,
  proDesk = false,
  proMobi = false,
  ...rest
}) => {
  return (
    <StyledComponents
      cadastroDesk={cadastroDesk}
      cadastroMobi={cadastroMobi}
      proDesk={proDesk}
      proMobi={proMobi}
      {...rest}
    >
      {children}
    </StyledComponents>
  );
};
