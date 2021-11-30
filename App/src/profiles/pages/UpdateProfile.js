import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./NewProfile.css";
import InputRadio from "../../shared/components/FormElements/InputRadio";
import Card from "../../shared/components/UIElements/Card";

const DUMMY_PROFILES = [
  {
    id: "p1",
    phoneNumber: "+99362559305",
    radioValue: "learner",
    title: "Hukuk",
    description: "I have been teaching since i graduated from Oguzhan in 2010",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    creator: "u1",
  },
];

const UpdateProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const profileId = useParams().profileId;

  const [formState, inputHandler, radioHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      phoneNumber: {
        value: "",
        isValid: false,
      },
    },
    {
      value: "teacher",
    },
    false
  );

  const IdentifiedProfile = DUMMY_PROFILES.find((p) => p.id === profileId);

  useEffect(() => {
    if (IdentifiedProfile) {
      setFormData(
        {
          title: {
            value: IdentifiedProfile.title,
            isValid: true,
          },
          description: {
            value: IdentifiedProfile.description,
            isValid: true,
          },
          phoneNumber: {
            value: IdentifiedProfile.phoneNumber,
            isValid: true,
          },
        },
        {
          value: IdentifiedProfile.radioValue,
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, IdentifiedProfile]);

  if (!IdentifiedProfile) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find a Profile!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading..</h2>
      </div>
    );
  }
  console.log(formState);

  return (
    <form className="place-form">
      <InputRadio
        element="radio"
        type="radio"
        label="Teacher"
        value="teacher"
        checked={formState.radio.value === "teacher"}
        onRadio={radioHandler}
      />
      <InputRadio
        element="radio"
        type="radio"
        label="Learner"
        value="learner"
        checked={formState.radio.value === "learner"}
        onRadio={radioHandler}
      />
      <Input
        id="title"
        element="input"
        type="text"
        label="sapagyn ady"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
      />
      <Input
        id="phoneNumber"
        element="input"
        type="number"
        label="Telefon nomer"
        validators={[VALIDATOR_MINLENGTH(8)]}
        errorText="Please enter a valid phone number."
        onInput={inputHandler}
        initialValue={+formState.inputs.phoneNumber.value}
        initialIsValid={formState.inputs.phoneNumber.isValid}
      />
      <Input
        id="desctiption"
        element="textarea"
        label="Goshmacha informasiya"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid desctiption (min 5 characters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PROFILE
      </Button>
    </form>
  );
};

export default UpdateProfile;
