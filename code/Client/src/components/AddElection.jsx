import React, { useState, useEffect } from "react";

const AddElection = ({ constituencies, election, setElection,onElectionNameChange }) => {
  const [constituency, setConstituency] = useState("");
  const [electionName, setElectionName] = useState("");
  useEffect(() => {
    // Set the start date to today when the component mounts
    setElection((prevElection) => ({
      ...prevElection,
      startDate: getCurrentDateTime(),
    }));
  }, []);

  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const handleConstituencyChange = (event) => {
    let id = parseInt(event.target.value);
    setElection({ ...election, constituencyId: id });

    constituencies.forEach((c, i) => {
      if (c.id === id) {
        setConstituency(c.name);
      }
    });
  };

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                Start Date{" "}
                <sup className="fas fa-asterisk fw-normal text-danger"></sup>
              </label>
              <div className="cal-icon">
                <input
                  name="start"
                  id="sd"
                  type="datetime-local"
                  className="form-control"
                  placeholder="Date of Joining"
                  value={election.startDate}
                  onChange={(event) =>
                    setElection({
                      ...election,
                      startDate: event.target.value,
                    })
                  }
                  required
                  min={getCurrentDateTime()} // Set the min attribute to the current date and time
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>
                End Date{" "}
                <sup className="fas fa-asterisk fw-normal text-danger"></sup>
              </label>
              <div className="cal-icon">
                <input
                  name="end"
                  id="ed"
                  type="datetime-local"
                  className="form-control"
                  placeholder="date of Joining"
                  value={election.endDate}
                  onChange={(event) => {
                    setElection({ ...election, endDate: event.target.value });
                  }}
                  min={getCurrentDateTime()}
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
          <div className="form-group">
            <label>
              Election Name{" "}
              <sup className="fas fa-asterisk fw-normal text-danger"></sup>
            </label>
            <input
              name="electionName"
              id="electionName"
              type="text"
              className="form-control"
              placeholder="Enter election name"
              value={electionName}
              onChange={(event) => {
                setElectionName(event.target.value);
                onElectionNameChange(event.target.value); // Notify the parent component
              }}
              required
            />
          </div>
        </div>
          <div className="col-12 col-md-6 mt-2">
            <div className="form-group">
              <label>
                Constituency{" "}
                <sup className="fas fa-asterisk fw-normal text-danger"></sup>
              </label>
              <input
                name="constituency"
                id="spec"
                className="form-control"
                list="datalistOptions"
                placeholder="Type to search..."
                value={constituency}
                onChange={(event) => {
                  handleConstituencyChange(event);
                }}
              />
              <datalist id="datalistOptions" className="bg-light">
                {constituencies.map((constituency, index) => (
                  <option value={constituency.id} key={index}>
                    {constituency.name}
                  </option>
                ))}
              </datalist>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddElection;
