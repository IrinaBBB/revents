import EventDashboard from '../../features/events/dashboard/EventDashboard.tsx'
import NavBar from './nav/NavBar.tsx'
import { Container } from 'semantic-ui-react'

function App() {

    return (
        <>
            <NavBar />
            <Container className='main'>
                <EventDashboard />
            </Container>
        </>
    )
}

export default App
