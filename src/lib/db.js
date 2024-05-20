import {
    Typography,
  } from '@mui/material';

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ReplayIcon from '@mui/icons-material/Replay';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import EditNoteIcon from '@mui/icons-material/EditNote';
import WorkIcon from '@mui/icons-material/Work';
import BadgeIcon from '@mui/icons-material/Badge';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FolderIcon from '@mui/icons-material/Folder';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';


const carouselData = [
    {
        id: 1,
        img: {
            img0: '/carouselimg/슬라이드0012.png',
            img1: '/carouselimg/슬라이드0013.png',
            img2: '/carouselimg/슬라이드0014.png',
            img3: '/carouselimg/슬라이드0015.png',
            img4: '/carouselimg/슬라이드0016.png',
            img5: '/carouselimg/슬라이드0017.png',
        },
        title: 'Hello Bingo!',
        subtitle: 'React, NodeJS',
        content: '2021년에 C++로 구현했던 2인 플레이 한계를 개선하여, REACT와 NODEJS를 사용하여 다수의 플레이어가 참여할 수 있는 웹 애플리케이션 빙고 게임을 개발했습니다. 이 게임은 실시간 소켓 통신을 통해 운영되며, 플레이어들이 방에 입장해 채팅하고 게임을 진행하면서 선택한 빙고 숫자가 모든 플레이어에게 실시간으로 반영됩니다.',
        codeUrl: 'https://github.com/uhee01/hello-bingo-2024.git'
    },
    {
        id: 2,
        img: {
            img0: '/carouselimg/슬라이드0032.png',
            img1: '/carouselimg/슬라이드0033.png',
            img2: '/carouselimg/슬라이드0034.png',
            img3: '/carouselimg/슬라이드0035.png',
            img4: '/carouselimg/슬라이드0036.png',
            img5: '/carouselimg/슬라이드0037.png',
            img6: '/carouselimg/슬라이드0038.png',
        },
        title: 'MoveFit',
        subtitle: 'Flutter, Python, Tensorflow, HiveDB, AndroidStudio',
        content: '홈 및 웨이트 트레이닝의 자세를 촬영한 후, 빅데이터를 기반으로 자세 평가를 제공하고, 목표 설정 및 운동 기록 관리 기능을 포함한 앱을 개발했습니다. 프론트엔드 개발을 맡아, 전체적인 앱 디자인 구상 및 다양한 데이터를 표현할 수 있는 카드, 달력, 기능 개발을 담당했습니다.',
        codeUrl: 'https://github.com/uhee01/movefit.git'
    },
    {
        id: 3,
        img: {
            img0: '/carouselimg/슬라이드0001.png',
            img1: '/carouselimg/슬라이드0002.png',
            img2: '/carouselimg/슬라이드0003.png',
            img3: '/carouselimg/슬라이드0004.png',
            img4: '/carouselimg/슬라이드0005.png',
            img5: '/carouselimg/슬라이드0006.png',
            img6: '/carouselimg/슬라이드0007.png',
            img7: '/carouselimg/슬라이드0008.png',
            img8: '/carouselimg/슬라이드0009.png',
            img9: '/carouselimg/슬라이드0010.png',
            img10: '/carouselimg/슬라이드0011.png',
        },
        title: 'Bid Kong',
        subtitle: 'Javascript, NodeJS, MongoDB',
        content: 'MongoDB를 사용하여 사용자와 상품 데이터를 관리하는 경매 사이트를 개발했습니다. 사용자 인증 및 세션 관리는 Passport.js로, 상품 이미지는 AWS S3로 관리되며, EJS로 구성된 UI를 통해 다양한 기능(상품 목록, 상세 페이지, 게시판, 마이페이지)을 제공합니다.',
        codeUrl: 'https://github.com/uhee01/BidKong.git'
    },
    {
        id: 4,
        img: {
            img0: '/carouselimg/슬라이드0022.png',
            img1: '/carouselimg/슬라이드0023.png',
            img2: '/carouselimg/슬라이드0024.png',
            img3: '/carouselimg/슬라이드0025.png',
            img4: '/carouselimg/슬라이드0026.png',
            img5: '/carouselimg/슬라이드0027.png',
            img6: '/carouselimg/슬라이드0028.png',
            img7: '/carouselimg/슬라이드0029.png',
            img8: '/carouselimg/슬라이드0030.png',
            img9: '/carouselimg/슬라이드0031.png',
        },
        title: 'With Them',
        subtitle: 'React, NodeJS, MySQL',
        content: '사용자가 회원가입 및 로그인을 통해 그룹을 생성하고 참여하는 웹 애플리케이션을 개발했습니다. 그룹 내에서 사진 공유, 게시판 활동 등의 기능을 제공하고, 사용자 정보 변경과 리뷰 제공 기능을 포함하였습니다.',
        codeUrl: 'https://github.com/uhee01/WithThem.git'
    },
    {
        id: 5,
        img: {
            img0: '/carouselimg/슬라이드0018.png',
            img1: '/carouselimg/슬라이드0019.png',
            img2: '/carouselimg/슬라이드0020.png',
            img3: '/carouselimg/슬라이드0021.png',
        },
        title: 'Good Weather',
        subtitle: 'Vue, Typescript',
        content: 'OpenWeatherMap API를 통해 특정 도시의 실시간 날씨 정보를 제공하는 Vue.js 애플리케이션을 개발했습니다. 사용자는 도시 이름을 검색하여 특정 도시의 날씨 정보를 실시간으로 확인할 수 있으며, 선택한 도시의 날씨 상세 정보는 모달 창을 통해 확인할 수 있습니다.',
        codeUrl: 'https://github.com/uhee01/good-weather.git'
    },
    {
        id: 6,
        img: {
            img0: '/carouselimg/portfolio-0.png',
            img1: '/carouselimg/portfolio-1.png',
            img2: '/carouselimg/portfolio-2.png',
            img3: '/carouselimg/portfolio-3.png',
            img4: '/carouselimg/portfolio-4.png',
            img5: '/carouselimg/portfolio-5.png',
        },
        title: 'Portfolio',
        subtitle: 'React',
        content: 'React를 활용하여 포트폴리오 웹사이트를 제작했습니다. 다양한 애니메이션 기능이 포함되어 있으며, 간단한 자기소개, 사용 가능한 기술 목록, 그리고 진행했던 대표 프로젝트들에 대한 요약 정보를 확인할 수 있습니다.',
        codeUrl: 'https://github.com/uhee01/Portfolio.git'
    }
]

const projects = [
    { id: 1, title: "Hello Bingo!", description: "React, NodeJS", img: "/projectimg/hello-bingo-main.png" },
    { id: 2, title: "MoveFit", description: "Flutter, Python, HiveDB", img: "/projectimg/movefit-main.png" },
    { id: 3, title: "Bid Kong", description: "Javascript, NodeJS, MongoDB", img: "/projectimg/online-auction-main.png" },
    { id: 4, title: "With Them", description: "React, NodeJS, MySQL", img: "/projectimg/with-them-main.png" },
    { id: 5, title: "Good Weather", description: "Vue, Typescript", img: "/projectimg/good-weather-main.png" },
    { id: 6, title: "Portfolio", description: "React", img: "/projectimg/portfolio-main.png" },
];

const frontendTechnologies = [
    { name: 'HTML/CSS', imgSrc: '/img/html5.png', description: ['position 속성을 활용하여 다양한 레이아웃을 만들 수 있습니다.', '다양한 pseudo-class를 활용할 수 있습니다.', 'Object Oriented CSS 작성법으로 유지보수가 편리한 코드를 작성할 수 있습니다.', '반응형 레이아웃을 만들 수 있습니다.', 'Transition 속성으로 다양한 애니메이션을 구현할 수 있습니다.', 'Shadow DOM을 활용하여 요소 커스터마이징이 가능합니다.', 'grid-area 속성을 이용해서 빠르게 레이아웃을 만들 수 있습니다.', '화면이 뒤집히는 3D 애니메이션을 구현할 수 있습니다.'] },
    { name: 'Javascript', imgSrc: '/img/javascript.png', description: ['Javascript의 핵심 문법을 알고 있습니다.', '이벤트리스너 문법을 활용하여 alert 창 on/off 기능을 개발할 수 있습니다.', 'IF/ELSE 문으로 폼을 만들고 공백 확인 기능을 구현할 수 있습니다.', 'input/change 이벤트를 능숙하게 사용할 수 있습니다.', '화면 속 일부 요소에 Dark mode를 구현할 수 있습니다.', '정규식으로 이메일 형식을 검증할 수 있습니다.', '이벤트 버블링과 관련된 지식을 지니고 있습니다.', 'chart.js 라이브러리를 사용할 수 있습니다.', 'Data-binding을 할 수 있습니다.', 'local storage를 사용하여 서버 없이 데이터를 저장할 수 있습니다.'] },
    { name: 'JQuery', imgSrc: '/img/jquery.png', description: ['jquery를 이용하여 다양한 스타일을 적용할 수 있습니다.', 'Javascript 문법을 JQuery로 변경할 수 있습니다.', 'UI 애니메이션을 구현할 수 있습니다.', '타이머 기능을 구현할 수 있습니다.', '캐러셀을 만들 수 있습니다.', '다양한 조건에서 스크롤 이벤트를 구현할 수 있습니다.', 'fetch 함수로 AJAX 요청을 할 수 있습니다.'] },
    { name: 'Sass', imgSrc: '/img/sass.png', description: ['Sass의 기본적인 변수 문법을 알고 있습니다.', 'Nesting 문법을 활용하여 셀렉터를 간결하게 표현할 수 있습니다.', '@extend와 @mixin을 활용하여 셀렉터를 간결하게 표현할 수 있습니다.', 'Sass 문법을 활용하여 리스트 레이아웃을 만들 수 있습니다.', '스크롤 이벤트를 보고 비슷하게 구현해낼 수 있습니다.', '캐러셀에 스와이프 기능을 추가할 수 있습니다.'] },
    { name: 'React', imgSrc: '/img/react.png', description: ['기본적인 JSX 문법을 숙지하고 있습니다.', 'map을 통해 중복되는 코드를 반복문으로 축약할 수 있습니다.', 'component를 나누어 html를 깔끔하게 관리할 수 있습니다.', '동적인 UI 모달창을 만들 수 있습니다.', 'props를 능숙하게 활용할 수 있습니다.', 'react-router-dom 라이브러리로 페이지를 나누어 구현할 수 있습니다.', 'nested routes로 서브 경로를 만들 수 있습니다.', 'URL 파라미터로 많은 페이지를 만들 수 있습니다.', 'Lifecycle hook을 사용하여 시간에 따라 요소 생성, 삭제를 구현할 수 있습니다.', 'fetch 문법으로 get/post 요청이 가능합니다.', 'axios 외부 라이브러리로 get/post 요청이 가능합니다.', '다양한 탭 UI를 만들 수 있습니다.', 'Context API 문법에 대해 알고 있습니다.', 'Redux 라이브러리를 활용하여 파일 하나에 state를 보관하고 사용할 수 있습니다.', 'react-query 라이브러리로 화면에 실시간 데이터를 보여줄 수 있습니다.', 'NodeJS 서버와 연동할 수 있습니다.'] },
    { name: 'Typescript', imgSrc: '/img/typescript.png', description: ['Typescript 기본 문법을 알고 있습니다.', '각 함수에 맞는 타입을 지정할 수 있습니다.', 'readonly로 속성 변경을 불가능하도록 처리할 수 있습니다.'] },
    { name: 'Vue.js', imgSrc: '/img/vuejs.png', description: ['Data-binding 문법을 알고 있습니다.', 'v-if/v-for문을 자유롭게 활용할 수 있습니다.', 'vue 이벤트 핸들러로 click을 감지할 수 있습니다.', 'custom event로 부모데이터를 변경할 수 있습니다.', '특정 데이터가 변경될 때 watcher로 원하는 기능을 수행할 수 있습니다.', '다양한 UI 애니메이션을 만들 수 있습니다.', '로딩중 화면을 띄울 수 있습니다.', 'Lifecycle hook을 사용하여 시간에 따른 기능을 처리할 수 있습니다.', 'vue-router 라이브러리로 라우터를 이용할 수 있습니다.', 'slot 문법을 사용할 수 있습니다.', 'mitt 라이브러리로 컴포넌트 간 데이터 전송을 자유롭게 할 수 있습니다.', 'Vuex 라이브러리 사용법에 대해 알고 있습니다.', 'Composition API 식으로 코드를 작성할 수 있습니다.'] },
    { name: 'Bootstrap', imgSrc: '/img/bootstrap.png', description: ['Javascript/React/Vue 환경에서 bootstrap을 이용할 수 있습니다.', 'bootstrap 요소들을 커스터마이징 할 수 있습니다.', 'bootstrap 내 아이콘들을 자유롭게 활용할 수 있습니다.'] },
    { name: 'Material UI', imgSrc: '/img/mui.png', description: ['React 환경에서 자유롭게 활용할 수 있습니다.', 'bootstrap 요소들을 커스터마이징 할 수 있습니다.', 'Material UI 내 아이콘들을 자유롭게 활용할 수 있습니다.'] },
  ];

  const backendTechnologies = [
    { name: 'Python', imgSrc: '/img/python.png', description: ['로그인/회원가입 기능을 구현할 수 있습니다.', 'session을 활용하여 외부에서 로그인시 기존 기기 자동 로그아웃 기능을 구현할 수 있습니다.', 'DB와 연동하여 사용할 수 있습니다.', '프로그램 내에 확대/축소 등과 같은 단축키 기능을 구현할 수 있습니다.'] },
    { name: 'Node.js', imgSrc: '/img/nodejs.png', description: ['REST API를 생성하여 클라이언트의 요청에 JSON 형태로 데이터를 응답할 수 있습니다.', 'Node.js와 DB을 연동하여 사용할 수 있습니다.', 'passpost.js를 사용하여 사용자 인증을 관리할 수 있습니다.', 'express-session을 사용하여 세션을 구성하고, 사용자 로그인 상태를 유지할 수 있습니다.', '로그인/회원가입 처리와 비밀번호를 해시하여 DB에 저장할 수 있습니다.', 'ejs를 사용하여 서버 사이드 렌더링을 할 수 있습니다.', 'socket.io 라이브러리를 사용하여 실시간 통신 기능을 구현할 수 있습니다.', '게시판 목록을 페이징하여 구현할 수 있습니다.', '용자 입력을 검증하여 빈칸이 있는 경우 경고 메시지를 보여주는 기능을 구현할 수 있습니다.'] },
    { name: 'Express', imgSrc: '/img/expressjs.png', description: ['Express.js를 사용하여 HTTP 서버를 구축할 수 있습니다.', '미들웨어를 사용하여 요청과 응답 사이에 로그인 인증 확인 작업을 할 수 있습니다.'] },
    { name: 'MongoDB', imgSrc: '/img/mongodb.png', description: ['테이블 생성 및 데이터 타입을 정의하고 테이블의 구조를 변경할 수 있습니다.', '기본적인 데이터 조작 기능(CRUD)을 알고 있습니다.', '데이터를 그룹화하고, 정렬하며, 다양한 연산을 수행할 수 있습니다.'] },
    { name: 'HiveDB', imgSrc: '/img/hivedb.png', description: ['테이블 생성 및 데이터 타입을 정의하고 테이블의 구조를 변경할 수 있습니다.', '기본적인 데이터 조작 기능(CRUD)을 알고 있습니다.', '데이터를 그룹화하고, 정렬하며, 다양한 연산을 수행할 수 있습니다.'] },
    { name: 'MySQL', imgSrc: '/img/mysql.png', description: ['테이블 생성 및 데이터 타입을 정의하고 테이블의 구조를 변경할 수 있습니다.', '기본적인 데이터 조작 기능(CRUD)을 알고 있습니다.', '데이터를 그룹화하고, 정렬하며, 다양한 연산을 수행할 수 있습니다.'] },
    { name: 'AWS', imgSrc: '/img/aws.png', description: ['multer와 multer-s3를 사용하여 파일 업로드 기능을 구현할 수 있습니다.', 'AWS S3에 파일을 저장할 수 있습니다'] },
  ];

  const mobileTools = [
    { name: 'Flutter', imgSrc: '/img/flutter.png', description: ['기본적인 Dart 문법을 숙지하고 있습니다.','DB와 연동하여 구현할 수 있습니다.', '스크롤을 원하는 위치, 방향으로 자유롭게 구현할 수 있습니다.', '달력에 기능을 다양하게 추가하여 구현할 수 있습니다.', '데이터에 따른 차트를 구현할 수 있습니다.'] },
  ];

  const collaborationTools = [
    { name: 'GitHub', imgSrc: '/img/github.png' },
    { name: 'Bitbucket', imgSrc: '/img/bitbucket.png' },
    { name: 'Slack', imgSrc: '/img/slack.png' },
    { name: 'Figma', imgSrc: '/img/figma.png' },
  ];

  const profileItems = [
    {
      icon: <PersonIcon />,
      text: '정우희 (Jung Woo Hee)',
    },
    {
      icon: <CakeIcon />,
      text: '2001. 09. 23',
    },
    {
      icon: <PhoneIcon />,
      text: '+82 10-2311-0931',
    },
    {
      icon: <EmailIcon />,
      text: 'ssorcws0521@gmail.com',
    },
    {
      icon: <SchoolIcon />,
      text: '용인대학교 컴퓨터과학과 졸업',
      subText: '전공 평점 4.29/4.5',
    },
  ];

  const iconBoxes = [
    { text: "Patience", text2: "많은 시간과 노력을 투자하여\n문제를 해결하기 위해 노력합니다.", icon: <PsychologyAltIcon sx={{ fontSize: 60 }} /> },
    { text: "Self-motivated", text2: "새로운 지식과 기술을 습득하기 위해\n지속적인 학습을 진행합니다.", icon: <ReplayIcon sx={{ fontSize: 60 }} /> },
    { text: "Proactive", text2: "고민보다는 적극적으로 행동으로 옮기며\n문제를 해결합니다.", icon: <DirectionsRunIcon sx={{ fontSize: 60 }} /> },
    { text: "Meticulous", text2: "작은 일에도 세심한 주의를 기울여\n일을 꼼꼼하게 처리합니다.", icon: <EditNoteIcon sx={{ fontSize: 60 }} /> }
  ];

const sections = [
    {
      icon: <WorkIcon />,
      title: '경력',
      content: (
        <>
          <ul>
            <li>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}><span style={{ color: '#283593' }}>23.03-23.07</span> (주)브랜드콘텐츠 IT/개발팀 인턴</Typography>
              <Typography variant="subtitle2" color={'#424242'}>- 사업계획서 작성</Typography>
              <Typography variant="subtitle2" color={'#424242'}>- 웹페이지 TC 작성/테스트 진행</Typography>
              <Typography variant="subtitle2" color={'#424242'}>- AI 학습용 데이터 구축 가공 Tool 프로그램 개발 Back-end
                <ul>
                  <li><Typography variant="subtitle2" color={'#616161'}>로그인시 아이디/비밀번호/작업자 유형에 따른 처리</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>중복 로그인시 이전 접속자 자동 로그아웃 기능 구현</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>서버에서 이미지 파일 목록과 이미지 값 load</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>local에서 이미지 파일 load</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>이미지 데이터 가공을 위한 기능 수행</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>DB 내 저장되어 있는 라벨링 값 선택 / 직접 입력</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>작업한 목록 보기, 수정, 삭제, 전체 보기</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>JSON 파일로 서버에 업로드</Typography></li>
                  <li><Typography variant="subtitle2" color={'#616161'}>데이터 검수 및 작업 history 기능 수행</Typography></li>
                </ul>
              </Typography>
            </li>
          </ul>
        </>
      ),
    },
    {
      icon: <BadgeIcon />,
      title: '자격/면허사항',
      content: (
        <ul>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2020년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.01</span> 자동차운전면허 2종</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.05</span> MOS EXCEL 2016 Core</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.06</span> MOS Powerpoint 2016</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.08</span> 코딩지도사 1급</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.08</span> 소프트웨어교육지도 1급</Typography>
          </li>
          <Typography mb={1}></Typography>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2021년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>21.07</span> 컴퓨터활용능력 1급</Typography>
          </li>
          <Typography mb={1}></Typography>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2023년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.09</span> 정보처리기사</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.10</span>{` SQLD(SQL 개발자)`}</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.11</span>{` ADsP(데이터분석준전문가)`}</Typography>
          </li>
        </ul>
      ),
    },
    {
      icon: <DirectionsRunIcon />,
      title: '경험/활동',
      content: (
        <>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>20.12-21.12</span> 용인대학교 과학생회 ‘울림’ 복지부원</Typography>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>21.03-21.07</span> 용인대학교 코딩 동아리 ‘프로연’ 부원</Typography>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>21.03-23.02</span> 대학생튜터링사업 지역아동센터 초중학생 수학 학습 지도</Typography>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>21.12-22.12</span> 용인대학교 과학생회 ‘또바기’ 서기</Typography>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>22.08-22.09</span> 디지털 미래인재 양성 프로그램 빅데이터 분석과정 수료</Typography>
          <Typography variant="body2" color={'#424242'}><span style={{ color: '#283593' }}>22.08-22.12</span> ㈜코리아퍼스텍 AI학습용 데이터 구축 사업 아르바이트</Typography>
        </>
      ),
    },
    {
      icon: <EmojiEventsIcon />,
      title: '수상 경력',
      content: (
        <ul>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2020년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>20.12</span> 용인대학교 학습노트 공모전 우수상</Typography>
          </li>
          <Typography mb={1}></Typography>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2022년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>22.11</span> 용인대학교 역량중심 자기소개서 경진대회 최우수상 </Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>22.12</span> 용인대학교 학습포트폴리오 공모전 대상</Typography>
          </li>
          <Typography mb={1}></Typography>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2023년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.10</span> 용인대학교 비교과 아이디어 공모전 우수상</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.12</span> 용인대학교 컴퓨터과학과 졸업 우수작품 1등</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>23.12</span> 용인대학교 온라인강의 컨텐츠 공모전:웹 개발 2등</Typography>
          </li>
          <Typography mb={1}></Typography>
          <li>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2024년</Typography>
            <Typography variant="subtitle2" color={'#424242'}><span style={{ color: '#283593' }}>24.01</span> 용인대학교 학습노트 공모전 창의상</Typography>
          </li>
        </ul>
      ),
    },
    {
      icon: <FolderIcon />,
      title: '수행 프로젝트 요약',
      content: (
        <ul>
        <li>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2021년</Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘힐링 서비스’ 웹페이지 제작`} <span style={{ color: '#283593' }}>HTML, JAVA, MySQL</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘Hangman 게임’ 제작`} <span style={{ color: '#283593' }}>C#</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(팀)[Back-end]‘서버 연결을 통한 BINGO 게임’ 제작`} <span style={{ color: '#283593' }}>C#</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(팀)[Front-end]‘최적의 길을 찾는 미로’ 제작`} <span style={{ color: '#283593' }}>C++</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘1:1과 1:N 채팅 프로그램’ 기능 추가`} <span style={{ color: '#283593' }}>LINUX</span></Typography>
        </li>
        <Typography mb={1}></Typography>
        <li>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2022년</Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘DB SHOP’ 쇼핑몰 제작`} <span style={{ color: '#283593' }}>JAVA, MySQL</span></Typography>
        </li>
        <Typography mb={1}></Typography>
        <li>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2023년</Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(팀)[Back-end]‘Annotation Tool’ 제작`} <span style={{ color: '#283593' }}>Python, MySQL</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(팀)[Front-end]‘Movefit’ 제작`} <span style={{ color: '#283593' }}>Flutter, Python, HiveDB</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘online-auction’ 제작`} <span style={{ color: '#283593' }}>Javascript, NodeJS, MongoDB, AWS</span></Typography>
        </li>
        <Typography mb={1}></Typography>
        <li>
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>2024년</Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)‘with-them’ 제작`} <span style={{ color: '#283593' }}>Javascript, React, NodeJS, MySQL, AWS</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)Portfolio 제작`} <span style={{ color: '#283593' }}>Javascript, React</span></Typography>
          <Typography variant="subtitle2" color={'#424242'}>{`(개인)'good-weather' 제작`} <span style={{ color: '#283593' }}>Vue, Typescript</span></Typography>
        </li>
      </ul>
      ),
    },
  ];

export { carouselData, projects, frontendTechnologies, backendTechnologies, mobileTools, collaborationTools, profileItems, iconBoxes, sections  };
