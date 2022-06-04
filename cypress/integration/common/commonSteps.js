import {Given, And} from 'cypress-cucumber-preprocessor/steps';
import {initTest} from '../../support/initializer';
import * as landingPage from '../pageObjects/landingPage';

Given('I am on holiday entitlement homepage', () => {
    initTest();
});

And('I proceed to calculate my holiday entitlement', () => {
    landingPage.clickOnStartNowButton();
});