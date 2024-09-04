import styles from './TextArea.module.css';
import { TextAreaProps } from './model/TextArea.interface';


const TextArea = ({ placeholder, name, register, error }: TextAreaProps) => {
  return (
    <div>
      <textarea
        placeholder={placeholder}
        {...register(name)}
        className={styles.text}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
