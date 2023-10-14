import { Route, Routes } from 'react-router-dom';
import Profile from './routes/Profile';
import Missions from './routes/Missions';
import Rockets from './routes/Rockets';
import Layout from './routes/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Rockets />} />
      <Route path="missions" element={<Missions />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  </Routes>
);

export default App;
