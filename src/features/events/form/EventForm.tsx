import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { useState } from 'react'

// @ts-ignore
export function EventForm({ setFormOpen, setEvents, createEvent, selectedEvent, updateEvent }) {
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }
    // @ts-ignore
    const [values, setValues] = useState(initialValues)


    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
            <Form>
                <Form.Field>
                    <input type='text' placeholder='Event Title' name='title' value={values.title}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' name='category' value={values.category}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' name='description' value={values.description}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' name='city' value={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' name='venue' value={values.venue}
                    />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' name='date' value={values.date}
                    />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='button' floated='right' content='Cancel' nClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    )
}

export default EventForm