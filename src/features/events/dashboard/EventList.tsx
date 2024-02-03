import EventListItem from './EventListItem.tsx'
import { AppEvent } from '../../../app/types/Events.ts'

type Props = {
    events: AppEvent[]
}

function EventList({ events }: Props) {
    return (
        <>
            {events.map(event => (
                <EventListItem event={event} key={event.id} />
            ))}
        </>
    )
}

export default EventList