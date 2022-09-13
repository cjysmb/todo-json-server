import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

/** Component here */
import Main from './components/Main';
import Home from './screens/Home';
import Todo from './screens/Todo';
import Doing from './screens/Doing';
import Done from './screens/Done';
import NotFound from './screens/404';

/** Style here */
import './static/styles/navbar.css';
import './static/styles/global.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Main>
            <Home />
          </Main>
        } />
        <Route path="/todo" element={
          <Main>
            <Todo />
          </Main>
        } />
        <Route path="/doing" element={
          <Main>
            <Doing />
          </Main>
        } />
        <Route path="/done" element={
          <Main>
            <Done />
          </Main>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
