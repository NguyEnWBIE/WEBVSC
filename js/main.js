function leftmenu(){
    var filters = ['trang chu','gioi thieu','ho tro','ban hang']
    for (var f in filters) {
        console.log(f);
        var newElement = document.createElement('div');
        newElement.id = filters[f]; 
        newElement.className = "filter";
        newElement.innerHTML = filters[f];
        document.body.appendChild(newElement);
    } 
}

function add(){
    var ar=['1','2','3']
    var s="";
    for(i=0;i<ar.length;i++){
        var a='<a href="#"><li id='+ i + ' onclick="hienthi1(this);">' + ar[i] +'</li>'
        s+=a;
    }
    s='<ul>' + s + '</ul>';
    document.getElementById(leftmenu).innerHTML = s;
}