function lastUpdate(){
    var m = "This portolio was last updated on: " + document.lastModified;
    var p = m.length-8;
    document.writeln("<center>");
    document.write(m.substring(p, 0));
    document.writeln("</center>");
}