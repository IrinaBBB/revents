import React from 'react';
import {Container} from "semantic-ui-react";

import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventsDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import {Route} from "react-router-dom";


function App() {
    // function handleCreateFormOpen() {
    //     setSelectedEvent(null);
    //     setFormOpen(true);
    // }

    return (
        <>
            <Route exact path='/' component={HomePage}/>
            <Route path={'/(.+)'}
                   render={() => (
                       <>
                           <NavBar/>
                           <Container>
                               <Route exact path='/events' component={EventDashboard}/>
                               <Route path='/events/:id' component={EventDetailedPage}/>
                               <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
                           </Container>
                       </>
                   )}
            />
        </>
    );
}

export default App;
