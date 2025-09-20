---
description: 
globs: 
alwaysApply: true
---
# Project Rules for Interactive Web (JavaScript + React.js)

## 1. Lint Rules (자동 검출/수정 기준)
- 파일 마지막 줄은 newline 추가
- import 순서: 외부 라이브러리 → 내부 모듈 → 스타일 파일
- 사용하지 않는 변수 금지 (`no-unused-vars`)
- indent는 space 2칸 사용
- 세미콜론(;) 반드시 추가
- ' " ' 대신 ' ' ' 사용 (single quotes)
- JSX 중괄호 스타일 `{ value }` (공백 한 칸)
- Hooks는 최상단에 선언 (`react-hooks/rules-of-hooks`)

## 2. Code Convention (코드 작성 규칙)
- 함수 이름은 camelCase 사용
- 컴포넌트 이름은 PascalCase 사용
- 파일명은 kebab-case 사용
- 하나의 파일에는 하나의 컴포넌트만 작성
- CSS className은 BEM 방식 권장
- 주석은 `/** */`로 명확히 작성하고, TODO / FIXME 등 용도 구분
- 폴더는 기능 단위로 구성 (components, pages, hooks, utils)

## 3. React 컴포넌트 Props 관리 규칙
- props는 함수 인자에서 구조분해(destructuring)해서 받는다.
- 컴포넌트 함수 선언부 위에 props를 목록 형태로 주석으로 설명한다.
- 주석 형식은 다음을 따른다:
  - `@param {데이터타입} props명 - 설명 [Required/Optional, 기본값: 값]`
- 데이터 타입(string, function, boolean 등)을 명시한다.
- 필수와 선택 props를 [Required], [Optional]로 구분한다.
- 초기값이 필요한 경우 props 구조분해 시 기본값을 설정한다.
- boolean props는 is/has로 시작한다.
- 함수형 props는 on으로 시작한다.
- children은 별도로 명시하고, 필요한 경우 주석에 포함한다.
- 주석 아래에는 props 사용 예시 (Example usage)를 간단히 추가한다.

## 4. HTML 중첩 오류 방지 규칙
- Typography 컴포넌트(기본 <p> 태그) 안에 Box 컴포넌트(<div> 태그)를 중첩하지 않는다.
- HTML 시맨틱 구조를 위반하는 중첩을 피한다. (예: <p> 안에 <div>, <h1> 안에 <p> 등)
- 텍스트 스타일링이 필요한 경우 Box 컴포넌트에 fontSize, color 등 sx 속성을 사용한다.
- 리스트 형태의 컨텐츠는 Typography 대신 Box로 구현하여 중첩 오류를 방지한다.

## 5. 프로젝트 디렉토리 구조 규칙
새로운 컴포넌트 추가 시 아래 디렉토리 구조를 따른다:

```
src/
├── components/     # 재사용 가능한 UI 컴포넌트 모음
│   ├── common/     # 공통 컴포넌트 (Header, Footer, Button 등)
│   ├── ui/         # 기본 UI 컴포넌트 (Card, Modal, Input 등)
│   └── landing/    # 특정 페이지 전용 컴포넌트
├── pages/          # 각 페이지(혹은 화면)에 해당하는 컴포넌트
├── hooks/          # 커스텀 React 훅(hook) 모음
└── utils/          # 유틸리티 함수 모음
```

### 디렉토리별 상세 가이드:
- **components/common/**: 여러 페이지에서 공통으로 사용되는 컴포넌트
- **components/ui/**: 기본적인 UI 요소들의 재사용 가능한 컴포넌트
- **components/[feature]/**: 특정 기능이나 페이지에 특화된 컴포넌트
- **pages/**: 라우팅되는 페이지 단위의 컴포넌트
- **hooks/**: useCustomHook 형태의 커스텀 훅
- **utils/**: 순수 함수 형태의 유틸리티 (formatDate, validateEmail 등)

### 📄 Props 주석 예시
```jsx
/**
 * Button 컴포넌트
 * 
 * Props:
 * @param {string} label - 버튼에 표시할 텍스트 [Required]
 * @param {function} onClick - 버튼 클릭 시 실행할 함수 [Optional]
 * @param {boolean} isActive - 버튼 활성화 여부 [Optional, 기본값: true]
 *
 * Example usage:
 * <Button label="확인" onClick={handleClick} />
 */
function Button({ label, onClick, isActive = true }) {
  return (
    <button onClick={onClick} disabled={!isActive}>
      {label}
    </button>
  );
}
```