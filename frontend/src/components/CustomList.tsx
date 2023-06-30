import { gql, useQuery } from '@apollo/client';
import AddTaskIcon from '@mui/icons-material/AddTask';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import React from 'react';
import { Todo } from '../global';

function CustomList() {
  const GET_TODOS = gql`
    query {
      todoListField(completed: false) {
        task
        timestamp
        completed
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListSubheader
        component="div"
        sx={{ backgroundColor: 'black', color: 'white' }}
      >
        Task List
      </ListSubheader>
      {data.todoListField.map((todo: Todo) => (
        <ListItem
          key={todo.task}
          secondaryAction={
            <IconButton edge="end" aria-label="comments">
              <AddTaskIcon />
            </IconButton>
          }
        >
          <ListItemText primary={todo.task} secondary={todo.timestamp} />
        </ListItem>
      ))}
    </List>
  );
}

export default CustomList;