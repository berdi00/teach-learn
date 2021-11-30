import React, { useState, useContext } from "react";

import "./ProfileItem.css";
import { AuthContext } from "../../../shared/context/auth-context";
import Button from "../../../shared/components/FormElements/Button";
import Card from "../../../shared/components/UIElements/Card";
import Modal from "../../../shared/components/UIElements/Modal";

const ProfileItem = (props) => {
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeletionHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = () => {
    setShowConfirmModal(false);
    console.log("DEleting");
  };

  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeletionHandler}
        header="Chyndanam pozmakchymy ?"
        footerClass="profile-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeletionHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      ></Modal>

      <li className="profile-item">
        <Card className="profile-item__content">
          <div className="profile-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="profile-item__info">
            <h2>{props.title}</h2>
            <h3>Phone number: {props.phoneNumber}</h3>
            <p>{props.description}</p>
          </div>
          <div className="profile-item__actions">
            {auth.isLoggedIn && (
              <Button to={`/profile/${props.id}`}>EDIT</Button>
            )}
            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default ProfileItem;
