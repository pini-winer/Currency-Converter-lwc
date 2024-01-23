import { LightningElement, track, wire } from 'lwc';
import getCurrency from '@salesforce/apex/currencyApi.getCurrency';
import Coins from '@salesforce/resourceUrl/Coins';
import countries from './countriesData';



export default class CurrencyConverter extends LightningElement {
    @track CurrencyList= [];
    countries = countries;
    imageUrl = Coins;
    value = "USD";
    valueAmount='';
    valueFrom='null';
    currencyValFrom='null';
    valueTo='null';
    currencyValTo='null';
    @track resultValue;
        

    @wire(getCurrency)
    wiredCurrency({ error, data }) {
        if (data) { 
            
            const temp = JSON.parse(data);
            const CurrencyListtemp = Object.keys(temp.conversion_rates).map(key => ({ label: key, value:key, currencyVal:temp.conversion_rates[key]}));
            this.CurrencyList  = CurrencyListtemp.map(currency => ({label: `${currency.label} - ${countries[currency.label]}`,value: `${currency.value} - ${countries[currency.value]}`,currencyVal: currency.currencyVal}));
            console.log('1',this.countries.USD);

        } else if (error) {
            console.error(error);
        }
        
    }                                                         

    handleAmountChange(event) {
        this.valueAmount = event.detail.value;
        if (this.valueFrom && this.valueTo){
            this.resultConvertCurrency();
        }
    }
    handleChangeFrom(event) {
        
        this.valueFrom = event.detail.value;
        const tempVal = this.CurrencyList.find(key => key.label === this.valueFrom);
        this.currencyValFrom = tempVal.currencyVal;
    
        
        if (this.valueTo && this.valueAmount){
             this.resultConvertCurrency();
        }
    }
    handleChangeTo(event) {
        this.valueTo = event.detail.value;
        const tempVal = this.CurrencyList.find(key => key.label === this.valueTo);
        this.currencyValTo = tempVal.currencyVal;
        if (this.valueFrom && this.valueAmount){
            this.resultConvertCurrency();
        }
    }
    handleButtonClick() {
       const temp = this.valueFrom;
       const tempVal = this.currencyValFrom;
       this.valueFrom = this.valueTo;
       this.currencyValFrom = this.currencyValTo;
       this.valueTo = temp;
       this.currencyValTo = tempVal;
       console.log('1: ' , this.currencyValFrom);
       console.log('1: ' , this.currencyValTo);
       this.resultConvertCurrency()

        
    }

    resultConvertCurrency(){
        this.resultValue = ((this.valueAmount / this.currencyValFrom) * this.currencyValTo).toFixed(3);
        this.resultValue = parseFloat(this.resultValue);

    }
    get getBackgroundImage(){
        return `background-image:url("${this.imageUrl};background-size: cover;align-items: center; justify-content: center; margin: 0;")`;
    }

}
