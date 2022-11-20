import { ReactNode } from 'react';
import styles from './Card.module.css';

type Props = {
  children: ReactNode;
};

const Cart: React.FC<Props> = (props: Props) => {
  return <div className={styles.cart}>{props.children}</div>;
};

export default Cart;
