import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateNoteAction } from "../../actions/notesActions";
import { Loading } from "../../components/Loading";
import ReactMarkdown from "react-markdown";
import './style.css';

export const UpdateNote = ({ match, history }) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [category, setCategory] = useState();
    const [date, setDate] = useState("");

    const dispatch = useDispatch();

    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { loading } = noteUpdate;

    useEffect(() => {
        const fetching = async () => {
            const { data } = await axios.get(`http://localhost:4000/api/v1/notes/${match.params.id}`);
            setTitle(data.title);
            setContent(data.content);
            setCategory(data.category);
            setDate(data.updatedAt);
        };
        fetching();
    }, [match.params.id, date]);

    const resetHandler = () => {
        setTitle("");
        setCategory("");
        setContent("");
    };

    const updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateNoteAction(match.params.id, title, content, category));
        if (!title || !content || !category) return;
        resetHandler();
        history.push("/notes");
    };

    return (
        <div className="main-div">
            <Card className="main-card shadow-none p-3 mb-5 bg-light rounded">
                <Card.Header>Edit your Note</Card.Header>
                <Card.Body>
                    <Form onSubmit={updateHandler}>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="title"
                                placeholder="Enter the title"
                                value={title || ''}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="content">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter the content"
                                rows={4}
                                value={content || ''}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                        {content && (
                            <Card>
                                <Card.Header>Note Preview</Card.Header>
                                <Card.Body>
                                    <ReactMarkdown>{content}</ReactMarkdown>
                                </Card.Body>
                            </Card>
                        )}

                        <Form.Group controlId="content">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="content"
                                placeholder="Enter the Category"
                                value={category || ''}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </Form.Group>
                        {loading && <Loading size={50} />}
                        <Button variant="primary" type="submit">
                            Update Note
                        </Button>
                    </Form>
                </Card.Body>

                <Card.Footer className="text-muted">
                    Updated on - {date.substring(0, 10)}
                </Card.Footer>
            </Card>
        </div>
    );
}