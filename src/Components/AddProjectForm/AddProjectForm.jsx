import React, { useState } from "react";
import "./AddProjectForm.scss";

const AddProjectForm = () => {
  const technologyLabels = ["React", "Vue", "Angular", "Node.js"];

  const [sets, setSets] = useState([
    { isChecked: true, selectedOption: "", showInput: true, inputValue: "" }, // The first checkbox is checked and input box is shown by default
    ...technologyLabels.slice(1).map(() => ({
      isChecked: false,
      selectedOption: "",
      showInput: false,
      inputValue: "",
    })),
  ]);

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  const handleCheckboxChange = (setIndex, event) => {
    const newSets = [...sets];
    newSets[setIndex].isChecked = event.target.checked;
    newSets[setIndex].selectedOption = "";
    newSets[setIndex].showInput = event.target.checked; // Show the input box when checkbox is checked
    newSets[setIndex].inputValue = ""; // Clear the input value when checkbox is unchecked
    setSets(newSets);
  };

  const handleDropdownChange = (setIndex, event) => {
    const newSets = [...sets];
    newSets[setIndex].selectedOption = event.target.value;
    setSets(newSets);
  };

  const handleInputChange = (setIndex, event) => {
    const newSets = [...sets];
    newSets[setIndex].inputValue = event.target.value;
    setSets(newSets);
  };

  return (
    <>
      <div className="container">
        <form className="Add-Projectform">
          <h2 className="form-heading">Add a New Project</h2>

          <div className="form-group">
            <label htmlFor="name">Project Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="time">Time quoted in hours:</label>
            <input type="text" id="deadline" name="deadline" />
          </div>
        </form>
        <form className="Add-Projectform">
          <div className="technologies">
            <h2 className="form-heading">Technoglogies</h2>
            {technologyLabels.map((tech, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={sets[index].isChecked}
                    onChange={(event) => handleCheckboxChange(index, event)}
                  />
                  {tech}:{sets[index].isChecked ? "" : ""}
                </label>

                {sets[index].isChecked && (
                  <div>
                    <select
                      value={sets[index].selectedOption}
                      onChange={(event) => handleDropdownChange(index, event)}
                    >
                      <option value="">Select developers</option>
                      {dropdownOptions.map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    {sets[index].showInput && (
                      <input
                        type="text"
                        value={sets[index].inputValue}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Hours"
                      />
                    )}
                  </div>
                )}

                {sets[index].isChecked && sets[index].selectedOption && (
                  <p>Selected developers: {sets[index].selectedOption}</p>
                )}
              </div>
            ))}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProjectForm;
