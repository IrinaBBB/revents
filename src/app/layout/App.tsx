import { Button } from 'semantic-ui-react'

function App() {

    return (
        <>
            <h1>Welcome to Revents</h1>
            <button className='ui icon red button'><i className='user icon'></i></button>
            <Button icon='smile' content='Button' color='green' loading={false}/>
        </>
    )
}

export default App
