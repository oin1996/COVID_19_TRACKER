import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';

const Cards =({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return 'Loading....';
    }
    return(
       <div className={styles.container}>
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={styles.infected}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom variant="h5" component="h2">Infected</Typography>
                       <Typography varaint="h5"> 
                        <CountUp
                            start={0}
                            end={confirmed.value}
                            duration= {4}
                            separator=","
                        />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom variant="h5" component="h2">Recoveries</Typography>
                       <Typography varaint="h5">
                        <CountUp
                            start={0}
                            end={recovered.value}
                            duration= {4}
                            separator=","
                        />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   </CardContent>
               </Grid>
               <Grid item component={Card} xs={12} md={3} className={styles.deaths}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom variant="h5" component="h2"> Deaths</Typography>
                       <Typography varaint="h5">
                        <CountUp
                            start={0}
                            end={deaths.value}
                            duration= {4}
                            separator=","
                        />
                       </Typography>
                       <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                   </CardContent>
               </Grid>
           </Grid>
       </div>
    )

}

export default Cards ;