import { useState } from "react";
import { InputGroup, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchSongAction } from "../redux/actions";
import { getCurrentSearchSongsAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    dispatch(getCurrentSearchSongsAction(query));
    dispatch(searchSongAction(query));

    navigate(`/${query}`);
  };

  return (
    <Row className="justify-content-center mt-5">
      <Form onSubmit={submitForm}>
        <InputGroup className="mb-3 input-search align-center">
          <Form.Control
            type="search"
            placeholder="Search Song"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </InputGroup>
      </Form>
    </Row>
  );
};

export default MainSearch;
