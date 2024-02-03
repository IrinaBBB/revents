import { Grid } from 'semantic-ui-react'
import EventList from './EventList.tsx'
import EventForm from '../form/EventForm.tsx'
import { sampleData } from '../../../app/api/sampleData.ts'

type Props = {
    formOpen: boolean
    setFormOpen: (value: boolean) => void
}

function EventDashboard({formOpen, setFormOpen}: Props) {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventForm setFormOpen={setFormOpen} />}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard
