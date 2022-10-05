import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import Skeleton from '@mui/material/Skeleton'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Dex = () => {
  const [list, setList] = useState([])
  const [offset, setoffset] = useState(1)
  const [hasMore, sethasMore] = useState(true)

  useEffect(() => {
    getList(offset)
  }, [])

  const getList = async (localoffset) => {
    if (offset > 30) {
      sethasMore(false)
      return
    }
    console.log(localoffset)
    var a = list
    for (let i = localoffset; i < 10; i++) {
      await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon-species/${i}`,
      })
        .then((res) => {
          console.log(res.data)
          a.push(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    console.log(a)
    setoffset(localoffset+10)
    setList(a)
  }

  const refresh = () => {
    console.log('refresh')
  }

  return (
    <Grid item container direction="column" display="flex" justify="center">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <InfiniteScroll
              dataLength={20} //This is important field to render the next data
              next={getList(offset)}
              hasMore={hasMore}
              loader={
                <Card>
                  {/* <Skeleton variant="rectangular" width="100%">
              <div style={{ paddingTop: '57%' }} />
            </Skeleton>
            <Skeleton width="80%">
              <h4>Loading...</h4>
            </Skeleton> */}
                </Card>
              }
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>The End</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={refresh}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8595; Pull down to refresh
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: 'center' }}>
                  &#8593; Release to refresh
                </h3>
              }>
              {list.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="right">{item.names[3].name}</TableCell>
                </TableRow>
              ))}
            </InfiniteScroll>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  )
}

export default Dex
