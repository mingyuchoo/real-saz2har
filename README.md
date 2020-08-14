# real-saz2har

Fiddler 세션 저장형식인 saz를 웹브라우저 세션 저장 형식인 har(HTTP archive)으로 변환해줍니다.

inspired by `https://github.com/myadzel/saz2har`

## 사용 방법

- `yarn start 또는 npm run star` 명령어로 app을 실행합니다.
- Fiddler에서 export한 saz 파일을 ./saz 디렉터리에 저장합니다.
- app이 실시간으로 ./har 디렉터리에 같은 파일명으로 파일을 변환합니다.
- 변환된 har 파일을 원하는 곳(**insomnia에 import 하여 테스트 코드 작성**)에 이용합니다.
