# 📘 라우팅, SPA, URL 파라미터 & 쿼리 스트링 정리

## 📌 라우팅 (Routing)
- 사용자가 요청한 URL에 따라 다른 페이지나 컴포넌트를 보여주는 기능
- 전통적인 웹에서는 서버가 각 URL에 대응하는 HTML 파일을 응답
- React에서는 `react-router-dom`과 같은 라이브러리를 사용해 클라이언트 사이드에서 라우팅 처리

---

## 📌 SPA (Single Page Application)
- 단 하나의 HTML 파일로 구성된 웹 애플리케이션
- 페이지 이동 시 서버에서 전체 페이지를 다시 불러오지 않고, 필요한 부분만 JavaScript로 동적으로 렌더링
- ✅ 장점: 빠른 페이지 전환, 부드러운 사용자 경험
- ⚠️ 단점: 초기 로딩 시간 증가, SEO 최적화가 어려움

---

## 📌 URL 파라미터 (Path Parameter)
- URL 경로의 일부를 변수처럼 사용
- 예시: `/users/:id` → `/users/42` 요청 시 `id = 42`
- React 예시:
  ```jsx
  <Route path="/users/:id" element={<User />} />

  // User.jsx 내부
  const { id } = useParams();  // id는 "42"
  ```

---

## 📌 쿼리 스트링 (Query String)
- URL 끝에 `?key=value` 형식으로 데이터를 전달
- 여러 값을 `&`로 구분
- 예시: `/search?keyword=react&page=2`
- React 예시:
  ```js
  import { useLocation } from 'react-router-dom';

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const keyword = query.get("keyword");  // "react"
  const page = query.get("page");        // "2"
  ```

---

## 📎 요약

| 개념           | 설명 |
|----------------|------|
| **라우팅**      | URL에 따라 다른 화면 보여줌 |
| **SPA**         | 하나의 페이지에서 모든 화면 전환 처리 |
| **URL 파라미터** | 경로(`/users/:id`)에 포함된 변수값 |
| **쿼리 스트링**  | URL의 `?key=value` 형태 데이터 전달 |
