import React, {useState} from "react";
import {Button, Form, Header, Segment} from "semantic-ui-react";
import cuid from "cuid";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createEvent, updateEvent} from "../eventActions";

export default function EventForm({match, history}) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };
    const [values, setValues] = useState(initialValues);

    function handleFormSubmit() {
        selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values})) :
            dispatch(createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'Bob',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            }));
        history.push('/events');
    }

    function handleInputChanged(e) {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? 'Edit the event' : 'Create new event'}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder='Event Title' name='title' value={values.title}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Category' name='category' value={values.category}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Description' name='description' value={values.description}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='City' name='city' value={values.city}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder='Venue' name='venue' value={values.venue}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder='Date' name='date' value={values.date}
                           onChange={e => handleInputChanged(e)}/>
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit'/>
                <Button type='submit' floated='right' content='Cancel' as={Link} to='/events'/>
            </Form>
        </Segment>
    );
}
