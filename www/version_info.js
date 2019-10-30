var versionTimestamp = "2019-10-30 17:17";
var versionCommitID = "8897dd868";
console.log(versionTimestamp+" ("+versionCommitID+")");
if (versionCommitID) {
    let prefix;
    if (window.Globals && Globals.LogPrefix) {
        prefix = '[' + Globals.LogPrefix + ']';
    } else {
        prefix = 'Cabri -';
    }
    console.log(prefix, 'build', versionCommitID);
}