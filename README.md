# movie app 23_11_08

## 설치항목

- [x] styled-components
- [x] react-router-dom
- [x] styled-reset
- [] 폼 관련
- [] 타이틑 관련
- [] 폰트어썸
- [x] swiper

## todo

- [x] router 설정
- [x] 각 컴포넌트 제작
- [x] api 설정
- [x] loading UI
- [] header 스크롤 이벤트
- [] Home ui 및 전체 구성
- [] Detail ui 및 전체 구성 컴포넌트 구성
- [] Search ui 및 전체 구성 컴포넌트 구성
- [] 404 페이지 ui 구성

### new

- fetch
- useEffect
- try ~ catch
- async ~ awite
- 비구조할당 값명 변경

#### api작업

> fetch 변수 활용

- 기본 url 주소 설정 (함수)
- 사용될 api params 주소 설정 (함수)
- fetch(사용할 url함수명, options).then(res => res.json()) \*\* 이때 json 형식으로 리턴해야함
- 사용될 params의 데이터를 호출하기 윟애 위에 작성한 식을 함수로 표현하여 내보내기함

> 컴포넌트에서 api 활용하기

- useEffect를 활용하여 랜더링, 업데이트 시 사용할 함수를 작성한다 useEffect(( ) => { }, [ ])

- async/await를 사용하여 기존의 Promise를 보다 간결하게 작성 (설명 : https://velog.io/@kim_unknown_/JavaScript-Asynchronous)

- try-catch 구문을 사용하여 에러 처리

- useEffect 내에서 작성한 값을 사용하기 위해 useState hook을 사용하여 밖에서 쓸 수 있게 작성

- 바로 데이터 값을 불러오기하면 값을 불러오는 시간 때문에 에러 발생 >> loading 사용
