import React from 'react'
import Avatar from 'material-ui/Avatar'
import LockIcon from 'material-ui/svg-icons/action/lock-outline'
import {Card} from 'material-ui/Card'
import Form from '../login/Form'

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgb(0, 188, 212)'
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center '
    },
}

const Login = ({
                   onSubmit,
                   onChange,
                   arrData
               }) => (
    <div style={styles.main}>
        <Card
            expandable={true}
            expanded={true}
            style={styles.card}
        >
            <div style={styles.avatar}>
                <Avatar backgroundColor={'#ff4081'} icon={<LockIcon/>} size={60}/>
            </div>
            <Form
                onSubmit={onSubmit}
                onChange={onChange}
                arrData={arrData}
            />
        </Card>
    </div>
)

export default Login
