import React, { useState } from "react";
import {
  Container,
  Grid,
  Pagination,
  Header,
  Card,
  Button,
} from "semantic-ui-react";

const Index = ({ todos }) => {
  const [page, setPage] = useState(1);
  return (
    <>
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

              if (task.id > 20 * page || task.id <= 20 * (page-1) ) {
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
          <Pagination defaultActivePage={1} totalPages={Math.ceil(todos.length / 20)} onPageChange={(e, data) => setPage(data.activePage)} />
        </Container>
      ) : (
        <Container text>DID NOT RECEIVE JSON</Container>
      )}
    </>
  );
};

export default Index;
