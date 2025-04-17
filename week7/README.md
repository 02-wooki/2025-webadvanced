# React Hooks
## useState
### setState
```jsx
function handleClick() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```
- 이렇게하면 세번 증가 안됨
#### 올바른 방법
```jsx
function handleClick() {
  setCount(c => c + 1);
  setCount(c => c + 1);
  setCount(c => c + 1);
}
```
- 세번 증가 가능

## useEffect

## useMemo
- 메모이제이션 된 값을 반환 (값이 변경되지 않으면 이전 값을 그대로 반환)
- 컴포넌트가 리렌더링될 때마다 불필요한 계산 방지
### 사용하는 경우
- 연산 비용이 큰 계산을 반복할 때
- 동일한 연산 값을 유지할 떄
### 주의 사항
- **과도한 사용** : 오히려 성능을 저하시킬 수 있다.

## useCallback
- 함수 메모이제이션
- 함수의 인수가 변경되지 않았다면 이전에 계산된 함수를 재사용

## useRef
- 함수형 컴포넌트에서 DOM 요소에 직접 접근하거나, 값이 변경되더라도 리렌더링을 유발하지 않는 변수를 저장

# 훅의 규칙
1. 훅은 무조건 최상위 레벨에서만 호출해야 한다.
  #### 잘못된 사용
  ```jsx
  function MyComponent(props) {
    const [name, setName] = useState('wooki');
    if (name !== '')
      useEffect(() => {...});
  }
```

# 사용자 정의 훅
- use로 시작하는 이름 사용
- 

### 4대 성인
#### 예수 - 아버지가 목수
#### 공자 - 키가 190
#### 석가모니
#### 소크라테스 - 석공
- 공통점: 관찰, 모방, 자기 것으로 만들기
- 몸관리 잘하기