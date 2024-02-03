import { Grid } from 'semantic-ui-react'
import EventList from './EventList.tsx'
import EventForm from '../form/EventForm.tsx'
import { sampleData } from '../../../app/api/sampleData.ts'

function EventDashboard() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData} />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventForm />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
