import { FadeLoader } from "react-spinners";
import { styled } from "styled-components";

const SLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <SLoading>
      <FadeLoader color="#F97B22" />
    </SLoading>
  );
};
