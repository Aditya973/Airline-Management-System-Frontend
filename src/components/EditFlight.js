import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import axios from 'axios';
const EditFlight = (props) => {
  const flightData = props.flightData;
  const [arrivalAirport, setArrivalAirport] = useState(flightData.arrivalAirportId);
  const [departureAirport, setDepartureAirport] = useState(
    flightData.departureAirportId
  );
  const [price,setPrice] = useState(flightData.price);
  const [airplaneModelId,setAirplaneModelId] = useState(flightData.airplaneId);
  const [departureTime,setDepartureTime] = useState(flightData.departureTime);
  const [arrivalTime,setArrivalTime] = useState(flightData.arrivalTime);
  const airplaneList = props.airplaneList;
  const airportList = props.airportList;
  const [open, setOpen] = useState(false);
  
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async (e) => {
    console.log(e);
    let updatedData = {
      departureAirportId: departureAirport,
      arrivalAirportId: arrivalAirport,
      price: price,
      airplaneId: airplaneModelId,
      departureTime: departureTime,
      arrivalTime: arrivalTime
    }
    const response = await axios.patch(`http://localhost:3010/api/v1/flight/${flightData.id}`,updatedData);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Update Flight"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: false,
        }}
        cancelButtonProps={{
          disabled: false,
        }}
      >
        <Form>
          <Form.Item
            name="FlightName"
            label="Flight Name"
            rules={[{ required: true }]}
          >
            <Input defaultValue={flightData.flightNumber} />
          </Form.Item>
          <Form.Item
            name="DepartureAirport"
            label="Departure Airport"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              defaultValue={flightData.departureAirportId}
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={airportList}
              onChange={(value) => {setDepartureAirport(value)}}
            />
          </Form.Item>
          <Form.Item
            name="ArrivalAirport"
            label="Arrival Airport"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              optionFilterProp="children"
              defaultValue={flightData.arrivalAirportId}
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={airportList}
              onChange={(value) => {setArrivalAirport(value)}}
            />
          </Form.Item>
          <Form.Item name="Price" label="Price" rules={[{ required: true }]}>
            <Input type="number" defaultValue={flightData.price} onChange={(e)=>{setPrice(e.target.value)}}/>
          </Form.Item>
          <Form.Item
            name="Airplane"
            label="Airplane Model"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              optionFilterProp="children"
              defaultValue={flightData.airplaneId}
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={airplaneList}
              onChange={(value) => {setAirplaneModelId(value)}}
            />
          </Form.Item>
          <Form.Item
          name="departureTime"
          label="Departure Time">
            <Input type="datetime-local" defaultValue={flightData.departureTime} onChange={(e)=>{
              console.log(e.target.value);
              setDepartureTime(e.target.value);
            }}/>
          </Form.Item>
          <Form.Item
          name="arrivalTime"
          label="Arrival Time">
            <Input type="datetime-local" defaultValue={flightData.departureTime} onChange={(e)=>{
              console.log(e.target.value);
              setArrivalTime(e.target.value);
            }}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditFlight;
