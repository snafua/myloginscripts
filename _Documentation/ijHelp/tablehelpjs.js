var do_submit = false;
var helpData=new Array();
var filename=location.search;
function getRoot(location){
    if (location=="") return "";
    if (location.indexOf("http:")>-1 || location.indexOf("https:")>-1 || location.indexOf("ftp:")>-1 ||
            location.indexOf("file:")>-1) {
        return "";
    }
return root;
}

function getUrlParms(urlParm){
//var url = window.location.toString();
var url=location.search;
var query_string = url.substr(url.indexOf("?")+1);
var params = query_string.split("&");
var param_item = params[0].split("=");
//alert(param_item);
if (urlParm==param_item[0]) {
return param_item[1];
}

//param_list[param_item[0]] = unescape(param_item[1]);
//alert("test="+params_list);
}

/**
 *
 */
function getVal(str) {
    var v = window.location.search.match(new RegExp('(?:[\?\&]'+str+'=)([^&]+)'));
    return v ? v[1] : null;
}
/**
 *
 */
function getParam(param){
    return new URLSearchParams(window.location.search).get(param);
}
/**
 * getUrlVars
 * reutn vars
 * example var fType = getUrlVars()["type"];
 */
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m,key,value) {
            vars[key] = value;
        });
    return vars;
}
/**
 * loadjs dynamic
 * @param js to load
 */
function loadjs(name){
//getUrlParms();
//alert("tt"+name);
if (name==null) {
name="tablehelp.js";
}

document.write("<script language=\"JavaScript\" src=\""+name+"\" type=\"text/javascript\"></script>");
}

/**
 * importjs
 */
function importJS( url ){
    return new Promise( resolve => {
        const script = document.createElement( "script" );
    script.src = url;
    script.onload = resolve;
    document.head.appendChild( script );
});
}
/**
 * function writeTableRowStart()
 */
function writeTableRowStart(){
document.write('<tr class="tableRow">');
}
function writeTableRowEnd(){
document.write('</tr>');
}
function writeTableColIndent(text){
document.write('<td class="tableColIndent"><p>'+text+'</p></td>');
}
function writeTableColHeaderIndent(text){
document.write('<th class="tableColHeaderIndent"><p>'+text+'</p></th>');
}
function writeTableColIndents(ref,indenter){
 //  alert(text);

    if (indent>0) {
    alert(indenter);
        for (x=0;x<indenter;x++){
//            alert(indent);
            if (ref!='') {
        writeTableColIndent("");
            } else {
        writeTableColHeaderIndent("");
            }
        }
    }
//document.write('<td class="tableColIndent"><p>'+text+'jjj</p></td>');
}
function addIndent(){
    indent=indent+1;
}
function subIndent(){
    indent=indent-1;
}

function getIndent(){
    return indent;
}
function writeDocLink(ref,text,indenter) {
// alert("test:"+ref+text);
if (ref!='') {
var location=getRoot(ref)+ref;
writeTableColIndents(ref,indenter);
document.write('<td class="linkCol">');
document.write('<ul><li><a href='+encodeURI(location)+' target="_new">'+text+'</a></ul></li>');
document.write('</td>');
} else{
writeTableColIndents(ref,indenter);
document.write('<th>');
document.write('<div class="category"><p>'+text+'</p></div>');
document.write('</th>');
}
}

function writeDocColHeader(text,indenter) {
writeTableColIndents(text,indenter);
document.write('<th>');
document.write('<div class="category"><p>'+text+'</p></div>');
document.write('</th>');

}

function writeDocDescription(text) {
document.write('<td class="descriptionCol">');
document.write('<ul>'+text+'</ul>');
document.write('</td>');
}
function createArray(htmlRef,dirRef,textRef,indent){
var array = new Array();
arrLen=array.push(htmlRef);
//alert('htmlRef.push'+arrLen);
arrLen=array.push(dirRef);
//alert('dirRef.push'+arrLen);
arrLen=array.push(textRef);
//alert('textRef.push'+arrLen);
arrLen=array.push(indent);
arrLen=helpData.push(array);
//alert('helpdata.push'+arrLen);
}
/*function newArray(dimensional){
var array = new Array();
 for (x=1,x<dimensional,x++) {
 arrLen=array.push(htmlRef);
//alert('htmlRef.push'+arrLen);
 arrLen=array.push(dirRef);
//alert('dirRef.push'+arrLen);
 arrLen=array.push(textRef);
//alert('textRef.push'+arrLen);
 arrLen=helpData.push(array);
//alert('helpdata.push'+arrLen);
}*/

function createTableElement(){
document.write("<table width=\"100%\"  border=\"1\" cellspacing=\"0\" cellpadding=\"1\" style=\"vertical-align: top; margin-top: 5px;\">");
}
function createTableEnd(){
document.write("</table>");
}

function createTableHeader(header){
    document.write("<th nowrap class=\"tableCol\" width=\"20%\" height=\"5px\">");
document.writeln("<ul>"+header+"</ul></th>");
}

function writeHelpData(){
//alert('length'+helpData.length+helpData);

for (i=0;i<helpData.length;i++)
	{
//alert('helpData['+i+'][0]='+helpData[i][0]+'='+helpData[i][0]+'='+helpData[i][0]);
    //	alert('helpData['+i+'][0]='+helpData[i][0]);
//	alert('helpData['+i+'][1]='+helpData[i][1]);
//	alert('helpData['+i+'][2]='+helpData[i][2]);
writeTableRowStart();
if (helpData[i][0]!='') {
	writeDocLink(helpData[i][0],helpData[i][1],helpData[i][3]);
	writeDocDescription(encodeURI(helpData[i][0]));
	writeDocDescription(helpData[i][2]);
	} else {

	writeDocColHeader(helpData[i][1]+helpData[i][2],helpData[i][3]);
	
	}
	
writeTableRowEnd();	
	}
}
