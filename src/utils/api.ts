import { createClient } from "@supabase/supabase-js";

import {
  Content,
  ContentDetailMovie,
  ContentDetailTV,
  Category,
} from "@/types";
import { Database } from "database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY || "";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// 더미 데이터
const dummyContents: Content[] = [
  {
    id: 1,
    title: "기생충",
    originalTitle: "Parasite",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/4fXGcnpr8CS5f2l3jE2Z-Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gzY1d0aWEyeHRkbkJsZG5sNllXWjFabUp5SW4wLmMwUjdILXByVzhFVGhESDZQckNpc2M0RkhGOW1mdl9MRnE3RGswU1VRcUU=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/4fXGcnpr8CS5f2l3jE2Z-Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gzY1d0aWEyeHRkbkJsZG5sNllXWjFabUp5SW4wLmMwUjdILXByVzhFVGhESDZQckNpc2M0RkhGOW1mdl9MRnE3RGswU1VRcUU=",
    overview:
      "전원 백수로 살 길 막막하지만 사이는 좋은 기택 가족. 장남 기우에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박 사장 집으로 향하는 기우. 글로벌 IT기업 CEO인 박 사장의 저택에 도착하자 젊고 아름다운 사모님 연교와 가정부 문광이 기우를 맞이한다.",
    releaseDate: "2019-05-30",
    rating: 8.6,
    genres: ["드라마", "스릴러"],
    type: "movie",
  },
  {
    id: 2,
    title: "마블 어벤져스",
    originalTitle: "The Avengers",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/EXwjz9rzTSmbV3e3CdBEtg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMkp4YVhsNU1tdGxiSEJsY3paa1pubDVhbk42SW4wLjY1RU0tRVdOcWZEenNuQ1p2X2lvTmJncWFKR2ZhWTV5aHdMZS1vT2c1eU0=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/EXwjz9rzTSmbV3e3CdBEtg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMkp4YVhsNU1tdGxiSEJsY3paa1pubDVhbk42SW4wLjY1RU0tRVdOcWZEenNuQ1p2X2lvTmJncWFKR2ZhWTV5aHdMZS1vT2c1eU0=",
    overview:
      "지구의 안보가 위협당하는 위기의 상황에서 슈퍼히어로들을 불러모아 세상을 구하는 이야기",
    releaseDate: "2012-04-26",
    rating: 8.0,
    genres: ["액션", "모험"],
    type: "movie",
  },
  {
    id: 3,
    title: "오징어 게임",
    originalTitle: "Squid Game",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/-FF8LybdYXLe-hwrQjZWeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qazJPREUyTmpjMU56UXhOekUxTURRaWZRLmtFUWVmT1UtbW1Ja0taTkF3WHZRcmRlbkFocm8wbVJ4ZFFoeldmRjItY3c=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/-FF8LybdYXLe-hwrQjZWeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qazJPREUyTmpjMU56UXhOekUxTURRaWZRLmtFUWVmT1UtbW1Ja0taTkF3WHZRcmRlbkFocm8wbVJ4ZFFoeldmRjItY3c=",
    overview:
      "거대한 상금이 걸린 의문의 서바이벌 게임에 참가한 사람들이 최후의 승자가 되기 위해 목숨을 걸고 도전하는 이야기",
    releaseDate: "2021-09-17",
    rating: 8.7,
    genres: ["드라마", "스릴러"],
    type: "tv",
  },
  {
    id: 4,
    title: "왕좌의 게임",
    originalTitle: "Game of Thrones",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/v85yuzNwfl3z8Ifd-Uh9Ng.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV1ZGpsd2FEZHRNbmQ2YzIxbmR6VnhiV1kxSW4wLmlzQmZ2X3ktQlhnQjRPMlFfeEEtSVlJTTFpeWQwTnVHWkFFN0lNZHhRZEU=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/v85yuzNwfl3z8Ifd-Uh9Ng.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV1ZGpsd2FEZHRNbmQ2YzIxbmR6VnhiV1kxSW4wLmlzQmZ2X3ktQlhnQjRPMlFfeEEtSVlJTTFpeWQwTnVHWkFFN0lNZHhRZEU=",
    overview: "철왕좌를 차지하기 위한 7개 왕국의 치열한 권력 다툼을 그린 작품",
    releaseDate: "2011-04-17",
    rating: 9.2,
    genres: ["판타지", "드라마"],
    type: "tv",
  },
  {
    id: 5,
    title: "인터스텔라",
    originalTitle: "Interstellar",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/bw4jfVYFEl8JQKAtu6btTA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2x5WVRKM1pqRmtOSFJoYkc5NU5YRXpPWFYzSW4wLmF5Wk5HNmhtejZsVF9UVU83ZXpYV015ak95UDZVdkR5ZlRNTzJKX2NVUG8=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/bw4jfVYFEl8JQKAtu6btTA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2x5WVRKM1pqRmtOSFJoYkc5NU5YRXpPWFYzSW4wLmF5Wk5HNmhtejZsVF9UVU83ZXpYV015ak95UDZVdkR5ZlRNTzJKX2NVUG8=",
    overview:
      "지구가 더 이상 인간이 살 수 없는 곳이 되자 새로운 보금자리를 찾기 위해 우주로 떠나는 탐험대의 이야기",
    releaseDate: "2014-11-06",
    rating: 8.6,
    genres: ["SF", "모험"],
    type: "movie",
  },
  {
    id: 6,
    title: "브레이킹 배드",
    originalTitle: "Breaking Bad",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/puwoBluiDDB-PJ0icayZdw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2h2Tm1od01XdDViak4wTUc4eFltdHFaelpySW4wLkNlU19BcGpvV1JORC10c3BKSmNNSk5ZYVJWS0NfZFNUOURKc3hFRXhFY2s=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/puwoBluiDDB-PJ0icayZdw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2h2Tm1od01XdDViak4wTUc4eFltdHFaelpySW4wLkNlU19BcGpvV1JORC10c3BKSmNNSk5ZYVJWS0NfZFNUOURKc3hFRXhFY2s=",
    overview:
      "말기 암 진단을 받은 고등학교 화학 교사가 가족의 미래를 위해 메스암페타민을 제조하며 범죄의 세계로 빠져드는 이야기",
    releaseDate: "2008-01-20",
    rating: 9.5,
    genres: ["범죄", "드라마"],
    type: "tv",
  },
];

const dummyMovieDetails: ContentDetailMovie[] = [
  {
    id: 1,
    title: "기생충",
    originalTitle: "Parasite",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/4fXGcnpr8CS5f2l3jE2Z-Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gzY1d0aWEyeHRkbkJsZG5sNllXWjFabUp5SW4wLmMwUjdILXByVzhFVGhESDZQckNpc2M0RkhGOW1mdl9MRnE3RGswU1VRcUU=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/4fXGcnpr8CS5f2l3jE2Z-Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2gzY1d0aWEyeHRkbkJsZG5sNllXWjFabUp5SW4wLmMwUjdILXByVzhFVGhESDZQckNpc2M0RkhGOW1mdl9MRnE3RGswU1VRcUU=",
    overview:
      "전원 백수로 살 길 막막하지만 사이는 좋은 기택 가족. 장남 기우에게 명문대생 친구가 연결시켜 준 고액 과외 자리는 모처럼 싹튼 고정수입의 희망이다. 온 가족의 도움과 기대 속에 박 사장 집으로 향하는 기우. 글로벌 IT기업 CEO인 박 사장의 저택에 도착하자 젊고 아름다운 사모님 연교와 가정부 문광이 기우를 맞이한다.",
    releaseDate: "2019-05-30",
    rating: 8.6,
    genres: ["드라마", "스릴러"],
    type: "movie",
    runtime: 132,
    director: "봉준호",
    cast: ["송강호", "이선균", "조여정", "최우식", "박소담"],
  },
  {
    id: 2,
    title: "마블 어벤져스",
    originalTitle: "The Avengers",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/EXwjz9rzTSmbV3e3CdBEtg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMkp4YVhsNU1tdGxiSEJsY3paa1pubDVhbk42SW4wLjY1RU0tRVdOcWZEenNuQ1p2X2lvTmJncWFKR2ZhWTV5aHdMZS1vT2c1eU0=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/EXwjz9rzTSmbV3e3CdBEtg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMkp4YVhsNU1tdGxiSEJsY3paa1pubDVhbk42SW4wLjY1RU0tRVdOcWZEenNuQ1p2X2lvTmJncWFKR2ZhWTV5aHdMZS1vT2c1eU0=",
    overview:
      "지구의 안보가 위협당하는 위기의 상황에서 슈퍼히어로들을 불러모아 세상을 구하는 이야기",
    releaseDate: "2012-04-26",
    rating: 8.0,
    genres: ["액션", "모험"],
    type: "movie",
    runtime: 143,
    director: "조스 웨던",
    cast: [
      "로버트 다우니 주니어",
      "크리스 에반스",
      "마크 러팔로",
      "크리스 헴스워스",
      "스칼렛 요한슨",
    ],
  },
  {
    id: 5,
    title: "인터스텔라",
    originalTitle: "Interstellar",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/bw4jfVYFEl8JQKAtu6btTA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2x5WVRKM1pqRmtOSFJoYkc5NU5YRXpPWFYzSW4wLmF5Wk5HNmhtejZsVF9UVU83ZXpYV015ak95UDZVdkR5ZlRNTzJKX2NVUG8=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/bw4jfVYFEl8JQKAtu6btTA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2x5WVRKM1pqRmtOSFJoYkc5NU5YRXpPWFYzSW4wLmF5Wk5HNmhtejZsVF9UVU83ZXpYV015ak95UDZVdkR5ZlRNTzJKX2NVUG8=",
    overview:
      "지구가 더 이상 인간이 살 수 없는 곳이 되자 새로운 보금자리를 찾기 위해 우주로 떠나는 탐험대의 이야기",
    releaseDate: "2014-11-06",
    rating: 8.6,
    genres: ["SF", "모험"],
    type: "movie",
    runtime: 169,
    director: "크리스토퍼 놀란",
    cast: ["매튜 맥커너히", "앤 해서웨이", "제시카 차스테인", "마이클 케인"],
  },
];

const dummyTVDetails: ContentDetailTV[] = [
  {
    id: 3,
    title: "오징어 게임",
    originalTitle: "Squid Game",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/-FF8LybdYXLe-hwrQjZWeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qazJPREUyTmpjMU56UXhOekUxTURRaWZRLmtFUWVmT1UtbW1Ja0taTkF3WHZRcmRlbkFocm8wbVJ4ZFFoeldmRjItY3c=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/-FF8LybdYXLe-hwrQjZWeQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qazJPREUyTmpjMU56UXhOekUxTURRaWZRLmtFUWVmT1UtbW1Ja0taTkF3WHZRcmRlbkFocm8wbVJ4ZFFoeldmRjItY3c=",
    overview:
      "거대한 상금이 걸린 의문의 서바이벌 게임에 참가한 사람들이 최후의 승자가 되기 위해 목숨을 걸고 도전하는 이야기",
    releaseDate: "2021-09-17",
    rating: 8.7,
    genres: ["드라마", "스릴러"],
    type: "tv",
    episodes: 9,
    seasons: 1,
    creators: ["황동혁"],
  },
  {
    id: 4,
    title: "왕좌의 게임",
    originalTitle: "Game of Thrones",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/v85yuzNwfl3z8Ifd-Uh9Ng.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV1ZGpsd2FEZHRNbmQ2YzIxbmR6VnhiV1kxSW4wLmlzQmZ2X3ktQlhnQjRPMlFfeEEtSVlJTTFpeWQwTnVHWkFFN0lNZHhRZEU=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/v85yuzNwfl3z8Ifd-Uh9Ng.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjV1ZGpsd2FEZHRNbmQ2YzIxbmR6VnhiV1kxSW4wLmlzQmZ2X3ktQlhnQjRPMlFfeEEtSVlJTTFpeWQwTnVHWkFFN0lNZHhRZEU=",
    overview: "철왕좌를 차지하기 위한 7개 왕국의 치열한 권력 다툼을 그린 작품",
    releaseDate: "2011-04-17",
    rating: 9.2,
    genres: ["판타지", "드라마"],
    type: "tv",
    episodes: 73,
    seasons: 8,
    creators: ["데이비드 베니오프", "D.B. 와이스"],
  },
  {
    id: 6,
    title: "브레이킹 배드",
    originalTitle: "Breaking Bad",
    posterPath:
      "https://an2-img.amz.wtchn.net/image/v2/puwoBluiDDB-PJ0icayZdw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2h2Tm1od01XdDViak4wTUc4eFltdHFaelpySW4wLkNlU19BcGpvV1JORC10c3BKSmNNSk5ZYVJWS0NfZFNUOURKc3hFRXhFY2s=",
    backdropPath:
      "https://an2-img.amz.wtchn.net/image/v2/puwoBluiDDB-PJ0icayZdw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM2h2Tm1od01XdDViak4wTUc4eFltdHFaelpySW4wLkNlU19BcGpvV1JORC10c3BKSmNNSk5ZYVJWS0NfZFNUOURKc3hFRXhFY2s=",
    overview:
      "말기 암 진단을 받은 고등학교 화학 교사가 가족의 미래를 위해 메스암페타민을 제조하며 범죄의 세계로 빠져드는 이야기",
    releaseDate: "2008-01-20",
    rating: 9.5,
    genres: ["범죄", "드라마"],
    type: "tv",
    episodes: 62,
    seasons: 5,
    creators: ["빈스 길리건"],
  },
];

const dummyCategories: Category[] = [
  { id: 1, name: "액션", slug: "action" },
  { id: 2, name: "코미디", slug: "comedy" },
  { id: 3, name: "드라마", slug: "drama" },
  { id: 4, name: "스릴러", slug: "thriller" },
  { id: 5, name: "로맨스", slug: "romance" },
  { id: 6, name: "SF", slug: "science-fiction" },
  { id: 7, name: "판타지", slug: "fantasy" },
  { id: 8, name: "호러", slug: "horror" },
  { id: 9, name: "애니메이션", slug: "animation" },
  { id: 10, name: "다큐멘터리", slug: "documentary" },
];

// API 함수들
export const getFeaturedContent = (): Content => {
  return dummyContents[0];
};

export const getPopularContents = (): Content[] => {
  return dummyContents;
};

export const getContentById = (id: number): Content | null => {
  const content = dummyContents.find((item) => item.id === id);
  return content || null;
};

export const getMovieDetailById = (id: number): ContentDetailMovie | null => {
  const movie = dummyMovieDetails.find((item) => item.id === id);
  return movie || null;
};

export const getTVDetailById = (id: number): ContentDetailTV | null => {
  const tv = dummyTVDetails.find((item) => item.id === id);
  return tv || null;
};

export const getContentDetailById = (
  id: number,
  type: "movie" | "tv",
): ContentDetailMovie | ContentDetailTV | null => {
  if (type === "movie") {
    return getMovieDetailById(id);
  } else {
    return getTVDetailById(id);
  }
};

export const searchContents = (query: string): Content[] => {
  const normalizedQuery = query.toLowerCase();
  return dummyContents.filter(
    (content) =>
      content.title.toLowerCase().includes(normalizedQuery) ||
      (content.originalTitle &&
        content.originalTitle.toLowerCase().includes(normalizedQuery)),
  );
};

export const getContentsByCategory = (categorySlug: string): Content[] => {
  const category = dummyCategories.find((cat) => cat.slug === categorySlug);
  if (!category) return [];

  return dummyContents.filter((content) =>
    content.genres.some(
      (genre) => genre.toLowerCase() === category.name.toLowerCase(),
    ),
  );
};

export const getCategories = (): Category[] => {
  return dummyCategories;
};
