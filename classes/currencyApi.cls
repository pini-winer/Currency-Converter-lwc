public with sharing class currencyApi {


        @AuraEnabled(cacheable=true)
        public static String getCurrency() {

    
            HttpRequest request = new HttpRequest();
            request.setEndpoint('callout:currencyApiUrl/');

            request.setMethod('GET');
             
            HttpResponse response = new Http().send(request);
            
    
            if (response.getStatusCode() == 200) {
                String responseBody = response.getBody();
                System.debug('API Response: ' + responseBody);
                return responseBody;
            } else {
                System.debug('Error: ' + response.getStatusCode() + ' - ' + response.getStatus());
                System.debug('Error Response: ' + response.getBody());
                return null;
            }
        }
    }
    