import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ColBox from "./components/ColBox";
import DropContainer from "./DropContainer";
import "./Main.css";
import RowBox from "./components/RowBox";
import Rectangle from "./components/Rectangle";
import Circle from "./components/Circle"

const Main = () => {

    return (
        <Container style={{ marginTop: 40 }}>
            <Row>
                <Col sm={4} md={4} className="left-grid">
                    <RowBox name="Add a Row" />
                    <ColBox name="Add 2 Columns" />
                    <ColBox name="Add 3 Columns" />
                    <ColBox name="Add 4 Columns" />
                    <Rectangle name="rectangle" />
                    <Circle name="circle" />
                </Col>
                <DropContainer />
            </Row>
        </Container>
    )
}
export default Main;