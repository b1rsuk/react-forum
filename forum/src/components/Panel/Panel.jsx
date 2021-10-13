import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import StorageIcon from '@material-ui/icons/Storage';
import StarsIcon from '@material-ui/icons/Stars';
import { useStyles, theme } from './Style';
import StyledButton from '../StyledButton';
import React from 'react';

export default function Panel({setCard, itemAll}) {

    const classes = useStyles();
    const list = [
        {text: 'Халява', teg: 'free'},
        {text: 'Торговля', teg: 'trade'},
        {text: 'Работа и услуги', teg: 'services'},
    ];

    const itemFree = itemAll.filter(e => {
      return e.teg === 'free';
    });
    const itemTrade = itemAll.filter(e => {
      return e.teg === 'trade';
    });
    const ItemServices = itemAll.filter(e => {
      return e.teg === 'services';
    });
  

    return (
        <Fragment>
            <Grid item xs={3}> 
                <Box className={classes.panel} overflow='hidden' borderRadius={7} padding={2}>
                <StyledButton fullWidth onClick={() => document.location.href = "/create"}>Создать тему</StyledButton>
                    <ThemeProvider theme={theme}>
                        <Button fullWidth variant="outlined" className={classes.menu}  onClick={() => setCard(itemAll)} color='primary'><ChatBubbleOutline className={classes.ico}/>Все обсуждения</Button>
                        <Button fullWidth variant="outlined" className={classes.menu}  onClick={() => alert('Недоработано')} color='primary'><StorageIcon className={classes.ico}/>Мои темы </Button>
                        <Button fullWidth variant="outlined" className={classes.menu}  onClick={() => alert('Недоработано')} color='primary'><StarsIcon className={classes.ico}/>Закладки</Button>
                    </ThemeProvider> 
                </Box>
                
                <br/>
                <br/>

                <Box className={classes.panel} overflow='hidden' borderRadius={7} padding={2}>
                <Typography className={classes.text} variant="body1" noWrap>Основной раздел</Typography>
                    <ThemeProvider theme={theme}>
                        {
                            list.map(
                                (obj, key) => <Button fullWidth variant="outlined" className={classes.menu} key={obj.text} onClick={() => {
                                    if (obj.teg === 'free') setCard(itemFree);
                                    if (obj.teg === 'trade') setCard(itemTrade);    
                                    if (obj.teg === 'services') setCard(ItemServices);
                                }}  color='primary'><ChatBubbleOutline className={classes.ico}/>{obj.text}</Button>
                            )
                        }
                    </ThemeProvider> 
                </Box>
            </Grid> 
        </Fragment>
    )
}