import { urlMaker, headerMaker } from "./urlAndHeaderMaker.js";
import { getFileContent, uploadFiles } from "./requestHandler.js";

/* this file checks for installation and if installed it also fetches the task files */

const checkInstall = async (accessToken) =>{
    var daily, weekly, monthly;
    var res = await fetch(
        urlMaker(null,"application/json","appDataFolder"),
        {
            method: "GET",
            headers: headerMaker(accessToken)
        }
    )
    var response = await res.json()
    var installFile = response.files.filter(file => file.name === "installed.json")
    
    if(!installFile.length){ // if not installed => install and initiate all the required files.
        var installFile = await uploadFiles(accessToken, "installed.json", JSON.stringify({"installed": JSON.stringify(new Date().getTime())}))
        daily = await uploadFiles(accessToken, "daily", localStorage.getItem("daily"))
        weekly = await uploadFiles(accessToken, "weekly", localStorage.getItem("weekly"))
        monthly = await uploadFiles(accessToken, "monthly", localStorage.getItem("monthly"))
        alert("New Install Complete")
        return {
            daily: daily.id,
            weekly: weekly.id,
            monthly: monthly.id,
        }
    }
    else{ // if already installed then fetch all the file ids.
        return {
            daily: response.files.filter(file => file.name === "daily")[0].id,
            weekly: response.files.filter(file => file.name === "weekly")[0].id,
            monthly: response.files.filter(file => file.name === "monthly")[0].id,
        }
    }
}

export default checkInstall;