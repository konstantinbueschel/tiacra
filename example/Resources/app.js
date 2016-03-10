/*
 * This is application demonstrate the use of Application Crash Reports for Android (ACRA).
 * The module enable sending crash reports (not the javascript errors) either silently or after a toast notification.
 * The first example demonstrates the use with an HTTP server that accepts the crash report
 * The second example demonstrates the use via an e-mail account that gets the crash report
 * For further explanation look into:
 * The module documentation <Module install location>/modules/android/ti.acra/<X.Y.Z>/documentation/index.html
 *  - and -
 * https://github.com/ACRA/acra
 */

var ACRA = require('ti.acra');
//* Simple server hosted script example 
ACRA.init({
	formUri: "http://yourserver.com/yourscript",
//	disableSSLCertValidation: true, // Set this to true if you need to post reports to your own server using an SSL connection with a self-signed certificate.
//	formUriBasicAuthLogin: "yourlogin", // optional credentials
//	formUriBasicAuthPassword: "y0uRpa$$w0rd", // optional
//	httpMethod: ACRA.HttpSenderMethod_PUT, // If PUT method is required instead of POST
//	reportType: ACRA.HttpReportType_JSON, // If  JSON format is required instead of FORM
});
//*/

/* Un-comment for a simple e-mail example with logcat [& comment the former example]
ACRA.init({
	mailTo: '<your e-mail>@gmail.com',
	resToastTextKey: 'acra_crash_toast_text', // The i18n key for the text to be displayed in the toast upon crash
	customReportContent: [ // See https://github.com/ACRA/acra/wiki/ReportContent for details
		ACRA.ReportField_STACK_TRACE,
		ACRA.ReportField_LOGCAT,
	],
//	logcatFilterByPid: true, // Set this to true if you want to include only logcat lines related to your Application process.
	mode: ACRA.ReportingInteractionMode_TOAST,
	logcatArguments: ["-t", "300", "-v", "time"],
});
*/

/*
		ACRA.ReportField_ANDROID_VERSION,
		ACRA.ReportField_APP_VERSION_CODE,
		ACRA.ReportField_APP_VERSION_NAME,
		ACRA.ReportField_APPLICATION_LOG,
		ACRA.ReportField_AVAILABLE_MEM_SIZE,
		ACRA.ReportField_BRAND,
		ACRA.ReportField_BUILD,
//		ACRA.ReportField_BUILD_CONFIG, // Not supported in this version
		ACRA.ReportField_CRASH_CONFIGURATION,
		ACRA.ReportField_CUSTOM_DATA,
		ACRA.ReportField_DEVICE_FEATURES,
		ACRA.ReportField_DEVICE_ID,
		ACRA.ReportField_DISPLAY,
		ACRA.ReportField_DROPBOX,
		ACRA.ReportField_DUMPSYS_MEMINFO,
		ACRA.ReportField_ENVIRONMENT,
		ACRA.ReportField_EVENTSLOG,
		ACRA.ReportField_FILE_PATH,
		ACRA.ReportField_INITIAL_CONFIGURATION,
		ACRA.ReportField_INSTALLATION_ID,
		ACRA.ReportField_IS_SILENT,
		ACRA.ReportField_LOGCAT,
		ACRA.ReportField_MEDIA_CODEC_LIST,
		ACRA.ReportField_PACKAGE_NAME,
		ACRA.ReportField_PHONE_MODEL,
		ACRA.ReportField_PRODUCT,
		ACRA.ReportField_RADIOLOG,
		ACRA.ReportField_REPORT_ID,
		ACRA.ReportField_SETTINGS_GLOBAL,
		ACRA.ReportField_SETTINGS_SECURE,
		ACRA.ReportField_SETTINGS_SYSTEM,
		ACRA.ReportField_SHARED_PREFERENCES,
		ACRA.ReportField_STACK_TRACE,
		ACRA.ReportField_STACK_TRACE_HASH, // Inside code, undocumented
		ACRA.ReportField_THREAD_DETAILS,
		ACRA.ReportField_TOTAL_MEM_SIZE,
		ACRA.ReportField_USER_APP_START_DATE,
		ACRA.ReportField_USER_COMMENT,
		ACRA.ReportField_USER_CRASH_DATE,
		ACRA.ReportField_USER_EMAIL,
		ACRA.ReportField_USER_IP, // Inside code, undocumented
 */

(function() {
	var win = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});

	var view = Ti.UI.createView();

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'black',
		text:L('crash'),
		borderColor: 'red',
		height:'auto',
		width:'auto'
	});
	view.add(label);

	label.addEventListener('click', function(e) {
		alert(e.source.text);
// Thanks to https://jira.appcelerator.org/browse/TIMOB-17889 the following line cause a crash...
		label.setVisible(0);
	});

	win.add(view);
	win.open();
})();
