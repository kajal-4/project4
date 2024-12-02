import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          <Button varient="outlined"> <Link to={'/home'}
           style={{color:'white',textDecoration:'none'}} >
            Home
            </Link>
          </Button>
          <Button varient="text"> <Link to={'/'}
           style={{color:'white',textDecoration:'none'}} >
            Login
            </Link>
          </Button>
          <Button varient="contained" > <Link to={'/sign'}
           style={{color:'white',textDecoration:'none'}} >
            Signup
            </Link>
          </Button> 

          {/* <Button style={{color:'white'}}>LogOUT</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar