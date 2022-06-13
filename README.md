# 🗂 프로젝트 소개 [![Netlify Status](https://api.netlify.com/api/v1/badges/44138556-c9f2-4b7c-8702-85f6c4337beb/deploy-status)](https://app.netlify.com/sites/movie-boxoffice-app/deploys)
### 🍿영화 박스오피스 조회 플리케이션

- **개발 기간** 22.06.04 - 22.06.05
- **프로젝트 개요** <br/>
영화진흥위원회 api를 사용한 박스오피스 및 영화 상세정보 조회 애플리케이션입니다.

- **Github Repository URL** <br/> https://github.com/rlaebqebq/movie-boxoffice-app
- **배포 URL** <br/> <s>https://movie-boxoffice-app.netlify.app/</s> api가 https에 응답을 안하고 http에만 응답함

|![Kapture 2022-06-13 at 10 46 00](https://user-images.githubusercontent.com/50236673/173265812-ec3b3fca-6c88-4b7e-bf19-5f47305fb74a.gif)|![Kapture 2022-06-13 at 10 52 44](https://user-images.githubusercontent.com/50236673/173265819-2a2eb75f-dc6f-4ed5-b61b-46e3c556ef8f.gif)|
|:---:|:---:|

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
 ┃ ┗ 📜.DS_Store<br />
 ┣ 📂components<br />
 ┃ ┣ 📂Dropdown<br />
 ┃ ┃ ┣ 📜dropdown.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┗ 📂LoadingPage<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜loadingPage.module.scss<br />
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
 ┃ ┃ ┣ 📜boxoffice.module.scss<br />
 ┃ ┃ ┣ 📜boxofficeList.tsx<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂Gnb<br />
 ┃ ┃ ┣ 📜gnb.module.scss<br />
 ┃ ┃ ┗ 📜index.tsx<br />
 ┃ ┣ 📂Movieinfo<br />
 ┃ ┃ ┣ 📂BoxofficeRecord<br />
 ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┣ 📜recordGraph.tsx<br />
 ┃ ┃ ┃ ┣ 📜recordGraphStyle.ts<br />
 ┃ ┃ ┃ ┗ 📜recordItem.ts<br />
 ┃ ┃ ┣ 📂MovieInfoPoster<br />
 ┃ ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┃ ┣ 📜moviePoster.module.scss<br />
 ┃ ┃ ┃ ┣ 📜movieinfoPosterEtc.tsx<br />
 ┃ ┃ ┃ ┗ 📜movieinfoPosterTag.tsx<br />
 ┃ ┃ ┣ 📂MovieinfoDetail<br />
 ┃ ┃ ┃ ┣ 📜movieinfoCompany.tsx<br />
 ┃ ┃ ┃ ┣ 📜movieinfoList.tsx<br />
 ┃ ┃ ┃ ┗ 📜movieinfoTitle.tsx<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜movieinfo.module.scss<br />
 ┃ ┣ 📂MyBookmark<br />
 ┃ ┃ ┣ 📜index.tsx<br />
 ┃ ┃ ┗ 📜myBookmark.module.scss<br />
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
 ┃ ┃ ┣ 📜_position.scss<br />
 ┃ ┃ ┣ 📜_responsive.scss<br />
 ┃ ┃ ┗ 📜_visual.scss<br />
 ┃ ┗ 📜index.scss<br />
 ┣ 📂types<br />
 ┃ ┣ 📜dailyBoxoffice.d.ts<br />
 ┃ ┣ 📜movie.d.ts<br />
 ┃ ┣ 📜movieInfo.d.ts<br />
 ┃ ┗ 📜moviePoster.d.ts<br />
 ┣ 📂utils<br />
 ┃ ┣ 📜localStorage.ts<br />
 ┃ ┣ 📜movie.ts<br />
 ┃ ┗ 📜url.ts<br />
 ┣ 📜.DS_Store<br />
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

|![Kapture 2022-06-13 at 11 06 27 복사본](https://user-images.githubusercontent.com/50236673/173267323-a2ffc4ee-97fc-4a19-974a-718eecf63e27.gif)|![Kapture 2022-06-13 at 11 06 27](https://user-images.githubusercontent.com/50236673/173267190-5a803a3a-d80a-4c4a-b7b7-18e9fa176d79.gif)|
|:---:|:---:|

### 영화 상세정보
- 선택한 영화가 저번주부터 이번주까지 박스오피스에 올랐다면 박스오피스 순위, 매출액, 관객수, 스크린수, 상영횟수를 그래프로 보여줍니다.
- 선택한 영화가 이번주에 박스오피스에 올라왔다면 그래프 정보가 없습니다.

|![Kapture 2022-06-13 at 11 15 26 복사본](https://user-images.githubusercontent.com/50236673/173267733-dfe58766-d737-4dd3-b51a-4a24cef2af93.gif)|![Kapture 2022-06-13 at 11 15 26](https://user-images.githubusercontent.com/50236673/173267666-ecceaf0c-cfec-426b-9058-3eb592e3d297.gif)|
|:---:|:---:|
|![Kapture 2022-06-13 at 10 56 33](https://user-images.githubusercontent.com/50236673/173266653-2b5dc8f2-6473-4ecf-b9a9-e74f40b03043.gif)|![Kapture 2022-06-13 at 11 59 07](https://user-images.githubusercontent.com/50236673/173271766-df57edde-9181-4968-853c-8258ff028497.gif)|

### 내 즐겨찾기
- 선택한 영화를 내 즐겨찾기에 넣고 뺄 수 있습니다.
- 즐겨찾기에 추가된 영화는 목록에서 확인 가능합니다.

|![Kapture 2022-06-13 at 11 25 26](https://user-images.githubusercontent.com/50236673/173268596-bc8f7140-f587-486a-a734-622e6b4340d8.gif)|![Kapture 2022-06-13 at 11 30 24](https://user-images.githubusercontent.com/50236673/173268997-d17e36ca-5349-4c2e-8dc8-201506ae767d.gif)|
|:---:|:---:|

<br />

### 추후 구현할 기능, 개선할 점
- <s>영화진흥위원회 api는 영화 포스터 이미지 제공을 안 하므로, 영화 포스터 가져오는 기능 추가 예정.</s>
- <s>영화 상세정보 그래프를 영화가 개봉한 날짜부터 조회한 날짜까지의 박스오피스 순위 변화, 스크린수, 관객 수, 그래프로 변경 예정. (고려해야 하는 사항_재개봉 영화가 박스오피스 영화에 올랐을 경우</s>
- 영화 포스터 api https로 요청했을 때 응답안하는 점
