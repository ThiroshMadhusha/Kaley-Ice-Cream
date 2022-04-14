import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { createInventoryAction } from "../../actions/inventoryActions";

function CreateInventory({ history }) {
  const [freazerid, setFreazerid] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [flavour, setFlavour] = useState("");
  const [temparature, setTemparature] = useState("");


  const dispatch = useDispatch();

  const inventoryCreate = useSelector((state) => state.inventoryCreate);
  const { loading, error, inventory } = inventoryCreate;

  console.log(inventory);

  const resetHandler = () => {
    setFreazerid("");
    setCategory("");
    setIngredients("");
    setFlavour("");
    setTemparature("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createInventoryAction(
        freazerid,
        ingredients,
        category,
        flavour,
        temparature
      )
    );
    if (!freazerid || !ingredients || !category || !flavour || !temparature )
      return;

    resetHandler();
    history.push("/inventory");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Inventory">
      <Card className="card border-primary mb-3">
        <Card.Header className="card text-white bg-primary mb-3">
          Create a new Inventory
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="freazerid">
              <Form.Label>Freazer ID</Form.Label>
              <Form.Control
                type="freazerid"
                value={freazerid}
                placeholder="Enter The Freazer Id"
                required
                onChange={(e) => setFreazerid(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="category"
                value={category}
                placeholder="Enter The Category Type"
                required
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="ingredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                type="ingredients"
                value={ingredients}
                placeholder="Enter The Ingredients"
                required
                onChange={(e) => setIngredients(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="flavour">
              <Form.Label>Flavour</Form.Label>
              <Form.Control
                type="flavour"
                value={flavour}
                placeholder="Enter the Flavour"
                required
                onChange={(e) => setFlavour(e.target.value)}
              />
            </Form.Group>

            
            <Form.Group controlId="temparature">
              <Form.Label>Temparature</Form.Label>
              <Form.Control
                type="temparature"
                value={temparature}
                placeholder="Enter the Temparature Value"
                required
                onChange={(e) => setTemparature(e.target.value)}
              />
            </Form.Group>

            <br></br>

            {loading && <Loading size={50} />}
            <center>
              <Button type="submit" variant="success">
                Create Inventory
              </Button>
              <Button className="mx-2" onClick={resetHandler} variant="danger">
                Reset Feilds
              </Button>
            </center>
          </Form>
        </Card.Body>

        <Card.Footer className=" card text-white bg-info">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateInventory;
