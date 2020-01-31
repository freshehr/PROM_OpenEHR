## A. Retrieve existing composition
CALL:
```
GET /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1?format=FLAT HTTP/1.1
Host: 178.62.71.220:8080
Content-Type: application/json
Authorization: Basic Z3Vlc3Q6Z3Vlc3Q=
Ehr-Session: sessionId:127.0.0.1-guest-1507879377173--757990900-4503
Auth-Token: {{Auth-Token}}
```
{
    "composition": {
        "height_weight/_uid": "98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1",
        "height_weight/language|code": "en",
        "height_weight/language|terminology": "ISO_639-1",
        "height_weight/territory|code": "GB",
        "height_weight/territory|terminology": "ISO_3166-1",
        "height_weight/context/_health_care_facility|id": "999999-345",
        "height_weight/context/_health_care_facility|id_scheme": "2.16.840.1.113883.2.1.4.3",
        "height_weight/context/_health_care_facility|id_namespace": "NHS-UK",
        "height_weight/context/_health_care_facility|name": "Rippleburgh GP Practice",
        "height_weight/context/start_time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/context/setting|code": "238",
        "height_weight/context/setting|value": "other care",
        "height_weight/context/setting|terminology": "openehr",
        "height_weight/height_length/any_event:0/height|magnitude": 176,
        "height_weight/height_length/any_event:0/height|unit": "cm",
        "height_weight/height_length/any_event:0/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/height_length/language|code": "en",
        "height_weight/height_length/language|terminology": "ISO_639-1",
        "height_weight/height_length/encoding|code": "UTF-8",
        "height_weight/height_length/encoding|terminology": "IANA_character-sets",
        "height_weight/body_weight/weight|magnitude": 85.2,
        "height_weight/body_weight/weight|unit": "kg",
        "height_weight/body_weight/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/body_weight/language|code": "en",
        "height_weight/body_weight/language|terminology": "ISO_639-1",
        "height_weight/body_weight/encoding|code": "UTF-8",
        "height_weight/body_weight/encoding|terminology": "IANA_character-sets",
        "height_weight/composer|name": "Dr Jennifer Handley"
    },
    "meta": {
        "href": "rest/v1/composition?uid=98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1"
    },
    "format": "FLAT",
    "templateId": "RIPPLE - Height_Weight.v1"
}

## B. Update existing composition
CALL:
```
PUT /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1?format=FLAT&amp;templateId=RIPPLE - Height_Weight.v1 HTTP/1.1
Host: 178.62.71.220:8080
Content-Type: application/json
Authorization: Basic Z3Vlc3Q6Z3Vlc3Q=
Ehr-Session: sessionId:127.0.0.1-guest-1507879377173--757990900-4503

 {
        //This line needs to be added - Marand bug
        "ctx/language": "GB",
        "height_weight/_uid": "98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1",
        "height_weight/language|code": "en",
        "height_weight/language|terminology": "ISO_639-1",
        "height_weight/territory|code": "GB",
        "height_weight/territory|terminology": "ISO_3166-1",
        "height_weight/context/_health_care_facility|id": "999999-345",
        "height_weight/context/_health_care_facility|id_scheme": "2.16.840.1.113883.2.1.4.3",
        "height_weight/context/_health_care_facility|id_namespace": "NHS-UK",
        "height_weight/context/_health_care_facility|name": "Rippleburgh GP Practice",
        "height_weight/context/start_time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/context/setting|code": "238",
        "height_weight/context/setting|value": "other care",
        "height_weight/context/setting|terminology": "openehr",
        "height_weight/height_length/any_event:0/height|magnitude": 176,
        "height_weight/height_length/any_event:0/height|unit": "cm",
        "height_weight/height_length/any_event:0/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/height_length/language|code": "en",
        "height_weight/height_length/language|terminology": "ISO_639-1",
        "height_weight/height_length/encoding|code": "UTF-8",
        "height_weight/height_length/encoding|terminology": "IANA_character-sets",
        "height_weight/body_weight/weight|magnitude": 85.2,
        "height_weight/body_weight/weight|unit": "kg",
        "height_weight/body_weight/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/body_weight/language|code": "en",
        "height_weight/body_weight/language|terminology": "ISO_639-1",
        "height_weight/body_weight/encoding|code": "UTF-8",
        "height_weight/body_weight/encoding|terminology": "IANA_character-sets",
        "height_weight/composer|name": "Dr Jennifer Handley"
    }
```    
RESPONSE:
```
    {
    "compositionUid": "98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1",
    "meta": {
        "href": "rest/v1/composition?uid=98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1"
    },
    "action": "UPDATED"
}
```


## C. Retreive original composition version
CALL:
```
GET /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1?format=FLAT HTTP/1.1
Host: 178.62.71.220:8080
Content-Type: application/json
Authorization: Basic Z3Vlc3Q6Z3Vlc3Q=
Ehr-Session: sessionId:127.0.0.1-guest-1507879377173--757990900-4503
Auth-Token: {{Auth-Token}}
```
Notes: The meta tag is incorrect - does not update to version 2
should be: "rest/v1/composition?uid=98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::2"

RESPONSE:
```
{
    "composition": {
        "height_weight/_uid": "98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::2",
        "height_weight/language|code": "en",
        "height_weight/language|terminology": "ISO_639-1",
        "height_weight/territory|code": "GB",
        "height_weight/territory|terminology": "ISO_3166-1",
        "height_weight/context/_health_care_facility|id": "999999-345",
        "height_weight/context/_health_care_facility|id_scheme": "2.16.840.1.113883.2.1.4.3",
        "height_weight/context/_health_care_facility|id_namespace": "NHS-UK",
        "height_weight/context/_health_care_facility|name": "Rippleburgh GP Practice",
        "height_weight/context/start_time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/context/setting|code": "238",
        "height_weight/context/setting|value": "other care",
        "height_weight/context/setting|terminology": "openehr",
        "height_weight/height_length/any_event:0/height|magnitude": 176,
        "height_weight/height_length/any_event:0/height|unit": "cm",
        "height_weight/height_length/any_event:0/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/height_length/language|code": "en",
        "height_weight/height_length/language|terminology": "ISO_639-1",
        "height_weight/height_length/encoding|code": "UTF-8",
        "height_weight/height_length/encoding|terminology": "IANA_character-sets",
        "height_weight/body_weight/weight|magnitude": 85.2,
        "height_weight/body_weight/weight|unit": "kg",
        "height_weight/body_weight/time": "2017-11-14T00:11:02.518+02:00",
        "height_weight/body_weight/language|code": "en",
        "height_weight/body_weight/language|terminology": "ISO_639-1",
        "height_weight/body_weight/encoding|code": "UTF-8",
        "height_weight/body_weight/encoding|terminology": "IANA_character-sets",
        "height_weight/composer|name": "Dr Jennifer Handley"
    },
    "meta": {
        "href": "rest/v1/composition?uid=98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::1"
    },
    "format": "FLAT",
    "templateId": "RIPPLE - Height_Weight.v1"
}
```
Notes : This should return Version 1 of the composition.

This is what ThinkEhr returns , and I think this is the correct behaviour.
```
{
    "meta": {
        "href": "http://test.operon.systems/rest/v1/composition/ee3b0b2b-c133-43b4-b08a-3a7632fd1197::hcbox.oprn.ehrscape.com::1",
        "nextHref": "http://test.operon.systems/rest/v1/composition/ee3b0b2b-c133-43b4-b08a-3a7632fd1197::hcbox::2"
    },
    "format": "FLAT",
    "templateId": "RIPPLE - Height_Weight.v1",
    "composition": {
        "height_weight/_uid": "ee3b0b2b-c133-43b4-b08a-3a7632fd1197::hcbox.oprn.ehrscape.com::1",
```

```
## Re-read version 2 of the composition
```
GET /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::2?format=FLAT HTTP/1.1
Host: 178.62.71.220:8080
Content-Type: application/json
Authorization: Basic Z3Vlc3Q6Z3Vlc3Q=
Ehr-Session: sessionId:127.0.0.1-guest-1507883959267--1217220900-4507
Auth-Token: {{Auth-Token}}
```
RESPONSE:
```
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"/>
        <title>Error 500 </title>
    </head>
    <body>
        <h2>HTTP ERROR: 500</h2>
        <p>Problem accessing /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e::vm01.ethercis.org::2. Reason:

            <pre>    #1.0.0 Invocation exception to method:retrieve:java.lang.NullPointerException</pre>
        </p>
        <hr />
        <a href="http://eclipse.org/jetty">Powered by Jetty:// 9.3.z-SNAPSHOT</a>
        <hr/>
    </body>
</html>

Notes: Should be able to retrieve version 2 via its full compositionUid.

## D. Retreive composition via shortened UId

```
GET /rest/v1/composition/98fd81b3-a63e-44a7-8d49-b8066bb1202e?format=FLAT HTTP/1.1
Host: 178.62.71.220:8080
Content-Type: application/json
Authorization: Basic Z3Vlc3Q6Z3Vlc3Q=
Ehr-Session: sessionId:127.0.0.1-guest-1507883959267--1217220900-4507
Auth-Token: {{Auth-Token}}
```
Notes:

Works correctly