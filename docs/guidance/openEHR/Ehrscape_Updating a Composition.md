## Ehrscape: Updating a Composition

Occasionally it will be necessary to update a previously commited composition. This is straightforward, via a `PUT /composition` call.

The PUT will automatically create a new version of the composition but retains the previous version for medicolegal purposes. The previous version can be queryed but normal, 'standard' querying will only find at the latest version.

There are a couple of issues that you need to be aware of...

### Issues

1. It is not possible to do a differential PUT i.e you must re-post the whole composition, with any required changes included. Typically you would first of all perform a
   `GET /composition` to retreive the full JSON structure, update any elements as required, then do a PUT. 
 
2. The PUT /composition requires you to send the exact **current** version of the composition that needs to updated. This is normally via the previous GET Call parameter or in the composition uid attribute.

   `"height_weight/_uid": "16e1f86a-f5be-4a24-8415-d6107f1f0a4f::hcbox.oprn.ehrscape.com::1"`
   
3. If you do not provide a valid version, you will get a 404 error

```
{
    "status": 404,
    "code": "COMP-1021",
    "userMessage": "Composition does not exist.",
    "developerMessage": "The required composition does not exist and has never existed. Check your domain and version.",
    "exceptionMessage": "Invalid composition uid: 16e1f86a-f5be-4a24-8415-d6107f1f0a4f",
    "moreInfo": "https://confluence.ehrvendor.com/display/ehrrest/COMP-1021",
    "requestHref": "http://test.operon.systems/rest/v1/composition/16e1f86a-f5be-4a24-8415-d6107f1f0a4f?format=FLAT&templateId=RIPPLE%20-%20Height_Weight.v1"
}
```

3. As part of the PUT, you must supply the updated JSON object as part of the API Body. In the example below the composer has been chamged from `"height_weight/composer|name": "Dr Tony Shannon"` to `"height_weight/composer|name": "Dr Antonia Shannon"`

```
PUT /rest/v1/composition/16e1f86a-f5be-4a24-8415-d6107f1f0a4f::hcbox.oprn.ehrscape.com::2?format=FLAT&amp;templateId=RIPPLE - Height_Weight.v1 HTTP/1.1
Content-Type: application/json
{
        "height_weight/_uid": "16e1f86a-f5be-4a24-8415-d6107f1f0a4f::hcbox.oprn.ehrscape.com::2",
        "height_weight/language|code": "en",
        "height_weight/language|terminology": "ISO_639-1",
        "height_weight/territory|code": "GB",
        "height_weight/territory|terminology": "ISO_3166-1",
        "height_weight/context/_health_care_facility|id": "999999-345",
        "height_weight/context/_health_care_facility|id_scheme": "2.16.840.1.113883.2.1.4.3",
        "height_weight/context/_health_care_facility|id_namespace": "NHS-UK",
        "height_weight/context/_health_care_facility|name": "Home",
        "height_weight/context/start_time": "2017-03-24T00:11:02.518+02:00",
        "height_weight/context/setting|code": "238",
        "height_weight/context/setting|value": "other care",
        "height_weight/context/setting|terminology": "openehr",
        "height_weight/height_length/any_event:0/height|magnitude": 185,
        "height_weight/height_length/any_event:0/height|unit": "cm",
        "height_weight/height_length/any_event:0/time": "2017-03-24T00:11:02.518+02:00",
        "height_weight/height_length/language|code": "en",
        "height_weight/height_length/language|terminology": "ISO_639-1",
        "height_weight/height_length/encoding|code": "UTF-8",
        "height_weight/height_length/encoding|terminology": "IANA_character-sets",
        "height_weight/body_weight/weight|magnitude": 75.3,
        "height_weight/body_weight/weight|unit": "kg",
        "height_weight/body_weight/time": "2017-03-24T00:11:02.518+02:00",
        "height_weight/body_weight/language|code": "en",
        "height_weight/body_weight/language|terminology": "ISO_639-1",
        "height_weight/body_weight/encoding|code": "UTF-8",
        "height_weight/body_weight/encoding|terminology": "IANA_character-sets",
        "height_weight/composer|name": "Dr Antonia Shannon"
    }
```
4. Known Ethercis issues

a) The PUT mechanism does not seem to operate correctly in EtherCis and a PR has been 
 submitted. It does not appear to increment the version number.

b) EtherCis does not accept the FLAT OUTPUT format  unless the line
 `"ctx/language": "GB",`
 is added to the JSON body. This was a known previous problem with ThinkEHR and is thought to be due to EtherCis using outdated ThinkEHr JSON libraries, and a PR has been issued.
 
c) The returned Action statement is "UPDATED" an should be changed to "UPDATE" 
 
Response:

```
{
    "meta": {
        "href": "http://test.operon.systems/rest/v1/composition/16e1f86a-f5be-4a24-8415-d6107f1f0a4f::hcbox.oprn.ehrscape.com::3"
    },
    "action": "UPDATE"
}
```