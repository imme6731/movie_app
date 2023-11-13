import { styled } from "styled-components";
import { nowPalying, nowPlaying } from "../../api";
import { useEffect, useState } from "react";

const MainBanner = styled.section`
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

export const Home = () => {
  // 1. 마운트 시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPalying();
        setNowPlayingData(results);
        setLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  console.log(loading);
  console.log(nowPlayingData);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {nowPalying && (
            <MainBanner>
              <BlackBg />
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview}</p>
            </MainBanner>
          )}
        </div>
      )}
    </>
  );
};
