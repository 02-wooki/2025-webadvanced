# 11주차 정리

## 1. 컴포넌트 만들기 (VLPT Mashup-TodoList)
- React 컴포넌트는 UI를 조립하는 **재사용 가능한 코드 단위**
- `.js/.jsx` 파일에서 `<Component />` 형태로 작성
- 함수형 컴포넌트를 사용하고, props를 통해 부모에서 자식으로 데이터 전달
- 컴포넌트 분리 시 유연성, 유지보수성 향상 (예: TodoInput, TodoList, TodoItem 등으로 구조화)
- 상태(state)는 최상위 부모 컴포넌트에 두고, 하위 컴포넌트들은 **props + 콜백**으로 상태를 제어

---

## 2. Styled‑Components (CSS‑in‑JS)
- JavaScript 안에서 CSS를 작성할 수 있게 해주는 **대표적인 CSS-in-JS 라이브러리** :contentReference[oaicite:2]{index=2}
- 설치 방법:
  ```bash
  npm install styled-components
  ```
- 사용하는 법:
```js
import styled from 'styled-components';

const Box = styled.div`
  padding: 20px;
  background-color: red;
`;

// Props 기반 동적 스타일링
const Button = styled.button`
  color: ${props => props.primary ? 'white' : 'gray'};
  background: ${props => props.primary ? 'blue' : 'lightgray'};
`;
```
- 주요 특징:
  - 해시된 고유 클래스명으로 CSS 충돌 방지 
  - Tagged Template Literal을 활용한 props 기반 동적 스타일링

  - createGlobalStyle을 통한 글로벌 스타일 설정

  - TypeScript 사용 시 styled(Component)<Props>와 css 유틸로 확장 가능


## 3. Date.prototype.toLocaleString() (MDN)
- toLocaleString()은 로케일(locales, options)에 따라 날짜/시간 문자열을 반환 

- 기본 사용:
```js
new Date().toLocaleString(); // 시스템 로케일/타임존 기준
```
- 옵션을 사용한 포맷 지정
```js
date.toLocaleString('ko-KR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});
```
- 반환 예시:
  - "2012. 12. 20. 오전 3:00:00" (한국 로케일, UTC)
  - "20/12/2012, 03:00:00" (영국 로케일, UTC) 