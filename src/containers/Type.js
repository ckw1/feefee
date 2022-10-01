import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Popover from '@mui/material/Popover'
import Divider from '@mui/material/Divider'
// import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box'

import IconButton from '@mui/material/IconButton'

import NormalIcon from '../colorIcons/normal.svg'
import FireIcon from '../colorIcons/fire.svg'
import WaterIcon from '../colorIcons/water.svg'
import GrassIcon from '../colorIcons/grass.svg'
import ElectricIcon from '../colorIcons/electric.svg'
import IceIcon from '../colorIcons/ice.svg'
import RockIcon from '../colorIcons/rock.svg'
import GroundIcon from '../colorIcons/ground.svg'
import FlyingIcon from '../colorIcons/flying.svg'
import PsychicIcon from '../colorIcons/psychic.svg'
import FightingIcon from '../colorIcons/fighting.svg'
import BugIcon from '../colorIcons/bug.svg'
import PoisonIcon from '../colorIcons/poison.svg'
import GhostIcon from '../colorIcons/ghost.svg'
import DragonIcon from '../colorIcons/dragon.svg'
import DarkIcon from '../colorIcons/dark.svg'
import SteelIcon from '../colorIcons/steel.svg'
import FairyIcon from '../colorIcons/fairy.svg'

import './Type.css'

const Type = (props) => {
  const [AttackType, setAttackType] = React.useState([
    {
      name: 'Normal',
      alias: 'Norm',
      on: false,
    },
    {
      name: 'Fire',
      alias: 'Fire',
      on: false,
    },
    {
      name: 'Water',
      alias: 'Watr',
      on: false,
    },
    {
      name: 'Grass',
      alias: 'Gras',
      on: false,
    },
    {
      name: 'Electric',
      alias: 'Elec',
      on: false,
    },
    {
      name: 'Ice',
      alias: 'Ice',
      on: false,
    },
    {
      name: 'Rock',
      alias: 'Rock',
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
      alias: 'Pois',
      on: false,
    },
    {
      name: 'Ghost',
      alias: 'Ghst',
      on: false,
    },
    {
      name: 'Dragon',
      alias: 'Drag',
      on: false,
    },
    {
      name: 'Dark',
      alias: 'Dark',
      on: false,
    },
    {
      name: 'Steel',
      alias: 'Stel',
      on: false,
    },
    {
      name: 'Fairy',
      alias: 'Fair',
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
  const icon = [
    NormalIcon,
    FireIcon,
    WaterIcon,
    GrassIcon,
    ElectricIcon,
    IceIcon,
    RockIcon,
    GroundIcon,
    FlyingIcon,
    PsychicIcon,
    FightingIcon,
    BugIcon,
    PoisonIcon,
    GhostIcon,
    DragonIcon,
    DarkIcon,
    SteelIcon,
    FairyIcon,
  ]
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
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 1, 1],
    [1, 0.5, 2, 0.5, 1, 0.5, 2, 2, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5],
    [1, 0.5, 0.5, 2, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
    [1, 2, 0.5, 0.5, 0.5, 2, 1, 0.5, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 1, 1, 0.5, 1],
    [1, 2, 1, 1, 1, 0.5, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1],
    [0.5, 0.5, 2, 2, 1, 1, 1, 2, 0.5, 1, 2, 1, 0.5, 1, 1, 1, 2, 1],
    [1, 1, 2, 2, 0, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1],
    [1, 1, 1, 0.5, 2, 2, 2, 0, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 2, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 1, 0.5, 1, 2, 2, 1, 0.5, 1, 1, 1, 0.5, 1, 2],
    [1, 2, 1, 0.5, 1, 1, 2, 0.5, 2, 1, 0.5, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0.5, 1, 1, 1, 2, 1, 2, 0.5, 0.5, 0.5, 1, 1, 1, 1, 0.5],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0.5, 0.5, 2, 1, 2, 1, 1],
    [1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 1, 0.5, 1, 0.5, 1, 2],
    [0.5, 2, 1, 0.5, 1, 0.5, 0.5, 2, 0.5, 0.5, 2, 0.5, 0, 1, 0.5, 1, 0.5, 0.5],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 2, 1, 0, 0.5, 2, 1],
  ]

  const [AttackStatus, setAttackStatus] = React.useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ])

  const [DefenseStatus, setDefenseStatus] = React.useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ])

  const handleAttackClick = (index) => {
    AttackType.forEach((x, i) => {
      if (i !== index) {
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

    if (AttackType[index].on === true) {
      setAttackStatus(p)
    } else {
      setAttackStatus([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
    }
  }

  const handleDefenseClick = (index) => {
    let counter = DefenseType.reduce((total, x) => total + (x.on === true), 0)
    if (counter < 2) {
      DefenseType[index].on = !DefenseType[index].on
    } else {
      if (DefenseType[index].on === true) {
        DefenseType[index].on = !DefenseType[index].on
      }
    }

    if (counter <= 2) {
      setDefenseType([...DefenseType])
    }

    let finalcount = DefenseType.filter((x) => x.on === true).length

    var p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    if (finalcount === 0) {
      p = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    } else if (finalcount === 1) {
      let first = DefenseType.findIndex((y) => y.on === true)
      p = defenseTable[first]
    } else if (finalcount === 2) {
      let first = DefenseType.findIndex((y) => y.on === true)
      let last = DefenseType.findLastIndex((y) => y.on === true)
      let t1 = defenseTable[first]
      let t2 = defenseTable[last]
      p = t1.map((z, i) => {
        return z * t2[i]
      })
    }

    setDefenseStatus(p)
  }

  return (
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="center">
        {AttackType.map((item, index) => (
          <Grid item>
            <Button
            color="warning"
              size="small"
              variant={item.on ? 'contained' : 'outlined'}
              onClick={() => handleAttackClick(index)}>
              <img src={icon[index]} width="32"></img>
              <Typography variant="caption">{item.name}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      <table>
        <tr>
          <td colspan="18">
            {AttackType.filter((x) => x.on === true).map((item, index) => (
              <div>
                <Button fullWidth variant="contained" color="error">
                  <Typography>Attacking with </Typography>
                  <img
                    src={icon[AttackType.findIndex((x) => x.name == item.name)]}
                    width="32"></img>
                  <Typography>{item.name}</Typography>
                </Button>
              </div>
            ))}
          </td>
        </tr>
        <tr>
          {AttackType.map((item, index) => (
            <td id="type">
              <Card raised sx={{ 'padding-bottom': '0px', width: '50px' }}>
                <CardContent sx={{ padding: '8px' }}>
                  <div>
                    <img aria-owns="attack" src={icon[index]} width="32"></img>
                  </div>
                  {/* <Popover
                    id="attack"
                    open
                    anchorEl="true"
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}>
                    The content of the Popover.
                  </Popover> */}
                  <IconButton
                    size="small"
                    color={
                      AttackStatus[index] === 1
                        ? 'primary'
                        : AttackStatus[index] > 1
                        ? 'error'
                        : 'secondary'
                    }>
                    <Typography
                      //   align="center"
                      variant={AttackStatus[index] === 1 ? 'body1' : 'button'}>
                      {AttackStatus[index]}x
                    </Typography>
                  </IconButton>
                </CardContent>
              </Card>
            </td>
          ))}
        </tr>
        {/* <tr>
          {DefenseStatus.map((item, index) => (
            <td>{item}</td>
          ))}
        </tr> */}
      </table>

      <Divider sx={{ margin: "10px", borderBottomWidth: 5 }} />

{/* DefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefenseDefense */}

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="space-evenly"
        alignItems="center">
        {DefenseType.map((item, index) => (
          <Grid item>
            <Button
            color="success"
              size="small"
              variant={item.on ? 'contained' : 'outlined'}
              onClick={() => handleDefenseClick(index)}>
              <img src={icon[index]} width="32"></img>
              <Typography variant="caption">{item.name}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
      <table>
        <tr>
          {DefenseType.map((item, index) => (
            <td id="type">
              <Card raised sx={{ 'padding-bottom': '0px', width: '50px' }}>
                <CardContent sx={{ padding: '8px' }}>
                  <div>
                    <img src={icon[index]} width="32"></img>
                  </div>
                  <IconButton
                    size="small"
                    color={
                      DefenseStatus[index] === 1
                        ? 'primary'
                        : DefenseStatus[index] > 1
                        ? 'error'
                        : 'secondary'
                    }>
                    <Typography
                      //   align="center"
                      variant={DefenseStatus[index] === 1 ? 'body1' : 'button'}>
                      {DefenseStatus[index]}x
                    </Typography>
                  </IconButton>
                </CardContent>
              </Card>
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
            {DefenseType.filter((x) => x.on === true).map((item) => (
              <span>
              <Button variant="contained" color="success" sx={{width: DefenseType.filter((x) => x.on === true).length === 1 ? "100%" : "49%", margin: "1px"}}>
                
                <img
                  src={icon[DefenseType.findIndex((x) => x.name == item.name)]}
                  width="32"></img>
                <Typography>{item.name}</Typography>
              </Button>
            </span>
            ))}
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Type
