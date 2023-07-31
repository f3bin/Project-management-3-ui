import React from "react";
import "./EmployeeProjectListing.scss";
import { useState, useEffect } from "react";
import AddTaskForm from "../AddTasksForm/AddTaskForm";
import { Link } from "react-router-dom";
import { MdOutlineNotifications } from "react-icons/md";
import Notifications from "../NotificationDrawer/Notification";
import { useDispatch, useSelector } from "react-redux";
import { viewProject, viewProjectTeam } from "../../redux/ProjectSlice";

function EmployeeProjectList() {
  const [showPopup, setShowPopup] = useState(false);
  // const [showNotification,setNotification] = useState(false);
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);
  const projectTeam = useSelector((state) => state.projects.projectTeam);
  const user = useSelector((state) => state.users.currentUser);

  const handleCreateProjectClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    dispatch(viewProject());
    dispatch(viewProjectTeam());
  }, [dispatch]);

  // Filter projects assigned to the user
  const projectsAssignedToUser =
    projectTeam && projectTeam.length > 0
      ? projects.filter((project) => {
          const projectTeamInfo = projectTeam.find(
            (team) => team.project_id === project.project_id
          );
          return (
            projectTeamInfo &&
            ["react", "node", "ui"].filter((tech) =>
              projectTeamInfo[tech].includes(user.username)
            ).length > 0
          );
        })
      : [];

  console.log(projectsAssignedToUser);

  return (
    <div className="employeelandingpage">
      <div className="topsection">
        {/* <Notifications/> */}
        <MdOutlineNotifications color="white" />
        <div className="search-input">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <MdOutlineNotifications size={25} color="teal" />
      </div>
      <div className="employee-table-container">
        <div className="employee-first">
          <h3 className="employee-title">
            <b>Project List</b>
          </h3>
          <button
            className="employee-custom-button"
            onClick={handleCreateProjectClick}
          >
            Add task
          </button>
        </div>

        <table className="employee-custom-table">
          <thead>
            <tr>
              <th className="employee-left">Project Name</th>
              <th className="employee-left">Status</th>
              <th className="employee-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {projectsAssignedToUser ? (
                projectsAssignedToUser.map((project) => (
                  <>
                    <td className="employee-left">{project.project_name}</td>
                    <td className="employee-status-red">Not completed</td>
                    <td className="employee-right">
                      <Link
                        to="/employeedashboard/task-detail"
                        className="Link"
                      >
                        Viewtasks
                      </Link>
                    </td>
                  </>
                ))
              ) : (
                <td className="employee-left">No projects currently</td>
              )}
              {/* // <td className="employee-left">Lulu International</td>
              // <td className="employee-status-red">Not completed</td>
              // <td className="employee-right">
              //   <Link to="/employeedashboard/task-detail" className="Link">
              //     Viewtasks
              //   </Link>
              // </td> */}
            </tr>
          </tbody>
        </table>

        {showPopup && (
          <div className="employee-popup-container">
            <div
              className="employee-popup-overlay"
              onClick={handlePopupClose}
            />
            <div className="employee-popup-content">
              <AddTaskForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeProjectList;
