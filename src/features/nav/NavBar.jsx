import {Button, Container, Menu} from "semantic-ui-react";

export default function NavBar({setFormOpen}) {
    return (
        <Menu inverted style={{borderRadius: 0}}>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item name='Events'/>
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create event'/>
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login'/>
                    <Button basic inverted content='Register' style={{marginLeft: '0.5em'}}/>
                </Menu.Item>
            </Container>
        </Menu>
    );
}
