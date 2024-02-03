import { Button, Container, Menu, MenuItem } from 'semantic-ui-react'

function NavBar() {
    return (
        <Menu inverted={true} fixed='top'>
            <Container>
                <MenuItem header>
                    <img src='/logo.png' alt='logo' />
                    Re-vents
                </MenuItem>
                <MenuItem name='Events' />
                <MenuItem>
                    <Button floated='right' positive={true} inverted={true} content='Create event' />
                </MenuItem>
                <MenuItem position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.54em'}}/>
                </MenuItem>
            </Container>
        </Menu>
    )
}

export default NavBar