import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import { createEvent, updateEvent } from '../eventActions';
import cuid from 'cuid';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MySelectInput';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

export default function EventForm({ match, history }) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) =>
        state.event.events.find((e) => e.id === match.params.id)
    );
    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide a title'),
        category: Yup.string().required('You must provide a category'),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),
    });

    return (
        <Segment clearing>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    selectedEvent
                        ? dispatch(updateEvent({ ...selectedEvent, ...values }))
                        : dispatch(
                              createEvent({
                                  ...values,
                                  id: cuid(),
                                  hostedBy: 'Bob',
                                  attendees: [],
                                  hostPhotoURL: '/assets/user.png',
                              })
                          );
                    history.push('/events');
                }}
            >
                {({ isSubmitting, dirty, isValid }) => (
                    <Form className="ui form">
                        <Header sub color="teal" content="Events Detail" />
                        <MyTextInput name="title" placeholder="Event Name" />
                        <MySelectInput
                            name="category"
                            placeholder="Event Category"
                            options={categoryData}
                        />
                        <MyTextArea
                            name="description"
                            rows={3}
                            placeholder="Event Description"
                        />
                        <Header
                            sub
                            color="teal"
                            content="Events Location Details"
                        />
                        <MyTextInput name="city" placeholder="City" />
                        <MyTextInput name="venue" placeholder="Event Venue" />
                        <MyDateInput
                            name="date"
                            placeholderText="Event Date"
                            timeFormat="HH:mm"
                            showTimeSelect
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm a"
                        />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit"
                            floated="right"
                            positive
                            content="Submit"
                        />
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            floated="right"
                            content="Cancel"
                            as={Link}
                            to="/events"
                        />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
}
