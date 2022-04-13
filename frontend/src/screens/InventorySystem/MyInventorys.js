import React, { useEffect } from 'react';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import { useDispatch, useSelector } from "react-redux";
import { listInventorys } from '../../actions/inventoryActions';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';


const MyInventorys = () => {

  const dispatch = useDispatch();

  const inventoryList = useSelector((state) => state.inventoryList);

  const { loading, inventorys, error } = inventoryList;

  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const inventoryCreate = useSelector((state) => state.inventoryCreate);
  const { success: successCreate } = inventoryCreate;

  // const [inventorys, setInventorys] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure ?")) {
        }
  };
  // const fetchInventorys = async () => {
  //   const { data } = await axios.get("/api/inventorys");
  //   setInventorys(data);
  // };
  
  // const history = useHistory();
  console.log(inventorys);

  useEffect(() => {
    dispatch(listInventorys());
    // fetchInventorys();
    
    if (!userInfo) {
      // history.push("/");
    }
  }, [dispatch, successCreate, userInfo]);
  

    return (
      <MainScreen title="Inventory Management System">
        {console.log(inventorys)}
        <Link to="/createinventory">
          <Button
            style={{ margineLeft: 10, marginBottom: 6 }}
            size="lg"
            variant="primary"
          >
            Create New Invenntory
          </Button>
        </Link>

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

        {loading && <Loading />}

        {inventorys?.reverse().map((inventory) => (
          <Accordion key={inventory._id}>
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
                        <Button variant="warning" className="mx-2">
                          View
                        </Button>
                        View Record
                      </Accordion.Header>
                      <Accordion.Body>{inventory.freazerid}</Accordion.Body>
                    </Accordion.Item>
                  </span>

                  <div>
                    <Button
                      variant="success"
                      className="mx-2"
                      href={`/inventory/${inventory._id}`}
                    >
                      Update
                    </Button>

                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(inventory._id)}
                    >
                      Delete
                    </Button>

                    <Button
                      variant="info"
                      className="mx-2"
                      onClick={() => deleteHandler(inventory._id)}
                    >
                      Report
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {inventory.category}
                      </Badge>
                    </h4>

                    <blockquote className="blockquote mb-0">
                      <p>{inventory.flavour}</p>
                      <p>{inventory.temparature}</p>
                      <p>{inventory.ingredients}</p>

                      <footer className="blockquote-footer">
                        Create On{" "}
                        <cite freazerid="Source Freazerid">
                          {inventory.createdAt.substring(0, 10)}
                        </cite>
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

export default MyInventorys;