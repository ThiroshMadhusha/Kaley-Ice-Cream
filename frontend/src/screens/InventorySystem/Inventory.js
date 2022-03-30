import React, { useEffect } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen'
import innventorydata, { } from "../../data/addInventory"

const Inventory = () => {

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure ?")) {


        }
  };
  const fetchInventory = async () => {
    const data = await axios.get('http://localhost:5000/api/addInventory');
    console.log(data);
  };
  useEffect(() => {
    const data = await axios
  }, [])
  

    return (
      <MainScreen title="Inventory Management System">
        <Link to="createinventory">
          <Button
            style={{ margineLeft: 10, marginBottom: 6 }}
            size="lg"
            variant="info"
          >
            Create New Invenntory
          </Button>
        </Link>

        {innventorydata.map((addinventorydata) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <Button
                          variant="warning"
                          className="mx-2"
                        >
                          View
                        </Button>
                        View Record
                      </Accordion.Header>
                      <Accordion.Body>{addinventorydata.title}</Accordion.Body>
                    </Accordion.Item>
                  </span>

                  <div>
                    <Button
                      variant="success"
                      className="mx-2"
                      href={`/addinventorydata/${addinventorydata._id}`}
                    >
                      Update
                    </Button>

                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(addinventorydata._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {addinventorydata.category}
                      </Badge>
                    </h4>

                    <blockquote className="blockquote mb-0">
                      <p>{addinventorydata.content}</p>
                      <footer className="blockquote-footer">
                        Create On - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>
    );
}

export default Inventory