import {Button, Container, Menu} from "semantic-ui-react";
import {NavLink, useHistory} from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu";
import {useState} from "react";

export default function NavBar() {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut() {
        setAuthenticated(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top' style={{borderRadius: 0, marginBottom: 0}}>
            <Container>
                <Menu.Item as={NavLink} to='/' header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 15}}/>
                    Re-vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Events'/>
                <Menu.Item as={NavLink} to='/sandbox' name='Sandbox'/>
                {authenticated &&
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content='Create event'/>
                    </Menu.Item>
                }
                {authenticated ? <SignedInMenu signOut={handleSignOut}/> :
                    <SignedOutMenu setAuthenticated={setAuthenticated}/>
                }
            </Container>
        </Menu>
    );
}
