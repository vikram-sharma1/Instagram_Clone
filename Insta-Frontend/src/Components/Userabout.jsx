import { IoIosSettings } from "react-icons/io";

export const Usercrown=()=>{


return(

<div className="usercrown">


<div><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" /></div>
<div>
<div className="userinfo">
    <p>{"Noello"}</p>
    <button>Edit Profile</button>
    <IoIosSettings className="settingicon"/>
    
</div>
<div className="userassets">
    <p>{1} Post</p>

    <p>{0} followers</p>
    <p>{2} following</p>
</div>
<div className="userabout">
    {"Hi i am kurkure I love coding and doing innoative things Please contact me for freelancing"}
</div>
</div>


</div>



)




}