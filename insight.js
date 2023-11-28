console.log("insights data")




const a = document.getElementsByClassName("pi-widgets nautilus-widgets")[0];
const jsonstring = a.dataset.pageContext;

try {
  const jsonObject = JSON.parse(jsonstring);
  console.log(jsonObject.caseSubject.subjectValue);
  var que = jsonObject.queueName;
  document.getElementById("annotationText").value =jsonObject.caseId+" "+jsonObject.caseSubject.subjectValue
} catch (error) {
  console.error("Error parsing JSON:", error);
}

