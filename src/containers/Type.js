import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const Type = (props) => {
  const [AttackType, setAttackType] = React.useState([
    {
      name: 'Normal',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Fire',
      on: false,
      against: [1, 0.5, 0.5, 2, 1, 2, 0.5, 1, 1, 1, 1, 2, 1, 1, 0.5, 1, 2, 1],
    },
    {
      name: 'Water',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Grass',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Electric',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Ice',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Rock',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Ground',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Flying',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Psychic',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Fighting',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Bug',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Poison',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Ghost',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Dragon',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Dark',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Steel',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
    {
      name: 'Fairy',
      on: false,
      against: [1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 1],
    },
  ])

  const [AttackStatus, setAttackStatus] = React.useState([
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

    const p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((c, i) => {
      return c * AttackType[index].against[i]
    })

    setAttackStatus(p)
  }

  return (
    <div>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {AttackType.map((item, index) => (
          <Grid item xs={3}>
            <Button
              color="secondary"
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
          {AttackType.map((item, index) => (
            <td>{item.name}</td>
          ))}
        </tr>
        <tr>
          {AttackStatus.map((item, index) => (
            <td>{item}</td>
          ))}
        </tr>
        <tr>
          <td colspan="18">
            {AttackType.filter((x) => x.on == true).map((item, index) => (
              <span>{item.name}</span>
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Type
