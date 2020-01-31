var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://cdr.code4health.org/rest/v1/composition?ehrId=6ad6c847-7c37-485d-8dbb-7b56d1c23918&templateId=Foot_and_Ankle_PROMs-v0&committerName=Dr nullnull&format=FLAT',
  'headers': {
    'Ehr-Session-disabled': '{{Ehr-Session}}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"ctx/language":"en","ctx/territory":"GB","ctx/composer_name":"Silvia Blake","ctx/id_namespace":"HOSPITAL-NS","ctx/id_scheme":"HOSPITAL-NS","ctx/time":"2020-02-06","ctx/health_care_facility|name":"Home","ctx/health_care_facility|id":"0000","uclh_foot_and_ankle_proms/context/episode_details/episode_identifier":"1 week post-operative","uclh_foot_and_ankle_proms/aofas_score/q1_pain|code":"at0030","uclh_foot_and_ankle_proms/aofas_score/q1_pain|ordinal":30,"uclh_foot_and_ankle_proms/aofas_score/q2_activity_limitations_and_support_requirements|code":"at0036","uclh_foot_and_ankle_proms/aofas_score/q2_activity_limitations_and_support_requirements|ordinal":4,"uclh_foot_and_ankle_proms/aofas_score/q3_walking|code":"at0041","uclh_foot_and_ankle_proms/aofas_score/q3_walking|ordinal":2,"uclh_foot_and_ankle_proms/aofas_score/q4_walking_surfaces|code":"at0045","uclh_foot_and_ankle_proms/aofas_score/q4_walking_surfaces|ordinal":3,"uclh_foot_and_ankle_proms/aofas_score/total_score":39,"uclh_foot_and_ankle_proms/aofas_score/comment":"Doing better still"})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
