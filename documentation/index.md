# Ti.ACRA Module
Ti.ACRA is a Ti wrapper around the open source project [ACRA](https://github.com/ACRA/acra)


## Description

Application Crash Report for Android (ACRA) enables Android Application to automatically post their crash reports to an Internet server or to an e-mail address.


## Accessing the Module

To access this module from JavaScript, you would do the following:

	var ACRA = require("ti.acra");

The ACRA variable is a reference to the Module object


## Reference

Generally speaking, the wrapper method names and parameters adhere to the functions and parameters they wrap.
**It is highly recommended** to read the original [ACRA Documentation](https://github.com/ACRA/acra/wiki) prior to using the Ti.ACRA module.


### ACRA.init ({ACRAconfigurationDictionary})

The ACRAconfigurationDictionary is a Javascript object that encompass possible @ReportsCrashes annotations of ACRA.    

The attribute names are preserved with slight modifications. When ACRA is using a resource number as an argument, Ti.ACRA is using a matching attribute with additional suffix "Key". This attribute refers to the i18N strings library of Appcelerator / Titanium.

E.g. In ACRA *resToastText* is expecting an android resource id. For Ti.ACRA you'll need to provide the *resToastTextKey* attribute instead. See the app.js in the example directory of the module.

The constants used in ACRA are prefixed with their relative class name.

E.g. The ACRA constant *ReportingInteractionMode.TOAST* will be addressed in Ti.ACRA as *ReportingInteractionMode_TOAST*.


#### connectionTimeout

Value in milliseconds for timeout attempting to connect to a network (default in ACRA 3000ms).


#### customReportContent

A crash report has a default set of fields.    

To reduce the time it takes to craft the crash report, it is recommended to tailor the report content per your needs.

If a desired field is not in the default report list (e.g. *ReportField_LOGCAT* in mail report) the customReportContent attribute shall be used to customize the [Report Content](https://github.com/ACRA/acra/wiki/ReportContent)

The customReportContent field in Ti.ACRA is an array of constants from the following list:    

* ReportField_ANDROID_VERSION
* ReportField_APP_VERSION_CODE
* ReportField_APP_VERSION_NAME
* ReportField_APPLICATION_LOG
* ReportField_AVAILABLE_MEM_SIZE
* ReportField_BRAND
* ReportField_BUILD
* <strike>ReportField_BUILD_CONFIG</strike>
* ReportField_CRASH_CONFIGURATION
* ReportField_CUSTOM_DATA
* ReportField_DEVICE_FEATURES
* ReportField_DEVICE_ID
* ReportField_DISPLAY
* ReportField_DROPBOX
* ReportField_DUMPSYS_MEMINFO
* ReportField_ENVIRONMENT
* ReportField_EVENTSLOG
* ReportField_FILE_PATH
* ReportField_INITIAL_CONFIGURATION
* ReportField_INSTALLATION_ID
* ReportField_IS_SILENT
* ReportField_LOGCAT
* ReportField_MEDIA_CODEC_LIST
* ReportField_PACKAGE_NAME
* ReportField_PHONE_MODEL
* ReportField_PRODUCT
* ReportField_RADIOLOG
* ReportField_REPORT_ID
* ReportField_SETTINGS_GLOBAL
* ReportField_SETTINGS_SECURE
* ReportField_SETTINGS_SYSTEM
* ReportField_SHARED_PREFERENCES
* ReportField_STACK_TRACE
* ReportField_STACK_TRACE_HASH
* ReportField_THREAD_DETAILS
* ReportField_TOTAL_MEM_SIZE
* ReportField_USER_APP_START_DATE
* ReportField_USER_COMMENT
* ReportField_USER_CRASH_DATE
* ReportField_USER_EMAIL
* ReportField_USER_IP


#### disableSSLCertValidation

Set this to true if you need to post reports to your own server using an SSL connection with a self-signed certificate.


#### httpMethod

The method to be used to send data to the server.
The following methods are supported:

* *HttpSenderMethod_POST* - default
* *HttpSenderMethod_PUT*


#### logcatArguments

The default parameters in ACRA for logcat are: `['-t', '200', '-v', 'time']`
To alter the default settings set the *logcatArguments* property in Ti.ACRA to an array of parameters to logcat.    

E.g. logcatArguments: `['-t, '300', '-v', 'time']`
For more details, see [ACRA::Adding logcat](https://github.com/ACRA/acra/wiki/AdvancedUsage#adding-logcat-eventlog-or-radiolog-extracts-to-reports).


#### logcatFilterByPid

Set this to true if you want to include only logcat lines related to your Application process.


#### maxNumberOfRequestRetries

Maximum number of times a network request will be retried when receiving the response times out(default in ACRA 3).


#### mailTo

The destination address of the bug report. If selected, the mode attribute can not be *ReportingInteractionMode_SILENT*.


#### mode

The following modes are supported:

* *ReportingInteractionMode_SILENT* - default
* *ReportingInteractionMode_TOAST*

*ReportingInteractionMode.NOTIFICATION* and *ReportingInteractionMode.DIALOG* are not supported in this version.

Hence, per [ACRA::Sending reports by email](https://github.com/ACRA/acra/wiki/AdvancedUsage#sending-reports-by-email)

*ReportingInteractionMode_TOAST* must be used for e-mail reporting.


#### reportType

The attachment type of the report being send to the HTTP server.
The following types are supported:

* *HttpReportType_FORM* (application/x-www-form-urlencoded) - default
* *HttpReportType_JSON* (application/json)


#### resToastTextKey

Refers to an i18n entry to be relayed to ACRA resToastText annotation.


#### setSendReportsAtShutdown

Set this to false if you want to disable sending reports at the time the exception is caught. In this case, reports will not be sent until the application is restarted.


#### sendReportsInDevMode

Set this to false if you want to disable sending reports in development mode. Only signed application packages will send reports.


#### socketTimeout

Value in milliseconds for timeout receiving a response to a network request (default in ACRA 5000ms).


## Usage Examples

### Simple HTTP server configuration

This is the simplest way to send a crash report (only one parameter is required).

**app.js:**

	var ACRA = require('ti.acra');
	
	ACRA.init({
    	formUri: "http://yourserver.com/yourscript"
	});

**tiapp.xml:**

	<ti:app xmlns:ti="http://ti.appcelerator.org">
    .
    .
    <android xmlns:android="http://schemas.android.com/apk/res/android">
        <manifest>
            <uses-permission android:name="android.permission.INTERNET"/>
            
            
### Simple email configuration

This is the simplest way to get an e-mail crash report (all attributes are required).
It shows a &quot;Help: My app is crashing...&quot; toast message and opens an Android intent for sending an e-mail.

**app.js:**

	var ACRA = require('ti.acra');

	ACRA.init({
    	mailTo: 			'your_mail@gmail.com',
	    resToastTextKey: 	'acra_crash_toast_text',
	    mode: 				ACRA.ReportingInteractionMode_TOAST,
	});

**strings.xml:**

	<?xml version="1.0" encoding="UTF-8"?>
	<resources>
    .
	.
    	<string name="acra_crash_toast_text">Help: My app is crashing...</string>
	.
	.
	</resources>


### Adding logcat output to your crash report

The following changes shall be made to add logcat into the crash report:
ACRA.init(): -> Specify ReportField_LOGCAT in the customReportContent attribute
tiapp.xml: -> Add READ_LOGS to the requested permissions
For more details, see [ACRA::Adding logcat](https://github.com/ACRA/acra/wiki/AdvancedUsage#adding-logcat-eventlog-or-radiolog-extracts-to-reports).


## Scope and Limitations

This is a preliminary version that was good enough for my needs.
I thought it would be nice to share it with the community &quot;as is&quot;.
If it gets traction, I&#39;ll make an effort to enhance the supported scope.
Meanwhile, the following attributes will stay with their default ACRA values:

* Notification related attributes
* Dialog related attributes
* Shared Preferences related attributes
* DropBox events related attributes
* Unapproved / Old Reports related attributes
* Application log file related attributes
* Custom variables (Breadcrumbs)