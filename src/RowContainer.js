
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import "./RowContainer.css";
import { colHandler, handleDelete, rowHandler } from './store/functions/function.action';

const RowContainer = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state)

    return (
        <div>
            {
                selector?.rows?.map((row, id) => (
                    <Row key={id} className="row-container" onDragOver={() => dispatch(rowHandler(id))}>
                        <Dropdown className="dropdown-button">
                            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic" size="sm" >
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={() => dispatch(handleDelete(id))}>Delete</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {row?.map((col, id) => (
                            <Col key={id} className="col-container" onDragOver={() => dispatch(colHandler(id))}>
                                {col.col[0]?.items?.map((item, id) => (
                                    <div className="item-container" key={id}>{item}</div>
                                ))}
                            </Col>
                        ))}
                    </Row>
                ))
            }
        </div >

    )
}

export default RowContainer;