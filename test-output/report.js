$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/kzalogin.feature");
formatter.feature({
  "name": "User should be able to login with valid credential and user should not be",
  "description": "  able to login with invalid credential.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome Browser with URL",
  "keyword": "Given "
});
formatter.step({
  "name": "User Enters Email as \"\u003cemail\u003e\" and Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.step({
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.step({
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "ustel1111@gmail.com",
        "Freeuyghur22@@"
      ]
    },
    {
      "cells": [
        "admin1@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome Browser with URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Email as \"ustel1111@gmail.com\" and Password as \"Freeuyghur22@@\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.homepage_should_be_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Click_on_Logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.close_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User Launch Chrome Browser with URL",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Launch_Chrome_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enters Email as \"admin1@yourstore.com\" and Password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.click_on_Login()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//span[text()\u003d\u0027Log in\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MacBook-Air\u0027, ip: \u0027fe80:0:0:0:1c3c:56bc:8182:80eb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\n\tat kzapro.pages.LoginPage.clickLoginPassword(LoginPage.java:51)\n\tat stepDefinitions.LoginValidAndInvalidCredential.click_on_Login(LoginValidAndInvalidCredential.java:37)\n\tat ✽.Click on Login(file:Feature/kzalogin.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "HomePage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.homepage_should_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.user_Click_on_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginValidAndInvalidCredential.close_Browser()"
});
formatter.result({
  "status": "skipped"
});
});