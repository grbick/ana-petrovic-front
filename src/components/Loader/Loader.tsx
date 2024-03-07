import { observer } from "mobx-react-lite";
import styles from "./Loader.module.scss";
// import { modalStore } from '../../store';

const Loader: React.FC = observer(() => {
  return (
    <div className={styles.wrapper_loader}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
});

export default Loader;
