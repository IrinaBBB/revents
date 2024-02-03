import { Image, ListItem } from 'semantic-ui-react'

function EventListAttendee({ attendee }: any) {
    return (
        <ListItem>
            <Image size='mini' circular src={attendee.photoURL} />
        </ListItem>
    )
}

export default EventListAttendee