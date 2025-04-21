import './App.css';
import Container from './Components/children/Container';
import CommentList from './Components/comment/CommentList';

function App() {
  return (
    <div>
      <Container>
        <p>이 내용은 Container 내부에 포함</p>
      </Container>
      <Container>
        <p>하하</p>
      </Container>

      <CommentList />
    </div>
  );
}

export default App;
