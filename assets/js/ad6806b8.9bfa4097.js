"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[279],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(a),g=r,k=d["".concat(p,".").concat(g)]||d[g]||m[g]||l;return a?n.createElement(k,i(i({ref:e},s),{},{components:a})):n.createElement(k,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5508:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={id:"configurations-glossary",title:"Configurations Glossary",slug:"/configurations-glossary",sidebar_position:4},i=void 0,o={unversionedId:"ConfigurationOptions/configurations-glossary",id:"ConfigurationOptions/configurations-glossary",title:"Configurations Glossary",description:"Api/cli Packages",source:"@site/docs/ConfigurationOptions/ConfigurationsGlossary.md",sourceDirName:"ConfigurationOptions",slug:"/configurations-glossary",permalink:"/docs/configurations-glossary",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"configurations-glossary",title:"Configurations Glossary",slug:"/configurations-glossary",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"Tagging",permalink:"/docs/tagging"},next:{title:"Backstage Plugins",permalink:"/docs/backstage-plugins"}},p={},u=[{value:"Api/cli Packages",id:"apicli-packages",level:2},{value:"Variables for both estimation approaches with AWS:",id:"variables-for-both-estimation-approaches-with-aws",level:3},{value:"Variables needed for the Billing Data (Holistic) approach with AWS:",id:"variables-needed-for-the-billing-data-holistic-approach-with-aws",level:3},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws",level:3},{value:"Optionally set these AWS variables:",id:"optionally-set-these-aws-variables",level:3},{value:"Variables needed for the Billing Data (Holistic) approach with GCP:",id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp",level:3},{value:"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:",id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp",level:3},{value:"Optionally set these GCP variables:",id:"optionally-set-these-gcp-variables",level:3},{value:"Variables needed for the Billing Data (Holistic) approach with Azure:",id:"variables-needed-for-the-billing-data-holistic-approach-with-azure",level:3},{value:"Optionally set this to &quot;GCP&quot; if your Azure credentials are stored in Google Secrets Manager:",id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager",level:3},{value:"Optionaly include this for tagging support",id:"optionaly-include-this-for-tagging-support",level:3},{value:"Optionally set this to customize usage data fetch behavior. See Azure Performance Considerations for more information.",id:"optionally-set-this-to-customize-usage-data-fetch-behavior-see-azure-performance-considerations-for-more-information",level:3},{value:"Optionally set this to store cache file in Google Cloud Storage",id:"optionally-set-this-to-store-cache-file-in-google-cloud-storage",level:3},{value:"Optionally set these custom configurations for On-Premise calculations",id:"optionally-set-these-custom-configurations-for-on-premise-calculations",level:3},{value:"Optionally set these variables to configure CORS",id:"optionally-set-these-variables-to-configure-cors",level:3},{value:"Client Package - all variables are optional",id:"client-package---all-variables-are-optional",level:2}],s={toc:u},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"apicli-packages"},"Api/cli Packages"),(0,r.kt)("h3",{id:"variables-for-both-estimation-approaches-with-aws"},"Variables for both estimation approaches with AWS:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_TARGET_ACCOUNT_ROLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"your-target-account-role-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"This variable is needed if you are authenticating with ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ChainableTemporaryCredentials.html"},"ChainableTemporaryCredentials"),". E.g. from one role to the authorized role.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-aws"},"Variables needed for the Billing Data (Holistic) approach with AWS:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_INCLUDE_ESTIMATES"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to include AWS estimations. Unset to make this false. Defaults to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_USE_BILLING_DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure the application to query Cost and Usage Reports via AWS Athena.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"your-athena-db-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your AWS Athena Database with Cost and Usage Reports data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ATHENA_DB_TABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"your-athena-db-table"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your AWS Athena Table with Cost and Usage Reports data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ATHENA_REGION"),(0,r.kt)("td",{parentName:"tr",align:null},"your-athena-region"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The region your AWS Athena Database/Table were created in.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ATHENA_QUERY_RESULT_LOCATION"),(0,r.kt)("td",{parentName:"tr",align:null},"s3://your-athena-query-results-location"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'The AWS S3 Bucket that you want your Athena query results to reside in. Must be prefixed with "s3://".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"your-billing-account-id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Your AWS Billing Account ID, where Cost and Usage Reports are configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_BILLING_ACCOUNT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"your-billing-account-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your AWS Billing Account. This can be any value.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-aws"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with AWS:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_ACCOUNTS"),(0,r.kt)("td",{parentName:"tr",align:null},'[{"id":"your-account-id","name":"Your AWS Account"}]'),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},'This is array of objects with keys "id" and "name" that match the AWS accounts you want to pull usage data from to run energy/carbon estimation for.'),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionally-set-these-aws-variables"},"Optionally set these AWS variables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_AUTH_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The mode to authenticate with for AWS. Options include: 'AWS': uses ",(0,r.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ChainableTemporaryCredentials.html"},"ChainableTemporaryCredentials"),", for deploying to AWS. 'GCP': Uses temporary STS Tokens, for deploying to GCP. 'default': Uses default local AWS profile, for local development.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_PROXY_ACCOUNT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"your-proxy-account-id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS account of the account to proxy/chain from, when app is deployed to GCP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_PROXY_ROLE_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"your-proxy-role-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The AWS role name in the proxy account, to proxy/chain from, when app is deployed to GCP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_RECOMMENDATIONS_SERVICE"),(0,r.kt)("td",{parentName:"tr",align:null},"ComputeOptimizer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'The AWS service used to get recommendations from. Options include: "RightSizing", "ComputeOptimizer" or "All". Default is "Rightsizing".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AWS_COMPUTE_OPTIMIZER_BUCKET"),(0,r.kt)("td",{parentName:"tr",align:null},"your-central-bucket-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'The name of the AWS bucket in which Compute Optimizer recommendations exist. This is only needed id "ComputeOptimizer" or "All" is configured for the ',(0,r.kt)("inlineCode",{parentName:"td"},"AWS_RECOMMENDATIONS_SERVICE")," variable.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-gcp"},"Variables needed for the Billing Data (Holistic) approach with GCP:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_INCLUDE_ESTIMATES"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to include GCP estimations. Unset to make this false. Defaults to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_USE_BILLING_DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure the application to query Billing Export Data via Google BigQuery.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GOOGLE_APPLICATION_CREDENTIALS"),(0,r.kt)("td",{parentName:"tr",align:null},"/path/to/your/credentials.json"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The absolute path to your service account private key file. This service account needs to have permission to query Billing Data using BigQuery.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_BIG_QUERY_TABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"project.dataset.BQ_table_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of your BigQuery table configured to consume Billing Export data in the format: ",(0,r.kt)("inlineCode",{parentName:"td"},"PROJECT_ID.DATASET_NAME.TABLE_NAME"),". Don't forget to replace the colon in the table id if you copy it from BigQuery. See ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/billing/docs/how-to/bq-examples"},"here")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_BILLING_PROJECT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"your-project-id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The GCP Project ID that your service account exists in that has permission to query Billing Data using BigQuery.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_BILLING_PROJECT_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"your-project-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The name for the GCP Project specified in the previous variable.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"variables-needed-for-the-cloud-usage-api-higher-accuracy-approach-with-gcp"},"Variables needed for the Cloud Usage API (Higher Accuracy) approach with GCP:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_PROJECTS"),(0,r.kt)("td",{parentName:"tr",align:null},'[{"id":"your-gcp-project-id","name":"Your GCP Project"}]'),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},'This is array of objects with keys "id" and "name" that match the GCP Projects you want to pull usage data from to run energy/carbon estimation for.')))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionally-set-these-gcp-variables"},"Optionally set these GCP variables:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_USE_CARBON_FREE_ENERGY_PERCENTAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Setting this to true will change the emissions factors used by the application to take into account ",(0,r.kt)("a",{parentName:"td",href:"https://cloud.google.com/sustainability/region-carbon"},"Google's Carbon Free Energy percentage")," in each region. For example in us-central1, the grid emissions factor is 494 gCO2eq/kWh with CFE% of 93%. With this option set to true, the application would instead use 31.78 gCO2eq/kWh.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_VCPUS_PER_GKE_CLUSTER"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure the average number of vCPUs the application should use to estimate energy consumption of Kubernetes Engine clusters. If unset, defaults to 3, which is the default number of vCPUs provisioned.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCP_VCPUS_PER_CLOUD_COMPOSER_ENVIRONMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure the average number of vCPUs the application should use to estimate energy consumption of Cloud Composer Environments. If unset, defaults to 14, which is the number of vCPUs provisioned for a medium sized environment.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"variables-needed-for-the-billing-data-holistic-approach-with-azure"},"Variables needed for the Billing Data (Holistic) approach with Azure:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_INCLUDE_ESTIMATES"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to include GCP estimations. Unset to make this false. Defaults to true."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_USE_BILLING_DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to configure the application to query Azure Consumption API."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_CLIENT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"your-azure-client-id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The Azure Service Principal ID with permission to read the Consumption API from your Subscriptions."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_CLIENT_SECRET"),(0,r.kt)("td",{parentName:"tr",align:null},"your-azure-client-secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The Azure Service Principal Secret with permission to read the Consumption API from your Subscriptions."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_TENANT_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"your-azure-tenant-id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Your Azure tenant ID."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionally-set-this-to-gcp-if-your-azure-credentials-are-stored-in-google-secrets-manager"},'Optionally set this to "GCP" if your Azure credentials are stored in Google Secrets Manager:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_AUTH_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"default"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The authentication mode for Azure. Options are: 'GCP' that gets the secrets from Google Secrets Manager, 'default' which using the client id/secret and tent id from your .env file. Requires GCP_BILLING_PROJECT_NAME to be set if using 'GCP' Mode.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionaly-include-this-for-tagging-support"},"Optionaly include this for tagging support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_RESOURCE_TAG_NAMES"),(0,r.kt)("td",{parentName:"tr",align:null},'["resourceGroup","project","customer"]'),(0,r.kt)("td",{parentName:"tr",align:null},"array:string"),(0,r.kt)("td",{parentName:"tr",align:null},"Azure resource tag names to include if present, include resourceGroup as a tag name if needed."),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"optionally-set-this-to-customize-usage-data-fetch-behavior-see-azure-performance-considerations-for-more-information"},"Optionally set this to customize usage data fetch behavior. See ",(0,r.kt)("a",{parentName:"h3",href:"/docs/performance-considerations#azure-performance-considerations"},"Azure Performance Considerations")," for more information."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_CONSUMPTION_CHUNK_DAYS"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"To avoid rate limiting, requests can be grouped in chunks of days. Use this to specify the chunk size"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_SUBSCRIPTION_CHUNKS"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"To avoid rate limiting, a group size of subscipritions for asynchronous requests can be set. Defaults to 10."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AZURE_SUBSCRIPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},'["subscription-1", "subscription-2"]'),(0,r.kt)("td",{parentName:"tr",align:null},"array:string"),(0,r.kt)("td",{parentName:"tr",align:null},"List of subscriptions by IDs to include in estimations. Fetches all subscriptions by default"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"optionally-set-this-to-store-cache-file-in-google-cloud-storage"},"Optionally set this to store cache file in Google Cloud Storage"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CACHE_MODE"),(0,r.kt)("td",{parentName:"tr",align:null},"GCS"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Set with 'GCS' to use this option or leave it empty to use the default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GCS_CACHE_BUCKET_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"my-bucket-name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Is the name of you Google Cloud Storage bucket where the cache file will be stored.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionally-set-these-custom-configurations-for-on-premise-calculations"},"Optionally set these custom configurations for On-Premise calculations"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_CPU_UTILIZATION_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise servers, provides an average value for cpu utilization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_CPU_UTILIZATION_LAPTOP"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise laptops, provides an average value for cpu utilization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_CPU_UTILIZATION_DESKTOP"),(0,r.kt)("td",{parentName:"tr",align:null},"40"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise desktops, provides an average value for cpu utilization.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_AVG_WATTS_SERVER"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise servers, provides an average value for average watts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_AVG_WATTS_LAPTOP"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise laptops, provides an average value for average watts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ON_PREMISE_AVG_WATTS_DESKTOP"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"For on-premise desktops, provides an average value for average watts.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"optionally-set-these-variables-to-configure-cors"},"Optionally set these variables to configure CORS"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Varibale"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENABLE_CORS"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enables default CORS headers on all API requests. By default all origins, methods and headers are allowed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CORS_ALLOW_ORIGIN"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://example.com,https://example2.com"},"https://example.com,https://example2.com")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of one or more origins to allow for CORS requests, comma separated.")))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"client-package---all-variables-are-optional"},"Client Package - all variables are optional"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_PREVIOUS_YEAR_OF_USAGE"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Use this to ensure the application requests usage data from the entire previous calendar year to today. Unset to make this false. Defaults to true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_GROUP_BY"),(0,r.kt)("td",{parentName:"tr",align:null},"month"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Value to set how the cloud provider queries should return data (e.g. day/week/month/quarter/year). Defaults to day.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_VALUE"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The quantity of REACT_APP_DATE_RANGE_TYPE to be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_DATE_RANGE_TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"year"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of time period to be used. Values can be day(s), week(s), month(s), quarter(s), year(s)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_MINIMAL_DATE_AGE"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of days to subtract from current date as end date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REACT_APP_BASE_URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://example.com/api"},"https://example.com/api")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The base URL used to make API requests.")))))}m.isMDXComponent=!0}}]);