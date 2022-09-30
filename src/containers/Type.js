import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import './Type.css'

const Type = (props) => {
  const [AttackType, setAttackType] = React.useState([
    {
      name: 'Normal',
      alias: 'Nor',
      on: false,
    },
    {
      name: 'Fire',
      alias: 'Fir',
      on: false,
    },
    {
      name: 'Water',
      alias: 'Wtr',
      on: false,
    },
    {
      name: 'Grass',
      alias: 'Gra',
      on: false,
    },
    {
      name: 'Electric',
      alias: 'Ele',
      on: false,
    },
    {
      name: 'Ice',
      alias: 'Ice',
      on: false,
    },
    {
      name: 'Rock',
      alias: 'Roc',
      on: false,
    },
    {
      name: 'Ground',
      alias: 'Grd',
      on: false,
    },
    {
      name: 'Flying',
      alias: 'Fly',
      on: false,
    },
    {
      name: 'Psychic',
      alias: 'Psy',
      on: false,
    },
    {
      name: 'Fighting',
      alias: 'Fgt',
      on: false,
    },
    {
      name: 'Bug',
      alias: 'Bug',
      on: false,
    },
    {
      name: 'Poison',
      alias: 'Poi',
      on: false,
    },
    {
      name: 'Ghost',
      alias: 'Gho',
      on: false,
    },
    {
      name: 'Dragon',
      alias: 'Dra',
      on: false,
    },
    {
      name: 'Dark',
      alias: 'Drk',
      on: false,
    },
    {
      name: 'Steel',
      alias: 'Ste',
      on: false,
    },
    {
      name: 'Fairy',
      alias: 'Fai',
      on: false,
    },
  ])

  const [DefenseType, setDefenseType] = React.useState([
    {
        name: 'Normal',
        alias: 'Nor',
        on: false,
      },
      {
        name: 'Fire',
        alias: 'Fir',
        on: false,
      },
      {
        name: 'Water',
        alias: 'Wtr',
        on: false,
      },
      {
        name: 'Grass',
        alias: 'Gra',
        on: false,
      },
      {
        name: 'Electric',
        alias: 'Ele',
        on: false,
      },
      {
        name: 'Ice',
        alias: 'Ice',
        on: false,
      },
      {
        name: 'Rock',
        alias: 'Roc',
        on: false,
      },
      {
        name: 'Ground',
        alias: 'Grd',
        on: false,
      },
      {
        name: 'Flying',
        alias: 'Fly',
        on: false,
      },
      {
        name: 'Psychic',
        alias: 'Psy',
        on: false,
      },
      {
        name: 'Fighting',
        alias: 'Fgt',
        on: false,
      },
      {
        name: 'Bug',
        alias: 'Bug',
        on: false,
      },
      {
        name: 'Poison',
        alias: 'Poi',
        on: false,
      },
      {
        name: 'Ghost',
        alias: 'Gho',
        on: false,
      },
      {
        name: 'Dragon',
        alias: 'Dra',
        on: false,
      },
      {
        name: 'Dark',
        alias: 'Drk',
        on: false,
      },
      {
        name: 'Steel',
        alias: 'Ste',
        on: false,
      },
      {
        name: 'Fairy',
        alias: 'Fai',
        on: false,
      },
  ])

  const attackTable = [
    [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    [1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 2, 1, 1, 0.5, 1, 2, 1],
    [1, 2, 0.5, 0.5, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    [1, 0.5, 2, 0.5, 1, 1, 2, 2, 0.5, 1, 1, 0.5, 0.5, 1, 0.5, 1, 0.5, 1],
    [1, 1, 2, 0.5, 0.5, 1, 1, 0, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 1],
    [1, 0.5, 0.5, 2, 1, 0.5, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1, 0.5, 1],
    [1, 2, 1, 1, 1, 2, 1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 1, 0.5, 1],
    [1, 2, 1, 0.5, 2, 1, 2, 1, 0, 1, 1, 0.5, 2, 1, 1, 1, 2, 1],
    [1, 1, 1, 2, 0.5, 1, 0.5, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 0, 0.5, 1],
    [2, 1, 1, 1, 1, 2, 2, 1, 0.5, 0.5, 1, 0.5, 0.5, 0, 1, 2, 2, 0.5],
    [1, 0.5, 1, 2, 1, 1, 1, 1, 0.5, 2, 0.5, 1, 0.5, 0.5, 1, 2, 0.5, 0.5],
    [1, 1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 0, 2],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 0.5, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0.5, 1, 1, 2, 1, 0.5, 1, 0.5],
    [1, 0.5, 0.5, 1, 0.5, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 2],
    [1, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0.5, 1, 2, 2, 0.5, 1],
  ]

  const defenseTable = [
    [1,1,1,1,1,1,1,1,1,1,2,1,1,0,1,1,1,1],
[1,0.5,2,0.5,1,0.5,2,2,1,1,1,0.5,1,1,1,1,0.5,0.5],
[1,0.5,0.5,2,2,0.5,1,1,1,1,1,1,1,1,1,1,0.5,1],
[1,2,0.5,0.5,0.5,2,1,0.5,2,1,1,2,2,1,1,1,1,1],
[1,1,1,1,0.5,1,1,2,0.5,1,1,1,1,1,1,1,0.5,1],
[1,2,1,1,1,0.5,2,1,1,1,2,1,1,1,1,1,2,1],
[0.5,0.5,2,2,1,1,1,2,0.5,1,2,1,0.5,1,1,1,2,1],
[1,1,2,2,0,2,0.5,1,1,1,1,1,0.5,1,1,1,1,1],
[1,1,1,0.5,2,2,2,0,1,1,0.5,0.5,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,0.5,0.5,2,1,2,1,2,1,1],
[1,1,1,1,1,1,0.5,1,2,2,1,0.5,1,1,1,0.5,1,2],
[1,2,1,0.5,1,1,2,0.5,2,1,0.5,1,1,1,1,1,1,1],
[1,1,1,0.5,1,1,1,2,1,2,0.5,0.5,0.5,1,1,1,1,0.5],
[0,1,1,1,1,1,1,1,1,1,0,0.5,0.5,2,1,2,1,1],
[1,0.5,0.5,0.5,0.5,2,1,1,1,1,1,1,1,1,2,1,1,2],
[1,1,1,1,1,1,1,1,1,0,2,2,1,0.5,1,0.5,1,2],
[0.5,2,1,0.5,1,0.5,0.5,2,0.5,0.5,2,0.5,0,1,0.5,1,0.5,0.5],
[1,1,1,1,1,1,1,1,1,1,0.5,0.5,2,1,0,0.5,2,1]
  ]

  const [AttackStatus, setAttackStatus] = React.useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ])

  const [DefenseStatus, setDefenseStatus] = React.useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ])

  const handleAttackClick = (index) => {
    AttackType.forEach((x, i) => {
      if (i != index) {
        x.on = false
      }
    })
    AttackType[index].on = !AttackType[index].on

    setAttackType([...AttackType])

    const p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
      (c, i) => {
        return c * attackTable[index][i]
      }
    )

    if (AttackType[index].on == true) {
      setAttackStatus(p)
    } else {
      setAttackStatus([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    }
  }

  const handleDefenseClick = (index) => {
    let counter = DefenseType.reduce((total, x) => total + (x.on == true), 0)
    if (counter < 2) {
      DefenseType[index].on = !DefenseType[index].on
    } else {
      if (DefenseType[index].on == true) {
        DefenseType[index].on = !DefenseType[index].on
      }
    }

    if (counter <= 2) {
      setDefenseType([...DefenseType])
    }

    let finalcount = DefenseType.filter(x => x.on == true).length

    var p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    if(finalcount == 0){
        p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    } else if (finalcount == 1) {
        let first = DefenseType.findIndex(y => y.on == true)
        p = defenseTable[first]
    } else if (finalcount == 2) {
        let first = DefenseType.findIndex(y => y.on == true)
        let last = DefenseType.findLastIndex(y => y.on == true)
        let t1 = defenseTable[first]
        let t2 = defenseTable[last]
        p = t1.map((z,i) => {
            return z * t2[i]
        })
    }

    setDefenseStatus(p)
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {AttackType.map((item, index) => (
          <Grid item xs={2}>
            <Button
              size="small"
              variant={item.on ? 'contained' : 'outlined'}
              onClick={() => handleAttackClick(index)}>
              {item.name}
            </Button>
            {/* <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button> */}
          </Grid>
        ))}
      </Grid>

      <table>
      <tr>
          <td colspan="18">
            {AttackType.filter((x) => x.on == true).map((item, index) => (
              <Button color="secondary">{item.name}</Button>
            ))}
          </td>
        </tr>
        <tr>
          {AttackType.map((item, index) => (
            <td>
              {item.alias}
              <div>{AttackStatus[index]}</div>
            </td>
          ))}
        </tr>
        {/* <tr>
          {DefenseStatus.map((item, index) => (
            <td>{item}</td>
          ))}
        </tr> */}
        
      </table>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {DefenseType.map((item, index) => (
          <Grid item xs={2}>
            <Button
              size="small"
              variant={item.on ? 'contained' : 'outlined'}
              onClick={() => handleDefenseClick(index)}>
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <table>
        <tr>
          {DefenseType.map((item, index) => (
            <td>
              {item.alias}
              <div>{DefenseStatus[index]}</div>
            </td>
          ))}
        </tr>
        {/* <tr>
          {DefenseStatus.map((item, index) => (
            <td>{item}</td>
          ))}
        </tr> */}
        <tr>
          <td colspan="18">
            {DefenseType.filter((x) => x.on == true).map((item, index) => (
              <Button color="secondary">{item.name}</Button>
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Type
