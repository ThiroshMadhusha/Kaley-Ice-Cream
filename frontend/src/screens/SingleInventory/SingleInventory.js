import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import { deleteInventoryAction, updateInventoryAction } from "../../actions/inventoryActions";

function SingleInventory({ match, history }) {
  const [freazerid, setFreazerid] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [flavour, setFlavour] = useState("");
  const [temparature, setTemparature] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const inventoryUpdate = useSelector((state) => state.inventoryUpdate);
  const { loading, error } = inventoryUpdate;

  const inventoryDelete = useSelector((state) => state.inventoryDelete);
  const { loading: loadingDelete, error: errorDelete } = inventoryDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteInventoryAction(id));
    }
    history.push("/inventory");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/inventorys/${match.params.id}`);

      setFreazerid(data.freazerid);
      setCategory(data.category);
        setIngredients(data.ingredients);
        setFlavour(data.flavour);
        setTemparature(data.temparature);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setFreazerid("");
    setCategory("");
    setIngredients("");
    setFlavour("");
    setTemparature("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateInventoryAction(
        match.params.id,
        freazerid,
        ingredients,
        category,
        flavour,
        temparature
      )
    );
    if (!freazerid || !ingredients || !category || !flavour || !temparature)
      return;

    resetHandler();
    history.push("/inventory");
  };

  return (
    <MainScreen title="Update Inventory Items">
      <Card>
        <Card.Header>Edit your Inventory</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Freazerid</Form.Label>
              <Form.Control
                type="freazerid"
                placeholder="Enter the Ftreazer ID"
                value={freazerid}
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
            <Button variant="primary" type="submit">
              Update Inventory
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(match.params.id)}
            >
              Delete Inventory
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SingleInventory;
