import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
const EditFlight = (props) => {
  const flightData = props.flightData;
  const [arrivalAirport, setArrivalAirport] = useState(props.arrivalAirport);
  const [departureAirport, setDepartureAirport] = useState(
    props.departureAirport
  );
  // const [airportList, setAirportList] = useState([]);
  const airplaneList = props.airplaneList;
  const airportList = props.airportList;
  // const [airplaneList, setAirplaneList] = useState([]);
  const [open, setOpen] = useState(false);
  // async function fetchAirplaneAndAirportData() {
  //   const airportResponse = await fetch("http://localhost:3010/api/v1/airport");
  //   const airportsjsonData = await airportResponse.json();
  //   let airportData = airportsjsonData.data;
  //   let tempArr = [];
  //   tempArr = airportData.map((airport) => {
  //     return {
  //       label: airport.name,
  //       value: airport.id,
  //     };
  //   });
  //   setAirportList(tempArr);
  //   tempArr = [];
  //   const airplaneResponse = await fetch(
  //     "http://localhost:3010/api/v1/airplane"
  //   );
  //   const airplaneJsonData = await airplaneResponse.json();
  //   let airplaneData = airplaneJsonData.data;
  //   tempArr = airplaneData.map((airplane) => {
  //     return {
  //       label: airplane.modelNumber,
  //       value: airplane.id,
  //     };
  //   });
  //   setAirplaneList(tempArr);
  // }

  // useEffect(() => {
  //   fetchAirplaneAndAirportData();
  // }, []);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
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
              onChange={(value) => {}}
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
              onChange={(value) => {}}
            />
          </Form.Item>
          <Form.Item name="Price" label="Price" rules={[{ required: true }]}>
            <Input type="number" defaultValue={flightData.price} />
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
              onChange={(value) => {}}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditFlight;
