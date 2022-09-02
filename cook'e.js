//set settings using cookies (cookies expire in 1 year)
function cookset(n,v){d=new Date;d.setTime(d.getTime()+31540000000);document.cookie=n+"="+v+";path=./;expires="+d.toUTCString()}

//get cookie of specified value
function cookget(na){n=na+"=";cs=document.cookie.split(';');for(i=0;i<cs.length;i++){c=cs[i];while(c.charAt(0)==' '){c=c.substring(1)}if(c.indexOf(n)==0){return c.substring(n.length,c.length)}}return "";}

//delete a cookie
function delcook(n){document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=./;"}

//(cook)ie (ch)eck (i)f (e)xists, if not, set it using b (backupval)
function cookchie(n,b){if (cookget(n)==''){cookset(n,b)}}

//wipe settings
function wipe(){delcook('gif');delcook('time')}

//save settings
function save(){cookset('gif',document.getElementById('slide').value);cookset('time',document.getElementById('text').value)}

cookchie('gif','3')
cookchie('time','4000')