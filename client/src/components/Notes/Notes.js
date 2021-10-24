import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MainScreen } from '../MainScreen';
import { deleteNoteAction, listNotes } from '../../actions/notesActions';
import './style.css';
import { Loading } from '../Loading';

export const Notes = ({ search }) => {

    const dispatch = useDispatch()

    const noteList = useSelector(state => state.noteList)
    const { loading, notes } = noteList;
    const userLogin = useSelector((state) => state.userLogin);
    const { user } = userLogin;
    const noteCreate = useSelector((state) => state.noteCreate);
    const { success: successCreate } = noteCreate;
    const noteUpdate = useSelector((state) => state.noteUpdate);
    const { success: successUpdate } = noteUpdate;
    const noteDelete = useSelector((state) => state.noteDelete);
    const { success: successDelete, } = noteDelete;

    useEffect(() => {
        dispatch(listNotes())
    }, [dispatch, user, successCreate, successUpdate, successDelete])

    const deleteHandler = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(deleteNoteAction(id));
        }
    };

    return (
        <div>
            <MainScreen name={user && user.name}>
                <Link to="/createnote">
                    <Button variant="success">Create Note</Button>
                </Link>
                {loading && <Loading />}
                {notes && notes
                    .map(note => {
                    return (
                        <Accordion key={note._id} defaultActiveKey="0" style={{ margin: 20 }}>
                            <Accordion.Item>
                                <Card>
                                    <Card.Header className="card-header" style={{ backgroundColor: 'white' }}>
                                        <Accordion.Header>
                                            {note.title}
                                        </Accordion.Header>
                                        <div>
                                            <Button variant="warning" href={`/note/${note._id}`} className="mx-2">Edit</Button>
                                            <Button variant="danger" onClick={() => deleteHandler(note._id)}>Delete</Button>
                                        </div>
                                    </Card.Header>
                                    <Accordion.Body>
                                        <Card.Body>
                                            <h4>
                                                <Badge>
                                                    Category - {note.category}
                                                </Badge>
                                            </h4>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {note.content}
                                                </p>
                                                <div className="blockquote-footer">
                                                    Created on <cite title="Source Title">{note.createdAt.substring(0, 10)}</cite>
                                                </div>
                                            </blockquote>
                                        </Card.Body>
                                    </Accordion.Body>
                                </Card>
                            </Accordion.Item>
                        </Accordion>
                    )
                })}
            </MainScreen>
        </div>
    )
}
