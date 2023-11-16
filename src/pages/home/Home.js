import { nowPlaying, popular, topRated, upcoming } from "../../api";
import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { ShowMovie } from "./ShowMovie";
import { Loading } from "../../components/Loading";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";

export const Home = () => {
  // 1. 마운트 시 api에 요청
  // 2. 비동기 통신
  // 3. 예외 처리

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [topRatedData, setTopRatedData] = useState();
  const [upcomingData, setUpcomingData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowPlaying();
        setNowPlayingData(nowResults);

        const { results: popResults } = await popular();
        // console.log(popResults);
        setPopData(popResults);

        const { results: topResults } = await topRated();
        setTopRatedData(topResults);

        const { results: UCResults } = await upcoming();
        setUpcomingData(UCResults);

        setIsLoading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);
  // console.log(isLoading);
  // console.log(nowPlayingData);
  // console.log(popData);
  // console.log(topRatedData);
  // console.log(upcomingData);

  return (
    <>
      <PageTitle titleName={"HOME"} />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {nowPlayingData && (
            <>
              <Banner data={nowPlayingData[0]} />
              <Layout>
                <ShowMovie
                  titleName={"현재 상영 영화"}
                  movieData={nowPlayingData}
                />
                <ShowMovie titleName={"인기 영화"} movieData={popData} />
                <ShowMovie
                  titleName={"최고 등급 영화"}
                  movieData={topRatedData}
                />
                <ShowMovie titleName={"개봉예정작"} movieData={upcomingData} />
              </Layout>
            </>
          )}
        </div>
      )}
    </>
  );
};
