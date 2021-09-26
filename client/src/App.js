import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {  Navbar, Home, Auth } from './components';



const App = () => {
   
    return (
<<<<<<< Updated upstream
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="strech" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
=======
        <BrowserRouter>
             <Container maxwidth="lg">
                    <Navbar />   
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/auth" exact component={Auth} />
                    </Switch>
             </Container>
        </BrowserRouter>
        
>>>>>>> Stashed changes
    )
}

export default App
