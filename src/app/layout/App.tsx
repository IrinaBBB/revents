import EventDashboard from '../../features/events/dashboard/EventDashboard.tsx'
import NavBar from './nav/NavBar.tsx'
import { Container } from 'semantic-ui-react'
import { useState } from 'react'
import { AppEvent } from '../types/Events.ts'

function App() {
    const [formOpen, setFormOpen] = useState(false)
    const [selectedEvent, setSelectedEvent] = useState<AppEvent | null>(null)

    function handleSelectEvent(event: AppEvent) {
        setSelectedEvent(event)
        setFormOpen(true)
    }

    function handleCreateFormOpen() {
        setSelectedEvent(null)
        setFormOpen(true)
    }

    return (
        <>
            <NavBar setFormOpen={handleCreateFormOpen} />
            <Container className='main'>
                <EventDashboard setFormOpen={setFormOpen} formOpen={formOpen} selectEvent={handleSelectEvent}
                                selectedEvent={selectedEvent} />
            </Container>
        </>
    )
}

export default App
