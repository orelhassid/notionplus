import Joi from 'joi'
export const nameField = {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "",
    help: "",
    autoFocus: true
}

export const firstNameField = {
    type: "text",
    name: "firstName",
    label: "First Name",
    placeholder: "",
    help: "",
}


export const lastNameField = {
    type: "text",
    name: "lastName",
    label: "Last Name",
    placeholder: "",
    help: "",
}
export const headlineField = {
    type: "text",
    name: "headline",
    label: "Headline",
    placeholder: "",
    help: "",
}
export const emailField = {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "example@gmail.com",
    help: "",
}
export const phoneField = {
    type: "tel",
    name: "phone",
    label: "Phone",
    placeholder: "+972 55-123-4567",
    help: "",
}
export const countryField = {
    type: "text",
    name: "country",
    label: "Country",
    placeholder: "",
    help: "",
}

const buildFields = (fields) => {}

export const userPack = [
    nameField,
    headlineField,
    firstNameField,
    lastNameField,
    emailField,
    phoneField,
]

export const userSchemaPack = {
    name: Joi.string().optional().allow(""),
    headline: Joi.string().optional().allow(""),
    firstName: Joi.string().optional().allow(""),
    lastName: Joi.string().optional().allow(""),
    email: Joi.string().optional().allow(""),
    phone: Joi.string().optional().allow(""),
  }