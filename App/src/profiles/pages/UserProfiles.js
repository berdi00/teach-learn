import React from "react";
import { useParams } from "react-router-dom";

import ProfileList from "./components/ProfileList";

const DUMMY_PROFILES = [
  {
    id: "p1",
    phoneNumber: "+99362559305",
    title: "Teacher",
    description: "I have been teaching since i graduated from Oguzhan in 2010",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    creator: "u1",
  },
  {
    id: "p1",
    phoneNumber: "+99362559305",
    title: "Teacher",
    description: "I have been teaching since i graduated from Oguzhan in 2010",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    creator: "u2",
  },
];
const UserProfiles = () => {
  const userId = useParams().userId;
  const loadesProfile = DUMMY_PROFILES.filter(
    (profile) => profile.creator === userId
  );
  return <ProfileList items={loadesProfile} />;
};

export default UserProfiles;
