import { Button, Icon, Item, ItemGroup, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee.tsx'

function EventListItem() {
    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <Item.Image size='tiny' circular src='/user.png' />
                        <Item.Content>
                            <Item.Header content='Event Title' />
                            <Item.Description content='Hosted by Bob' />
                        </Item.Content>
                    </Item>
                </ItemGroup>
            </Segment>
            <Segment>
                <span><Icon name='clock' /> Date</span>
                <span><Icon name='marker' /> Venue</span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    <EventListAttendee />
                    <EventListAttendee />
                    <EventListAttendee />
                </List>
            </Segment>
            <Segment clearing>
                <div>Description of the event</div>
                <Button color='teal' floated='right' content='View' />
                <Button color='red' floated='right' content='Delete' />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem