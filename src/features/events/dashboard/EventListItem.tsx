import { Button, Icon, Item, ItemGroup, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee.tsx'
import { AppEvent } from '../../../app/types/Events.ts'


type Props = {
    event: AppEvent
}

function EventListItem({ event }: Props) {
    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL || '/user.png'} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>{event.hostedBy}</Item.Description>
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span><Icon name='clock' />{event.date}</span>
                <span><Icon name='marker' />{event.venue}</span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventListAttendee attendee={attendee} key={attendee.id} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button color='teal' floated='right' content='View' />
                <Button color='red' floated='right' content='Delete' />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem