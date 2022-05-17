import React, { useState } from "react";
import {
  Container,
  Grid,
  Pagination,
  Header,
  Card,
  Button,
} from "semantic-ui-react";
import HeadTags from "./layout/HeadTags";

const index = ({ todos }) => {
  const [page, setPage] = useState(1);
  return (
    <>
      {/* <HeadTags /> */}
      {todos ? (
        <Container fluid textAlign="center" style={{ marginTop: "4rem" }}>
          <Header color="orange" as="h1">
            TO DOs
          </Header>
          <Grid
            columns='4'
            centered
            relaxed
            style={{
              marginTop: "2rem",
              marginBottom: "2rem",
              textAlign: "left",
              textTransform: "capitalize",
            }}
          >
            {todos.map((task) => {
              switch (task.userId) {
                case 1:
                  task.name = "Jimmy";
                  break;
                case 2:
                  task.name = "Billy";
                  break;
                case 3:
                  task.name = "Jill";
                  break;
                case 4:
                  task.name = "Ben";
                  break;
                case 5:
                  task.name = "Jenny";
                  break;
                case 6:
                  task.name = "Stacy";
                  break;
                case 7:
                  task.name = "Daniel";
                  break;
                case 8:
                  task.name = "Mark";
                  break;
                case 9:
                  task.name = "Mary";
                  break;
                case 10:
                  task.name = "Luke";
                  break;
                default:
                  task.name = "User";
              }

              if (task.id > 20 * page || task.id <= 20 * (page-1) ) { // P1: 1-20, P2: 21-40 
                return;
              }

              return (
                <Card style={{ margin: '.8rem' }} key={task.id}>
                  <Card.Content>
                    <Card.Header>{task.title}</Card.Header>
                    <Card.Meta>
                      <span className="date">Created by: {task.name}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      fluid
                      color={task.completed ? "green" : "red"}
                    >
                      {task.completed ? "Finished" : "Not Done"}
                    </Button>
                  </Card.Content>
                </Card>
              );
            })}
          </Grid>
          <Pagination defaultActivePage={1} totalPages={10} onPageChange={(e, data) => setPage(data.activePage)} />
        </Container>
      ) : (
        <Container text>DIDN'T RECEIVE JSON</Container>
      )}
    </>
  );
};

export default index;
