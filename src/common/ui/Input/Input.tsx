import { InputProps } from './model/Input.interface';
import styles from './Input.module.css';

const Input = ({ placeholder, type, name, register, error }: InputProps) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={styles.inputs}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
