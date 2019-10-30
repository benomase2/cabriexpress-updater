/**
 * @file Cabri Express - Premium features configuration
 */

const serverEnv = params.get('env');
if (serverEnv) {
    var outcomeServiceId = params.get('outcome_service_id');

    CabriConfig.AutoSave = false;
    Globals.Env = serverEnv;
    Globals.LMS = {
        Lti: serverEnv === 'LMS_LTI',
        Postback: outcomeServiceId && outcomeServiceId !== 'undefined',
        isCanvas: params.get('isCanvas')
    };
    if (Globals.LMS.Postback) {
        Globals.sendResultAfterValidation = true;
    }
} else {
    if (params.get("student_test")) {
        console.log("[Student Test Mode]");
        Globals = {
            ...Globals,
            Profile: "student",
            FileToLoad: "storage-temp.clmc",
            ShowValidationButton: true,
            sendResultAfterValidation: true
        };
        CabriConfig.AutoSave = false;
        CabriConfig.AutoLoad = true;
    }
}

const roles = params.get('roles');
if (roles) {
    var cabriDomain = params.get('cabri_domain');
    var userID = params.get('user_id');
    var lmsDomain = params.get('lms_domain');
    var cabriVersion = params.get('cabriVersion');

    if (roles.includes('Instructor')) {
        Globals.Profile = 'teacher';
    }
    else if (roles.includes('Learner')) {
        Globals.Profile = 'student';
    }

    if (Globals.Profile === 'student') {
        CabriConfig.AutoSave = false;
        var questionURL = params.get('question_url');
        var questionID = params.get('question_id');
        Globals.FileToLoad = questionURL;
    }
}