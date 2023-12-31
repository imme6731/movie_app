import { styled } from "styled-components";

const SMainBanner = styled.section`
  height: 80vh;
  background-color: lightgray;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }
  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 1;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 30%,
    rgba(143, 143, 143, 1) 76%,
    rgba(255, 255, 255, 1) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainBanner = ({ data }) => {
  <SMainBanner>
    <BlackBg />
    <h3>{data[0].title}</h3>
    <p>{data[0].overview}</p>
  </SMainBanner>;
};
