import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Vprofil = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          subheader="Manage the Vprofil"
          title="Vprofil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
              variant="subtitle2"
              >
                
<p>Garangan Music adalah web streaming musik yang luar biasa yang memberikan pengalaman hebat streaming tanpa batas dari lagu-lagu SoundCloud MP3 secara gratis.
</p>
<p>
Streaming music SoundCloud 
- Cari musik online gratis melalui jutaan MP3
- Dengarkan musik gratis: Artis SoundCloud Top & dengarkan album top
- Mainkan musik online berdasarkan genre
- Dengarkan musik dengan daftar putar Musi: pesta, olahraga, tidur, dan lainnya
- Mainkan musik online gratis dalam mode latar belakang

</p>
              </Typography>
              </Grid> </Grid>

        </CardContent> 
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="outlined"
          >
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

Vprofil.propTypes = {
  className: PropTypes.string
};

export default Vprofil;
