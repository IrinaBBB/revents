import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { ChangeEvent, useState } from 'react'


type Props = {
    setFormOpen: (value: boolean) => void
}

export function EventForm({ setFormOpen }: Props) {
    const initialValues = {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    }
    const [values, setValues] = useState(initialValues)

    function onSubmit() {
        console.log(values)
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    return (
        <Segment clearing>
            <Header content={'Create new event'} />
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input type='text' placeholder='Event Title' name='title' value={values.title}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Category' name='category' value={values.category}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Description' name='description' value={values.description}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='City' name='city' value={values.city}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='text' placeholder='Venue' name='venue' value={values.venue}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Form.Field>
                    <input type='date' placeholder='Date' name='date' value={values.date}
                           onChange={e => handleInputChange(e)} />
                </Form.Field>
                <Button type='submit' floated='right' positive content='Submit' />
                <Button type='submit' floated='right' content='Cancel' onClick={() => setFormOpen(false)} />
            </Form>
        </Segment>
    )
}

export default EventForm