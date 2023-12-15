console.log("NEQ ANNO");
var anno_templates = {

  // AFN Basic  anno
  "CONC-TTM":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count: TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Justification: \n ***ARI***\n ",
  "CONC-PA":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Gap ID Login: \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Justification: \n ***ARI***\n",
  "CONC-Cluster-TTM":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n TTM Aggregate AFN Orders:\n TTM Aggregate AFN Orders Value:\n TTM Aggregate AFN NS Concessions:\n TTM Aggregate AFN NS Concessions Count:\n TTM Aggregate AFN DNR Concessions:\n TTM Aggregate AFN DNR Concessions Count:\n TTM Aggregate AFN In-Transit Amount:\n TTM Aggregate AFN In-Transit Count:\n TTM Aggregate NSSI:\n TTM Aggregate DNRSI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***",
  "CONC-Cluster-PA":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: No action/Solicit/Warn/Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Post Warned Aggregate AFN orders:\n Post Warned Aggregate AFN orders value:\n Post Warned Aggregate AFN NS Concessions Count:\n Post Warned Aggregate AFN NS Concessions:\n Post Warned Aggregate AFN DNR Concessions Count:\n Post Warned Aggregate AFN DNR Concessions:\n Post Warned Aggregate AFN In-Transit Count:\n Post Warned Aggregate AFN In-Transit Amount:\n Post Warned Aggregate NSSI:\n Post Warned Aggregate DNRSI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***",

  // MFN Basic
  "MFN-NA":
    "***ARI*** \n Task ID: \n Primary account: \n Action Taken: No action \n Referred order ID: \n Rel Customers:  \n TTM MFN orders count: \n TTM MFN orders amount: \n TTM MFN NOTR units count: \n TTM MFN NOTR units amount: \n TTM MFN DIFF units count: \n TTM MFN DIFF units amount: \n TTM MFN NSR units count: \n TTM MFN NSR units amount: \n TTM MFN MDR units count: \n TTM MFN MDR units amount: \n TTM MFN FLR units count: \n TTM MFN FLR units amount: \n TTM MFN RR units count: \n TTM MFN RR units amount: \n TTM MFN Returns units count: \n TTM MFN Returns units amount: \n TTM MFN NOTR SI: \n TTM MFN DIFF SI: \n TTM MFN MDR units SI: \n TTM MFN NSR units SI: \n TTM MFN FLR units SI: \n TTM MFN RR SI: \n TTM MFN Returns SI: \n Previous action date:  \n MUA Business ID: \n Justification:   \n ***ARI*** \n ",
  "MFN-Sol":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: Solicit\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n MUA Business ID:\n Justification:  \n ***ARI***\n ",
  "MFN-WA":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: Warn\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n ***ARI***\n ",
  "MFN-CL":
    "***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Referred order ID:\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n ***ARI***\n ",

  //CAP  anno
  "CAP-TTM":
    "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "CAP-Solicit":
    "***ARI***\n ARI Action: Solicit\n CAP Team: Add Friction\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Solicit\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "CAP-NA-PA":
    "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "CAP-Warning":
    "***ARI***\n ARI Action: Warn\n CAP Team: Add Friction\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Warn\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "CAP-Closure":
    "***ARI***\n ARI Action: Close\n CAP Team: Deny Concessions\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "CAP-Duplicate":
    "***ARI***\n  ARI Action: Pass\n  CAP Team: Duplicate OID Referral: ARI Recommendation shared already\n  Referred Order: \n  ***ARI***\n  ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n  ***ARI***\n  Task ID:\n  Primary account:\n  Action Taken: No action\n  Prior enforcement on Primary: Solicit/Warn\n  Rel Customers: \n  TTM AFN Orders: \n  TTM AFN Orders Value:\n  TTM AFN NSC Count:\n  TTM AFN NSC Amount :\n  TTM AFN DNR Count:\n  TTM AFN DNR Amount :\n  TTM AFN MDR Count:\n  TTM AFN MDR Amount :\n  TTM AFN RR Count:\n  TTM AFN RR Amount:\n  TTM AFN FLR Count:\n  TTM AFN FLR Amount:\n  TTM AFN In-Transit Count:\n  TTM AFN In-Transit Amount:\n  TTM AFN NSC SI:\n  TTM AFN DNR SI:\n  TTM AFN MDR SI:\n  TTM AFN RR SI:\n  TTM AFN FLR SI:\n  TTM AFN Intransit SI:\n  Previous action date: \n  Post Warned AFN Orders: \n  Post Warned AFN Orders Value:\n  Post Warned AFN NSC Count:\n  Post Warned AFN NSC Amount :\n  Post Warned AFN DNR Count:\n  Post Warned AFN DNR Amount :\n  Post Warned AFN MDR Count:\n  Post Warned AFN MDR Amount :\n  Post Warned AFN RR Count:\n  Post Warned AFN RR Amount:\n  Post Warned AFN FLR Count:\n  Post Warned AFN FLR Amount:\n  Post Warned AFN In-Transit Count:\n  Post Warned AFN In-Transit Amount:\n  Post Warned AFN NSC SI:\n  Post Warned AFN DNR SI:\n  Post Warned AFN MDR SI:\n  Post Warned AFN RR SI:\n  Post Warned AFN FLR SI:\n  Post Warned AFN Intransit SI:\n  Post warned MFN orders:\n  Post warned MFN orders value:\n  Post warned MFN orders Concessions:\n  Post warned MFN SI:\n  FLSI Program Type:\n  FLSI Program TTM concession count:\n  FLSI Program TTM concession amount:\n  FLSI Program TTM concession SI:\n  Gap ID Login:  \n  SDS verified (if applicable):Yes/No\n  MUA Business ID:\n  Justification: \n  ***ARI***\n  \n  ",

  //MDR  anno
  "MDR-No-Action":
    "***ARI***\n ARI Action: Pass\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "MDR-Solicit":
    "***ARI*** \n ARI Action: Solicit \n CAP Team: Deny Concessions \n Referred Order:  \n ***ARI*** \n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER*** \n ***ARI*** \n Task ID: \n Primary account: \n Action Taken: Solicit \n Rel Customers:  \n TTM AFN Orders:  \n TTM AFN Orders Value: \n TTM AFN NSC Count: \n TTM AFN NSC Amount : \n TTM AFN DNR Count: \n TTM AFN DNR Amount : \n TTM AFN MDR Count: \n TTM AFN MDR Amount : \n TTM AFN RR Count: \n TTM AFN RR Amount: \n TTM AFN FLR Count: \n TTM AFN FLR Amount: \n TTM AFN In-Transit Count: \n TTM AFN In-Transit Amount: \n TTM AFN NSC SI: \n TTM AFN DNR SI: \n TTM AFN MDR SI: \n TTM AFN RR SI: \n TTM AFN FLR SI: \n TTM AFN Intransit SI: \n Total MFN orders: \n Total MFN orders value: \n Total MFN Concessions: \n Total MFN SI: \n Gap ID Login:   \n SDS verified (if applicable):Yes/No \n MUA Business ID: \n Justification:  \n ***ARI*** \n ",
  "MDR-Warning":
    "***ARI*** \n ARI Action: Warn \n CAP Team: Deny Concessions \n Referred Order:  \n ***ARI*** \n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER*** \n ***ARI*** \n Task ID: \n Primary account: \n Action Taken: Warn \n Prior enforcement on Primary: Solicit/Warn \n Rel Customers:  \n TTM AFN Orders:  \n TTM AFN Orders Value: \n TTM AFN NSC Count: \n TTM AFN NSC Amount : \n TTM AFN DNR Count: \n TTM AFN DNR Amount : \n TTM AFN MDR Count: \n TTM AFN MDR Amount : \n TTM AFN RR Count: \n TTM AFN RR Amount: \n TTM AFN FLR Count: \n TTM AFN FLR Amount: \n TTM AFN In-Transit Count: \n TTM AFN In-Transit Amount: \n TTM AFN NSC SI: \n TTM AFN DNR SI: \n TTM AFN MDR SI: \n TTM AFN RR SI: \n TTM AFN FLR SI: \n TTM AFN Intransit SI: \n Previous action date:  \n Post Warned AFN Orders:  \n Post Warned AFN Orders Value: \n Post Warned AFN NSC Count: \n Post Warned AFN NSC Amount : \n Post Warned AFN DNR Count: \n Post Warned AFN DNR Amount : \n Post Warned AFN MDR Count: \n Post Warned AFN MDR Amount : \n Post Warned AFN RR Count: \n Post Warned AFN RR Amount: \n Post Warned AFN FLR Count: \n Post Warned AFN FLR Amount: \n Post Warned AFN In-Transit Count: \n Post Warned AFN In-Transit Amount: \n Post Warned AFN NSC SI: \n Post Warned AFN DNR SI: \n Post Warned AFN MDR SI: \n Post Warned AFN RR SI: \n Post Warned AFN FLR SI: \n Post Warned AFN Intransit SI: \n Post warned MFN orders: \n Post warned MFN orders value: \n Post warned MFN orders Concessions: \n Post warned MFN SI: \n FLSI Program Type: \n FLSI Program TTM concession count: \n FLSI Program TTM concession amount: \n FLSI Program TTM concession SI: \n Gap ID Login:   \n SDS verified (if applicable):Yes/No \n MUA Business ID: \n Justification:  \n ***ARI*** \n ",
  "MDR-Closure":
    "***ARI***\n ARI Action: Close\n CAP Team: Deny Concessions\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "MDR-NA-PA":
    "***ARI***\n ARI Action: No action\n CAP Team: Take action as per CS/CAP policy\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "MDR-Duplicate":
    "***ARI***\n ARI Action: Pass\n CAP Team: Duplicate OID Referral: ARI Recommendation shared already\n Referred Order: \n ***ARI***\n ***CONFIDENTIAL DATA. DO NOT DISCLOSE THE BELOW INFORMATION TO THE CUSTOMER***\n ***ARI***\n Task ID:\n Primary account:\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n SDS verified (if applicable):Yes/No\n MUA Business ID:\n Justification: \n ***ARI***\n ",

  //AFN RI  anno
  "RI-NA":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "RI-NA-PA":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "RI-Solicit":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Solicit\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Total MFN orders:\n Total MFN orders value:\n Total MFN Concessions:\n Total MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "RI-Warning":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Warn\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",
  "RI-Closure":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Close\n Prior enforcement on Primary: Solicit/Warn\n Rel Customers: \n TTM AFN Orders: \n TTM AFN Orders Value:\n TTM AFN NSC Count:\n TTM AFN NSC Amount :\n TTM AFN DNR Count:\n TTM AFN DNR Amount :\n TTM AFN MDR Count:\n TTM AFN MDR Amount :\n TTM AFN RR Count:\n TTM AFN RR Amount:\n TTM AFN FLR Count:\n TTM AFN FLR Amount:\n TTM AFN In-Transit Count:\n TTM AFN In-Transit Amount:\n TTM AFN NSC SI:\n TTM AFN DNR SI:\n TTM AFN MDR SI:\n TTM AFN RR SI:\n TTM AFN FLR SI:\n TTM AFN Intransit SI:\n Previous action date: \n Post Warned AFN Orders: \n Post Warned AFN Orders Value:\n Post Warned AFN NSC Count:\n Post Warned AFN NSC Amount :\n Post Warned AFN DNR Count:\n Post Warned AFN DNR Amount :\n Post Warned AFN MDR Count:\n Post Warned AFN MDR Amount :\n Post Warned AFN RR Count:\n Post Warned AFN RR Amount:\n Post Warned AFN FLR Count:\n Post Warned AFN FLR Amount:\n Post Warned AFN In-Transit Count:\n Post Warned AFN In-Transit Amount:\n Post Warned AFN NSC SI:\n Post Warned AFN DNR SI:\n Post Warned AFN MDR SI:\n Post Warned AFN RR SI:\n Post Warned AFN FLR SI:\n Post Warned AFN Intransit SI:\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions:\n Post warned MFN SI:\n FLSI Program Type:\n FLSI Program TTM concession count:\n FLSI Program TTM concession amount:\n FLSI Program TTM concession SI:\n Gap ID Login:  \n MUA Business ID:\n Justification: \n ***ARI***\n ",

  //MFN RI
  "MRI-NA":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: No action\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n MUA Business ID:\n Justification:  \n R&R Hashtag : \n ***ARI***\n ",
  "MRI-SOL":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Solicit\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n MUA Business ID:\n Justification:  \n R&R Hashtag : \n ***ARI***\n ",
  "MRI-WA":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Warn\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
  "MRI-CL":
    "***ARI***\n Task ID:\n Primary account:\n RI Intercepted Order ID:\n Refund action taken : Pass refund/Deny refund\n Action Taken: Close\n Rel Customers: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Previous action date: \n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n***ARI***\n ",

  //AtoZ anno
  "NA-A":
  "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : No action \n MUA Business ID:\n Justification: \n R&R Hashtag : \n ***ARI***\n ",
  "SOL-A":
  "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : Solicit\n MUA Business ID:\n Justification: \n R&R Hashtag : \n ***ARI***\n ",
  "WARN-A":
  "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : warn\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
  "CLOSE-A":
  "*** ARI *** \n ##AtoZClaims \n Task ID:  \n Primary account: \n Claim order: \n Reason for Claim: \n TTM MFN orders count:\n TTM MFN orders amount:\n TTM MFN NOTR units count:\n TTM MFN NOTR units amount:\n TTM MFN DIFF units count:\n TTM MFN DIFF units amount:\n TTM MFN NSR units count:\n TTM MFN NSR units amount:\n TTM MFN MDR units count:\n TTM MFN MDR units amount:\n TTM MFN FLR units count:\n TTM MFN FLR units amount:\n TTM MFN RR units count:\n TTM MFN RR units amount:\n TTM MFN Returns units count:\n TTM MFN Returns units amount:\n TTM MFN NOTR SI:\n TTM MFN DIFF SI:\n TTM MFN MDR units SI:\n TTM MFN NSR units SI:\n TTM MFN FLR units SI:\n TTM MFN RR SI:\n TTM MFN Returns SI:\n Action Taken : close\n Post warned MFN orders:\n Post warned MFN orders value:\n Post warned MFN orders Concessions Count:\n Post warned MFN orders Concessions Amount:\n Post warned MFN SI:\n MUA Business ID:\n Justification:\n R&R Hashtag : \n ***ARI***\n ",
  "Para-N":
  "*** ARI ***  \n ##AtoZClaims  \n Task ID:  ParagonTaskID \n Claim order:  \n Reason for Claim:  \n BSM Outcome: \n Justification: \n ***ARI***\n ",

  //Dropship
  "W-DS":
    "***ARI***\n #WarnDropshipAction\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: Warn\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Customer meets one of the critera from the risk classification table. As customer falls under [Storefront/Customer writeback/Product category/Gift message], warning the account for dropship abuse\n ***ARI***\n ",
  "C-DS":
    "***ARI***\n #AccountClose\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: Account Close\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary/Related account [XXXX-CID] was warned for dropship abuse on [XXXX date], noticed 5 new orders placed that are delivered to different address and as warning is valid, closing the account for dropship abuse. \n ***ARI***\n ",
  "RPO-DS":
    "***ARI***\n #AccountAOC\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: Restrict Physical Order\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: [Write Annotation manually]\n ***ARI***\n ",
  "AC-SELL":
    "***ARI***\n #NoDropshipAction\n #dropship_seller_account\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary/Related account [XXXX-CID] was warned for dropship abuse on [XXXX date], noticed account has an active seller status. Not taking any action on the account. \n ***ARI***\n ",
  "AB-F":
    "***ARI***\n #NoDropshipAction\n #dropship_status_auto_pass\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary account that is queued is in [.Ab/.F/TR] status, not taking any action on the account. \n ***ARI***\n ",
  "EXCE-P":
    "***ARI***\n #NoDropshipAction\n #dropship_exception\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary account that is queued falls under one of the exception guidelines, i.e, [Charity/Author/Library/Prison/Corporate purchase/Gifting group]. Not taking any action on the account.\n ***ARI***\n ",
  "NO-STO":
    "***ARI***\n #NoDropshipAction\n #drosphip_no_storefront\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary/related accounts do not meet any criteria under risky classification in the risk classification matrix. Not taking any action on the account. \n ***ARI***\n ",
  "NO-RESE":
    "***ARI***\n #NoDropshipAction\n #dropship_no_reselling_activity\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: All orders are being delivered to the same addresses and no dropship pattern observed. Not taking any action on the account. \n ***ARI*** ",
  "OT-DS":
    "***ARI***\n #NoDropshipAction\n #dropship_other_reason\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details] \n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: [Write Annotation manually]\n ***ARI***\n ",
  "PW-NA":
    "***ARI***\n #NoDropshipAction\n #dropship_post_warn_not_met\n Type: Dropship\n Task ID:\n Primary account:\n Action taken: No Action\n Gift messages (Y/N): [mention if met]\n Any 3rd party/Storefront found:[mention details]\n Rel Customers: \n MUA Business ID:\n Exception  (Y/N): [ mention]\n Justification: Primary account that is queued does not meet post warning thresholds of 5 new orders delivered to new addresses. Not taking any action on the account. \n ***ARI***",
};

var myDiv2 = document.createElement("div");
myDiv2.innerHTML = `<div class="anno-sidenav grow">
<h2 class="anno-h2"></h2>
  <button class="anno-dropdown-btn">AFN</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="CONC-TTM" href="javascript:void(0)">TTM</a>
    <a class="annobar" id="CONC-PA" href="javascript:void(0)">PA</a>
    <a class="annobar" id="CONC-Cluster-TTM" href="javascript:void(0)">TTM Cluster</a>
    <a class="annobar" id="CONC-Cluster-PA" href="javascript:void(0)">PA Cluster</a>
  </div>
  <button class="anno-dropdown-btn">MFN</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="MFN-NA" href="javascript:void(0)">MFN NA</a>
    <a class="annobar" id="MFN-Sol" href="javascript:void(0)">MFN Sol</a>
    <a class="annobar" id="MFN-WA" href="javascript:void(0)">MFN WA</a>
    <a class="annobar" id="MFN-CL" href="javascript:void(0)">MFN CL</a>
  </div>
  <button class="anno-dropdown-btn">RI</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="RI-NA" href="javascript:void(0)">No action</a>
    <a class="annobar" id="RI-NA-PA" href="javascript:void(0)">No action - PA</a>
    <a class="annobar" id="RI-Solicit" href="javascript:void(0)">Solicit</a>
    <a class="annobar" id="RI-Warning" href="javascript:void(0)">Warning</a>
    <a class="annobar" id="RI-Closure" href="javascript:void(0)">Closure</a>
  </div>
  <button class="anno-dropdown-btn">MFN RI</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="MRI-NA" href="javascript:void(0)">No action</a>
    <a class="annobar" id="MRI-SOL" href="javascript:void(0)">Solicit</a>
    <a class="annobar" id="MRI-WA" href="javascript:void(0)">Warning</a>
    <a class="annobar" id="MRI-CL" href="javascript:void(0)">Closure</a>
  </div>
  <button class="anno-dropdown-btn">MDR</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="MDR-No-Action" href="javascript:void(0)">No Action</a>
    <a class="annobar" id="MDR-NA-PA" href="javascript:void(0)">No Action- PA</a>
    <a class="annobar" id="MDR-Solicit" href="javascript:void(0)">Solicit</a>
    <a class="annobar" id="MDR-Warning" href="javascript:void(0)">Warning</a>
    <a class="annobar" id="MDR-Closure" href="javascript:void(0)">Closure</a>
    <a class="annobar" id="MDR-Duplicate" href="javascript:void(0)">Duplicate Referral Pass</a>
  </div>
  <button class="anno-dropdown-btn">CAP</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id="CAP-TTM" href="javascript:void(0)">TTM</a>
    <a class="annobar" id="CAP-NA-PA" href="javascript:void(0)">No Action - PA</a>
    <a class="annobar" id="CAP-Solicit" href="javascript:void(0)">Solicit</a>
    <a class="annobar" id="CAP-Warning" href="javascript:void(0)">Warning</a>
    <a class="annobar" id="CAP-Closure" href="javascript:void(0)">Closure</a>
    <a class="annobar" id="CAP-Duplicate" href="javascript:void(0)">Duplicate Referral Pass</a>
  </div>
  <button class="anno-dropdown-btn">AtoZ</button>
  <div class="anno-dropdown-content">
  <a class="annobar" id = "Para-N" href="javascript:void(0)">Paragon</a>
  <a class="annobar" id = "NA-A" href="javascript:void(0)">No action</a>
  <a class="annobar" id = "SOL-A" href="javascript:void(0)">Solicit</a>
  <a class="annobar" id = "WARN-A" href="javascript:void(0)">Warn </a>
  <a class="annobar" id = "CLOSE-A" href="javascript:void(0)">Close</a>
  </div>
  <button class="anno-dropdown-btn">Dropship</button>
  <div class="anno-dropdown-content">
    <a class="annobar" id = "W-DS" href="javascript:void(0)">Warn</a>
    <a class="annobar" id = "C-DS" href="javascript:void(0)">close</a>
    <a class="annobar" id = "RPO-DS" href="javascript:void(0)">Restrict</a>
    <a class="annobar" id = "AC-SELL" href="javascript:void(0)">Active seller</a>
    <a class="annobar" id = "AB-F" href="javascript:void(0)">Abusive</a>
    <a class="annobar" id = "EXEC-P" href="javascript:void(0)">Exception</a>
    <a class="annobar" id = "NO-STO" href="javascript:void(0)">no store front</a>
    <a class="annobar" id = "NO-RESE" href="javascript:void(0)">no reselling</a>
    <a class="annobar" id = "OT-DS" href="javascript:void(0)">other</a>
    <a class="annobar" id = "PW-NA" href="javascript:void(0)">PW no action  </a>
  </div>
 
</div>`;

myDiv2.setAttribute("class", "anno-sidenav grow");
document.body.appendChild(myDiv2);

/* Adds CSS styles */

var styleElement = document.createElement("style");
styleElement.textContent = `
.anno-sidenav {
    width: auto;
    position: fixed;
    z-index: 9999;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    border: 0px solid;
    overflow: hidden;
    box-shadow: 5px 0px 5px 0px rgba(0,0,0,0.1);
  }

  .anno-sidenav a,
  .anno-dropdown-btn {
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 14px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }

  .anno-active {
    background-color: green;
    color: white;
  }

  .anno-sidenav a:hover,
  .anno-dropdown-btn:hover,
  .anno-h2 {
    color: #f1f1f1;
    font-size: 14px;
  }

  .anno-h2 {
    text-align: center;
  }

  .grow {
    border-radius: 5px 5px 0 0;
    height: 25px;
    float: left;
    max-height: 150%;
  }

  .grow:hover {
    height: auto;
  }

  .anno-dropdown-content {
    display: none;
    position: relative;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  .anno-dropdown-content a {
    color: black;
    text-decoration: none;
    display: block;
  }

  .anno-dropdown-content a:hover {
    background-color: #ddd;
  }
`;
document.head.appendChild(styleElement);

/* JS functions */
var dropdown = document.getElementsByClassName("anno-dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("anno-active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var annolinks = document.getElementsByClassName("annobar");
var oid_format = /\d{3}-\d{7}-\d{7}/;
var or_format = /Referred Order: ?()?/;
var ri_format = /RI Intercepted Order ID:/;
var co_format = /Claim order:/;

for (i = 0; i < annolinks.length; i++) {
  annolinks[i].addEventListener("click", function () {
    let inv_annotations = document.getElementById("annotationText").value;
    let arrOID = oid_format.exec(inv_annotations);
    let arrRI = ri_format.exec(anno_templates[this.id]);
    let arrOR = or_format.exec(anno_templates[this.id]);
    let arrCO = co_format.exec(anno_templates[this.id]);
    var to_clipboard = anno_templates[this.id];
    if (arrOID != null && arrOR != null) {
      let fulltext = anno_templates[this.id].replace(
        arrOR[0],
        arrOR[0] + arrOID[0]
      );
      to_clipboard = fulltext.replace(
        "Justification:",
        "Justification: " + inv_annotations
      );
    } else if (arrOID != null && arrRI != null) {
      let fulltext = anno_templates[this.id].replace(
        arrRI[0],
        arrRI[0] + arrOID[0]
      );
      to_clipboard = fulltext.replace(
        "Justification:",
        "Justification: " + inv_annotations
      );
    } else if (arrCO != null && arrOID != null) {
      let fulltext = anno_templates[this.id].replace(
        arrCO[0],
        arrCO[0] + " " + arrOID[0]
      );
      to_clipboard = fulltext.replace(
        "Justification:",
        "Justification: " + inv_annotations
      );
    } else {
      to_clipboard = anno_templates[this.id].replace(
        "Justification:",
        "Justification: " + inv_annotations
      );
    }
    copy_to_clipboard(to_clipboard);
    resetDropdown();
  });
}

function copy_to_clipboard(value) {
  const temp_input = document.createElement("textarea");
  temp_input.value = value;
  document.body.appendChild(temp_input);
  temp_input.select();
  document.execCommand("copy");
  temp_input.remove();
  window.scrollTo(0, 0);
}

function resetDropdown() {
  var dropdownButtons = document.getElementsByClassName("anno-dropdown-btn");
  var dropdownContents = document.getElementsByClassName(
    "anno-dropdown-content"
  );

  // Remove the "anno-active" class from all buttons
  for (var i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].classList.remove("anno-active");
  }

  // Hide all dropdown contents
  for (var j = 0; j < dropdownContents.length; j++) {
    dropdownContents[j].style.display = "none";
  }
}
