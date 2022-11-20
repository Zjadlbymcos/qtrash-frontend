import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import ScanForm from './ScanForm';
import TrashCard from './TrashCard';

const Scan = () => {
  const context = useContext(StoreContext);

  const trash = context.trash[0]?.trash;
  const trashLoaded = trash != null;

  return (
    <React.Fragment>
      <ScanForm />
      {trashLoaded && <TrashCard trash={trash} />}
    </React.Fragment>
  );
};

export default Scan;
