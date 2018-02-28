import React from 'react';
import {Card, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';

const styles = {
    main: {
        backgroundColor: '#00bcd4',
        width: '100%'
    },
    bradecrum: {
        float: 'left',
        padding: '20px'
    },
    detail: {
        float: 'right'
    },
    logout: {
        float: 'right'
    }
};
const Header = ({userInfo}) => (
    <Card style={styles.main}>
        <div style={styles.bradecrum}>Dashboard | <a href="/">Logout</a></div>
        <CardHeader
            title={userInfo.name}
            subtitle={userInfo.birth_year}
            avatar={<Avatar backgroundColor="#FFEB3B" icon={<LightBulbIcon/>}/>}
            style={styles.detail}
        />
    </Card>
);
export default Header;
