import styles from './Cart.module.css';

type Props = {
  children: JSX.Element;
};

const Cart: React.FC<Props> = (props: Props) => {
  return <div className={styles.cart}>{props.children}</div>;
};

export default Cart;
