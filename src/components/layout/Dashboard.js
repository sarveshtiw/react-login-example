import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
    Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
}
    from 'material-ui/Table';
import Main from '../dashboard/Main'
import Header from './Header'

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    },
    table_default: {
        width: '100%',
        border: '0px'
    },
    table_container: {
        width: '80%'
    },
    removePadding: {
        padding: '0px !important',
        whiteSpace: 'normal',
        wordWrap: 'break-word'
    }
}

const customContentStyle = {
    width: '100%',
    maxWidth: 'none',
}

const Dashboard = ({
       userInfo,
       list,
       arrData,
       onSearch,
       search,
       onClose,
       onOpen,
       dialogBox,
       objData
   }) => (
    <div style={styles.main}>
        <Header
            userInfo={userInfo}
        />
        <table style={styles.table_default}>
            <tr>
                <td style={styles.table_container}>
                    <h2>List of planets</h2>
                </td>
            </tr>
            <tr>
                <td style={styles.table_container}>
                    <Main
                        list={list}
                        onSearch={onSearch}
                        search={search}
                        onOpen={onOpen}
                    />
                </td>
            </tr>
        </table>
        <Dialog
            title="Planet Detail"
            actions={<FlatButton
                label="Cancel"
                primary={true}
                onClick={onClose}
            />}
            modal={true}
            contentStyle={customContentStyle}
            open={dialogBox}
            autoScrollBodyContent={true}
        >
            <Table
                fixedHeader={true}
                multiSelectable={false}
                selectable={false}
            >
                <TableHeader
                    enableSelectAll={false}
                    displaySelectAll={false}
                    adjustForCheckbox={false}
                >
                    <TableRow>
                        <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Rotation Period">Rotation Period</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Orbital Period">Orbital Period</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Diameter">Diameter</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Climate">Climate</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Gravity">Gravity</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Terrain">Terrain</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Surface Water">Surface Water</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Population">Population</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Residents">Residents</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Films">Films</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Created">Created</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Edited">Edited</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {Object.keys(objData).length ? (
                        <TableRow key="detail">
                            <TableRowColumn style={styles.removePadding}>{objData.name}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.rotation_period}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.orbital_period}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.diameter}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.climate}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.gravity}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.terrain}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.surface_water}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.population}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.residents.join()}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.films.join()}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.created}</TableRowColumn>
                            <TableRowColumn style={styles.removePadding}>{objData.edited}</TableRowColumn>
                        </TableRow>
                    ) : ('No record found')
                    }
                </TableBody>
            </Table>
        </Dialog>
    </div>
)

export default Dashboard
