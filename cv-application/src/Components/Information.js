import React from "react";
import Section from "../presets/Section"
import Input from "../presets/Input"
import TextArea from "../presets/TextArea";
import File from "../presets/file";

const Information = (personalInfo, onChange) => {
    return (
        <Section
            title="Personal Information"
            titlePadding="0.5rem"
            direction="column"
        >
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="firstName"
            placeholder="First name"
            value={personalInfo.firstName}
        />
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="lastName"
            placeholder="Last name"
            value={personalInfo.lastName}
        />
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="email"
            placeholder="Email"
            value={personalInfo.email}
        />
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={personalInfo.phoneNumber}
        />
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="address"
            placeholder="Address"
            value={personalInfo.address}
        />
        <TextArea
            onChange={(e) => onChange(e)}
            name="description"
            placeholder="Description"
            value={personalInfo.description}
        />
        <File
            onChange={(e) => onChange(e)}
            name="photo"
            label="Photo"
            value={personalInfo.photo}
        />
        </Section>
    )
}

export default Information;