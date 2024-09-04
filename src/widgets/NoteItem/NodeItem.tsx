import styles from './NoteItem.module.css';
import { NoteItemProps } from "./model/NoteItem.interface"

const NoteItem: React.FC<NoteItemProps> = ({ note, index }) => {
  return (
    <div className={styles.note}>
      <h3 className={styles.title}>Title: {note.title} {index !== undefined && `(#${index + 1})`}</h3>
      <div>
        <p className={styles.text}>Text: {note.text}</p>
      </div>
    </div>
  );
};

export default NoteItem;
