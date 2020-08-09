import React, { useState, useEffect } from "react";
import "./dashboard.css";
import Navbar from "./navbar";
import { Modal } from "react-bootstrap";
function Dashboard() {
  var initialData = {
    name: "",
    gender: "",
    age: "",
    desc: "",
    dept: "",
    jd: "",
  };
  const [editshow, setEditShow] = useState(false);
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const [emp, setemp] = useState([]);
  const [editformData, setEditformData] = useState({
    name: "",
    gender: "",
    age: "",
    desc: "",
    dept: "",
    jd: "",
  });
  const [form, setform] = useState(initialData);

  var handleClick = (data) => {
    console.log(data);
    for (let key of Object.keys(data)) {
      setemp([data, ...emp]);
    }
  };
  var handleChange = (e) => {
    // console.log(e.target.value);
    let name = e.target.name;
    setform({ ...form, [name]: e.target.value });
  };
  const del = (name) => {
    console.log(name);
    setemp(emp.filter((i, ind) => i.name !== name));
  };
  const setEditHandler = (i) => {
    console.log(i);
    const { name, gender, age, desc, dept, jd } = i;
    setEditformData({ name, gender, age, desc, dept, jd });
    handleEditShow();
  };
  const handleUpdate = (d) => {
    setemp(emp.map((o) => (o.name === d.name ? editformData : emp)));
    handleEditClose();
  };
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  return (
    <>
      <Navbar />
      {/* <!-- navbar --> */}​
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="question-dashboard">
              <div class="card mt-4 mb-3 mb-md-4">
                <div class="card-body p-3">
                  <h5 class="text-secondary mb-2">
                    Available:{" "}
                    <span class="font-weight-bold ml-1 text-dark">
                      {emp.length}
                    </span>
                  </h5>
                  <h5 class="text-secondary">
                    Total:{" "}
                    <span class="font-weight-bold ml-1 text-dark">
                      {emp.length}
                    </span>
                  </h5>
                  ​
                  <button
                    class="btn btn-primary mt-4"
                    data-toggle="modal"
                    data-target="#addEmployeeModal"
                  >
                    <i class="fa fa-plus"></i>&nbsp; Add Employee
                  </button>
                </div>
              </div>
              ​
              <div class="table-responsive mt-3 mt-md-4 mb-2">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Available</th>
                      <th>View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr> */}
                    {/* <td>John Doe</td>
                      <td>Testing</td>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            checked="checked"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck1"
                          ></label>
                        </div>
                      </td> 

                       <td>
                        <button
                        type="button"
                        class="btn btn-outline-info btn-sm"
                        data-toggle="modal"
                        data-target="#addEmployeeModal"
                        >
                        <i class="fa fa-edit"></i>&nbsp; Edit
                        </button>
                        <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        >
                        <i class="fa fa-trash"></i>&nbsp; Delete
                        </button>
                    </td> */}
                    {emp
                      ? emp.map((i, index) => {
                          return (
                            <tr key={index}>
                              <td>{i.name}</td>
                              <td>{i.dept}</td>
                              <td>
                                <div class="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    class="custom-control-input"
                                    id="customCheck1"
                                    readOnly
                                    checked={
                                      new Date(`${i.jd}`) >
                                      formatDate(new Date())
                                        ? false
                                        : true
                                    }
                                  />
                                  <label
                                    class="custom-control-label"
                                    for="customCheck1"
                                  ></label>
                                </div>
                              </td>
                              <td>
                                <button
                                  type="button"
                                  class="btn btn-outline-info btn-sm"
                                  // data-toggle="#updatemodal"
                                  // data-target="#addEmployeeModal"
                                  onClick={() => setEditHandler(i)}
                                >
                                  <i class="fa fa-edit"></i>&nbsp; Edit
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-outline-danger btn-sm"
                                  onClick={() => del(i.name)}
                                >
                                  <i class="fa fa-trash"></i>&nbsp; Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                    {/* </tr> */}
                    {/* <tr>
                      <td>Peter Doe</td>
                      <td>Deployment</td>
                      <td>
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck2"
                          />
                          <label
                            class="custom-control-label"
                            for="customCheck2"
                          ></label>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-outline-info btn-sm"
                          data-toggle="modal"
                          data-target="#addEmployeeModal"
                        >
                          <i class="fa fa-edit"></i>&nbsp; Edit
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-danger btn-sm"
                        >
                          <i class="fa fa-trash"></i>&nbsp; Delete
                        </button>
                      </td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
      ​{/* <!-- Add Employee Modal --> */}
      <div
        class="modal fade"
        id="addEmployeeModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addEmployeeModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header pt-3 pb-2">
              <h5 class="modal-title" id="exampleModalCenterTitle">
                Add Employee
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-row ">
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Name
                    </label>
                    <input
                      value={form.name}
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Gender
                    </label>
                    <select
                      class="form-control"
                      name="gender"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    >
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      name="age"
                      placeholder="Enter"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="desc"
                      placeholder="Enter"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Department
                    </label>
                    <select
                      class="form-control"
                      name="dept"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    >
                      <option>Select</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>Testing</option>
                      <option>Deployment</option>
                    </select>
                    {/* <input
                      type="text"
                      class="form-control"
                      name="dept"
                      placeholder="Enter"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    /> */}
                  </div>
                  <div class="form-group col-md-6">
                    <label for="" class="mb-1">
                      Joining Date
                    </label>
                    <input
                      type="date"
                      class="form-control"
                      name="jd"
                      placeholder=""
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-success btn-sm"
                data-dismiss="modal"
                onClick={() => handleClick(form)}
                // disabled={isDisable}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- modal --> */}
      <Modal show={editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-row ">
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Name
                </label>
                <input
                  value={editformData.name}
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      name: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Gender
                </label>
                <select
                  class="form-control"
                  value={editformData.gender}
                  name="gender"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      gender: e.target.value,
                    });
                  }}
                  required
                >
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Age
                </label>
                <input
                  type="number"
                  value={editformData.age}
                  class="form-control"
                  name="age"
                  placeholder="Enter"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      age: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  value={editformData.desc}
                  class="form-control"
                  name="desc"
                  placeholder="Enter"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      desc: e.target.value,
                    });
                  }}
                  required
                />
              </div>
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Department
                </label>
                <select
                  class="form-control"
                  value={editformData.dept}
                  name="dept"
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      dept: e.target.value,
                    });
                  }}
                  required
                >
                  <option>Select</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>Testing</option>
                  <option>Deployment</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="" class="mb-1">
                  Joining Date
                </label>
                <input
                  type="date"
                  value={editformData.jd}
                  class="form-control"
                  name="jd"
                  placeholder=""
                  onChange={(e) => {
                    setEditformData({
                      ...editformData,
                      jd: e.target.value,
                    });
                  }}
                  required
                />
              </div>
            </div>
          </form>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-dismiss="modal"
              onClick={() => handleEditClose()}
            >
              Cancel
            </button>
            <button
              type="button"
              class="btn btn-success btn-sm"
              data-dismiss="modal"
              onClick={() => handleUpdate(editformData)}
              // disabled={isDisable}
            >
              Update
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {/* update Modal */}
    </>
  );
}
export default Dashboard;
