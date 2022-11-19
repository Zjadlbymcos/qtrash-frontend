import { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';
import Cart from '../Cart/Cart';

const TrashDescription = () => {
  const context = useContext(StoreContext);

  if (!context.trash[0]) {
    return null;
  }

  return <Cart>Description</Cart>;
};

export default TrashDescription;
