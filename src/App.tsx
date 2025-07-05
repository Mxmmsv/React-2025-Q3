import Header from '@/features/header/header';
import Main from '@/features/main/main';

function App() {
  return (
    <div className="m-5 flex min-h-screen flex-col gap-5">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
