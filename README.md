Currency Converter Lightning Web Component
==========================================


![recordingNamedCredential-ezgif com-cut](https://github.com/pini-winer/Currency-Converter-lwc/assets/95618690/514433b5-081a-4243-88b8-fdde08ed62d9)



This Lightning Web Component (LWC) allows users to convert currencies using an external API. The component fetches currency conversion rates from the specified API and provides a user-friendly interface for currency conversion.

Features
--------

*   Fetches real-time currency conversion rates from an external API.
*   Allows users to input the amount, select the source currency, and choose the target currency for conversion.
*   Supports a visual representation of currencies with country flags.

Prerequisites
-------------

Ensure that you have the necessary permissions to make callouts to external APIs in your Salesforce environment.

    

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
