import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import styled from 'styled-components';

import { themes } from '../theming/theme'

interface iMyDrawer {
  width: number
  open: boolean
  anchor: 'left' | 'right'
}
const MyDrawer = styled(Drawer)<iMyDrawer>`
    width: ${props => props.width}px;
    margin-left: ${props => props.open ? '0' : props.anchor === 'left' ? '-250px' : '0'};
    margin-right: ${props => props.open ? '0' : props.anchor === 'right' ? '-250px' : '0'};
    flex-shrink: 0;

    transition: margin-left 0.25s, margin-right 0.25s;

    .MuiDrawer-paper {
      width: ${props => props.width}px;
    }

    .MuiDrawer-paperAnchorLeft {
      left: auto;
    }
    .MuiDrawer-paperAnchorRight {
      right: auto;
    }
`

const MainWraper = styled.div``
const DrawerContainer = styled.div``
const Wrapper = styled.div`
    display: flex;

    & ${MainWraper} {
      flex-grow: 1;
      padding: ${themes.spacing * 3}px;
    }

    & ${DrawerContainer} {
      overflow: auto;
    }
    
`

interface iMainLayout {
  drawerWidth?: number
  leftDrawerOpen?: boolean
  rightDrawerOpen?: boolean
  leftDrawerContent?: React.ReactNode
  rightDrawerContent?: React.ReactNode
}

export const BodyLayout: React.FC<iMainLayout> = props => {
  const { drawerWidth = 240, leftDrawerOpen = true, rightDrawerOpen = true, leftDrawerContent } = props

  return (
    <Wrapper>
      {leftDrawerContent &&
        <MyDrawer
          anchor="left"
          open={leftDrawerOpen}
          width={drawerWidth}
          variant="permanent"
        >
          <Toolbar />
          <DrawerContainer>
            {props.leftDrawerContent}
          </DrawerContainer>
        </MyDrawer>}
      <MainWraper>
        <Toolbar />
        {props.children}
      </MainWraper>
      {leftDrawerContent &&
        <MyDrawer
          anchor="right"
          open={rightDrawerOpen}
          width={drawerWidth}
          variant="permanent"
        >
          <Toolbar />
          <DrawerContainer>
            {props.rightDrawerContent}
          </DrawerContainer>
        </MyDrawer>}
    </Wrapper>
  );
}