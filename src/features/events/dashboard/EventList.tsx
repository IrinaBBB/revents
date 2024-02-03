import EventListItem from './EventListItem.tsx'

function EventList(props: any) {
    return (
        <>
            {props.events.map(event => (
                <EventListItem event={event} key={event.id} />
            ))}
        </>
    )
}

export default EventList