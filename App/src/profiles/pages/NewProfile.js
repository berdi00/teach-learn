import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./NewProfile.css";
import { useForm } from "../../shared/hooks/form-hook";
import InputRadio from "../../shared/components/FormElements/InputRadio";

const NewProfile = () => {
  const [formState, inputHandler, radioHandler] = useForm(
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

  console.log(formState.radio.value);

  const profileSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={profileSubmitHandler}>
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
        label="Sapagyn ady"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />

      <Input
        id="phoneNumber"
        element="input"
        type="number"
        label="Telefon nomer"
        validators={[VALIDATOR_MINLENGTH(8)]}
        errorText="Please enter a valid phone number."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Goshmacha informasiya"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PROFILE
      </Button>
    </form>
  );
};

export default NewProfile;
