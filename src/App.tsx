import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.less';
import Home from './pages/Home/index';
import routesConfig from './routesConfig';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((item: any) => (
          <Route key={item.path} path={item.path} element={item.component()} />
        ))}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
