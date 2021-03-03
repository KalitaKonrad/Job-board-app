// import React, { Component } from 'react';
// import { List, ListItemText, ListItem, Container } from '@material-ui/core';
// import { styles } from '../theme';
//
// export default class Confirm extends Component {
//   render() {
//     const {
//       values: {
//         position,
//         description,
//         experienceLevel,
//         location,
//         minimumSalary,
//         maximumSalary,
//         city,
//         country,
//         locationState,
//         street,
//         zip,
//         skills,
//       },
//     } = this.props;
//     return (
//       <div>
//         <Container maxWidth='xs' className='my-6'>
//           <List>
//             <ListItem>
//               <ListItemText
//                 primary='Position'
//                 secondary={position}
//                 primaryTypographyProps={{ className: styles.classes }}
//               />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Description' secondary={description} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Experience level' secondary={experienceLevel} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Location' secondary={location} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Minimum salary' secondary={minimumSalary} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Maximum salary' secondary={maximumSalary} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='City' secondary={city} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Country' secondary={country} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='State' secondary={locationState} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Street' secondary={street} />
//             </ListItem>
//             <ListItem>
//               <ListItemText primary='Zip' secondary={zip} />
//             </ListItem>
//           </List>
//         </Container>
//       </div>
//     );
//   }
// }
