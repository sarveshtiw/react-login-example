import React from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table, TableBody, TableFooter, TableHeader, 
    TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import {styles} from '../../font/Size'

const Main = ({
      list,
      onSearch,
      search,
      onOpen
}) => (
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
                <TableHeaderColumn tooltip="Surface Water">Surface Water</TableHeaderColumn>
                <TableHeaderColumn tooltip="Population">Population</TableHeaderColumn>
                <TableHeaderColumn tooltip="Action">Action</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            <TableRow key="search">
                <TableRowColumn style={styles.searchWidth} collspan={10}>
                    <TextField
                        hintText="Type name here"
                        floatingLabelText="Type name here"
                        fullWidth={true}
                        name="planet_name"
                        value={search.planet_name}
                        onChange={onSearch}
                    />
                </TableRowColumn>
            </TableRow>

           {list.length > 0 && list.map((row, index) => (
                    <TableRow key={index} style={(styles[row.rotation_period] && row.population !='unknown')? styles[row.rotation_period]:styles.fontSize_def}>
                        <TableRowColumn style={styles.removePadding}>{row.name}</TableRowColumn>
                        <TableRowColumn style={styles.removePadding}>{row.rotation_period}</TableRowColumn>
                        <TableRowColumn style={styles.removePadding}>{row.orbital_period}</TableRowColumn>
                        <TableRowColumn style={styles.removePadding}>{row.surface_water}</TableRowColumn>
                        <TableRowColumn style={styles.removePadding}>{row.population}</TableRowColumn>
                        <TableRowColumn style={styles.removePadding}>
                            <RaisedButton label="Get Detail" onClick={() => { onOpen(row); }} />
                        </TableRowColumn>
                    </TableRow>
                )
            )
            }
        </TableBody>
    </Table>
);
export default Main;
