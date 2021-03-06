var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://cdr.code4health.org/rest/v1/query',
  'headers': {
    'Content-Type': 'application/json',
    'Ehr-Session-disabled': '{{Ehr-Session}}',
    'Authorization': 'Basic YmIyNjRiY2UtYzQwNy00OTgyLTkwMTctOTdkMzcyN2ZjZmE0OiQyYSQxMCQ2MTlraQ=='
  },
  body: JSON.stringify({"aql":"select a/context/start_time/value as dateCollected, b_b/items[at0001]/value/value as episode_identifier_text, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0028]/value/value as Q1_ordinal, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0028]/value/symbol/value as Q1_text, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0028]/value/symbol/defining_code/code_string as Q1_code, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0033]/value/value as Q2_ordinal, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0033]/value/symbol/value as Q2_text, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0033]/value/symbol/defining_code/code_string as Q2_code, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0038]/value/value as Q3_ordinal, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0038]/value/symbol/value as Q3_text, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0038]/value/symbol/defining_code/code_string as Q3_code, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0043]/value/symbol/value as Q4_ordinal, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0043]/value/value as Q4_text, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0043]/value/symbol/defining_code/code_string as Q4_code, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0008]/value/magnitude as totalScore, b_a/data[at0001]/events[at0002]/data[at0003]/items[at0027]/value/value as comment, a/uid/value as composition_uid, e/ehr_id/value as ehrId from EHR e contains COMPOSITION a[openEHR-EHR-COMPOSITION.report.v1] contains ( OBSERVATION b_a[openEHR-EHR-OBSERVATION.aofas.v0] and CLUSTER b_b[openEHR-EHR-CLUSTER.episode_details_northproms.v0]) where a/name/value='UCLH Foot and ankle PROMs' and e/ehr_id/value='6ad6c847-7c37-485d-8dbb-7b56d1c23918' order by e/ehr_id/value, a/context/start_time/value desc"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
