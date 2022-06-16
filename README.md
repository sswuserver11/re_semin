# 서버실 11팀 팀프로젝트-crewpass 매뉴얼

1. re_semin의 깃레포지터리 주소를 복사하여 gcp에서 git clone을 진행한다.
2. re_semin폴더로 들어가 sudo node main.js를 실행한다.
3. 크롬이나 엣지 등 웹브라우저에 http://gcp의 외부ip주소를 입력하면 crewpass의 메인 홈화면이 연결된다.
4. 기능 구현 시연 영상처럼 기능을 확인해 볼 수 있으며, .env파일과 .gitignore는 혹시나 편의를 위해 노출되게하였음.
- DB용 서버 IP 주소: 34.64.176.98
- user 이름: sswuserver11 
- 해당 user 비밀번호: password
- db명: crewpass_db
5. mysql -h34.64.176.98 -u sswuserver11 -p를 통해 db에 접근할 수 있음.
6. use crewpass_db; 후 모든 테이블에 접근 가능함.


