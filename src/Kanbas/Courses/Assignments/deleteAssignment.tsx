import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";
import * as api from "./api";

function DeleteAssignment({ show, setShow }:
    {
        show: boolean;
        setShow: (show: boolean) => void;
    }) {

    const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    const dispatch = useDispatch();

    const handleConfirmation = async () => {
        await api.deleteAssignment(assignment._id)
            .then((status) => {
                dispatch(deleteAssignment(assignment._id));
                setShow(false);
            });
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop="static">
            <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <label>Are you sure you want to delete this assignment "{assignment.title}"?</label>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-secondary' onClick={() => setShow(false)}>Cancel</button>
                <button className='btn btn-danger' onClick={() => { handleConfirmation() }}>OK</button>
            </Modal.Footer>
        </Modal >
    );
}

export default DeleteAssignment;