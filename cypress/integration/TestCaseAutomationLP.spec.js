describe('Test Suit for the section "Bank information', () => {
    context('Verfy the funtionaly', () => {
        it('TC_03 Verify the text box Contact Email', () => {

            cy.visit("/");
            cy.get('#administrator_user_email').type('demo@example.com');
            cy.get('#administrator_user_password').type('12345678');
            cy.get('.btn').click();
            cy.get(':nth-child(7) > a').contains('Bank Information').click();

            //Verify the system is in the section Bank Information
            cy.url().should('include', '/financial_entity_profiles/1/edit')
                       

            // 'Contact Email' text box is null
            cy.get('#financial_entity_profile_contact_email').type('null').click()
            cy.get('.btn').click()
            //Verify the alert pop-up
            cy.get('.alert').should('contain','Please review the problems below:');
        });


        it('TC_08 Verify information is saved succesfully', () => {
            
            cy.visit("/");
            cy.get('#administrator_user_email').type('demo@example.com');
            cy.get('#administrator_user_password').type('12345678');
            cy.get('.btn').click();
            cy.get(':nth-child(7) > a').contains('Bank Information').click();

            //Verify the system is in the section Bank Information
            cy.url().should('include', '/financial_entity_profiles/1/edit');

            cy.get('#financial_entity_profile_legal_name').clear().type('Bank test1')
            cy.get('#financial_entity_profile_contact_email').clear().type('example@yopmail.com')
            cy.get('#financial_entity_profile_invoicing_email').clear().type('example@yopmail.com')
            cy.get('#financial_entity_profile_phone_number').clear().type('1128439487')
            cy.get('#financial_entity_profile_country').select('Venezuela, Bolivarian Republic of')
            cy.get('#financial_entity_profile_city').clear().type('Caracas')
            cy.get('#financial_entity_profile_tax_identification').clear().type('1234')

            cy.get('.btn').click();

            //Should the success message
            cy.get('.alert').should('contain','Financial Entity info has been updated');




        });
    });
});