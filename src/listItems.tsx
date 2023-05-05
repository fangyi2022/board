import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const MainMenuItem = function() {

    // 添加新页面
    function addNewPage() {
        console.log("handle add new page")
    }

    return (
        <>
          <ListItemButton>
            <ListItemIcon>
              <SearchIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Search" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon color="primary"/>
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          <ListItemButton onClick={addNewPage}>
            <ListItemIcon>
              <AddIcon color="primary" />
            </ListItemIcon >
            <ListItemText primary="New Page" />
          </ListItemButton>
        </>
      );
}

export const PrivateItems = function() {
    return (
        <>
            <ListSubheader component="div">
            Private
            </ListSubheader>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
            </ListItemButton>
            <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
            </ListItemButton>
        </>       
    )
}

export const secondaryListItems = (
  <>
    <ListSubheader component="div">
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </>
);