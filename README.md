# 🍿 영화 박스오피스 [![Netlify Status](https://api.netlify.com/api/v1/badges/44138556-c9f2-4b7c-8702-85f6c4337beb/deploy-status)](https://app.netlify.com/sites/movie-boxoffice-app/deploys)

- **프로젝트 개요** <br/>
영화진흥위원회, TMDB api를 사용한 박스오피스 및 영화 상세정보 조회 어플리케이션입니다.
- **배포 URL** <br/> https://movie-boxoffice-app.netlify.app/

<br/>

# 실행 방법
1. git clone https://github.com/rlaebqebq/movie-boxoffice-app
2. cd movie-boxoffice-app
3. yarn install
4. yarn start

<br/>

# 📁 폴더 구조
<details>
<summary>펼치기</summary>

📦src<br />
 ┣ 📂assets<br />
 ┃ ┣ 📂svg<br />
 ┃ ┃ ┣ 📜arrow-down.svg<br />
 ┃ ┃ ┣ 📜arrow-left-long.svg<br />
 ┃ ┃ ┣ 📜arrow-left.svg<br />
 ┃ ┃ ┣ 📜arrow-right.svg<br />
 ┃ ┃ ┣ 📜arrow-up.svg<br />
 ┃ ┃ ┣ 📜bars-solid.svg<br />
 ┃ ┃ ┣ 📜bookmark.svg<br />
 ┃ ┃ ┣ 📜index.ts<br />
 ┃ ┃ ┣ 📜spinner.svg<br />
 ┃ ┃ ┗ 📜xmark-solid.svg<br />
 ┃ ┗ 📜emptyPoster.png<br />
 ┣ 📂components<br />
 ┃ ┣ 📂Dropdown<br />
 ┃ ┃ ┣ 📜dropdown.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┗ 📂LoadingPage<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜loadingPage.module.s<br />css
 ┣ 📂hooks<br />
 ┃ ┣ 📂state<br />
 ┃ ┃ ┗ 📜index.ts<br />
 ┃ ┣ 📂worker<br />
 ┃ ┃ ┣ 📜axios.ts<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┣ 📜useAxios.tsx<br />
 ┃ ┃ ┗ 📜useAxiosCore.tsx<br />
 ┃ ┗ 📜movieQuery.ts<br />
 ┣ 📂routes<br />
 ┃ ┣ 📂Boxoffice<br />
 ┃ ┃ ┣ 📜boxoffice.module.scs<br />s
 ┃ ┃ ┣ 📜boxofficeList.tsx<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂Gnb<br />
 ┃ ┃ ┣ 📜gnb.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂Movieinfo<br />
 ┃ ┃ ┣ 📂BoxofficeRecord<br />
 ┃ ┃ ┃ ┣ 📜drawGraph.tsx<br />
 ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┣ 📜recordGraphStyle.t<br />s
 ┃ ┃ ┃ ┗ 📜recordItem.ts<br />
 ┃ ┃ ┣ 📂MovieinfoDetail<br />
 ┃ ┃ ┃ ┣ 📜calcWeek.ts<br />
 ┃ ┃ ┃ ┣ 📜genreDict.ts<br />
 ┃ ┃ ┃ ┣ 📜infoCompany.tsx<br />
 ┃ ┃ ┃ ┣ 📜infoGenreEN.tsx<br />
 ┃ ┃ ┃ ┣ 📜infoGenreKR.tsx<br />
 ┃ ┃ ┃ ┣ 📜infoPlot.tsx<br />
 ┃ ┃ ┃ ┣ 📜infoTags.tsx<br />
 ┃ ┃ ┃ ┣ 📜infoTitle.tsx<br />
 ┃ ┃ ┃ ┗ 📜moviePoster.module<br />.scss
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜movieinfo.module.scs<br />s
 ┃ ┣ 📂MyBookmark<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜myBookmark.module.sc<br />ss
 ┃ ┣ 📜index.tsx<br />
 ┃ ┗ 📜routes.module.scss<br />
 ┣ 📂states<br />
 ┃ ┣ 📜button.ts<br />
 ┃ ┗ 📜movie.ts<br />
 ┣ 📂styles<br />
 ┃ ┣ 📂base<br />
 ┃ ┃ ┣ 📜_fonts.scss<br />
 ┃ ┃ ┣ 📜_more.scss<br />
 ┃ ┃ ┣ 📜_reset.scss<br />
 ┃ ┃ ┗ 📜font.ts<br />
 ┃ ┣ 📂constants<br />
 ┃ ┃ ┗ 📜_colors.scss<br />
 ┃ ┣ 📂mixins<br />
 ┃ ┃ ┣ 📜_flexbox.scss<br />
 ┃ ┗ 📜index.scss<br />
 ┣ 📂types<br />
 ┃ ┣ 📜dailyBoxoffice.d.ts<br />
 ┃ ┣ 📜movie.d.ts<br />
 ┃ ┣ 📜movieInfo.d.ts<br />
 ┃ ┣ 📜moviePoster.d.ts<br />
 ┃ ┗ 📜tmdbSearch.d.ts<br />
 ┣ 📂utils<br />
 ┃ ┣ 📜localStorage.ts<br />
 ┃ ┣ 📜movie.ts<br />
 ┃ ┗ 📜url.ts<br />
 ┣ 📜index.tsx<br />
 ┣ 📜react-app-env.d.ts<br />
 ┣ 📜reportWebVitals.ts<br />
 ┗ 📜setupTests.ts<br />

</details>

<br/>

# 🔨 기술 스택
<div align="left">
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>
</div>
<br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| axios | HTTP 통신 라이브러리 | 0.27.2 |
| classnames | styles 관련 | 2.3.1 |
| dayjs | 날짜 라이브러리 | 1.11.2 |
| react-use | react 편의 | 17.4.0 |
| react-query | HTTP 통신 관련 | 3.39.0 |
| recoil | 상태관리 라이브러리 | 0.7.3 |
| victory | 차트 라이브러리 | 36.4.1 |

<br/>

# 🏞 기능 설명


### 일별 박스오피스
- 일별로 박스오피스 순위를 확인할 수 있습니다.

|![Kapture 2022-06-13 at 11 06 27 복사본](https://user-images.githubusercontent.com/50236673/173267323-a2ffc4ee-97fc-4a19-974a-718eecf63e27.gif)|![Kapture 2022-06-13 at 11 06 27](https://user-images.githubusercontent.com/50236673/173267190-5a803a3a-d80a-4c4a-b7b7-18e9fa176d79.gif)||
|:---:|:---:|:---:|

### 영화 상세정보
- 선택한 영화가 저번주부터 이번주까지 박스오피스에 올랐다면 박스오피스 순위, 매출액, 관객수, 스크린수, 상영횟수를 그래프로 보여줍니다.
- 선택한 영화가 이번주에 박스오피스에 올라왔다면 그래프 정보가 없습니다.

|![Kapture 2022-06-16 at 18 44 56](https://user-images.githubusercontent.com/50236673/174043083-94d2dc3b-d2d8-4a3d-a896-4b9bcae37163.gif)|![Kapture 2022-06-16 at 18 21 11](https://user-images.githubusercontent.com/50236673/174038177-4b1f7968-c0ee-4928-81f9-57c119bc2dbc.gif)|![Kapture 2022-06-16 at 18 20 39](https://user-images.githubusercontent.com/50236673/174038138-944f6d94-8d8a-4851-8062-3c4b4cd9130b.gif)|
|:---:|:---:|:---:|

### 내 즐겨찾기

- 선택한 영화를 내 즐겨찾기에 넣고 뺄 수 있습니다.
- 즐겨찾기에 추가된 영화는 목록에서 확인 가능합니다.

|![Kapture 2022-06-16 at 18 41 16](https://user-images.githubusercontent.com/50236673/174042335-5348e6ad-cc1c-47cc-9d80-47400f8aca1a.gif)|![Kapture 2022-06-16 at 18 48 15](https://user-images.githubusercontent.com/50236673/174043987-fc9d7721-0cad-4425-aa4c-e833a2cd2f37.gif)|![Kapture 2022-06-16 at 18 48 55](https://user-images.githubusercontent.com/50236673/174044012-03ecccc8-1932-4697-b918-33232c0f4cc3.gif)|
|:---:|:---:|:---:|

<br />

### 추후 구현할 기능, 개선할 점
- <s>영화진흥위원회 api는 영화 포스터 이미지 제공을 안 하므로, 영화 포스터 가져오는 기능 추가 예정.</s>
- <s>영화 상세정보 그래프를 영화가 개봉한 날짜부터 조회한 날짜까지의 박스오피스 순위 변화, 스크린수, 관객 수, 그래프로 변경 예정. (고려해야 하는 사항_재개봉 영화가 박스오피스 영화에 올랐을 경우</s>
- <s>영화 포스터 api https로 요청했을 때 응답안하는 점</s>
