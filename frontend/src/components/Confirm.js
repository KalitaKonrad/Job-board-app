import React, { Component } from 'react';
import { List, ListItem, ListItemText, Container } from '@material-ui/core';

export default class Confirm extends Component {
  render() {
    const {
      values: {
        position,
        description,
        experienceLevel,
        location,
        minimumSalary,
        maximumSalary,
        city,
        country,
        locationState,
        street,
        zip,
        skills,
      },
    } = this.props;
    return (
      <div>
        <Container maxWidth='xs'>
          <List>
            <ListItem>
              <ListItemText inset primary='Position' secondary={position} />
            </ListItem>
            {/* <ListItem primaryText='Description' secondaryText={description} />
          <ListItem primaryText='Experience level' secondaryText={experienceLevel} />
          <ListItem primaryText='Location' secondaryText={location} />
          <ListItem primaryText='Minimum salary' secondaryText={minimumSalary} />
          <ListItem primaryText='Maximum salary' secondaryText={maximumSalary} />
          <ListItem primaryText='City' secondaryText={city} />
          <ListItem primaryText='Country' secondaryText={country} />
          <ListItem primaryText='State' secondaryText={locationState} />
          <ListItem primaryText='Street' secondaryText={street} />
          <ListItem primaryText='Zip' secondaryText={zip} /> */}
          </List>
        </Container>
      </div>
    );
  }
}
