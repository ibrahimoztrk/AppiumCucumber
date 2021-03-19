$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ilktest.feature");
formatter.feature({
  "name": "appium test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@apidemos"
    }
  ]
});
formatter.scenario({
  "name": "Switch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apidemos"
    }
  ]
});
formatter.step({
  "name": "kullanici API Demos sayfasina gidecek",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SwitchAndroidStepDefs.kullanici_api_demos_sayfasina_gidecek()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Preference sayfasina gidecek",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SwitchAndroidStepDefs.kullanici_preference_sayfasina_gidecek()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici Preference from code sayfasina gidecek",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SwitchAndroidStepDefs.kullanici_preference_from_code_sayfasina_gidecek()"
});
formatter.result({
  "status": "passed"
});
});