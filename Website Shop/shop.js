var circle = document.getElementById('circle');
        var upBtn = document.getElementById('upBtn');
        var downBtn = document.getElementById('downBtn');

        var rotateValue = circle.style.transform;
        var rotateSum;
        upBtn.onclick = function(){
            rotateSum=rotateValue+"rotate(-90deg)";
            circle.style.transform=rotateSum;
            rotateValue=rotateSum;
        }
        downBtn.onclick = function(){
            rotateSum=rotateValue+"rotate(90deg)";
            circle.style.transform=rotateSum;
            rotateValue=rotateSum;
        }
        

setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) =>{
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.querySelector("#cookies-btn").addEventListener("click",()=>{
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if (!getCookie("cookie"))
        document.querySelector("#cookie").style.display = "block";
}

window.addEventListener("load", cookieMessage);



// Get the user browser name and version
let browserName = navigator.appName;
let browserVersion = navigator.appVersion;

// Get the operating system
let OSName = "known OS";

if (navigator.userAgent.indexOf("Win") != -1) OSName = "windows";
if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintouch";
if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "ios";

//Display the information to the user
alert("Welcom to CYNCEP Website! You are using  "   + browserName + "version  "    + browserVersion +   "  on  "  + OSName + "10....Thank you!!!");






// function Is ()
// {   // convert all characters to lowercase to simplify testing
//     var agt=navigator.userAgent.toLowerCase()

//     // * BROWSER VERSION *
//     this.major = parseInt(navigator.appVersion)
//     this.minor = parseFloat(navigator.appVersion)

//     this.nav  = ((agt.indexOf('mozilla')!=-1) && ((agt.indexOf('spoofer')==-1)
//                 && (agt.indexOf('compatible') == -1)))
//     this.nav2 = (this.nav && (this.major == 2))
//     this.nav3 = (this.nav && (this.major == 3))
//     this.nav4 = (this.nav && (this.major == 4))
//     this.nav4up = this.nav && (this.major >= 4)
//     this.navonly      = (this.nav && (agt.indexOf(";nav") != -1))

//     this.ie   = (agt.indexOf("msie") != -1)
//     this.ie3  = (this.ie && (this.major == 2))
//     this.ie4  = (this.ie && (this.major == 4))
//     this.ie4up  = this.ie  && (this.major >= 4)

//     this.opera = (agt.indexOf("opera") != -1)
     
//     // * JAVASCRIPT VERSION CHECK * 
//     // Useful to workaround Nav3 bug in which Nav3 
//     // loads <SCRIPT LANGUAGE="JavaScript1.2">.
//     if (this.nav2 || this.ie3) this.js = 1.0
//     else if (this.nav3 || this.opera) this.js = 1.1
//     else if (this.nav4 || this.ie4) this.js = 1.2
//     // NOTE: In the future, update this code when newer versions of JS 
//     // are released. For now, we try to provide some upward compatibility 
//     // so that future versions of Nav and IE will show they are at 
//     // least JS 1.2 capable. Always check for JS version compatibility 
//     // with > or >=.
//     else if ((this.nav && (this.minor > 4.05)) || (this.ie && (this.major > 4))) 
//          this.js = 1.2
//     else this.js = 0.0 // HACK: always check for JS version with > or >=

//     // * PLATFORM *
//     this.win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) )
//     // NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
//     //        Win32, so you can't distinguish between Win95 and WinNT.
//     this.win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1))

//     // is this a 16 bit compiled version?
//     this.win16 = ((agt.indexOf("win16")!=-1)
//                || (agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1)
//                || (agt.indexOf("windows 16-bit")!=-1) )  

//     this.win31 = (agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
//                  (agt.indexOf("windows 16-bit")!=-1)

//     // NOTE: Reliable detection of Win98 may not be possible. It appears that:
//     //       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
//     //       - On Mercury client, the 32-bit version will return "Win98", but
//     //         the 16-bit version running on Win98 will still return "Win95".
//     this.win10 = ((agt.indexOf("win")!=-1)||(agt.indexOf("windows 10")!=-1))
//     this.winnt = ((agt.indexOf("winnt")!=-1)||(agt.indexOf("windows nt")!=-1))
//     this.win32 = this.win10 || this.winnt || this.win10 || 
//                  ((this.major >= 4) && (navigator.platform == "Win32")) ||
//                  (agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1)

//     this.os2   = (agt.indexOf("os/2")!=-1) 
//                  || (navigator.appVersion.indexOf("OS/2")!=-1)  
//                  || (agt.indexOf("ibm-webexplorer")!=-1)

//     this.mac    = (agt.indexOf("mac")!=-1)
//     this.mac68k = this.mac && ((agt.indexOf("68k")!=-1) || 
//                                (agt.indexOf("68000")!=-1))
//     this.macppc = this.mac && ((agt.indexOf("ppc")!=-1) || 
//                                (agt.indexOf("powerpc")!=-1))

//     this.sun   = (agt.indexOf("sunos")!=-1)
//     this.sun4  = (agt.indexOf("sunos 4")!=-1)
//     this.sun5  = (agt.indexOf("sunos 5")!=-1)
//     this.suni86= this.sun && (agt.indexOf("i86")!=-1)
//     this.irix  = (agt.indexOf("irix") !=-1)    // SGI
//     this.irix5 = (agt.indexOf("irix 5") !=-1)
//     this.irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1))
//     this.hpux  = (agt.indexOf("hp-ux")!=-1)
//     this.hpux9 = this.hpux && (agt.indexOf("09.")!=-1)
//     this.hpux10= this.hpux && (agt.indexOf("10.")!=-1)
//     this.aix   = (agt.indexOf("aix")  !=-1)      // IBM
//     this.aix1  = (agt.indexOf("aix 1")  !=-1)    
//     this.aix2  = (agt.indexOf("aix 2")  !=-1)    
//     this.aix3  = (agt.indexOf("aix 3")  !=-1)    
//     this.aix4  = (agt.indexOf("aix 4")  !=-1)    
//     this.linux = (agt.indexOf("inux")!=-1)
//     this.sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1)
//     this.unixware = (agt.indexOf("unix_system_v")!=-1) 
//     this.mpras    = (agt.indexOf("ncr")!=-1) 
//     this.reliant  = (agt.indexOf("reliantunix")!=-1)
//     this.dec   = (agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) 
//            || (agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) 
//            || (agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1) 
//     this.sinix = (agt.indexOf("sinix")!=-1)
//     this.freebsd = (agt.indexOf("freebsd")!=-1)
//     this.bsd = (agt.indexOf("bsd")!=-1)
//     this.unix  = (agt.indexOf("x11")!=-1) || this.sun || this.irix || this.hpux || 
//                  this.sco ||this.unixware || this.mpras || this.reliant || 
//                  this.dec || this.sinix || this.aix || this.linux || this.freebsd

//     this.vms   = (agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1)
// }

// var is;
// var isIE3Mac = false;
// // this section is designed specifically for IE3 for the Mac 

// if ((navigator.appVersion.indexOf("Mac")!=-1) && (navigator.userAgent.indexOf("MSIE")!=-1) && (parseInt(navigator.appVersion)==3))
//        isIE3Mac = true;

// else 
//     is = new Is();