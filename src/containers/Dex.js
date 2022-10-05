import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'

const Dex = () => {
  const [list, setList] = useState([])


  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    console.log(list)
    for (let i = 1; i < 10; i++) {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon-species/${i}`,
      })
        .then((res) => {
            console.log(res.data.names[3].name)
          setList(list => [...list, res.data.names[3].name])
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const refresh = () => {
    console.log('WIP')
  }

  return (
    <Grid item container direction="column" display="flex" justify="center">
      <InfiniteScroll
        dataLength={list} //This is important field to render the next data
            //   next={}
        //    hasMore={}
        loader={
          <Card>
            <Skeleton variant="rectangular" width="100%">
              <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Skeleton width="80%">
              <h4>Loading...</h4>
            </Skeleton>
          </Card>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        refreshFunction={refresh}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }>
        {list.map((item, index) => (
          <div>{item}</div>
        ))}
      </InfiniteScroll>
    </Grid>
  )
}

export default Dex
