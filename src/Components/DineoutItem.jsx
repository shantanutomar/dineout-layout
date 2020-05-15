import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ImagePopUp from "./ImagePopUp";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    margin: '24px',
    padding: '24px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const DineoutItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const onBuyNowClick = (event) => {
    event.stopPropagation();
    window.open(props.imagePath,'_blank')
  };
  const onCardClicked = () => {
    handleClickOpen();
    console.log('On onCardClicked');
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Card className={classes.root} onClick={onCardClicked}>
      <CardMedia
        className={classes.media}
        image={props.imagePath}
        title={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
            {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.discount}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand)}
          onClick={onBuyNowClick}
          aria-label="Buy Now"
        >
          <ShoppingCartIcon />
        </IconButton>
      </CardActions>
        <ImagePopUp open={open} handleClose={handleClose}/>
    </Card>
  );
}

export default DineoutItem;
