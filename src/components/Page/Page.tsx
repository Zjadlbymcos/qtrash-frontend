import { Route, Routes } from 'react-router-dom';
import Insert from '../Insert/Insert';
import Search from '../Search/Search';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/insert" element={<Insert />} />
    </Routes>
  );
};

export default Page;
