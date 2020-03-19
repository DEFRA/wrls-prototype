/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {
  "customerName": "Bottled Water Plc",
  "licenceHolder": "Bottled Water Plc",
  "licenceNumber": "AN01/68/60/0032",
  "address1": "15 Ward Road",
  "city": "Bath",
  "postcode": "BA1 5EH",
  "invoiceAccount": "L12345678S",
  "startDay": "11",
  "startMonth": "April",
  "startYear": "2019",
  "region": "Anglian",
  "dateToday": "5 March 2020",
  "tptIssue": "overAbstraction",
  "tptIssueIR": "incompleteReturns",
  "tptIssueNP": "notProcessed"
  "status": "ready"
    // Insert values here
}
