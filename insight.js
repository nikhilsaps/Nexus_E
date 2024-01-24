console.log("hello to Insights");

var IPHdata = {
  "AE_ARI_AccountLinkageInvestigation": 27.48,
  "AE_ARI_AFNHolisticRefundApproval": 21.29,
  "AE_ARI_AFNRefundApproval": 18.14,
  "AE_ARI_BuyerClaimsAbuse": 23.92,
  "AE_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 27.56,
  "AE_ARI_ConcessionsAbuseFLRReferrals": 17.87,
  "AE_ARI_ConcessionsAbuseRiskyMFNOrders": 25.57,
  "AE_ARI_ConcessionsAbuseRiskyOrders": 28.23,
  "AE_ARI_ConcessionsAbuseRR": 31.65,
  "AE_ARI_DNRConcessionsAbuse": 25.82,
  "AE_ARI_In-transit": 22.98,
  "AE_ARI_MFNEgregious": 27.0,
  "AE_ARI_NSRConcessionsAbuse": 20.22,
  "AE_ARI_NSRSOU": 10.0,
  "AE_ARI_QLAResellerlabuse": 20.0,
  "AE_ARI_SellerInitiatedRefund": 16.0,
  "AE_ARI_Email_buyer-claims": 10.74,
  "AE_ARI_Email_suspect-abuse": 18.17,
  "BE_ARI_AccountLinkageInvestigation": 29.76,
  "BE_ARI_AFNHolisticRefundApproval": 10.0,
  "BE_ARI_AFNRefundApproval": 17.15,
  "BE_ARI_BuyerClaimsAbuse": 28.99,
  "BE_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 14.36,
  "BE_ARI_ConcessionsAbuseFLRReferrals": 21.6,
  "BE_ARI_ConcessionsAbuseRiskyMFNOrders": 10.0,
  "BE_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "BE_ARI_DNRConcessionsAbuse": 20.37,
  "BE_ARI_In-transit": 20.26,
  "BE_ARI_NSRConcessionsAbuse": 10.0,
  "BE_ARI_SellerInitiatedRefund": 20.0,
  "BE_ARI_Email_suspect-abuse": 18.28,
  "BR_ARI_AccountLinkageInvestigation": 34.74,
  "BR_ARI_AFNRefundApproval": 22.22,
  "BR_ARI_BARSConcessionAbuse": 32.87,
  "BR_ARI_BuyerClaimsAbuse": 29.75,
  "BR_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 26.53,
  "BR_ARI_ConcessionsAbuseFLRReferrals": 31.64,
  "BR_ARI_ConcessionsAbuseRiskyMFNOrders": 24.67,
  "BR_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "BR_ARI_ConcessionsAbuseRR": 31.65,
  "BR_ARI_DNR_Concessions_Abuse": 25.82,
  "BR_ARI_In-transit": 22.73,
  "BR_ARI_MFNEgregious": 27.0,
  "BR_ARI_NSRConcessionsAbuse": 26.94,
  "BR_ARI_SellerInitiatedRefund": 25.5,
  "BR_ARI_Email_suspect-abuse": 9.8,
  "EG_ARI_AccountLinkageInvestigation": 29.57,
  "EG_ARI_AFNHolisticRefundApproval": 26.24,
  "EG_ARI_AFNRefundApproval": 17.2,
  "EG_ARI_BuyerClaimsAbuse": 24.46,
  "EG_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 26.41,
  "EG_ARI_ConcessionsAbuseFLRReferrals": 22.03,
  "EG_ARI_ConcessionsAbuseRiskyMFNOrders": 24.26,
  "EG_ARI_ConcessionsAbuseRiskyOrders": 28.7,
  "EG_ARI_ConcessionsAbuseRR": 32.06,
  "EG_ARI_DNRConcessionsAbuse": 21.94,
  "EG_ARI_In-transit": 21.55,
  "EG_ARI_MFNEgregious": 27.0,
  "EG_ARI_NSRAccountInvestigation": 34.53,
  "EG_ARI_NSRConcessionsAbuse": 26.83,
  "EG_ARI_QLAResellerlabuse": 20.0,
  "EG_ARI_SellerInitiatedRefund": 22.5,
  "EG_ARI_Email_suspect-abuse": 28.2,
  "MX_ARI_AccountLinkageInvestigation": 35.0,
  "MX_ARI_AFNHolisticRefundApproval": 19.59,
  "MX_ARI_AFNRefundApproval": 21.94,
  "MX_ARI_BARSConcessionAbuse": 29.6,
  "MX_ARI_BuyerClaimsAbuse": 30.38,
  "MX_ARI_ConcessionsAbuseCAPDNRReferrals": 20.61,
  "MX_ARI_ConcessionsAbuseCSReferrals": 35.0,
  "MX_ARI_ConcessionsAbuseFLRReferrals": 25.99,
  "MX_ARI_ConcessionsAbuseHighPriCAPDNRReferrals": 21.35,
  "MX_ARI_ConcessionsAbuseRiskyOrders": 29.1,
  "MX_ARI_ConcessionsAbuseRR": 30.04,
  "MX_ARI_DNRConcessionsAbuse": 26.1,
  "MX_ARI_In-transit": 22.29,
  "MX_ARI_MFNEgregious": 27.0,
  "MX_ARI_NSRConcessionsAbuse": 32.21,
  "MX_ARI_NSRSOU": 21.25,
  "MX_ARI_SellerInitiatedRefund": 20.5,
  "MX_ARI_TrustedSellerReferral": 28.3,
  "NL_ARI_AccountLinkageInvestigation": 27.63,
  "NL_ARI_AFNHolisticRefundApproval": 19.22,
  "NL_ARI_AFNRefundApproval": 20.39,
  "NL_ARI_BuyerClaimsAbuse": 25.8,
  "NL_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 28.0,
  "NL_ARI_ConcessionsAbuseFLRReferrals": 25.96,
  "NL_ARI_ConcessionsAbuseRiskyMFNOrders": 27.8,
  "NL_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "NL_ARI_ConcessionsAbuseRR": 33.79,
  "NL_ARI_DNRConcessionsAbuse": 22.97,
  "NL_ARI_In-transit": 18.04,
  "NL_ARI_MFNEgregious": 27.0,
  "NL_ARI_NSRConcessionsAbuse": 10.0,
  "NL_ARI_NSRSOU": 25.61,
  "NL_ARI_QLAResellerlabuse": 20.0,
  "NL_ARI_SellerInitiatedRefund": 25.0,
  "NL_ARI_TrustedSellerReferral": 10.0,
  "NL_ARI_Email_buyer-claims": 15.46,
  "PL_ARI_AccountLinkageInvestigation": 27.47,
  "PL_ARI_AFNHolisticRefundApproval": 22.67,
  "PL_ARI_AFNRefundApproval": 18.21,
  "PL_ARI_BuyerClaimsAbuse": 29.85,
  "PL_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 25.17,
  "PL_ARI_ConcessionsAbuseFLRReferrals": 26.11,
  "PL_ARI_ConcessionsAbuseRiskyMFNOrders": 26.93,
  "PL_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "PL_ARI_ConcessionsAbuseRR": 32.27,
  "PL_ARI_DNRConcessionsAbuse": 21.04,
  "PL_ARI_In-transit": 21.16,
  "PL_ARI_MFNEgregious": 27.0,
  "PL_ARI_NSRAccountInvestigation": 10.0,
  "PL_ARI_NSRConcessionsAbuse": 22.02,
  "PL_ARI_NSRSOU": 10.0,
  "PL_ARI_SellerInitiatedRefund": 22.5,
  "SA_ARI_AccountLinkageInvestigation": 26.56,
  "SA_ARI_AFNHolisticRefundApproval": 21.83,
  "SA_ARI_AFNRefundApproval": 17.68,
  "SA_ARI_BuyerClaimsAbuse": 24.11,
  "SA_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 27.05,
  "SA_ARI_ConcessionsAbuseFLRReferrals": 19.16,
  "SA_ARI_ConcessionsAbuseRiskyMFNOrders": 26.47,
  "SA_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "SA_ARI_ConcessionsAbuseRR": 30.69,
  "SA_ARI_DNRConcessionsAbuse": 25.7,
  "SA_ARI_In-transit": 19.02,
  "SA_ARI_MFNEgregious": 27.0,
  "SA_ARI_NSRConcessionsAbuse": 27.52,
  "SA_ARI_QLAResellerlabuse": 20.0,
  "SA_ARI_SellerInitiatedRefund": 20.0,
  "SA_ARI_Email_buyer-claims": 25.0,
  "SE_ARI_AccountLinkageInvestigation": 35.0,
  "SE_ARI_AFNHolisticRefundApproval": 26.18,
  "SE_ARI_AFNRefundApproval": 18.19,
  "SE_ARI_BuyerClaimsAbuse": 26.33,
  "SE_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 26.55,
  "SE_ARI_ConcessionsAbuseFLRReferrals": 28.2,
  "SE_ARI_ConcessionsAbuseRiskyMFNOrders": 23.8,
  "SE_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "SE_ARI_ConcessionsAbuseRR": 10.0,
  "SE_ARI_DNRConcessionsAbuse": 16.76,
  "SE_ARI_In-transit": 22.91,
  "SE_ARI_MFNEgregious": 27.0,
  "SE_ARI_NSRConcessionsAbuse": 21.41,
  "SE_ARI_NSRSOU": 10.0,
  "SE_ARI_SellerInitiatedRefund": 24.11,
  "SE_ARI_Email_suspect-abuse": 17.33,
  "TR_ARI_AccountLinkageInvestigation": 28.59,
  "TR_ARI_AFNHolisticRefundApproval": 22.5,
  "TR_ARI_AFNRefundApproval": 19.31,
  "TR_ARI_BuyerClaimsAbuse": 26.46,
  "TR_ARI_ConcessionsAbuseFailedReturnsRiskyOrders": 27.85,
  "TR_ARI_ConcessionsAbuseFLRReferrals": 17.46,
  "TR_ARI_ConcessionsAbuseRiskyMFNOrders": 27.9,
  "TR_ARI_ConcessionsAbuseRiskyOrders": 28.0,
  "TR_ARI_ConcessionsAbuseRR": 25.52,
  "TR_ARI_DNRConcessionsAbuse": 26.02,
  "TR_ARI_In-transit": 22.69,
  "TR_ARI_MFNEgregious": 27.0,
  "TR_ARI_NSRConcessionsAbuse": 10.0,
  "TR_ARI_QLAResellerlabuse": 33.89,
  "TR_ARI_SellerInitiatedRefund": 22.9,
  "TR_ARI_Email_suspect-abuse": 18.61,
}



const parent = document.getElementsByClassName("header_2lDCk")[0];
const div = document.createElement("div");
div.style.backgroundColor = "#fff";
const positionIndex = 1;
const existingChild = parent.children[positionIndex];
parent.insertBefore(div, existingChild);

const a = document.getElementsByClassName("pi-widgets nautilus-widgets")[0];
const jsonstring = a.dataset.pageContext;

try {
  const jsonObject = JSON.parse(jsonstring);
  console.log(jsonObject.queueName);
  var que = jsonObject.queueName;
} catch (error) {
  console.error("Error parsing JSON:", error);
}

if (localStorage.getItem("TaskCount") === null) {
  localStorage.setItem("TaskCount", "0");
}
var taskiph = IPHdata[que];
var count = localStorage.getItem("TaskCount");

div.innerHTML = `<div style="display:flex;"> ${que} and ${count} and ${taskiph} : <a href="#" id="reset">Reset</a></div>`;




document.getElementById("reset").addEventListener("click",()=>{
	localStorage.setItem("TaskCount", "0");
});
if(que!=null){
document
  .getElementById("outcome-wizard-submit-btn")
  .addEventListener("click", () => {
    localStorage.setItem(
      "TaskCount",
      parseInt(localStorage.getItem("TaskCount")) + parseInt(1)
    );
  });
}
