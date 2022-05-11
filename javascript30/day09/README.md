day9 학습 내용

Dev Tools 정복하기!

평소 자주 사용하던 Dev Tools의 여러 꿀팁들을 배울 수 있었다.

|                             기능                             |                            method                            |                          부가 설명                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :---------------------------------------------------------: |
|                          로그 찍기                           |                        console.log()                         | 객체 출력 시, console.log(JSON.parse(JSON.stringify(obj)))  |
|                      로그에 스타일 추가                      |              console.log('%c 문자열', '스타일')              |             %c(치환문자)를 사용하여 스타일 설정             |
|                             경고                             |                        console.warn()                        |                                                             |
|                             에러                             |                       console.error()                        |                                                             |
|                             정보                             |                        console.info()                        |                                                             |
| [테스트](https://developer.mozilla.org/en-US/docs/Web/API/console/assert) |        console.assert(조건문, 'false 시 출력할 문장')        |                                                             |
|                            초기화                            |                       console.clear()                        |                                                             |
|                      DOM 요소 보는 방법                      | console.log(), [console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/console/dir) | console.log(): HTML처럼 보기, console.dir(): JSON 처럼 보기 |
| [그룹화](https://developer.mozilla.org/ko/docs/Web/API/console/group) |       console.group('group name'), console.groupEnd()        |                                                             |
| [카운팅](https://developer.mozilla.org/ko/docs/Web/API/console/count) |                    console.count('label')                    |                 지정한 label의 호출 수 출력                 |
| [시간 측정](https://developer.mozilla.org/ko/docs/Web/API/console/time) |           console.time('label'), console.timeEnd()           |                           ms 단위                           |
| [테이블](https://developer.mozilla.org/en-US/docs/Web/API/console/table) |                       console.table()                        |                                                             |

