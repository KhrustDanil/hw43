import styles from './DelButton.module.css';

const DelButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button_del}
    >
      Delete Notes
    </button>
  );
};

export default DelButton;
