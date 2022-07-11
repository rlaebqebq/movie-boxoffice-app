# 🍿 영화 박스오피스 [![Netlify Status](https://api.netlify.com/api/v1/badges/44138556-c9f2-4b7c-8702-85f6c4337beb/deploy-status)](https://app.netlify.com/sites/movie-boxoffice-app/deploys)

- **프로젝트 개요** <br/>
영화진흥위원회, TMDB api를 사용한 박스오피스 및 영화 상세정보 조회 어플리케이션입니다.
- **배포 URL** <br/> https://movie-boxoffice-app.netlify.app/

|![Kapture 2022-07-11 at 11 45 16](https://user-images.githubusercontent.com/50236673/178179347-68efd709-3a22-43dc-bd6f-6ab1a4b826a6.gif)|![Kapture 2022-07-11 at 11 46 50](https://user-images.githubusercontent.com/50236673/178179452-56a4e6f1-f069-4a46-b8d7-6201f38bebe2.gif)|![Kapture 2022-07-11 at 11 48 07](https://user-images.githubusercontent.com/50236673/178179554-ad761efe-975e-434d-8280-23082fa774c3.gif)
|:---:|:---:|:---:|

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
 ┣ 📄index.tsx<br />
 ┣ 📂assets<br />
 ┃ ┣ 📂svg<br />
 ┃ ┃ ┣ 📄arrow-down.svg<br />
 ┃ ┃ ┣ 📄arrow-left.svg<br />
 ┃ ┃ ┣ 📄arrow-right.svg<br />
 ┃ ┃ ┣ 📄bookmark.svg<br />
 ┃ ┃ ┣ 📄house.svg<br />
 ┃ ┃ ┣ 📄index.ts<br />
 ┃ ┃ ┣ 📄magnifying-glass.svg<br />
 ┃ ┃ ┣ 📄spinner.svg<br />
 ┃ ┃ ┣ 📄user.svg<br />
 ┃ ┃ ┗ 📄xmark.svg<br />
 ┃ ┣ 📄emptyPoster.webp<br />
 ┃ ┗ 📄userImage.webp<br />
 ┣ 📂components<br />
 ┃ ┣ 📂Dropdown<br />
 ┃ ┃ ┣ 📄dropdown.module.scss<br />
 ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┣ 📂Loading<br />
 ┃ ┃ ┣ 📄.DS_Store<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄loading.module.scss<br />
 ┃ ┣ 📂MovieCard<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄movieCard.module.scss<br />
 ┃ ┣ 📂Toggle<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄toggle.module.scss<br />
 ┣ 📂hooks<br />
 ┃ ┣ 📂query<br />
 ┃ ┃ ┣ 📄index.ts<br />
 ┃ ┃ ┣ 📄kobisQuery.ts<br />
 ┃ ┃ ┣ 📄koreafilmQuery.ts<br />
 ┃ ┃ ┗ 📄tmdbQuery.ts<br />
 ┃ ┣ 📂state<br />
 ┃ ┃ ┗ 📄index.ts<br />
 ┃ ┗ 📂worker<br />
 ┃ ┃ ┣ 📄axios.ts<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┣ 📄useAxios.tsx<br />
 ┃ ┃ ┗ 📄useAxiosCore.tsx<br />
 ┣ 📂routes<br />
 ┃ ┣ 📂Gnb<br />
 ┃ ┃ ┣ 📄gnb.module.scss<br />
 ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┣ 📂Main<br />
 ┃ ┃ ┣ 📂Boxoffice<br />
 ┃ ┃ ┃ ┣ 📂DailyBoxoffice<br />
 ┃ ┃ ┃ ┃ ┣ 📄boxofficeList.tsx<br />
 ┃ ┃ ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┃ ┃ ┣ 📂WeeklyBoxoffice<br />
 ┃ ┃ ┃ ┃ ┣ 📄boxofficeList.tsx<br />
 ┃ ┃ ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┃ ┃ ┣ 📄boxoffice.module.scss<br />
 ┃ ┃ ┃ ┗ 📄boxofficeList.tsx<br />
 ┃ ┃ ┣ 📂SearchBar<br />
 ┃ ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┃ ┗ 📄searchBar.module.scss<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄main.module.scss<br />
 ┃ ┣ 📂MovieDetail<br />
 ┃ ┃ ┣ 📂BoxofficeRecord<br />
 ┃ ┃ ┃ ┣ 📄drawGraph.tsx<br />
 ┃ ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┃ ┣ 📄recordGraphStyle.ts<br />
 ┃ ┃ ┃ ┗ 📄recordItem.ts<br />
 ┃ ┃ ┣ 📂Movieinfo<br />
 ┃ ┃ ┃ ┣ 📄genreDict.ts<br />
 ┃ ┃ ┃ ┣ 📄index.ts<br />
 ┃ ┃ ┃ ┣ 📄infoCompany.tsx<br />
 ┃ ┃ ┃ ┣ 📄infoGenre.tsx<br />
 ┃ ┃ ┃ ┣ 📄infoPlot.tsx<br />
 ┃ ┃ ┃ ┣ 📄infoTags.tsx<br />
 ┃ ┃ ┃ ┗ 📄infoTitle.tsx<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄movieDetail.module.scss<br />
 ┃ ┣ 📂MyBookmark<br />
 ┃ ┃ ┣ 📄bookmarkItem.tsx<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄myBookmark.module.scss<br />
 ┃ ┣ 📂SearchResult<br />
 ┃ ┃ ┣ 📂MovieList<br />
 ┃ ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┃ ┣ 📂MoviePages<br />
 ┃ ┃ ┃ ┗ 📄index.tsx<br />
 ┃ ┃ ┣ 📄index.tsx<br />
 ┃ ┃ ┗ 📄searchResult.module.scss<br />
 ┃ ┣ 📄index.tsx<br />
 ┃ ┗ 📄routes.module.scss<br />
 ┣ 📂states<br />
 ┃ ┣ 📄bookmark.ts<br />
 ┃ ┣ 📄date.ts<br />
 ┃ ┣ 📄dropdown.ts<br />
 ┃ ┣ 📄index.ts<br />
 ┃ ┣ 📄movie.ts<br />
 ┃ ┗ 📄toggle.ts<br />
 ┣ 📂types<br />
 ┃ ┣ 📄bookmark.d.ts<br />
 ┃ ┣ 📄commonBoxoffice.d.ts<br />
 ┃ ┣ 📄dailyBoxoffice.d.ts<br />
 ┃ ┣ 📄index.ts<br />
 ┃ ┣ 📄movie.d.ts<br />
 ┃ ┣ 📄movieInfo.d.ts<br />
 ┃ ┣ 📄moviePoster.d.ts<br />
 ┃ ┣ 📄searchMovie.d.ts<br />
 ┃ ┣ 📄tmdbImage.d.ts<br />
 ┃ ┣ 📄weekRecord.d.ts<br />
 ┃ ┗ 📄weeklyBoxoffice.d.ts<br />
 ┣ 📂utils<br />
 ┃ ┣ 📄calcWeek.ts<br />
 ┃ ┣ 📄kobis.ts<br />
 ┃ ┣ 📄koreafilm.ts<br />
 ┃ ┣ 📄localStorage.ts<br />
 ┃ ┣ 📄tmdb.ts<br />
 ┃ ┗ 📄url.ts<br />
 ┣ 📂styles<br />
 ┃ ┣ 📂base<br />
 ┃ ┃ ┣ 📄_fonts.scss<br />
 ┃ ┃ ┣ 📄_more.scss<br />
 ┃ ┃ ┣ 📄_reset.scss<br />
 ┃ ┃ ┗ 📄font.ts<br />
 ┃ ┣ 📂constants<br />
 ┃ ┃ ┗ 📄_colors.scss<br />
 ┃ ┣ 📂mixins<br />
 ┃ ┃ ┗ 📄_flexbox.scss<br />
 ┗ ┗ 📄index.scss<br />

<br /></details>

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
| react-intersection-observer | 무한 스크롤 구현 | 9.3.4 |
| react-query | HTTP 통신 관련 | 3.39.0 |
| react-use | react 편의 | 17.4.0 |
| recoil | 상태관리 라이브러리 | 0.7.3 |
| victory | 차트 라이브러리 | 36.4.1 |

<br/>

# 🏞 기능 설명

### 일별/주간 박스오피스
- 일별/주간 별로 박스오피스 순위를 확인할 수 있습니다.
- 일별/주간 박스오피스는 토글 버튼으로 전환 가능합니다.
- 오늘/이번 주 박스오피스는 아직 집계되지 않았으므로 어제/저번주 박스오피스까지 조회 가능합니다.
- 검색 날짜 범위는 검색 날짜 버튼의 좌우 화살표를 누르면 변경됩니다.

|![Kapture 2022-07-11 at 12 00 37](https://user-images.githubusercontent.com/50236673/178180875-94f3b021-38c6-4b69-82bc-0785fdbeb263.gif)|![Kapture 2022-07-11 at 11 50 36](https://user-images.githubusercontent.com/50236673/178179822-85cf2eb6-18eb-48f2-8e3a-92c467f653f8.gif)|![Kapture 2022-07-11 at 11 51 18](https://user-images.githubusercontent.com/50236673/178179926-9a66ae1b-0d05-462e-9cb7-dbff22d4cb91.gif)|
|:---:|:---:|:---:|

### 영화 검색
- 검색어를 입력하면 검색어에 따른 영화 검색 결과 목록을 보여줍니다.
- 마우스를 올렸을 때 글자색이 변하지 않거나 '정보 없음' 문구가 있는 영화는 영화 상세정보를 조회할 수 없습니다.

### 영화 상세정보
- 영화 상세정보 페이지는 박스오피스 목록, 검색 결과 페이지, 내 즐겨찾기 목록에서 이동 가능합니다.
- 선택한 영화가 박스오피스에 올라왔다면 조회일로부터 일주일 동안의 박스오피스 순위, 매출액, 관객 수, 스크린수, 상영횟수를 그래프로 보여줍니다.
- 선택한 영화가 조회 기간(조회일로부터 일주일) 내 박스오피스 차트에 오르지 못했다면 해당일 그래프 정보가 없습니다.

|![Kapture 2022-07-11 at 11 56 49](https://user-images.githubusercontent.com/50236673/178180445-ac9b89a3-4e64-4dbb-b0a1-2d56c4decdbe.gif)|![Kapture 2022-07-11 at 11 53 43](https://user-images.githubusercontent.com/50236673/178180136-4ac64d31-75a5-45d0-98c2-6454138e87a9.gif)|![Kapture 2022-07-11 at 11 55 02](https://user-images.githubusercontent.com/50236673/178180298-274cd35c-cf0f-4d42-9a09-70982e02f6c5.gif)|
|:---:|:---:|:---:|

### 내 즐겨찾기
- 선택한 영화를 내 즐겨찾기에 넣고 뺄 수 있습니다. 즐겨찾기 추가/제거는 영화 상세정보 페이지에서만 가능합니다.
- 즐겨찾기에 추가된 영화는 일별 박스오피스 목록, 내 즐겨찾기 목록에서 확인 가능합니다
- 즐겨찾기 추가한 영화는 localStorage에 저장이 되므로 탭이나 창을 닫아도 데이터는 브라우저에 그대로 남아있어 이후에도 확인 가능합니다.

|![Kapture 2022-07-11 at 11 45 16](https://user-images.githubusercontent.com/50236673/178179347-68efd709-3a22-43dc-bd6f-6ab1a4b826a6.gif)|![Kapture 2022-07-11 at 11 58 12](https://user-images.githubusercontent.com/50236673/178180602-f94de579-f0f1-41a1-997f-8205b2885762.gif)|![Kapture 2022-07-11 at 11 58 52](https://user-images.githubusercontent.com/50236673/178180619-c4629d39-923a-4217-907f-48aaafccdda3.gif)|
|:---:|:---:|:---:|

<br />

### 추후 구현할 기능, 개선할 점, 아쉬운 점
☑️ 영화진흥위원회 api는 영화 포스터 이미지 제공을 안 하므로, 영화 포스터 가져오는 기능 추가 예정<br />
✅ 영화 상세정보 페이지에 영화 포스터, 줄거리 추가<br /><br />
☑️ 영화 상세정보 그래프를 영화가 개봉한 날짜부터 조회한 날짜까지의 박스오피스 순위 변화, 스크린수, 관객 수, 그래프로 변경 예정<br />
✅ 조회한 날짜부터 일주일 전 데이터까지 불러오는 것으로 변경<br /><br />
☑️ 한국영화데이터베이스 Api는 https로 요청했을 때 응답안하는 점 (https 지원안함)<br />
✅ TMDB Api로 교체. 국내 영화 Api와 해외 영화 Api 간 호환 문제로 일부 영화 상세 페이지 조회 불가<br /><br />
