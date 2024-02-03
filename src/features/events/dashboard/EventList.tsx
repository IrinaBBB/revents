import EventListItem from './EventListItem.tsx'
import { AppEvent } from '../../../app/types/Events.ts'

type Props = {
    events: AppEvent[]
    selectEvent: (event: AppEvent) => void
    deleteEvent: (eventId: string) => void
}

function EventList({ events, selectEvent, deleteEvent }: Props) {
    return (
        <>
            {events.map(event => (
                <EventListItem event={event} key={event.id} selectEvent={selectEvent} deleteEvent={deleteEvent} />
            ))}
        </>
    )
}

export default EventList