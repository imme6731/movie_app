import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import { styled } from "styled-components";
import { IMG_URL } from "../../constants";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.div`
  padding: 200px 15%;
  display: flex;
  justify-content: space-between;
`;

const Poster = styled.div`
  width: 45%;
  height: 70vh;
  background: url(${IMG_URL}/original/${(props) => props.$postUrl}) no-repeat
    center / cover;
`;

const TxtWrap = styled.div`
  width: 45%;
  h3 {
    font-size: 60px;
    font-weight: 600;
    line-height: 78px;
    margin-bottom: 25px;
  }
  p {
    font-size: 18px;
    margin-bottom: 25px;
  }
`;
const Top = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h3``;
const Vote = styled.p``;
const Release = styled.p``;
const RunTime = styled.p``;

const Genres = styled.ul`
  li {
    list-style: inside;
    margin-bottom: 15px;
    font-size: 18px;
  }
  li:last-child {
    margin-bottom: 25px;
  }
`;

const Desc = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  padding: 8% 0;
  p {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 32px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);

  const [results, setResults] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useScrollTop();

  useEffect(() => {
    (async () => {
      try {
        const data = await movieDetail(id);
        setResults(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error:" + error);
      }
    })();
  }, [id]);
  // console.log(results);

  return (
    <>
      <PageTitle titleName={"상세페이지"} />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {movieDetail && (
            <>
              <Container>
                <Poster $postUrl={results.poster_path} />
                <TxtWrap>
                  <Top>
                    <Title>{results.title}</Title>
                    <Vote>평점 {Math.round(results.vote_average)}점</Vote>
                    <Genres>
                      {results.genres.map((genres) => (
                        <li key={genres.id}>{genres.name}</li>
                      ))}
                    </Genres>
                    <Release>{results.release_date}</Release>
                    <RunTime>런타임 {results.runtime}분</RunTime>
                  </Top>
                  <Desc>
                    <p>{results.overview}</p>
                  </Desc>
                </TxtWrap>
              </Container>
            </>
          )}
        </div>
      )}
    </>
  );
};
