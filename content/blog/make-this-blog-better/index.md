---
title: Make This Blog Better
date: "2022-03-30"
description: 이 블로그를 개선해나가는 과정
---

## 블로그 생성(2022-03-30)
>코로나로 격리된 지 5일째..
1. *Gatsby Starter Blog*를 사용하여 생성
1. 블로그 타이틀, 내 정보, 프로필 이미지 등 수정
1. markdown 파일에 emoji 적용되게 plug-in 설치 :smile:
1. 날짜 표시 형식 수정
    - `frontmatter` 중에서 날짜 부분\
        :arrow_right: `date(formatString: "LL", locale: "ko")`로 수정
    - 작성일(posted) 외에 수정일(updated)도 추가\
        다만 두 날짜가 같은 날이면 하나만 표시

---
    앞으로 반영할 것들
    코드 부분 스타일, 카테고리 분류, 댓글 기능, 반응형 디자인(이미 돼있나?), 다크 모드