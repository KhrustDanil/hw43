import styles from './SubmitButton.module.css';

const SubmitButton = () => {
  return (
    <button type="submit" className={styles.buttons}>
      Add Note
    </button>
  );
};

export default SubmitButton;
