<h1>Kidsney Shop</h1>
<h2>Introduction</h2>


* 프로젝트 진행 기간 : 3월 28일 ~ 4월 8일
* 프로젝트 주제 : 커머스 웹사이트 클론 코딩하기
* 클론 코딩한 웹사이트 : 디즈니샵 https://www.shopdisney.com
* 구성 : Front-end 3명, Back-end 2명


<h2>Demo</h2>

<img width="1424" alt="image" src="https://user-images.githubusercontent.com/90507720/162644315-d2510c11-e306-4621-94a7-4dcfda959894.png">
<img width="1283" alt="스크린샷 2022-04-11 오전 8 25 21" src="https://user-images.githubusercontent.com/90507720/162644398-2feb9df0-6c0c-4da7-b0ff-63a2d17ed4d7.png">


![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/90507720/162644439-45e38047-e494-446b-b350-9edf35ef769f.gif)

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/90507720/162644465-04a13653-648a-4dbd-8be2-74fb3822380d.gif)

![](https://velog.velcdn.com/images/hoje15v/post/e5347a1b-9a8e-4e45-b90c-dfd4af836bfb/image.gif)

<h2>Technologies</h2>

* 공통 : Git, github
* Front-End : ReactJS, sass
* Back-End : Python, Django web

<h2>구현 기능</h2>

#### 1. 로그인 / 회원가입

- 로그인 / 회원가입 모달창
- 로그인 / 회원가입 유효성 검사
- localStorage 와 useState Hook을 사용한 로그인 전역관리




#### 2. 상품리스트 

- 쿼리 파라미터를 활용한 다양한 기능구현
    - 다중필터
    - 가격순 / 최신순 정렬
    - 페이지네이션

#### 3. 제품 상세 페이지

- 상품리스트에서 상품이미지를 클릭하면 해당 상품 이미지로 이동
- 데이터베이스로 부터 사이즈 별 재고를 받아와 품절된 상품의 버튼은 비활성화
- 썸네일 사진 클릭 시 메인 페이지 보여준다.

#### 4. 위시리스트

- 위시리스트(찜) 기능 구현 : 좋아요 버튼 클릭시 데이터베이스로 해당 위시리스트 상품 전송. 페이지를 새로고침 했을 때도 좋아요 버튼 클릭 상태 유지

#### 5. 장바구니

- 장바구니 기능 구현: 상품 상세페이지 내에서 add to bag 클릭 시 데이터베이스로 해당 상품 전송. 이후 장바구니 모달창을 통해 업데이트 된 상품 리스트 렌더링
- 장바구니 상품 삭제 기능 구현: fetch(Delete 메소드) 활용
- 장바구니 상품 수정 기능 구현: fetch(Patch 메소드) 활용

#### 6. 리뷰

- 상품 상세페이지 내 해당 상품에 대한 리뷰 컴포넌트 구현
- 리뷰 작성 및 삭제 기능

#### 7. 결제

- 결제 기능 구현 : fetch(Get, Patch 메소드) 활용한 마일리지 차감 및 사용자정보 수정

#### 8. 상품 검색

- 상품 검색 기능 구현: 쿼리 파라미터를 활용한 기능 구현

<h2>나의 담당 부분 및 구현 기능</h2>
제품상세 페이지, 리뷰, 장바구니, 위시리스트(찜, 좋아요 기능), 추천 상품 리스트 

#### 1. 제품 상세 페이지
* add to bag 버튼 클릭시 해당 상품에 대한 데이터 전송기능 (fetch - post)
* 전송 뒤 바로 보여지는 장바구니 모달창에서 해당 상품에 대한 정보를 업데이트 해준다. 
* add to wishlist 버튼 클릭시 해당 상품에 대한 데이터 전송 (fetch -post) 및 버튼 토글 기능(버튼 클릭시 remove로 내용이 바뀐다)
* 페이 상단 왼쪽 썸네일 이미지 클릭시 메인 화면으로 보여준다. 
* size 선택하는 부분에서 백엔드로부터 수량을 받아와서, 재고가 0인경우는 품절 표시를 해주었다. (버튼 비활성화 및 색깔 다르게 처리)
* 화면의 상단 오른쪽에 있는 view details를 클릭하면 해당 제품에 대한 자세한 설명이 나와있는 곳으로 scroll down 된다. (scrollIntoView 활용)
* product detail, shipping& delivery, reviews라는 메뉴가 있는데 각각의 메뉴를 클릭할 시 해당 메뉴에 대한 내용이 나온다. (onClick event, map활용) <br />
#### 2. 리뷰
* write a review 버튼을 올리면 리뷰 모달창이 뜨고 리뷰를 작성한 후 post review 클릭시, 바로 데이터 베이스로 해당글을 전송하고, 다시 review list를 전송받아서 화면에 렌더링. 
* 리뷰 삭제기능 추가<br />
#### 3. 장바구니
* 장바구니 페이지에 가면 내가 상세페이지에서 add to bag 버튼을 통해 전송해두었던 장바구니 상품리스트를 받을 수 있다. 
* 제품 상단 오른쪽에는 슬라이드 형식으로 이벤트 진행중인 상품들을 보여준다. see detail 버튼을 클릭하면 해당 제품의 상세 페이지로 이동한다. 
![](https://velog.velcdn.com/images/hoje15v/post/49a0b592-9e9c-45d4-8721-82293acbe824/image.gif)
* 제품 수량, 사이즈 수정 기능 추가 (fetch - patch)
* 제품 삭제 기능 추가(fetch - delete)

#### 4. 위시리스트
* 상품 상단에 있는 좋아요 버튼 클릭시 데이터베이스로 해당 제품 전송하는 기능 추가
* 새로고침이 되어도 좋아요가 클릭된 상태를 유지한다.(useEffect, &&연산자 활용)
* 'state 끌어올리기'를 활용하여 위시리스트 내의 상품들의 좋아요 상태를 관리한다.

### 5. 추천상품 리스트
* 고객에게 보여주고 싶은 상품 리스트들을 슬라이드 형식으로 보여준다. 해당 상품 클릭시 상세 페이지로 이동한다. (슬라이드 - transformX, transition 활용)


<h2>Reference</h2>

* 이 프로젝트는 디즈니샵 사이트를 참조하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 


