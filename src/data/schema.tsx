import Joi from '@hapi/joi'

const alpha = Joi.string()
  .min(2)
  .max(30)
  .pattern(/^[a-zA-Z]+$/, { name: 'alpha' })
  .required()

export const SchemaKeys = {
  FIRST_NAME: 'firstName',
  LAST_NAME: 'lastName',
  PROFESSION: 'profession',
  EMAIL: 'email',
  PASSWORD: 'password',
  UPDATE_PRODUCT: 'updateProduct',
  UPDATE_COMPANY: 'updateCompany',
}

const userObject = {
  firstName: alpha.label('First Name'),
  lastName: alpha.label('Last Name'),
  profession: Joi.string().label('Profession'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label('Email'),
  password: Joi.string().alphanum().min(8).max(30).required().label('Password'),
}

const privacyObject = {
  ...userObject,
  updateProduct: Joi.boolean().required().label('This product permission'),
  updateCompany: Joi.boolean().required().label('Other products permission'),
}

export const userSchema = Joi.object(userObject)

export const privacySchema = Joi.object(privacyObject)
