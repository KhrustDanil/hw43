import { useAppDispatch, useAppSelector, addNote, clearNotes } from '../../data/notes/store';
import { NoteList, NoteItem } from "../../widgets"
import styles from './Notes.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input, TextArea, SubmitButton, DelButton } from "../../common";
import { NoteFormData } from './model/NoteFormData.interface';

const schema = yup.object().shape({
  title: yup.string().required('Title is required').min(2).max(10),
  text: yup.string().required('Text is required').min(5).max(50),
});

const Notes = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.notes);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: NoteFormData) => {
    dispatch(addNote({
      title: data.title,
      text: data.text,
    }));
    reset();
  };

  const handleClearNotes = () => {
    dispatch(clearNotes());
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Input
        type="text"
        placeholder="Title"
        name="title"
        register={register}
        error={errors.title?.message}
      />
        </div>
        <div>
        <TextArea
        placeholder="Text"
        name="text"
        register={register}
        error={errors.text?.message}
      />
        </div>
          <SubmitButton />
      </form>

      <div>
        {notes.length === 0 ? (
          <p className={styles.no_notes}>No notes</p>
        ) : (
          <NoteList title="Notes">
            {notes.map((note, index) => (
              <NoteItem key={index} note={note} index={index} />
            ))}
            <DelButton onClick={handleClearNotes}></DelButton>
          </NoteList>
        )}
      </div>
    </div>
  );
};

export default Notes;
