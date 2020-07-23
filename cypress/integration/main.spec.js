import { SchemaKeys } from '../../src/data/schema'

const nameField = (cy, name) => cy.get(`[name=${name}]`)
const errorClass = '.error'
const GoodData = {
  FIRST_NAME: 'test',
  LAST_NAME: 'test',
  PROFESSION: 'IT',
  EMAIL: 'example@example.com',
  PASSWORD: '12345678',
}
const BadData = {
  FIRST_NAME: 't',
  LAST_NAME: 't',
  EMAIL: 'example',
  PASSWORD: '123',
}

describe('Happy path', () => {
  it('Load homepage, enter correct details and go to done screen', () => {
    // Load baseUrl from cypress.json config
    cy.visit('/')

    // Check we redirected to the form
    cy.url().should('include', 'user')
    nameField(cy, SchemaKeys.FIRST_NAME).type(GoodData.FIRST_NAME)
    nameField(cy, SchemaKeys.LAST_NAME).type(GoodData.LAST_NAME)
    nameField(cy, SchemaKeys.PROFESSION).select(GoodData.PROFESSION)
    nameField(cy, SchemaKeys.EMAIL).type(GoodData.EMAIL)
    nameField(cy, SchemaKeys.PASSWORD).type(GoodData.PASSWORD)
    nameField(cy, 'next').click()

    // Check we arrived on privacy page
    cy.url().should('include', 'privacy')
    // Continue with default settings
    nameField(cy, 'next').click()
    // Check we arrived on done page
    cy.url().should('include', 'done')
  })
})

describe('Sad path', () => {
  it('Load homepage, enter incorrect details, correct them and go to done screen', () => {
    // Load baseUrl from cypress.json config
    cy.visit('/')

    // Check we redirected to the form
    cy.url().should('include', 'user')
    // Test form without entering a thing
    cy.get(errorClass).should('not.be.visible')
    nameField(cy, 'next').click()
    cy.get(errorClass)
      .should('be.visible')
      .contains(
        '"First Name" is required"Last Name" is required"Email" is required"Password" is required'
      )

    // Type bad data for all fields and click next again
    nameField(cy, SchemaKeys.FIRST_NAME).type(BadData.FIRST_NAME)
    nameField(cy, SchemaKeys.LAST_NAME).type(BadData.LAST_NAME)
    nameField(cy, SchemaKeys.EMAIL).type(BadData.EMAIL)
    nameField(cy, SchemaKeys.PASSWORD).type(BadData.PASSWORD)
    nameField(cy, 'next').click()

    cy.get(errorClass)
      .should('be.visible')
      .contains(
        '"First Name" length must be at least 2 characters long"Last Name" length must be at least 2 characters long"Email" must be a valid email"Password" length must be at least 8 characters long'
      )

    nameField(cy, SchemaKeys.FIRST_NAME).clear().type(GoodData.FIRST_NAME)
    nameField(cy, SchemaKeys.LAST_NAME).clear().type(GoodData.LAST_NAME)
    nameField(cy, SchemaKeys.EMAIL).clear().type(GoodData.EMAIL)
    nameField(cy, SchemaKeys.PASSWORD).type(GoodData.PASSWORD)
    nameField(cy, 'next').click()

    // Check we arrived on privacy page
    // And error is not visible anymore
    cy.get(errorClass).should('not.be.visible')
    cy.url().should('include', 'privacy')
    // Continue with default settings
    nameField(cy, 'next').click()
    // Check we arrived on done page
    cy.url().should('include', 'done')
  })

  it('Load homepage, skip filling in the form and try to navigate to privacy directly', () => {
    // Load baseUrl from cypress.json config
    cy.visit('/')
    // Try to go to page directly
    cy.visit('/privacy')
    // Should redirect back to user
    cy.url().should('include', 'user')

    nameField(cy, SchemaKeys.FIRST_NAME).type(GoodData.FIRST_NAME)
    nameField(cy, SchemaKeys.LAST_NAME).type(GoodData.LAST_NAME)
    nameField(cy, SchemaKeys.PROFESSION).select(GoodData.PROFESSION)
    nameField(cy, SchemaKeys.EMAIL).type(GoodData.EMAIL)
    nameField(cy, SchemaKeys.PASSWORD).type(GoodData.PASSWORD)
    nameField(cy, 'next').click()

    // Check we arrived on privacy page
    cy.url().should('include', 'privacy')
    // Continue with default settings
    nameField(cy, 'next').click()
    // Check we arrived on done page
    cy.url().should('include', 'done')
  })

  it('Load homepage, skip filling in the form and try to navigate to done directly', () => {
    // Load baseUrl from cypress.json config
    cy.visit('/')
    // Try to go to page directly
    cy.visit('/done')
    // Should redirect back to user
    cy.url().should('include', 'user')

    nameField(cy, SchemaKeys.FIRST_NAME).type(GoodData.FIRST_NAME)
    nameField(cy, SchemaKeys.LAST_NAME).type(GoodData.LAST_NAME)
    nameField(cy, SchemaKeys.PROFESSION).select(GoodData.PROFESSION)
    nameField(cy, SchemaKeys.EMAIL).type(GoodData.EMAIL)
    nameField(cy, SchemaKeys.PASSWORD).type(GoodData.PASSWORD)
    nameField(cy, 'next').click()

    // Check we arrived on privacy page
    cy.url().should('include', 'privacy')
    // Continue with default settings
    nameField(cy, 'next').click()
    // Check we arrived on done page
    cy.url().should('include', 'done')
  })
})
