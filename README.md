Currency Converter Lightning Web Component
==========================================

This Lightning Web Component (LWC) allows users to convert currencies using an external API. The component fetches currency conversion rates from the specified API and provides a user-friendly interface for currency conversion.

Features
--------

*   Fetches real-time currency conversion rates from an external API.
*   Allows users to input the amount, select the source currency, and choose the target currency for conversion.
*   Supports a visual representation of currencies with country flags.

Prerequisites
-------------

Ensure that you have the necessary permissions to make callouts to external APIs in your Salesforce environment.

Installation
------------

1.  Clone the repository to your local machine:
    
    bashCopy code
    
    `git clone [repository_url]`
    
2.  Deploy the Apex class (`currencyApi.cls`) and the Lightning Web Component (`currencyConverter` folder) to your Salesforce org using your preferred deployment method (e.g., Salesforce CLI, VS Code, etc.).
    
3.  Make sure to assign the appropriate permissions to profiles for the Apex class and resources.
    

Usage
-----

1.  Add the "Currency Converter" Lightning Web Component to your desired Salesforce Lightning page.
    
2.  The component will fetch the latest currency conversion rates upon loading.
    
3.  Input the amount to convert, select the source currency, and choose the target currency.
    
4.  The converted amount will be displayed instantly.
    

Component Structure
-------------------

### `currencyApi.cls` (Apex Class)

*   Apex class responsible for making a callout to the external currency conversion API.

### `currencyConverter` (LWC Folder)

*   `currencyConverter.html`: HTML template for the Lightning Web Component.
*   `currencyConverter.js`: JavaScript controller for handling component logic.
*   `currencyConverter.css`: CSS file for styling the component.
*   `countriesData.js`: JavaScript file containing data for country codes.
