# 🗂 프로젝트 소개
## 🍿영화 박스오피스 조회 어플리케이션

- **개발 기간** 22.06.04 - 22.06.05
- **프로젝트 개요** <br/>
영화진흥위원회 api를 사용한 박스오피스 및 영화 상세정보 조회 어플리케이션입니다.

- **Github Repository URL** <br/> https://github.com/rlaebqebq/movie-boxoffice-app
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

📦src <br />
 ┣ 📂assets <br />
 ┃ ┗ 📂svg <br />
 ┃ ┃ ┣ 📜arrow-left.svg <br />
 ┃ ┃ ┣ 📜arrow-right.svg <br />
 ┃ ┃ ┣ 📜index.ts <br />
 ┃ ┃ ┗ 📜spinner.svg <br />
 ┣ 📂components <br />
 ┃ ┗ 📂LoadingPage <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┗ 📜loadingPage.module.scs <br />s
 ┣ 📂hooks <br />
 ┃ ┣ 📂state <br />
 ┃ ┃ ┗ 📜index.ts <br />
 ┃ ┣ 📂worker <br />
 ┃ ┃ ┣ 📜axios.ts <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┣ 📜useAxios.tsx <br />
 ┃ ┃ ┗ 📜useAxiosCore.tsx <br />
 ┃ ┗ 📜index.tsx <br />
 ┣ 📂routes <br />
 ┃ ┣ 📂Boxoffice <br />
 ┃ ┃ ┣ 📜boxoffice.module.scss <br />
 ┃ ┃ ┣ 📜boxofficeList.tsx <br />
 ┃ ┃ ┗ 📜index.tsx <br />
 ┃ ┣ 📂BoxofficeGraph <br />
 ┃ ┃ ┣ 📜boxofficeGraph.module. <br />scss
 ┃ ┃ ┣ 📜boxofficeGraphList.tsx <br />
 ┃ ┃ ┣ 📜boxofficeGraphStyle.ts <br />
 ┃ ┃ ┗ 📜index.tsx <br />
 ┃ ┣ 📂Movieinfo <br />
 ┃ ┃ ┣ 📜index.tsx <br />
 ┃ ┃ ┣ 📜movieinfo.module.scss <br />
 ┃ ┃ ┗ 📜movieinfoList.tsx <br />
 ┃ ┣ 📜index.tsx <br />
 ┃ ┗ 📜routes.module.scss <br />
 ┣ 📂states <br />
 ┃ ┗ 📜movie.ts <br />
 ┣ 📂styles <br />
 ┃ ┣ 📂base <br />
 ┃ ┃ ┣ 📜_fonts.scss <br />
 ┃ ┃ ┣ 📜_more.scss <br />
 ┃ ┃ ┗ 📜_reset.scss <br />
 ┃ ┣ 📂constants <br />
 ┃ ┃ ┗ 📜_colors.scss <br />
 ┃ ┣ 📂mixins <br />
 ┃ ┃ ┣ 📜_flexbox.scss <br />
 ┃ ┃ ┣ 📜_responsive.scss <br />
 ┃ ┃ ┗ 📜_visual.scss <br />
 ┃ ┗ 📜index.scss <br />
 ┣ 📂types <br />
 ┃ ┣ 📜boxoffice.d.ts <br />
 ┃ ┣ 📜boxofficeGraph.d.ts <br />
 ┃ ┗ 📜movieInfo.d.ts <br />
 ┣ 📂utils <br />
 ┃ ┣ 📜movie.ts <br />
 ┃ ┗ 📜url.ts <br />
 ┣ 📜index.tsx <br />
 ┣ 📜react-app-env.d.ts <br />
 ┣ 📜reportWebVitals.ts <br />
 ┗ 📜setupTests.ts <br />

</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| axios | HTTP 통신 라이브러리 | 0.27.2 |
| classnames | styles 관련 | 2.3.1 |
| dayjs | 날짜 라이브러리 | 1.11.2 |
| react-query | HTTP 통신 관련 | 3.39.0 |
| recoil | 상태관리 라이브러리 | 0.7.3 |
| victory | 차트 라이브러리 | 36.4.1 |

<br/>

</div>

# 🏞 기능 설명

### 일별 박스오피스
(사진)

<br/>

### 영화 상세정보
(사진)

