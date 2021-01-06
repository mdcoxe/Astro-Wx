import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';


const WxForm = (props) => {
    const [zipCode, setZipCode] = useState(99504);
    const [tempMetric, setTempMetric] = useState('imperial');

    

    const handleChange = (e) => {
        e.preventDefault();
        setZipCode(e.target.value);
    };

    const handleTempChange = (e) => {
        e.preventDefault();
        setTempMetric(e.target.value);
        
    }
    
    return  <div className="wx-form">

        {/* Previously called zipcodes, aka history listed below form as clickable links to recall saved data */}
                <Form className="weather-form" >

                    <Row type="flex" justify="center" align="center" className="zipCode">
                        <Col>
                            <span>Zip Code: </span>
                            <Form.Control name="zipCode"
                                        type="text"
                                        placeholder="Enter your zip code"
                                        onChange={handleChange}
                                        className="zipCodeInput"/>
                        </Col>
                    </Row>

                    <Row type="flex" justify="center" align="center">
                        <Col span={4}>
                            <ButtonGroup toggle>
                                <ToggleButton
                                    key={"C"}
                                    type="radio"
                                    variant="secondary"
                                    name="tempMetric"
                                    value={"metric"}
                                    checked={tempMetric === "metric"}
                                    onChange={handleTempChange}
                                >
                                    Celsius (°C)
                                </ToggleButton>
                                <ToggleButton
                                    key={"F"}
                                    type="radio"
                                    variant="secondary"
                                    name="tempMetric"
                                    value={"imperial"}
                                    checked={tempMetric === "imperial"}
                                    onChange={handleTempChange}
                                >
                                    Fahrenheit (°F)
                                </ToggleButton>
                            </ButtonGroup>
                        </Col>
                    </Row>

                    {/* <Row type="flex" justify="center" align="center">
                        <Col span={4}>
                            <Button className="save-btn" variant="primary" type="submit">
                                Save
                            </Button>
                        </Col>
                    </Row> */}

                </Form>

            </div>
}

export default WxForm;