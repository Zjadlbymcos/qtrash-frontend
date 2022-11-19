import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useContext, useState } from 'react';
import { getTrash } from '../../api/trash';
import { StoreContext } from '../../store/StoreProvider';
import styles from './Search.module.css';

const Search = () => {
  const [enteredCode, setEnteredCode] = useState('');
  const context = useContext(StoreContext);

  const onSubmitHandler = async (event: any) => {
    event.preventDefault();

    const trashResponse = await getTrash(enteredCode);
    context.trash[1]({
      trash: {
        code: trashResponse.code,
        title: trashResponse.title,
        description: trashResponse.description,
        imageUrl: trashResponse.imageUrl,
      },
    });
  };

  const onInputChangeHandler = (event: any) => {
    if (event.target) {
      setEnteredCode(event.target.value);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormControl className={styles.input}>
        <InputLabel htmlFor="code">Code</InputLabel>
        <Input id="code" type="number" value={enteredCode} onChange={onInputChangeHandler} />
      </FormControl>
      <FormControl className={styles.action}>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </FormControl>
    </form>
  );
};

export default Search;
