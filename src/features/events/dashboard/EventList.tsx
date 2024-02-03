import EventListItem from './EventListItem.tsx'
import { AppEvent } from '../../../app/types/Events.ts'

type Props = {
    events: AppEvent[]
    selectEvent: (event: AppEvent) => void
}

function EventList({ events, selectEvent }: Props) {
    return (
        <>
            {events.map(event => (
                <EventListItem event={event} key={event.id} selectEvent={selectEvent} />
            ))}
        </>
    )
}

export default EventList