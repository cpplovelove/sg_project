
## [ smileGate 개인 프로젝트]  소원을 말해봐

*12/25 1차 완료했고, 사용자 관리페이지와 비밀번호 찾기 및 DTO작성 부분 등은 좀 더 진행 예정입니다

### 서비스/프로젝트 개요
  새해 목표를 정하면서 남들과 이를 공유하고, 연말에 알림을 통해서 회고할 수 있도록 해주는 서비스가 있었으면 해서 프로젝트를 기획하게 되었습니다.
  제공하고자 한 메인 기능은 다음과 같습니다.
    <pre><code>
    • 목표 설정 ✅ <br>
    • 회원가입/ 로그인 ✅ <br>
    • 옵션을 통해서 대시보드로 소원 공유 ✅<br>
    • 연초 연말 리마인드<br>
    • 공유 기능
    </code></pre>
    이 중 목표 설정과 대시보드를 통한 공유, 회원가입 로그인을 구현했습니다.
    데브 캠프에서 개인프로젝트 주제로 제가 선택한 것은 인증 시스템이었습니다.
    과제 요구 사항은 아래와 같았고 구현완료 한 사항은 체크표시로 나타냈습니다.
    
    • 가입, 로그인 페이지 ✅ 
    • RDBMS DB 사용 : MySQL ✅
    • Password Encryption ✅ 
    • 캐시 (option) ✅ 
    • E-Mail 인증 (option) ✅ 
    • 인증 서버 API ✅ 
    • 비밀번호 찾기 (option) 
    • 유저 관리 페이지 

프로젝트를 진행하면서 초반에 설계한 결과물입니다.<br>
- 서비스 아키텍처

<div align="center">
<img src="https://ifh.cc/g/KWFhCM.png" width="400">
</div>

- 프로토 타입<br>
    <br>
    ![prototype](https://user-images.githubusercontent.com/57889360/209469629-65d83c18-f116-4ad1-bca4-979817af5dc7.png)
    [프로토타입 바로가기](https://www.figma.com/file/SwfAChJkat0hpaQeQIqK8D/smilegate-project?node-id=2%3A322&t=SAAYZfVux2GkA2PU-0)
    <br>
    

### 구현 결과물
<div align="center">

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c37c9aa-a372-41d6-82d2-820d77f4b9f3/%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB_%E1%84%80%E1%85%B5%E1%84%85%E1%85%A9%E1%86%A8_2022-12-25_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_8_54_39_AdobeExpress_AdobeExpress_%281%29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221225T125041Z&X-Amz-Expires=86400&X-Amz-Signature=483c364f211b81b90b44f927f216cf75583493ec489f537c83c23e5969f4c1b8&X-Amz-SignedHeaders=host&x-id=GetObject" width="500" >

</div>

### 기술 스택 
- javaScript/ typeScript/ react/ nodejs/ express/ mysql/ sequelize

----
### 코드 리뷰 관련 의견

- 리액트 사용경험이 부족해서 회원 가입 모달이나 로그인 모달에서 과하게 많은 state를 사용한 것 같아 어떤 상황에 어떻게 state를 활용하면 좋을 지 여쭤보고 싶습니다.

### 아쉬운 점

- 개인적인 일정으로 프로젝트를 마지막에 촉박하게 진행하게 되어 오류가 발생하거나 한 부분들에 대해서 원인을 명확하게 규정하지 못하고 넘어간 부분들이 많은 것 같아 아쉽습니다.
- MSA 구조로 아키텍처를 설계하고 인증 서버를 분리해보고 싶었는데, 기간 안에 끝낼 자신이 없어 모놀리틱 아키텍처로 프로젝트를 진행하게 되어 아쉽습니다. 해당 프로젝트를 확장해서 MSA를 적용해보거나 개인적으로 프로젝트를 진행할 때 해당 아키텍처를 사용해보고 싶습니다.
- 프론트 부분에서 막히고 헤맸던 부분이 많았던 것 같아 리액트 문서를 다시 찾아보면서 공부해야 할 필요성을 느낄 수 있었습니다

