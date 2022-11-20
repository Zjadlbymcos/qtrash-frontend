import { Grid, Typography } from '@mui/material';
import { Trash } from '../../store/StoreProvider';
import Card from '../Card/Card';

type Props = {
  trash: Trash;
};

const TrashCard = (props: Props) => {
  return (
    <Card>
      <Grid container>
        <Grid item xs={5} sx={{ display: 'flex' }}>
          <img
            style={{ borderRadius: '15px', margin: '0 auto' }}
            src={props.trash.imageUrl}
            alt="Your lovely trash image! <3"
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h4">{props.trash.title}</Typography>
          <Typography>{props.trash.description}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default TrashCard;
