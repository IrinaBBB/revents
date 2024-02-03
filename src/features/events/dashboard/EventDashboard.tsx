import { Grid } from 'semantic-ui-react'
import EventList from './EventList.tsx'
import EventForm from '../form/EventForm.tsx'
import { useEffect, useState } from 'react'
import { AppEvent } from '../../../app/types/Events.ts'
import { sampleData } from '../../../app/api/sampleData.ts'

type Props = {
    formOpen: boolean
    setFormOpen: (value: boolean) => void
    selectEvent: (event: AppEvent | null) => void
    selectedEvent: AppEvent | null
}

function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }: Props) {
    const [events, setEvents] = useState<AppEvent[]>([])

    useEffect(() => {
        setEvents(sampleData)
    }, [])

    function addEvent(event: AppEvent) {
        setEvents(prevState => {
            return [...prevState, event]
        })
    }

    function updateEvent(updatedEvent: AppEvent) {
        setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event))
        selectEvent(null)
        setFormOpen(false)
    }


    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm updateEvent={updateEvent} key={selectedEvent ? selectedEvent.id : 'create'}
                                        selectedEvent={selectedEvent}
                                        setFormOpen={setFormOpen} addEvent={addEvent} />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
