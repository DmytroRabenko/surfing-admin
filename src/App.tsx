import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from 'src/components/layout/layout';
import Dashboard from 'src/pages/dashboard/dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
