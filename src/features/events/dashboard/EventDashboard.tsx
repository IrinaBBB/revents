import { Grid } from 'semantic-ui-react'
import EventList from './EventList.tsx'
import EventForm from '../form/EventForm.tsx'
import { useEffect, useState } from 'react'
import { AppEvent } from '../../../app/types/Events.ts'
import { sampleData } from '../../../app/api/sampleData.ts'

type Props = {
    formOpen: boolean
    setFormOpen: (value: boolean) => void
}

function EventDashboard({ formOpen, setFormOpen }: Props) {
    const [events, setEvents] = useState<AppEvent[]>([])

    useEffect(() => {
        setEvents(sampleData)
    }, [])

    function addEvent(event: AppEvent) {
        setEvents(prevState => {
            return [...prevState, event]
        })
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} addEvent={addEvent} />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
