import { Route, Routes } from 'react-router-dom';
import Insert from '../Insert/Insert';
import Scan from '../Scan/Scan';

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Scan />} />
      <Route path="/insert" element={<Insert />} />
    </Routes>
  );
};

export default Page;
