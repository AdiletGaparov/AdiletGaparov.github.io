import {msATS, msTSP, vcgStrategy, vcgAI} from "./dataWork";
import {dataAF, dataUW, dataNU, dataIE} from "./dataEducation";

let dataHistory = [dataAF, dataUW, dataNU, dataIE, msATS, msTSP, vcgStrategy, vcgAI];

dataHistory.forEach((period, index) => {
    period["order"] = index+1;
});

export {dataHistory};

