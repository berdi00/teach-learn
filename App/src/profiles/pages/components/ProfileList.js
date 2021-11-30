import React from "react";

import Card from "../../../shared/components/UIElements/Card";
import ProfileItem from "./ProfileItem";
import Button from "../../../shared/components/FormElements/Button";
import "./ProfileList.css";

const ProfileList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="profile-list center">
        <Card>
          <h2>Profile heniz doredilmedik.</h2>
          <Button to="/profile/new">Profile Doret</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="profile-list">
      {props.items.map((profile) => (
        <ProfileItem
          key={profile.id}
          id={profile.id}
          image={profile.imageUrl}
          title={profile.title}
          description={profile.description}
          phoneNumber={profile.phoneNumber}
        />
      ))}
    </ul>
  );
};

export default ProfileList;
