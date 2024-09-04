import { NoteListProps } from './model/NoteList.interface';
import styles from './NoteList.module.css';

const NoteList: React.FC<NoteListProps> = ({ title, children }) => {
  return (
    <div className={styles.notes}>
      {title && <h2>{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default NoteList;
