
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"347",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"blisspoint_fpc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"US\"==UD.Config.marketplace_country.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires\\x3d\"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"blisspoint_fpc\",",["escape",["macro",22],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"dataProcessingOptions\",[\"LDU\"],0,0),",["escape",["macro",28],8,16],"||fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),\n",["escape",["macro",28],8,16],"||fbq(\"trackSingle\",\"1457291081167286\",\"PageView\"),fbq(\"trackSingle\",\"399727027340013\",\"PageView\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",8],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",8]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",92,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",23],12],"\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__awct",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"uRnACK7x898BEO3puaID",
      "vtp_rdp":false,
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":429
    },{
      "function":"__cl",
      "tag_id":430
    },{
      "function":"__cl",
      "tag_id":431
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":432
    },{
      "function":"__cl",
      "tag_id":433
    },{
      "function":"__cl",
      "tag_id":434
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":435
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":436
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":438
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":440
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":441
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":442
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":444
    },{
      "function":"__cl",
      "tag_id":445
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_415_340","164179_415_392","164179_415_46"],
      "vtp_uniqueTriggerId":"164179_415",
      "tag_id":446
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_340",
      "tag_id":447
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_392",
      "tag_id":449
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_46",
      "tag_id":451
    },{
      "function":"__cl",
      "tag_id":452
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_424_92","164179_424_425"],
      "vtp_uniqueTriggerId":"164179_424",
      "tag_id":453
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_92",
      "tag_id":454
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_425",
      "tag_id":456
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_426_425","164179_426_1"],
      "vtp_uniqueTriggerId":"164179_426",
      "tag_id":457
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_425",
      "tag_id":458
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_1",
      "tag_id":460
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026!",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector('[data-purpose\\x3d\"course-price-text\"]');a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+(?:\\.\\d+)?\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a[0]),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a[0],{nonInteraction:1}));",["escape",["macro",28],8,16],"||fbq(\"track\",\"AddToCart\",\n{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",39],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",39],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",40],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],",is_first_paid_purchase:",["escape",["macro",23],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",42],8,16],",customerEmail:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",50],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",41],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",42],8,16],",discountCode:",["escape",["macro",44],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",45],8,16],"\/100,unitPriceLessTax:",["escape",["macro",45],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",94,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",40],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",44],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\",config:{ycl_use_non_cookie_storage:!0}});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",96,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",96,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_65f22gux\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",99,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"SignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",99,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":398
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0f51\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":400
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",102,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etwq(\"track\",\"Signup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",102,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etwq(\"track\",\"Purchase\",{value:",["escape",["macro",52],8,16],",currency:\"USD\",num_items:\"1\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,f,b,c,e){a.mejord||(b=a.mejord=function(){b.tq.push(arguments)},a._mejord||(a._mejord=b),b.tq=[],b.version=\"2.0.14-1\",a=\"script\",(c=d.createElement(a)).async=!0,c.src=f,(e=d.getElementsByTagName(a)[0]).parentNode.insertBefore(c,e))}(window,document,\"\/\/tag.measured.com\/10031\/x474bb8\/mejord-gear.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",105,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emejord(\"init\",\"10031\/x474bb8\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":406
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){var a=[];",["escape",["macro",39],8,16],"\u0026\u0026(a=",["escape",["macro",39],8,16],".map(function(b){return{id:b.buyableId}}));return a}_mejord.helper={adaptProductsArray:function(a){if(a)return a.map(function(b){return{id:b}})},getEventParams:function(){return{products:c()||[],product:c()[0]||{},orderId:",["escape",["macro",40],8,16],"||\"\",revenue:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",value:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",shippingValue:0,tax:0,discount:0,currency:\"USD\",customerId:",["escape",["macro",2],8,16],"||\n\"\",custom:{adwords:{dimensionCohortIndex:21}}}}}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){a=c[a]?c[a]():[];for(var b=0;b\u003Ca.length;b++){var e=a[b];window.dataLayer=window.dataLayer||[];var f=_mejord.helper.getEventParams();mejord(\"track\",e,f)}}var c={\"gtm.js\":function(){var a=[\"pageview\"];return a},transaction_purchase:function(){var a=[\"checkout\"];return a}};d(",["escape",["macro",48],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"isMember\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":412
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar courseId=document.body.getAttribute(\"data-clp-course-id\")||\"NA\";mejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(){fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:courseId,content_type:\"product\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026mejord(\"ready\",\"facebook\",function(b){fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"LinkshareSignupClick\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"SignupSuccess\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":420
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_426($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_424($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_415($|,)))"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,69]],
    [["if",6,7],["add",4,8,9,10,14,19,20,24,27,28,29,31,34,35,38,41,43,45,65,85,86,91,92,98,101,104]],
    [["if",4,5],["add",5],["block",3,7,16,37,39,42,70,1,75,80,83,87,2,93,94,96,99,102]],
    [["if",5],["add",5,16,75,99,102,46,47,49,50,51,55,58,59,63,64,67]],
    [["if",5,9],["unless",8],["add",6,15]],
    [["if",10,11],["add",7]],
    [["if",5,12],["add",11,78]],
    [["if",13,14,15],["add",12,79]],
    [["if",5,16],["add",13,23,26]],
    [["if",5,17],["add",15]],
    [["if",5,18],["add",15]],
    [["if",5,19],["add",15],["block",80]],
    [["if",5,17,20],["add",15]],
    [["if",5,21],["add",15]],
    [["if",5,22],["add",15]],
    [["if",5,23],["add",15]],
    [["if",5,24],["add",15]],
    [["if",5,25],["add",15]],
    [["if",15,30],["add",17,31,33,73,90]],
    [["if",15,31],["add",18]],
    [["if",5,32],["add",21]],
    [["if",33],["add",22]],
    [["if",5,34],["add",25,31,32,36,38,40,44,76,89,97,100,103]],
    [["if",5,35],["add",30]],
    [["if",5,36],["add",30]],
    [["if",5,37],["add",30]],
    [["if",0,5,38],["add",37,39,83,93,96]],
    [["if",0,5],["unless",1,39],["add",42,57,80,87,0]],
    [["if",5,40],["add",48]],
    [["if",42],["unless",41],["add",52,60]],
    [["if",3],["unless",43],["add",53,61]],
    [["if",3],["add",54,62]],
    [["if",3,44],["add",56]],
    [["if",3,45],["add",66,68]],
    [["if",5,26],["add",70],["block",16,80,88,95,99,102]],
    [["if",5,46],["unless",47],["add",70]],
    [["if",48,49],["add",70]],
    [["if",5,51],["add",1]],
    [["if",53,54],["add",71]],
    [["if",3,55],["add",72]],
    [["if",56,57],["add",74]],
    [["if",6,58],["add",77]],
    [["if",6,7,38],["add",81,82]],
    [["if",61,62,63,64],["add",84]],
    [["if",62,64],["add",88]],
    [["if",53,65],["add",2]],
    [["if",53,66],["add",94]],
    [["if",53,67],["add",95]],
    [["if",5,68],["add",105,106,107]],
    [["if",6,7,68],["add",107]],
    [["if",3,55,68],["add",108]],
    [["if",15,30,68],["add",109]],
    [["if",53,68,69],["add",110]],
    [["if",13,14,15,68],["add",111]],
    [["if",5,34,68],["add",112]],
    [["if",5,27],["block",16,80,88,95,99,102]],
    [["if",5,28],["block",16,80,88,95,99,102]],
    [["if",5,29],["block",16,80,88,95,99,102]],
    [["if",5,39],["block",70,1]],
    [["if",5,50],["block",70]],
    [["if",5,52],["block",1]],
    [["if",5,59],["block",80]],
    [["if",5,60],["block",80]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={sg:!0},ja={};try{ja.__proto__=ia;ha=ja.sg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ji=b.prototype},ma=this||self,pa=function(a){if(a&&a!=ma)return na(a.document);null===oa&&(oa=na(ma.document));return oa},sa=/^[\w+/_-]+[=]{0,2}$/,oa=null,na=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&sa.test(c))return c}return""},ta=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},va=function(a,b){function c(){}c.prototype=b.prototype;a.ji=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ei=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},xa=function(a){return a};var ya=function(a,b){this.a=a;this.i=b};var za=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Aa=function(){this.B={};this.m=!1;this.F={}};Aa.prototype.get=function(a){return this.B["dust."+a]};Aa.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Aa.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ba=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Aa;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(za(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!za(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else za(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():za(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.uc=function(){for(var a=Ba(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Ca=function(a,b){if(za(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return za(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Da=function(){function a(f,g){if(b[f]){if(b[f].ic+g>b[f].max)throw Error("Quota exceeded");b[f].ic+=g}}var b={},c=void 0,d=void 0,e={Kh:function(f){c=f},Re:function(){c&&a(c,1)},Mh:function(f){d=f},Ha:function(f){d&&a(d,f)},gi:function(f,g){b[f]=b[f]||{ic:0};b[f].max=g},jh:function(f){return b[f]&&b[f].ic||0},reset:function(){b={}},Rg:a};e.onFnConsume=e.Kh;e.consumeFn=e.Re;e.onStorageConsume=e.Mh;e.consumeStorage=e.Ha;e.setMax=e.gi;e.getConsumed=e.jh;e.reset=e.reset;e.consume=e.Rg;return e};var Ea=function(a,b){this.F=a;this.P=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Aa;this.a=this.B=void 0};Ea.prototype.add=function(a,b){Fa(this,a,b,!1)};var Fa=function(a,b,c,d){if(!a.i.m)if(a.F.Ha(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Ea.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ha(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Ea.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Ea.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ga=function(a){var b=new Ea(a.F,a);a.B&&(b.B=a.B);b.P=a.P;b.a=a.a;return b};var Ha=function(){},Ia=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ja=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},A=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ma=function(a,b){if(a&&La(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Na=function(a,b){if(!Ja(a)||
!Ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Pa=function(a,b){for(var c=new Oa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Qa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ra=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Sa=function(a){return Math.round(Number(a))||0},Ta=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ua=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Va=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Wa=function(){return(new Date).getTime()},Oa=function(){this.prefix="gtm.";this.values={}};Oa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Oa.prototype.get=function(a){return this.values[this.prefix+a]};
var Xa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ya=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},$a=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},ab=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},bb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},cb=function(a,b){var c=D;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=A(b,d))return}return d},
eb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},fb=function(a){var b=[];Qa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var gb=function(a,b){Aa.call(this);this.a=a;this.P=b};la(gb,Aa);gb.prototype.toString=function(){return this.a};gb.prototype.uc=function(){return new k(Ba(this))};gb.prototype.i=function(a,b){a.F.Re();return this.P.apply(hb(this,a),Array.prototype.slice.call(arguments,1))};var hb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return La(d)?kb(e,d):d};c.prototype.F=function(d){return lb(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
gb.prototype.Ka=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var lb=function(a,b){for(var c,d=0;d<b.length&&!(c=kb(a,b[d]),c instanceof ya);d++);return c},kb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof gb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var mb=function(){Aa.call(this)};la(mb,Aa);mb.prototype.uc=function(){return new k(Ba(this))};var nb={control:function(a,b){return new ya(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().Ha(a.length+f.length);return new gb(a,function(){return function(g){var h=Ga(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof ya)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=lb(h,f);if(t instanceof ya)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.Ha(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ha(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new mb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ha(g);c.set(e,f)}return c},undefined:function(){}};var ob=function(){this.m=Da();this.a=new Ea(this.m)},pb=function(a,b,c){var d=new gb(b,c);d.m=!0;a.a.set(b,d)};ob.prototype.oc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ob.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=kb(this.a,arguments[c]);return b};ob.prototype.B=function(a,b){var c=Ga(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=kb(c,arguments[e]);return d};var qb=function(a){if(a instanceof qb)return a;this.oa=a};qb.prototype.toString=function(){return String(this.oa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var rb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,sb=function(a){if(null==a)return String(a);var b=rb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},tb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ub=function(a){if(!a||"object"!=sb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!tb(a,"constructor")&&!tb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||tb(a,b)},F=function(a,b){var c=b||("array"==sb(a)?[]:{}),d;for(d in a)if(tb(a,d)){var e=a[d];"array"==sb(e)?("array"!=sb(c[d])&&(c[d]=[]),c[d]=F(e,c[d])):ub(e)?(ub(c[d])||(c[d]={}),c[d]=F(e,c[d])):c[d]=e}return c};var wb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=Ba(h),n=0;n<m.length;n++)l[m[n]]=g(h.get(m[n]))},g=function(h){var l=A(d,h);if(-1<l)return e[l];if(h instanceof k){var m=[];d.push(h);e.push(m);for(var n=h.uc(),r=0;r<n.length();r++)m[n.get(r)]=g(h.get(n.get(r)));return m}if(h instanceof mb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof gb){var q=function(){for(var v=Array.prototype.slice.call(arguments,0),u=0;u<v.length;u++)v[u]=vb(v[u],b,!!c);var w=b?b.F:Da(),y=new Ea(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(v)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},vb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=A(d,
h);if(-1<l)return e[l];if(La(h)||Ra(h)){var m=new k([]);d.push(h);e.push(m);for(var n in h)h.hasOwnProperty(n)&&m.set(n,g(h[n]));return m}if(ub(h)){var r=new mb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new gb("",function(v){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=wb(this.a(u[w]),b,!!c);return g((0,this.m.P)(h,h,u))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;};return g(a)};var xb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},yb=function(a){if(void 0===a||La(a)||ub(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var zb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=xb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Ca(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=xb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Ca(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Ab="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Bb=new ya("break"),Cb=new ya("continue"),Db=function(a,b){return this.a(a)+this.a(b)},Ib=function(a,b){return this.a(a)&&this.a(b)},Jb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=A(Ab,b))return vb(a[b].apply(a,xb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof gb){var e=xb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=A(zb.supportedMethods,b)){var f=xb(c);f.unshift(this.m);
return zb[b].apply(a,f)}}if(a instanceof gb||a instanceof mb){if(a.has(b)){var g=a.get(b);if(g instanceof gb){var h=xb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof gb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,xb(c))}if(a instanceof qb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Kb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Lb=function(a){var b=Ga(this.m),c=lb(b,Array.prototype.slice.apply(arguments));if(c instanceof ya)return c},Mb=function(){return Bb},Nb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ya)return d}},Ob=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Fa(b,d,e,
!0)}}},Pb=function(){return Cb},Qb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Rb=function(a,b){return this.a(a)/this.a(b)},Sb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof qb,d=b instanceof qb;return c||d?c&&d?a.oa==b.oa:!1:a==b},Ub=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Vb(a,b,c){if("string"===typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=lb(e,c);if(f instanceof ya){if("break"===f.a)break;if("return"===f.a)return f}}else if(b instanceof mb||b instanceof k||b instanceof gb)for(var g=b.uc(),h=g.length(),l=0;l<h;l++){var m=a(g.get(l)),n=lb(m,c);if(n instanceof ya){if("break"===n.a)break;if("return"===n.a)return n}}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);Fa(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ga(d);f.add(a,e);return f},b,c)},Zb=function(a,b,c,d){function e(n,r){for(var t=0;t<f.length();t++){var q=f.get(t);r.add(q,n.get(q))}}var f=this.a(a);if(!(f instanceof
k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ga(g);for(e(g,h);kb(h,b);){var l=lb(h,d);if(l instanceof ya){if("break"===l.a)break;if("return"===l.a)return l}var m=Ga(g);e(h,m);kb(m,c);h=m}},$b=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");
return b.get(a)},ac=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof mb||a instanceof k||a instanceof gb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:za(b)&&(c=a[b]);else if(a instanceof qb)return;return c},bc=function(a,b){return this.a(a)>this.a(b)},cc=function(a,b){return this.a(a)>=this.a(b)},dc=function(a,b){a=this.a(a);b=this.a(b);a instanceof qb&&(a=a.oa);b instanceof qb&&(b=b.oa);
return a===b},ec=function(a,b){return!dc.call(this,a,b)},fc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof ya)return e},gc=function(a,b){return this.a(a)<this.a(b)},hc=function(a,b){return this.a(a)<=this.a(b)},ic=function(a,b){return this.a(a)%this.a(b)},jc=function(a,b){return this.a(a)*this.a(b)},kc=function(a){return-this.a(a)},lc=function(a){return!this.a(a)},mc=function(a,b){return!Sb.call(this,a,b)},nc=function(){return null},oc=function(a,b){return this.a(a)||
this.a(b)},pc=function(a,b){var c=this.a(a);this.a(b);return c},qc=function(a){return this.a(a)},rc=function(a){return Array.prototype.slice.apply(arguments)},sc=function(a){return new ya("return",this.a(a))},tc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof gb||a instanceof k||a instanceof mb)&&a.set(b,c);return c},uc=function(a,b){return this.a(a)-this.a(b)},vc=function(a,b,c){a=this.a(a);var d=
this.a(b),e=this.a(c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof ya){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof ya&&("return"===f.a||"continue"===f.a)))return f},wc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},xc=function(a){a=this.a(a);return a instanceof gb?"function":typeof a},
yc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},zc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof ya){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof ya){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},Ac=function(a){return~Number(this.a(a))},Bc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Cc=function(a,b){return Number(this.a(a))>>
Number(this.a(b))},Dc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Ec=function(a,b){return Number(this.a(a))&Number(this.a(b))},Fc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Gc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Ic=function(){this.a=new ob;Hc(this)};Ic.prototype.oc=function(a){return Jc(this.a.i(a))};
var Lc=function(a,b){return Jc(Kc.a.B(a,b))},Hc=function(a){var b=function(d,e){var f=a.a,g=String(e);nb.hasOwnProperty(d)&&pb(f,g||d,nb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){pb(a.a,String(d),e)};c(0,Db);c(1,Ib);c(2,Jb);c(3,Kb);c(53,Lb);c(4,Mb);c(5,Nb);c(52,Ob);c(6,Pb);c(9,Nb);c(50,Qb);c(10,Rb);c(12,Sb);c(13,Ub);c(47,Wb);c(54,Xb);c(55,Yb);c(63,Zb);c(15,$b);c(16,ac);c(17,ac);c(18,bc);c(19,cc);c(20,dc);c(21,ec);c(22,fc);c(23,gc);c(24,hc);c(25,ic);
c(26,jc);c(27,kc);c(28,lc);c(29,mc);c(45,nc);c(30,oc);c(32,pc);c(33,pc);c(34,qc);c(35,qc);c(46,rc);c(36,sc);c(43,tc);c(37,uc);c(38,vc);c(39,wc);c(40,xc);c(41,yc);c(42,zc);c(58,Ac);c(57,Bc);c(60,Cc);c(61,Dc);c(56,Ec);c(62,Fc);c(59,Gc)},Nc=function(){var a=Kc,b=Mc();pb(a.a,"require",b)},Oc=function(a,b){a.a.a.P=b};function Jc(a){if(a instanceof ya||a instanceof gb||a instanceof k||a instanceof mb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Pc=[],Qc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Rc=function(a){return Qc[a]},Sc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Wc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Xc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Yc=function(a){return Xc[a]};
Pc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Wc,Yc)+"'"}};var dd=/['()]/g,ed=function(a){return"%"+a.charCodeAt(0).toString(16)};Pc[12]=function(a){var b=
encodeURIComponent(String(a));dd.lastIndex=0;return dd.test(b)?b.replace(dd,ed):b};var fd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,gd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},id=function(a){return gd[a]};Pc[16]=function(a){return a};var kd;
var ld=[],md=[],nd=[],od=[],pd=[],qd={},rd,sd,td,ud=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},vd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=qd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.Oe&&b.Oe(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):kd(c,e,b)},xd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=wd(a[e],b,c));return d},yd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=qd[b];return c?c.priorityOverride||0:0},wd=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(wd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ld[f];if(!g||b.rd(g))return;c[f]=!0;try{var h=xd(g,b,c);h.vtp_gtmEventId=b.id;d=vd(h,b);td&&(d=td.Tg(d,h))}catch(y){b.af&&b.af(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[wd(a[l],b,c)]=wd(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=wd(a[n],b,c);sd&&(m=m||r===sd.Zb);d.push(r)}return sd&&m?sd.Wg(d):d.join("");case "escape":d=wd(a[1],b,c);if(sd&&La(a[1])&&"macro"===a[1][0]&&sd.wh(a))return sd.Rh(d);d=String(d);for(var t=2;t<a.length;t++)Pc[a[t]]&&(d=Pc[a[t]](d));return d;case "tag":var q=a[1];if(!od[q])throw Error("Unable to resolve tag reference "+q+".");return d=
{Ue:a[2],index:q};case "zb":var v={arg0:a[2],arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var u=zd(v,b,c),w=!!a[4];return w||2!==u?w!==(1===u):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},zd=function(a,b,c){try{return rd(xd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ad=function(){var a=function(b){return{toString:function(){return b}}};return{sf:a("consent"),Qd:a("convert_case_to"),Rd:a("convert_false_to"),Sd:a("convert_null_to"),Td:a("convert_true_to"),Ud:a("convert_undefined_to"),wi:a("debug_mode_metadata"),Ga:a("function"),jg:a("instance_name"),kg:a("live_only"),mg:a("malware_disabled"),ng:a("metadata"),zi:a("original_vendor_template_id"),pg:a("once_per_event"),Ee:a("once_per_load"),Ie:a("setup_tags"),Je:a("tag_id"),Ke:a("teardown_tags")}}();var Bd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Bd,Error);function Cd(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Cd(a[c],b[c])}};var Dd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Dd,Error);var Ed=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Gd=function(){return function(a,b){a instanceof Dd||(a=new Dd(a,Fd));b&&a.a.push(b);throw a;}};function Fd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ja(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Hd=null,Kd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Hd=Id(a);for(var e=0;e<md.length;e++){var f=md[e],g=Jd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<od.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Hd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Id=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=zd(nd[c],a));return b[c]}};var Ld={Tg:function(a,b){b[Ad.Qd]&&"string"===typeof a&&(a=1==b[Ad.Qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ad.Sd)&&null===a&&(a=b[Ad.Sd]);b.hasOwnProperty(Ad.Ud)&&void 0===a&&(a=b[Ad.Ud]);b.hasOwnProperty(Ad.Td)&&!0===a&&(a=b[Ad.Td]);b.hasOwnProperty(Ad.Rd)&&!1===a&&(a=b[Ad.Rd]);return a}};var Md=function(){this.a={}};function Nd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Bd(c,d,g);}}function Od(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Nd(e,b,d,g);Nd(f,b,d,g)}}}};var Sd=function(a){var b=Pd.C,c=this;this.i=new Md;this.a={};var d={},e=Od(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Qa(a,function(f,g){var h={};Qa(g,function(l,m){var n=Qd(l,m);h[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=h[l];if(!n)throw Rd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ud=function(a){return Td.a[a]||
function(){}};function Qd(a,b){var c=ud(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Rd;try{return vd(c)}catch(d){return{assert:function(e){throw new Bd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Rd(a,b,c){return new Bd(a,b,c)};var Vd=!1;var Wd={};Wd.oi=Ta('');Wd.bh=Ta('');var Xd=Vd,Yd=Wd.bh,Zd=Wd.oi;
var oe=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},pe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;oe(b,"/*")&&(b=b.slice(0,-2));oe(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},qe=/^[a-z0-9-]+$/i,re=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
te=function(a,b){var c;if(!(c=!se(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!qe.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!re.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,v=r;if(0!==v.indexOf("*."))t=q.toLowerCase()===v.toLowerCase();else{v=v.slice(2);var u=q.toLowerCase().indexOf(v.toLowerCase());t=-1===u?!1:q.length===v.length?
!0:q.length!==v.length+u?!1:"."===q[u-1]}if(t){var w=n.slice(n.indexOf("/"));h=pe(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},se=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ue,ve=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Gg&&(l["fix_"+m]=!0),l.We=l.We||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=h.indexOf("--\x3e");if(0<=q)return{content:h.substr(4,q),length:q+3}},endTag:function(){var q=h.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var v=h.slice(q.length);if(v.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var u=v.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(u)return{tagName:q.tagName,Y:q.Y,content:u[1],length:u[0].length+q.length}}}},startTag:function(){var q=h.match(c);if(q){var v={};q[2].replace(e,function(u,w,y,x,B){var z=y||x||B||f.test(w)&&w||null,C=document.createElement("div");C.innerHTML=z;v[w]=C.textContent||C.innerText||z});return{tagName:q[1],Y:v,Gc:!!q[3],length:q[0].length}}},chars:function(){var q=
h.indexOf("<");return{length:0<=q?q:h.length}}},t=function(){for(var q in n)if(n[q].test(h)){var v=r[q]();return v?(v.type=v.type||q,v.text=h.substr(0,v.length),h=h.slice(v.length),v):null}};l.We&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,v=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,u=[];u.$e=function(){return this[this.length-1]};u.td=function(C){var E=this.$e();return E&&E.tagName&&E.tagName.toUpperCase()===C.toUpperCase()};u.Sg=
function(C){for(var E=0,G;G=this[E];E++)if(G.tagName===C)return!0;return!1};var w=function(C){C&&"startTag"===C.type&&(C.Gc=q.test(C.tagName)||C.Gc);return C},y=t,x=function(){h="</"+u.pop().tagName+">"+h},B={startTag:function(C){var E=C.tagName;"TR"===E.toUpperCase()&&u.td("TABLE")?(h="<TBODY>"+h,z()):l.Ji&&v.test(E)&&u.Sg(E)?u.td(E)?x():(h="</"+C.tagName+">"+h,z()):C.Gc||u.push(C)},endTag:function(C){u.$e()?l.eh&&!u.td(C.tagName)?x():u.pop():l.eh&&(y(),z())}},z=function(){var C=h,E=w(y());h=C;if(E&&
B[E.type])B[E.type](E)};t=function(){z();return w(y())}}();return{append:function(q){h+=q},Xh:t,Ni:function(q){for(var v;(v=t())&&(!q[v.type]||!1!==q[v.type](v)););},clear:function(){var q=h;h="";return q},Oi:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Qi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Pi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);ue=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var v,u=r&&r.length||0;for(v=0;v<u;v++)t.call(q,r[v],v)}function d(r,t,q){for(var v in r)r.hasOwnProperty(v)&&t.call(q,v,r[v])}function e(r,t){d(t,
function(q,v){r[q]=v});return r}function f(r,t){r=r||{};d(t,function(q,v){b(r[q])||(r[q]=v)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(v){t.push(v)});return t}}var h={xg:a,yg:a,zg:a,Ag:a,Hg:a,Ig:function(r){return r},done:a,error:function(r){throw r;},$h:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,v,u){var w="data-ps-"+v;if(2===arguments.length){var y=q.getAttribute(w);return b(y)?String(y):y}b(u)&&""!==u?q.setAttribute(w,u):
q.removeAttribute(w)}function t(q,v){var u=q.ownerDocument;e(this,{root:q,options:v,Lb:u.defaultView||u.parentWindow,Ua:u,xc:ue("",{Gg:!0}),dd:[q],Dd:"",Ed:u.createElement(q.nodeName),Ib:[],Na:[]});r(this.Ed,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Na,arguments);for(var q;!this.kc&&this.Na.length;)q=this.Na.shift(),"function"===typeof q?this.Ng(q):this.Nd(q)};t.prototype.Ng=function(q){var v={type:"function",value:q.name||q.toString()};this.zd(v);q.call(this.Lb,this.Ua);this.bf(v)};
t.prototype.Nd=function(q){this.xc.append(q);for(var v,u=[],w,y;(v=this.xc.Xh())&&!(w=v&&"tagName"in v?!!~v.tagName.toLowerCase().indexOf("script"):!1)&&!(y=v&&"tagName"in v?!!~v.tagName.toLowerCase().indexOf("style"):!1);)u.push(v);this.ui(u);w&&this.ph(v);y&&this.qh(v)};t.prototype.ui=function(q){var v=this.Kg(q);v.Me&&(v.pd=this.Dd+v.Me,this.Dd+=v.Vh,this.Ed.innerHTML=v.pd,this.ri())};t.prototype.Kg=function(q){var v=this.dd.length,u=[],w=[],y=[];c(q,function(x){u.push(x.text);if(x.Y){if(!/^noscript$/i.test(x.tagName)){var B=
v++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==x.Y.id&&"ps-style"!==x.Y.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+B+(x.Gc?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Ri:q,raw:u.join(""),Me:w.join(""),Vh:y.join("")}};t.prototype.ri=function(){for(var q,v=[this.Ed];b(q=v.shift());){var u=1===q.nodeType;if(!u||!r(q,"proxyof")){u&&(this.dd[r(q,"id")]=q,r(q,"id",null));var w=q.parentNode&&r(q.parentNode,"proxyof");
w&&this.dd[w].appendChild(q)}v.unshift.apply(v,g(q.childNodes))}};t.prototype.ph=function(q){var v=this.xc.clear();v&&this.Na.unshift(v);q.src=q.Y.src||q.Y.Bi;q.src&&this.Ib.length?this.kc=q:this.zd(q);var u=this;this.si(q,function(){u.bf(q)})};t.prototype.qh=function(q){var v=this.xc.clear();v&&this.Na.unshift(v);q.type=q.Y.type||q.Y.TYPE||"text/css";this.vi(q);v&&this.write()};t.prototype.vi=function(q){var v=this.Mg(q);this.th(v);q.content&&(v.styleSheet&&!v.sheet?v.styleSheet.cssText=q.content:
v.appendChild(this.Ua.createTextNode(q.content)))};t.prototype.Mg=function(q){var v=this.Ua.createElement(q.tagName);v.setAttribute("type",q.type);d(q.Y,function(u,w){v.setAttribute(u,w)});return v};t.prototype.th=function(q){this.Nd('<span id="ps-style"/>');var v=this.Ua.getElementById("ps-style");v.parentNode.replaceChild(q,v)};t.prototype.zd=function(q){q.Nh=this.Na;this.Na=[];this.Ib.unshift(q)};t.prototype.bf=function(q){q!==this.Ib[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Ib.shift(),this.write.apply(this,q.Nh),!this.Ib.length&&this.kc&&(this.zd(this.kc),this.kc=null))};t.prototype.si=function(q,v){var u=this.Lg(q),w=this.ii(u),y=this.options.xg;q.src&&(u.src=q.src,this.di(u,w?y:function(){v();y()}));try{this.sh(u),q.src&&!w||v()}catch(x){this.options.error(x),v()}};t.prototype.Lg=function(q){var v=this.Ua.createElement(q.tagName);d(q.Y,function(u,w){v.setAttribute(u,w)});q.content&&(v.text=q.content);return v};t.prototype.sh=function(q){this.Nd('<span id="ps-script"/>');
var v=this.Ua.getElementById("ps-script");v.parentNode.replaceChild(q,v)};t.prototype.di=function(q,v){function u(){q=q.onload=q.onreadystatechange=q.onerror=null}var w=this.options.error;e(q,{onload:function(){u();v()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(u(),v())},onerror:function(){var y={message:"remote script failed "+q.src};u();w(y);v()}})};t.prototype.ii=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.$h&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var w=v.shift(),y;w&&(y=w[w.length-1],y.yg(),w.stream=t.apply(null,w),y.zg())}function t(w,y,x){function B(G){G=x.Ig(G);u.write(G);x.Ag(G)}u=new n(w,x);u.id=q++;u.name=x.name||u.id;var z=w.ownerDocument,C={close:z.close,open:z.open,write:z.write,writeln:z.writeln};e(z,{close:a,open:a,write:function(){return B(g(arguments).join(""))},writeln:function(){return B(g(arguments).join("")+"\n")}});var E=u.Lb.onerror||a;u.Lb.onerror=function(G,M,P){x.error({msg:G+
" - "+M+":"+P});E.apply(u.Lb,arguments)};u.write(y,function(){e(z,C);u.Lb.onerror=E;x.done();u=null;r()});return u}var q=0,v=[],u=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,h);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Li?w[0]:w;var B=[w,y,x];w.Qh={cancel:function(){B.stream?B.stream.abort():B[1]=a}};x.Hg(B);v.push(B);u||r();return w.Qh},{streams:{},Mi:v,Di:n})}();ve=l.postscribe}})();var we=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,xe={Fn:"function",DustMap:"Object",List:"Array"},H=function(a,b,c){for(var d=0;d<b.length;d++){var e=we.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var n=typeof l;l instanceof gb?n="Fn":l instanceof k?n="List":l instanceof mb?n="DustMap":
l instanceof qb&&(n="OpaqueValue");if(n!=h)throw Error("Error in "+a+". Argument "+f+" has type "+n+", which does not match required type "+(xe[h]||h)+".");}}};function ye(a){return""+a}
function ze(a,b){var c=[];return c};var Ae=function(a,b){var c=new gb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Be=function(a,b){var c=new mb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ia(e)?c.set(d,Ae(a+"_"+d,e)):(Ja(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ce=function(a,b){H(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new mb;return d=Be("AssertApiSubject",c)};var De=function(a,b){H(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new mb;return d=Be("AssertThatSubject",c)};function Ee(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(wb(arguments[d],c));return vb(a.apply(null,b))}}var Ge=function(){for(var a=Math,b=Fe,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ee(a[e].bind(a)))}return c};var He=function(a){var b;return b};var Ie=function(a){var b;return b};var Je=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Ke=function(a){H(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Le=function(a){H(this.i.a,["message:?string"],arguments);};var Me=function(a,b){H(this.i.a,["min:!number","max:!number"],arguments);return Na(a,b)};var Ne=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Fg.apply(null,Array.prototype.slice.call(arguments,1))};var Oe=function(){Ne(this,"read_container_data");var a=new mb;a.set("containerId",'GTM-7BF3X');a.set("version",'347');a.set("environmentName",'');a.set("debugMode",Xd);a.set("previewMode",Zd);a.set("environmentMode",Yd);a.m=!0;return a};var Pe=function(){return(new Date).getTime()};var Qe=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof gb)return"function";if(a instanceof qb){a=a.oa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Re=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Xd||Zd)&&a.call(this,e.message)}}}return{parse:b(function(c){return vb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(wb(c))})}};var Se=function(a){return Sa(wb(a,this.m))};var Te=function(a){return Number(wb(a,this.m))};var Ue=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ve=function(a,b,c){var d=null,e=!1;return e?d:null};var Fe="floor ceil round max min abs pow sqrt".split(" ");var We=function(){var a={};return{kh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},hi:function(b,c){a[b]=c},reset:function(){a={}}}},Xe=function(a,b){H(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ye=function(){this.a={};this.i={}};Ye.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ye.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ia(b)?Ae(a,b):Be(a,b)};
var $e=function(a){var b=Ze;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Ia(b)?Ae("getUserAgent",b):Be("getUserAgent",b)};function af(){var a={};return a};var I={vb:"_ee",bd:"_syn",Ci:"_uei",Ai:"_pci",Nc:"event_callback",Vb:"event_timeout",ka:"gtag.config"};I.Da="gtag.get",I.wa="value_key",I.va="value_callback";I.fa="allow_ad_personalization_signals";I.Uc="restricted_data_processing";I.gb="allow_google_signals";I.ia="cookie_expires";I.Ub="cookie_update";I.rb="session_duration";I.na="user_properties";I.Fa="transport_url";I.N="ads_data_redaction";I.o="ad_storage";
I.M="analytics_storage";I.tf="region";I.uf="wait_for_update";I.ve=[I.fa,I.gb,I.Ub];I.xe=[I.ia,I.Vb,I.rb];var bf={},cf=function(a,b){bf[a]=bf[a]||[];bf[a][b]=!0},df=function(a){for(var b=[],c=bf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=function(a){cf("GTM",a)};function ff(a){if(Error.captureStackTrace)Error.captureStackTrace(this,ff);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}va(ff,Error);ff.prototype.name="CustomError";var gf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");ff.call(this,d+c[e])};va(gf,ff);gf.prototype.name="AssertionError";var hf=function(a,b){throw new gf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var jf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},kf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var lf,mf=function(){if(void 0===lf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(c){ma.console&&ma.console.error(c.message)}lf=a}else lf=a}return lf};var of=function(a,b){this.a=b===nf?a:""};of.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var nf={};var pf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var qf;a:{var rf=ma.navigator;if(rf){var sf=rf.userAgent;if(sf){qf=sf;break a}}qf=""}var tf=function(a){return-1!=qf.indexOf(a)};var vf=function(a,b,c){this.a=c===uf?a:""};vf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var wf=function(a){if(a instanceof vf&&a.constructor===vf)return a.a;hf("expected object of type SafeHtml, got '"+a+"' of type "+ta(a));return"type_error:SafeHtml"},uf={},xf=new vf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,uf);var yf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},zf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=wf(xf);return!c.parentElement}),Af=function(a,b){if(a.tagName&&yf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(zf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=wf(b)};var Bf=function(a){var b=mf(),c=b?b.createHTML(a):a;return new vf(c,null,uf)};var D=window,L=document,Cf=navigator,Df=L.currentScript&&L.currentScript.src,Ef=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},Ff=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Gf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=mf(),g=f?f.createScriptURL(a):a;e=new of(g,nf);var h;a:{try{var l=d&&d.ownerDocument,m=l&&(l.defaultView||l.parentWindow);
m=m||ma;if(m.Element&&m.Location){h=m;break a}}catch(w){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var n;var r=typeof d;if("object"==r&&null!=d||"function"==r)try{n=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(w){n="<object could not be stringified>"}else n=void 0===d?"undefined":null===d?"null":typeof d;hf("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",n)}var t;e instanceof of&&e.constructor===of?t=e.a:(hf("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ta(e)),t="type_error:TrustedResourceUrl");d.src=t;var q=pa(d.ownerDocument&&d.ownerDocument.defaultView);q&&d.setAttribute("nonce",q);Ff(d,b);c&&(d.onerror=c);var v=pa();v&&d.setAttribute("nonce",v);var u=L.getElementsByTagName("script")[0]||L.body||L.head;u.parentNode.insertBefore(d,u);return d},Hf=function(){if(Df){var a=Df.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},If=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Ff(c,b);void 0!==a&&(c.src=a);return c},Jf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Kf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Lf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){D.setTimeout(a,0)},Mf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Nf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Of=function(a){var b=L.createElement("div");Af(b,Bf("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Pf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Qf=function(a){Cf.sendBeacon&&Cf.sendBeacon(a)||Jf(a)},Rf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Sf={},Tf=function(a){return void 0==Sf[a]?!1:Sf[a]};var Uf=[];function Vf(){var a=Ef("google_tag_data",{});a.ics||(a.ics={entries:{},set:Wf,update:Xf,addListener:Yf,notifyListeners:Zf,active:!1});return a.ics}
function Wf(a,b,c,d,e,f){var g=Vf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&D.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,$f(a),Zf(),cf("TAGGING",2))},f)}}}
function Xf(a,b){var c=Vf();c.active=!0;if(void 0!=b){var d=ag(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=ag(a);f.quiet?(f.quiet=!1,$f(a)):g!==d&&$f(a)}}function Yf(a,b){Uf.push({Qe:a,fh:b})}function $f(a){for(var b=0;b<Uf.length;++b){var c=Uf[b];La(c.Qe)&&-1!==c.Qe.indexOf(a)&&(c.ef=!0)}}function Zf(a){for(var b=0;b<Uf.length;++b){var c=Uf[b];if(c.ef){c.ef=!1;try{c.fh({Pe:a})}catch(d){}}}}
var ag=function(a){var b=Vf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},bg=function(a){return!(Vf().entries[a]||{}).quiet},cg=function(){return Tf("gtag_cs_api")?Vf().active:!1},dg=function(a,b){Vf().addListener(a,b)},eg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!bg(b[e]))return!0;return!1}if(c()){var d=!1;dg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},fg=function(a,b){if(!1===ag(b)){var c=!1;dg([b],function(d){!c&&ag(b)&&(a(d),c=!0)})}};var gg=[I.o,I.M],hg=function(a){var b=a[I.tf];b&&ef(40);var c=a[I.uf];c&&ef(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<gg.length;f++){var g=gg[f],h=a[gg[f]],l=d[e];Vf().set(g,h,l,"","",c)}},ig=function(a,b){for(var c=0;c<gg.length;c++){var d=gg[c],e=a[gg[c]];Vf().update(d,e)}Vf().notifyListeners(b)},jg=function(a){var b=ag(a);return void 0!=b?b:!0},kg=function(){for(var a=[],b=0;b<gg.length;b++){var c=ag(gg[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},lg=function(a,b){eg(a,b)};var ng=function(a){return mg?L.querySelectorAll(a):null},og=function(a,b){if(!mg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},pg=!1;if(L.querySelectorAll)try{var qg=L.querySelectorAll(":root");qg&&1==qg.length&&qg[0]==L.documentElement&&(pg=!0)}catch(a){}var mg=pg;var Pd={},O=null,Eg=Math.random();Pd.C="GTM-7BF3X";Pd.cc="ae2";Pd.yi="";var Fg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Gg={__paused:!0,__tg:!0},Hg;for(Hg in Fg)Fg.hasOwnProperty(Hg)&&(Gg[Hg]=!0);var Ig="www.googletagmanager.com/gtm.js";
var Jg=Ig,Kg=Ta(""),Lg=null,Mg=null,Ng="//www.googletagmanager.com/a?id="+Pd.C+"&cv=347",Og={},Pg={},Qg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Rg={},Sg=new Oa,Tg={},Ug={},Xg={name:"dataLayer",set:function(a,b){F(eb(a,b),Tg);Vg()},get:function(a){return Wg(a,2)},reset:function(){Sg=new Oa;Tg={};Vg()}},Wg=function(a,b){return 2!=b?Sg.get(a):Yg(a.split("."))},Yg=function(a){for(var b=Tg,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Zg=function(a,b){Ug.hasOwnProperty(a)||(Sg.set(a,b),F(eb(a,b),Tg),Vg())},Vg=function(a){Qa(Ug,function(b,c){Sg.set(b,c);F(eb(b,void 0),Tg);F(eb(b,c),Tg);a&&delete Ug[b]})},
$g=function(a,b,c){Rg[a]=Rg[a]||{};var d=1!==c?Yg(b.split(".")):Sg.get(b);"array"===sb(d)||"object"===sb(d)?Rg[a][b]=F(d):Rg[a][b]=d},ah=function(a,b){if(Rg[a])return Rg[a][b]},bh=function(a,b){Rg[a]&&delete Rg[a][b]};var eh={},fh=function(a,b){if(D._gtmexpgrp&&D._gtmexpgrp.hasOwnProperty(a))return D._gtmexpgrp[a];void 0===eh[a]&&(eh[a]=Math.floor(Math.random()*b));return eh[a]};var gh=/:[0-9]+$/,hh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},kh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ih(a.protocol)||ih(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||D.location.hostname).replace(gh,"").toLowerCase());return jh(a,b,c,d,e)},jh=function(a,b,c,d,e){var f,g=ih(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=lh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(gh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||cf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=A(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=hh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ih=function(a){return a?a.replace(":",
"").toLowerCase():""},lh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},mh=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||cf("TAGGING",1),c="/"+c);var d=b.hostname.replace(gh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},nh=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=mh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function oh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var qh=function(a,b,c,d){return ph(d)?oh(a,String(b||document.cookie),c):[]},th=function(a,b,c,d,e){if(ph(e)){var f=rh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=sh(f,function(g){return g.mc},b);if(1===f.length)return f[0].id;f=sh(f,function(g){return g.Fb},c);return f[0]?f[0].id:void 0}}};function uh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=qh(b,f,!1,d).indexOf(c)}
var yh=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!ph(c.Ja))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=vh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Hh);g=e(g,"samesite",
c.bi);c.ei&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var n=wh(),r=void 0,t=!1,q=0;q<n.length;++q){var v="none"!==n[q]?n[q]:void 0,u=e(g,"domain",v);u=f(u,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!xh(v,c.path)&&uh(u,a,b,c.Ja))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return xh(m,c.path)?1:uh(g,a,b,c.Ja)?0:1},zh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return yh(a,b,c)};
function sh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function rh(a,b,c){for(var d=[],e=qh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),mc:1*l[0]||1,Fb:1*l[1]||1}))}}return d}
var vh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ah=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Bh=/(^|\.)doubleclick\.net$/i,xh=function(a,b){return Bh.test(document.location.hostname)||"/"===b&&Ah.test(a)},wh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Bh.test(e)||Ah.test(e)||a.push("none");
return a},ph=function(a){if(!Tf("gtag_cs_api")||!a||!cg())return!0;if(!bg(a))return!1;var b=ag(a);return null==b?!0:!!b};var Ch=function(){for(var a=Cf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Wa()/1E3)].join(".")},Fh=function(a,b,c,d,e){var f=Dh(b);return th(a,f,Eh(c),d,e)},Gh=function(a,b,c,d){var e=""+Dh(c),f=Eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Hh(a,b,c){var d,e=a.Eb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Wa())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ih=["1"],Jh={},Oh=function(a){var b=Lh(a.prefix);Jh[b]||Mh(b,a.path,a.domain)||(Nh(b,Ch(),a),Mh(b,a.path,a.domain))};function Nh(a,b,c){var d=Gh(b,"1",c.domain,c.path),e=Hh(c);e.Ja="ad_storage";zh(a,d,e)}function Mh(a,b,c){var d=Fh(a,b,c,Ih,"ad_storage");d&&(Jh[a]=d);return d}function Lh(a){return(a||"_gcl")+"_au"};function Ph(){for(var a=Qh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Rh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Qh,Sh;function Th(a){Qh=Qh||Rh();Sh=Sh||Ph();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(n=64));b.push(Qh[l],Qh[m],Qh[n],Qh[r])}return b.join("")}
function Uh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Sh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Qh=Qh||Rh();Sh=Sh||Ph();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Vh;var Zh=function(){var a=Wh,b=Xh,c=Yh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Kf(L,"mousedown",d);Kf(L,"keyup",d);Kf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},$h=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Yh().decorators.push(f)},ai=function(a,b,c){for(var d=Yh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==L.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&$a(e,g.callback())}}return e},Yh=function(){var a=Ef("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var bi=/(.*?)\*(.*?)\*(.*)/,ci=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,di=/^(?:www\.|m\.|amp\.)+/,ei=/([^?#]+)(\?[^#]*)?(#.*)?/;function fi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var hi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Th(String(d))))}var e=b.join("*");return["1",gi(e),e].join("*")},gi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Vh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Vh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Vh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},ji=function(){return function(a){var b=mh(D.location.href),c=b.search.replace("?",""),d=hh(c,"_gl",!1,!0)||"";a.query=ii(d)||{};var e=kh(b,"fragment").match(fi("_gl"));a.fragment=ii(e&&e[3]||"")||{}}},ki=function(a){var b=ji(),c=Yh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&($a(d,e.query),a&&$a(d,e.fragment));return d},
ii=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=bi.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===gi(h,n)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Uh(t[q+1]);return r}}}}catch(v){}};
function li(a,b,c,d){function e(n){var r=n,t=fi(a).exec(r),q=r;if(t){var v=t[2],u=t[4];q=t[1];u&&(q=q+v+u)}n=q;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=ei.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function mi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ai(b,1,c),e=ai(b,2,c),f=ai(b,3,c);if(ab(d)){var g=hi(d);c?ni("_gl",g,a):oi("_gl",g,a,!1)}if(!c&&ab(e)){var h=hi(e);oi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){oi(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){ni(m,n,r);break a}}"string"==typeof r&&li(m,n,r,void 0)}}
function oi(a,b,c,d){if(c.href){var e=li(a,b,c.href,void 0===d?!1:d);pf.test(e)&&(c.href=e)}}
function ni(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=li(a,b,c.action);pf.test(m)&&(c.action=m)}}}
var Wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||mi(e,e.hostname)}}catch(g){}},Xh=function(a){try{if(a.action){var b=kh(mh(a.action),"host");mi(a,b)}}catch(c){}},pi=function(a,b,c,d){Zh();$h(a,b,"fragment"===c?2:1,!!d,!1)},qi=function(a,b){Zh();$h(a,[jh(D.location,"host",!0)],b,!0,!0)},ri=function(){var a=L.location.hostname,b=ci.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(di,""),l=e.replace(di,""),m;if(!(m=h===l)){var n="."+l;m=h.substring(h.length-n.length,h.length)===n}return m},si=function(a,b){return!1===a?!1:a||b||ri()};var ti=/^\w+$/,ui=/^[\w-]+$/,vi=/^~?[\w-]+$/,wi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},xi=function(){if(!Tf("gtag_cs_api")||!cg())return!0;var a=ag("ad_storage");return null==a?!0:!!a},yi=function(a,b){bg("ad_storage")?xi()?a():fg(a,"ad_storage"):b?cf("TAGGING",3):eg(function(){yi(a,!0)},["ad_storage"])},Bi=function(a){var b=[];if(!L.cookie)return b;var c=qh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=zi(c[d]);e&&-1===A(b,e)&&b.push(e)}return Ai(b)};
function Ci(a){return a&&"string"==typeof a&&a.match(ti)?a:"_gcl"}
var Ei=function(){var a=mh(D.location.href),b=kh(a,"query",!1,void 0,"gclid"),c=kh(a,"query",!1,void 0,"gclsrc"),d=kh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||hh(e,"gclid",!1,void 0);c=c||hh(e,"gclsrc",!1,void 0)}return Di(b,c,d)},Di=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(ui))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Tf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Gi=function(a){var b=Ei();yi(function(){Fi(b,a)})};
function Fi(a,b,c){function d(l,m){var n=Hi(l,e);n&&zh(n,m,f)}b=b||{};var e=Ci(b.prefix);c=c||Wa();var f=Hh(b,c,!0);f.Ja="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Ti?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Ji=function(a,b){var c=ki(!0);yi(function(){for(var d=Ci(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==wi[f]){var g=Hi(f,d),h=c[g];if(h){var l=Math.min(Ii(h),Wa()),m;b:{for(var n=l,r=qh(g,L.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Ii(r[t])>n){m=!0;break b}m=!1}if(!m){var q=Hh(b,l,!0);q.Ja="ad_storage";zh(g,h,q)}}}}Fi(Di(c.gclid,c.gclsrc),b)})},Hi=function(a,b){var c=wi[a];if(void 0!==c)return b+c},Ii=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function zi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ki=function(a,b,c,d,e){if(La(b)){var f=Ci(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Hi(a[l],f);if(m){var n=qh(m,L.cookie,void 0,"ad_storage");n.length&&(h[m]=n.sort()[n.length-1])}}return h};yi(function(){pi(g,b,c,d)})}},Ai=function(a){return a.filter(function(b){return vi.test(b)})},Li=function(a,b){for(var c=Ci(b.prefix),d={},e=0;e<a.length;e++)wi[a[e]]&&(d[a[e]]=wi[a[e]]);yi(function(){Qa(d,function(f,g){var h=qh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],m=Ii(l),
n={};n[f]=[zi(l)];Fi(n,b,m)}})})};function Mi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ni=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(cg()){var c=Ei();if(Mi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);qi(function(){return d},3);qi(function(){var e={};return e._up="1",e},1)}}},Oi=function(){var a;if(xi()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Kd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Kd]||(g[b[h].Kd]=[]),g[b[h].Kd].push({timestamp:l[1],hh:l[2]}))}a=g}else a={};return a};var Pi=/^\d+\.fls\.doubleclick\.net$/;function Qi(a,b){bg(I.o)?jg(I.o)?a():fg(a,I.o):b?ef(42):lg(function(){Qi(a,!0)},[I.o])}function Ri(a){var b=mh(D.location.href),c=kh(b,"host",!1);if(c&&c.match(Pi)){var d=kh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Si(a,b,c){if("aw"==a||"dc"==a){var d=Ri("gcl"+a);if(d)return d.split(".")}var e=Ci(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!jg(I.o)&&c,g;g=Ei()[a]||[];if(0<g.length)return f?["0"]:g}var h=Hi(a,e);return h?Bi(h):[]}
var Ti=function(a){var b=Ri("gac");if(b)return!jg(I.o)&&a?"0":decodeURIComponent(b);var c=Oi(),d=[];Qa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].hh);g=Ai(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Ui=function(a,b){var c=Ei().dc||[];Qi(function(){Oh(b);var d=Jh[Lh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Qf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=Lh(b.prefix),n=Jh[m];n&&Nh(m,n,b)}})};var Vi=/[A-Z]+/,Wi=/\s/,Xi=function(a){if(p(a)&&(a=Va(a),!Wi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Vi.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},Zi=function(a){for(var b={},c=0;c<a.length;++c){var d=Xi(a[c]);d&&(b[d.id]=d)}Yi(b);var e=[];Qa(b,function(f,g){e.push(g)});return e};
function Yi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var $i=function(){var a=!1;return a};var bj=function(a,b,c,d){return(2===aj()||d||"http:"!=D.location.protocol?a:b)+c},aj=function(){var a=Hf(),b;if(1===a)a:{var c=Jg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var pj=function(a){return jg(I.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=nh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},qj=function(){var a;if(!(a=Kg)){var b;if(!0===D._gtmdgs)b=!0;else{var c=Cf&&Cf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Sa("1");return fh(1,100)<d?fh(2,2):-1};var rj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),sj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},tj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},uj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var wj=function(a){var b;Wg("gtm.allowlist")&&ef(52);b=Wg("gtm.allowlist");b||(b=Wg("gtm.whitelist"));b&&ef(9);
var c=b&&bb(Ua(b),sj),d;Wg("gtm.blocklist")&&ef(51);d=Wg("gtm.blocklist");d||(d=Wg("gtm.blacklist"));d||(d=Wg("tagTypeBlacklist"))&&ef(3);d?ef(8):d=[];vj()&&(d=Ua(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=A(Ua(d),"google")&&ef(2);var e=
d&&bb(Ua(d),tj),f={};return function(g){var h=g&&g[Ad.Ga];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Pg[h]||[],m=a(h,l);if(b){var n;if(n=m)a:{if(0>A(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>A(c,l[r])){ef(11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=A(e,h);if(q)t=q;else{var v=Pa(e,l||[]);v&&ef(10);t=v}}var u=!m||t;u||!(0<=A(l,"sandboxedScripts"))||c&&-1!==A(c,"sandboxedScripts")||(u=Pa(e,uj));return f[h]=u}},vj=
function(){return rj.test(D.location&&D.location.hostname)};var xj={active:!0,isAllowed:function(){return!0}},yj=function(a){var b=O.zones;return b?b.checkState(Pd.C,a):xj},zj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Aj=function(){},Bj=function(){};var Cj=!1,Dj=0,Ej=[];function Fj(a){if(!Cj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Cj=!0;for(var e=0;e<Ej.length;e++)N(Ej[e])}Ej.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Gj(){if(!Cj&&140>Dj){Dj++;try{L.documentElement.doScroll("left"),Fj()}catch(a){D.setTimeout(Gj,50)}}}var Hj=function(a){Cj?a():Ej.push(a)};var Ij={},Jj={},Kj=function(a,b,c,d){if(!Jj[a]||Gg[b]||"__zone"===b)return-1;var e={};ub(d)&&(e=F(d,e));e.id=c;e.status="timeout";return Jj[a].tags.push(e)-1},Lj=function(a,b,c,d){if(Jj[a]){var e=Jj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Mj(a){for(var b=Ij[a]||[],c=0;c<b.length;c++)b[c]();Ij[a]={push:function(d){d(Pd.C,Jj[a])}}}
var Pj=function(a,b,c){Jj[a]={tags:[]};Ia(b)&&Nj(a,b);c&&D.setTimeout(function(){return Mj(a)},Number(c));return Oj(a)},Nj=function(a,b){Ij[a]=Ij[a]||[];Ij[a].push(Ya(function(){return N(function(){b(Pd.C,Jj[a])})}))};function Oj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ya(function(){b++;d&&b>=c&&Mj(a)})},Eg:function(){d=!0;b>=c&&Mj(a)}}};var Qj=function(){function a(d){return!Ja(d)||0>d?0:d}if(!O._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=Ja(Xg.get("gtm.start"))?Xg.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Mg-b)}}};var Uj={},Vj=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Wj=!1;
var Xj=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||ef(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Qj();return D[b]},Yj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Vj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var ak=function(a){},Zj=function(){return D.GoogleAnalyticsObject||"ga"},bk=function(a,b){return function(){var c=Vj(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var gk=function(){return"&tc="+od.filter(function(a){return a}).length},jk=function(){2022<=hk().length&&ik()},lk=function(){kk||(kk=D.setTimeout(ik,500))},ik=function(){kk&&(D.clearTimeout(kk),kk=void 0);void 0===mk||nk[mk]&&!ok&&!pk||(qk[mk]||rk.yh()||0>=sk--?(ef(1),qk[mk]=!0):(rk.Yh(),Jf(hk()),nk[mk]=!0,tk=uk=vk=pk=ok=""))},hk=function(){var a=mk;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[wk,nk[a]?"":"&es=1",xk[a],b?"&u="+b:"",c?"&ut="+c:"",gk(),ok,pk,vk?vk:"",uk,tk,"&z=0"].join("")},
yk=function(){return[Ng,"&v=3&t=t","&pid="+Na(),"&rv="+Pd.cc].join("")},zk="0.005000">Math.random(),wk=yk(),Ak=function(){wk=yk()},nk={},ok="",pk="",tk="",uk="",vk="",mk=void 0,xk={},qk={},kk=void 0,rk=function(a,b){var c=0,d=0;return{yh:function(){if(c<a)return!1;Wa()-d>=b&&(c=0);return c>=a},Yh:function(){Wa()-d>=b&&(c=0);c++;d=Wa()}}}(2,1E3),sk=1E3,Bk=function(a,b,c){if(zk&&!qk[a]&&b){a!==mk&&(ik(),mk=a);var d,e=String(b[Ad.Ga]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;ok=ok?ok+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(qd[g]?"1":"2")+d;tk=tk?tk+"."+h:"&ti="+h;lk();jk()}},Ck=function(a,b,c){if(zk&&!qk[a]){a!==mk&&(ik(),mk=a);var d=c+b;pk=pk?pk+"."+d:"&epr="+d;lk();jk()}},Dk=function(a,b,c){};
var Ek=function(){return!1},Fk=function(){var a={};return function(b,c,d){}};function Gk(a,b,c,d){var e=od[a],f=Hk(a,b,c,d);if(!f)return null;var g=wd(e[Ad.Ie],c,[]);if(g&&g.length){var h=g[0];f=Gk(h.index,{I:f,H:1===h.Ue?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Hk(a,b,c,d){function e(){if(f[Ad.mg])h();else{var w=xd(f,c,[]);var B=Kj(c.id,String(f[Ad.Ga]),Number(f[Ad.Je]),w[Ad.ng]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var G=Wa()-E;Bk(c.id,od[a],"5");Lj(c.id,B,"success",
G);g()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var G=Wa()-E;Bk(c.id,od[a],"6");Lj(c.id,B,"failure",G);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Bk(c.id,f,"1");var C=function(){var G=Wa()-E;Bk(c.id,f,"7");Lj(c.id,B,"exception",G);z||(z=!0,h())};var E=Wa();try{vd(w,c)}catch(G){C(G)}}}var f=od[a],g=b.I,h=b.H,l=b.terminate;if(c.rd(f))return null;var m=wd(f[Ad.Ke],c,[]);if(m&&m.length){var n=m[0],r=Gk(n.index,{I:g,H:h,terminate:l},c,d);if(!r)return null;g=r;h=2===n.Ue?l:r}if(f[Ad.Ee]||f[Ad.pg]){var t=f[Ad.Ee]?pd:c.ki,q=g,v=h;if(!t[a]){e=Ya(e);
var u=Ik(a,t,e);g=u.I;h=u.H}return function(){t[a](q,v)}}return e}function Ik(a,b,c){var d=[],e=[];b[a]=Jk(d,e,c);return{I:function(){b[a]=Kk;for(var f=0;f<d.length;f++)d[f]()},H:function(){b[a]=Lk;for(var f=0;f<e.length;f++)e[f]()}}}function Jk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Kk(a){a()}function Lk(a,b){b()};var Ok=function(a,b,c){for(var d=[],e=0;e<od.length;e++)if(a[e]){var f=od[e];var g=c.add();try{var h=Gk(e,{I:g,H:g,terminate:g},b,e);h?d.push({pf:e,ff:yd(f),oc:h}):(Mk(e,b),g())}catch(m){g()}}c.Eg();d.sort(Nk);for(var l=0;l<d.length;l++)d[l].oc();return 0<d.length};function Nk(a,b){var c,d=b.ff,e=a.ff;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.pf,h=b.pf;f=g>h?1:g<h?-1:0}return f}
function Mk(a,b){if(!zk)return;var c=function(d){var e=b.rd(od[d])?"3":"4",f=wd(od[d][Ad.Ie],b,[]);f&&f.length&&c(f[0].index);Bk(b.id,od[d],e);var g=wd(od[d][Ad.Ke],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Pk=!1,Uk=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Pk)return!1;Pk=!0}var d=yj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=yj(Number.MAX_SAFE_INTEGER);}if(f)return!1}zk&&!qk[b]&&mk!==b&&(ik(),mk=b,tk=ok="",xk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,lk());
var g={id:b,name:c,rd:wj(d.isAllowed),ki:[],af:function(){ef(6)},Oe:Qk(b)},h=Pj(b,a.eventCallback,a.eventTimeout);Rk(b);var l=Kd(g);e&&(l=Sk(l));var m=Ok(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||ak(Pd.C);switch(c){case "gtm.init":ef(19),m&&ef(20)}return Tk(l,
m)};function Qk(a){return function(b){zk&&(yb(b)||Dk(a,"input",b))}}function Rk(a){$g(a,"event",1);$g(a,"ecommerce",1);$g(a,"gtm");}
function Sk(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Fg[String(od[c][Ad.Ga])]&&(b[c]=!0);return b}function Tk(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&od[c]&&!Gg[String(od[c][Ad.Ga])])return!0;return!1}function Vk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return mh(""+c+b).href}}function Wk(a,b){return Xk()?Vk(a,b):void 0}function Xk(){var a=!1;return a};var Yk=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.I=function(){};this.H=function(){};this.eventId=void 0},Zk=function(a){var b=new Yk;b.eventModel=a;return b},$k=function(a,b){a.targetConfig=b;return a},al=function(a,b){a.containerConfig=b;return a},bl=function(a,b){a.a=b;return a},cl=function(a,b){a.globalConfig=b;return a},dl=function(a,b){a.I=b;return a},el=function(a,b){a.H=b;return a};
Yk.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var fl=function(a){function b(e){Qa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Qa(c,function(e){d.push(e)});return d};var gl;if(3===Pd.cc.length)gl="g";else{var hl="G";gl=hl}
var il={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:gl,OPT:"o"},jl=function(a){var b=Pd.C.split("-"),c=b[0].toUpperCase(),d=il[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Pd.cc.length){var g="w";f="2"+g}else f="";return f+d+Pd.cc+e};var kl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ll=function(){return tf("iPhone")&&!tf("iPod")&&!tf("iPad")};tf("Opera");tf("Trident")||tf("MSIE");tf("Edge");!tf("Gecko")||-1!=qf.toLowerCase().indexOf("webkit")&&!tf("Edge")||tf("Trident")||tf("MSIE")||tf("Edge");-1!=qf.toLowerCase().indexOf("webkit")&&!tf("Edge")&&tf("Mobile");tf("Macintosh");tf("Windows");tf("Linux")||tf("CrOS");var ml=ma.navigator||null;ml&&(ml.appVersion||"").indexOf("X11");tf("Android");ll();tf("iPad");tf("iPod");ll()||tf("iPad")||tf("iPod");qf.toLowerCase().indexOf("kaios");var nl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var ol=function(){};var pl=function(a,b){this.i=a;this.a=null;this.B={};this.P=0;this.F=void 0===b?500:b;this.m=null};la(pl,ol);var rl=function(a){return"function"===typeof a.i.__tcfapi||null!=ql(a)};
pl.prototype.addEventListener=function(a){var b={},c=kf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?
0:3,g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{sl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),d=0),c()}};pl.prototype.removeEventListener=function(a){a&&a.listenerId&&sl(this,"removeEventListener",null,a.listenerId)};
var ul=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=tl(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:m&&tl(a.purpose.consents,b)}else l=Tf("ticdac");else l=1===h?a.purpose&&a.vendor?
tl(a.purpose.legitimateInterests,b)&&tl(a.vendor.legitimateInterests,void 0===d?"755":d):Tf("ticdac"):!0;return l},tl=function(a,b){return!(!a||!a[b])},sl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(ql(a)){vl(a);var f=++a.P;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},ql=function(a){if(a.a)return a.a;a.a=nl(a.i,"__tcfapiLocator");return a.a},vl=function(a){a.m||
(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},kl(a.i,a.m))};var wl={1:0,3:0,4:0,7:3,9:3,10:3};function xl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var yl=xl("",550),zl=xl("",500);function Al(){var a=O.tcf||{};return O.tcf=a}
var Bl=function(a,b){this.m=a;this.a=b;this.i=Wa();},Cl=function(a){},Dl=function(a){},Jl=function(){var a=Al(),b=new pl(D,3E3),c=new Bl(b,a);if((El()?!0===D.gtag_enable_tcf_support:!1!==D.gtag_enable_tcf_support)&&!a.active&&("function"===typeof D.__tcfapi||rl(b))){a.active=!0;a.Gb={};Fl();var d=setTimeout(function(){Gl(a);Hl(a);d=null},zl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Gl(a),Hl(a),Cl(c);else{var f;if(!1===e.gdprApplies)f=Il(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in wl)wl.hasOwnProperty(h)&&("1"===h?g["1"]=!1===e.gdprApplies||"error"===e.cmpStatus||0!==e.internalErrorState||"loaded"===e.cmpStatus&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)?!1===e.gdprApplies||"tcunavailable"===e.tcString||Tf("tntac")&&("string"!==typeof e.tcString||!e.tcString.length)?!0:ul(e,"1",0):!1:g[h]=ul(e,h,wl[h]));f=g}f&&(a.tcString=e.tcString||
"tcempty",a.Gb=f,Hl(a),Cl(c))}}),Dl(c)}catch(e){d&&(clearTimeout(d),d=null),Gl(a),Hl(a)}}};function Gl(a){a.type="e";a.tcString="tcunavailable";a.Gb=Il()}function Fl(){var a={};hg((a.ad_storage="denied",a.wait_for_update=yl,a))}var El=function(){var a=!1;a=!0;return a};function Il(){var a={},b;for(b in wl)wl.hasOwnProperty(b)&&(a[b]=!0);return a}
function Hl(a){var b={};ig((b.ad_storage=a.Gb["1"]?"granted":"denied",b))}var Kl=function(){var a=Al();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Ll=function(){var a=Al();return a.active?a.tcString||"":""},Ml=function(a){if(!wl.hasOwnProperty(String(a)))return!0;var b=Al();return b.active&&b.Gb?!!b.Gb[String(a)]:!0};function Nl(a,b,c){function d(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var v=[],u=function(z,C){C&&v.push(z+"="+encodeURIComponent(C))},w="https://www.google.com";if(cg()){var y=jg(I.o);u("gcs",kg());r&&u("gcu","1");u("rnd",n);if((!f||g&&"aw.ds"!==g)&&jg(I.o)){var x=Bi("_gcl_aw");u("gclaw",x.join("."))}u("url",String(D.location).split(/[?#]/)[0]);u("dclid",Ol(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
u("gdpr_consent",Ll());"1"===ki(!1)._up&&u("gtm_up","1");u("gclid",Ol(b,f));u("gclsrc",g);u("gtm",jl(!c));var B=w+"/pagead/landing?"+v.join("&");Qf(B)}}var e=Ei(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=cg();if(l||m){var n=""+Ch();m?lg(function(){d();jg(I.o)||fg(function(r){return d(!0,r.Pe)},I.o)},[I.o]):d()}}function Ol(a,b){var c=a&&!jg(I.o);return b&&c?"0":b}var Pl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,
null))}return!1};var Yl=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Zl=["SCRIPT","IMG","SVG","PATH"];function am(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=am(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function bm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];0<=Zl.indexOf(f.tagName.toUpperCase())||0===f.childElementCount&&b.push(f)}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var g=a,h=g.elements,l=[],m=0;m<h.length;m++){var n=h[m],r=n.textContent;n.value&&(r=n.value);if(r){var t=r.match(Yl);if(t){var q=t[0],v;if(D.location){var u=jh(D.location,"host",!0);v=0<=q.toLowerCase().indexOf(u)}else v=!1;v||l.push({element:n,
Si:q})}}}for(var w=[],y=10<l.length?"3":g.status,x=0;x<l.length&&10>x;x++){var B=l[x].element;w.push({querySelector:am(B),tagName:B.tagName,isVisible:!Pl(B),type:1})}return{elements:w,status:y}}var Km=function(){var a=!0;Ml(7)&&Ml(9)&&Ml(10)||(a=!1);var b=!0;b=!1;b&&!Jm()&&(a=!1);return a},Jm=function(){var a=!0;Ml(3)&&Ml(4)||(a=!1);return a};function en(){var a=O;return a.gcq=a.gcq||new fn}
var gn=function(a,b,c){en().register(a,b,c)},hn=function(a,b,c,d){en().push("event",[b,a],c,d)},jn=function(a,b){en().push("config",[a],b)},kn=function(a,b,c){en().push("get",[a,b],c)},ln={},mn=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},nn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},fn=function(){this.m={};this.i={};this.a=[]},on=function(a,b){var c=Xi(b);return a.m[c.containerId]=a.m[c.containerId]||new mn},
pn=function(a,b,c){if(b){var d=Xi(b);if(d&&1===on(a,b).status){on(a,b).status=2;var e={};zk&&(e.timeoutId=D.setTimeout(function(){ef(38);lk()},3E3));a.push("require",[e],d.containerId);ln[d.containerId]=Wa();if($i()){}else{var g="/gtag/js?id="+
encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=D.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Wk(c,g)||h;Gf(l)}}}},qn=function(a,b,c,d){if(d.ca){var e=on(a,d.ca),f=e.m;if(f){var g=F(c),h=F(e.targetConfig[d.ca]),l=F(e.containerConfig),m=F(e.i),n=F(a.i),r=Wg("gtm.uniqueEventId"),t=Xi(d.ca).prefix,q=el(dl(cl(bl(al($k(Zk(g),h),l),m),n),function(){Ck(r,t,"2");}),function(){
Ck(r,t,"3");});try{Ck(r,t,"1");f(d.ca,b,d.m,q)}catch(v){Ck(r,t,"4");}}}};
fn.prototype.register=function(a,b,c){if(3!==on(this,a).status){on(this,a).m=b;on(this,a).status=3;c&&(on(this,a).i=c);var d=Xi(a),e=ln[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=Wg("gtm.uniqueEventId"),l=g,m=Wa()-f;if(zk&&!qk[h]){h!==mk&&(ik(),mk=h);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);uk=uk?uk+","+n:"&cl="+n}delete ln[d.containerId]}this.flush()}};
fn.prototype.push=function(a,b,c,d){var e=Math.floor(Wa()/1E3);pn(this,c,b[0][I.Fa]||this.i[I.Fa]);this.a.push(new nn(a,e,c,b,d));d||this.flush()};
fn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==on(this,c.ca).status&&!a)return;zk&&D.clearTimeout(c.a[0].timeoutId);break;case "set":Qa(c.a[0],function(n,r){F(eb(n,r),b.i)});break;case "config":var d=c.a[0],e=!!d[I.Yb];delete d[I.Yb];var f=on(this,c.ca),g=Xi(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.a&&e||qn(this,I.ka,d,c);f.a=!0;delete d[I.vb];h?F(d,f.containerConfig):
F(d,f.targetConfig[c.ca]);break;case "event":qn(this,c.a[1],c.a[0],c);break;case "get":var l={},m=(l[I.wa]=c.a[0],l[I.va]=c.a[1],l);qn(this,I.Da,m,c);}this.a.shift()}};var rn=function(a,b,c){};var sn=function(a,b,c,d){};var tn=function(a){};var un=function(a,b,c){};var vn=function(a,b){
return!0};var wn=function(a,b){var c;return c};var xn=function(a){};var yn=!1,zn=[];function An(){if(!yn){yn=!0;for(var a=0;a<zn.length;a++)N(zn[a])}}var Bn=function(a){yn?N(a):zn.push(a)};var Cn=function(a){H(this.i.a,["listener:!Fn"],arguments);Ne(this,"process_dom_events","window","load");Bn(wb(a))};var Dn=function(a,b){var c;var d=!1;var e=vb(c,this.m,d);void 0===e&&void 0!==c&&ef(45);return e};var En=function(a){var b;var f=!1;var g=vb(b,this.m,f);void 0===g&&void 0!==b&&ef(45);return g};var Fn=function(a,b){var c=null,d=!1;
return vb(c,this.m,d)};var Gn=function(a){var b;var h=!1;return vb(b,this.m,h)};var Hn=function(a){var b;return b};var In=function(a,b){b=void 0===b?!0:b;var c;return c};var Jn=function(a){var b=null;return b};var Kn=function(a,b){var c;return c};var Ln=function(a,b){var c;return c};var Mn=function(a){var b="";return b};var Nn=function(a){var b="";return b};var Ze=function(){Ne(this,"get_user_agent");return D.navigator.userAgent};var On=function(a,b){};var Pn={},Qn=function(a,b,c,d){H(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ne(this,"inject_script",a);var e=this.m,f=function(){b instanceof gb&&b.Ka(e)},g=function(){c instanceof gb&&c.Ka(e)};if(!d){Gf(a,f,g);return}var h=d;Pn[h]?(Pn[h].onSuccess.push(f),Pn[h].onFailure.push(g)):(Pn[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Pn[h].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Pn[h].onFailure,m=0;m<l.length;m++)N(l[m]);Pn[h]=null},Gf(a,f,g));};var Rn=function(){return!1},Sn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Tn=function(){};var Un=function(a,b){var c=!1;return c};var Vn=function(){var a="";return a};var Wn=function(){var a="";return a};var Xn=function(a,b,c){};var Yn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var Zn=function(a,b,c){H(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ne(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=D,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=wb(b,this.m,d),!0;return!1};var $n=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var ao=function(a,b,c){var d=this;};var bo={},co={};bo.getItem=function(a){var b=null;return b};
bo.setItem=function(a,b){};
bo.removeItem=function(a){};bo.clear=function(){};var eo=function(a){var b;return b};var Mc=function(){var a=new Ye;$i()?(a.add("injectHiddenIframe",Ha),a.add("injectScript",Ha)):(a.add("injectHiddenIframe",On),a.add("injectScript",Qn));var b=Xn;a.add("Math",Ge());a.add("TestHelper",af());a.add("addEventCallback",tn);a.add("aliasInWindow",vn);a.add("assertApi",Ce);a.add("assertThat",De);a.add("callInWindow",
wn);a.add("callLater",xn);a.add("copyFromDataLayer",Dn);a.add("copyFromWindow",En);a.add("createArgumentsQueue",Fn);a.add("createQueue",Gn);a.add("decodeUri",He);a.add("decodeUriComponent",Ie);a.add("encodeUri",Je);a.add("encodeUriComponent",Ke);a.add("fail",Le);a.add("fromBase64",Hn,!("atob"in D));a.add("generateRandom",Me);a.add("getContainerVersion",Oe);a.add("getCookieValues",In);a.add("getQueryParameters",Kn);a.add("getReferrerQueryParameters",Ln);a.add("getReferrerUrl",Mn);a.add("getTimestamp",
Pe);a.add("getTimestampMillis",Pe);a.add("getType",Qe);a.add("getUrl",Nn);a.add("localStorage",Sn,!Rn());a.add("logToConsole",Tn);a.add("makeInteger",Se);a.add("makeNumber",Te);a.add("makeString",Ue);a.add("makeTableMap",Ve);a.add("mock",Xe);a.add("queryPermission",Un);a.add("readCharacterSet",Vn);a.add("readTitle",Wn);a.add("sendPixel",b);a.add("setCookie",Yn);a.add("setInWindow",Zn);a.add("sha256",ao);a.add("templateStorage",bo);a.add("toBase64",eo,!("btoa"in D));a.add("JSON",Re(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));
return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ab();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Kc,Td;
function fo(){var a=data.runtime||[],b=data.runtime_lines;Kc=new Ic;go();kd=function(e,f,g){ho(f);var h=new mb;Qa(f,function(q,v){var u=vb(v);void 0===u&&void 0!==v&&ef(44);h.set(q,u)});Kc.a.a.B=Gd();var l={Fg:Ud(e),eventId:void 0!==g?g.id:void 0,Ab:function(){return e},log:function(){}};if(Ek()){var m=Fk(),n=void 0,r=void 0;l.da={i:{},a:function(q,v,u){1===v&&(n=q);7===v&&(r=u);m(q,v,u)},m:We()};l.log=function(q,v){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:u})}}}var t=
Lc(l,[e,h]);Kc.a.a.B=void 0;t instanceof ya&&"return"===t.a&&(t=t.i);return wb(t)};Nc();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Cd(d,b[c]);Kc.oc(d)}}function ho(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ia(b)&&(a.gtmOnSuccess=function(){N(b)});Ia(c)&&(a.gtmOnFailure=function(){N(c)})}
function go(){var a=Kc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Oc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function io(a){void 0!==a&&Qa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Pg[e]=Pg[e]||[];Pg[e].push(b)}})};var jo="HA GF G UA AW DC".split(" "),ko=!1,lo={},mo=!1;function no(a,b){var c={event:a};b&&(c.eventModel=F(b),b[I.Nc]&&(c.eventCallback=b[I.Nc]),b[I.Vb]&&(c.eventTimeout=b[I.Vb]));return c}function oo(){return ko}
var ro={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!ub(a[2])&&
void 0!=a[2])return;c=a[2]}var d=no(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return mo=!0,oo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Td.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&ub(a[1])?b=F(a[1]):3==a.length&&p(a[1])&&(b={},ub(a[2])||La(a[2])?b[a[1]]=F(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){oo()&&F(a[2],{subcommand:a[1]})}if(3===a.length){ef(39);var c=Qg(),d=a[1];"default"===d?(b(),hg(a[2])):"update"===d&&(b(),ig(a[2],c))}}};
ro.get=function(a){};var so={policy:!0};
var to=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},vo=function(a){var b=uo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Mo=function(a){if(Lo(a))return a;this.a=a};Mo.prototype.oh=function(){return this.a};var Lo=function(a){return!a||"object"!==sb(a)||ub(a)?!1:"getUntrustedUpdateValue"in a};Mo.prototype.getUntrustedUpdateValue=Mo.prototype.oh;var No=[],Oo=!1,Po=function(a){return D["dataLayer"].push(a)},Qo=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function Ro(a){var b=a._clear;Qa(a,function(d,e){"_clear"!==d&&(b&&Zg(d,void 0),Zg(d,e))});Lg||(Lg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Qg(),a["gtm.uniqueEventId"]=c,Zg("gtm.uniqueEventId",c));return Uk(a)}
function So(){for(var a=!1;!Oo&&0<No.length;){Oo=!0;delete Tg.eventModel;Vg();var b=No.shift();if(null!=b){var c=Lo(b);if(c){var d=b;b=Lo(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=Wg(g,1);if(La(h)||ub(h))h=F(h);Ug[g]=h}}try{if(Ia(b))try{b.call(Xg)}catch(u){}else if(La(b)){var l=
b;if(p(l[0])){var m=l[0].split("."),n=m.pop(),r=l.slice(1),t=Wg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Ra(b)){a:{var q=b;if(q.length&&p(q[0])){var v=ro[q[0]];if(v&&(!c||!so[q[0]])){b=v(q);break a}}b=void 0}if(!b){Oo=!1;continue}}a=Ro(b)||a}}finally{c&&Vg(!0)}}Oo=!1}return!a}
function To(){var a=So();try{to(D["dataLayer"],Pd.C)}catch(b){}return a}
var Vo=function(){var a=Ef("dataLayer",[]),b=Ef("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Hj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Mo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);No.push.apply(No,e);if(300<
this.length)for(ef(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return So()&&h};var d=a.slice(0);No.push.apply(No,d);Uo()&&N(To)},Uo=function(){var a=!0;return a};var Wo={};Wo.Zb=new String("undefined");
var Xo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Wo.Zb?b:a[d]);return c.join("")}};Xo.prototype.toString=function(){return this.a("undefined")};Xo.prototype.valueOf=Xo.prototype.toString;Wo.rg=Xo;Wo.$c={};Wo.Wg=function(a){return new Xo(a)};var Yo={};Wo.Zh=function(a,b){var c=Qg();Yo[c]=[a,b];return c};Wo.Se=function(a){var b=a?0:1;return function(c){var d=Yo[c];if(d&&"function"===typeof d[b])d[b]();Yo[c]=void 0}};Wo.wh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Wo.Rh=function(a){if(a===Wo.Zb)return a;var b=Qg();Wo.$c[b]=a;return'google_tag_manager["'+Pd.C+'"].macro('+b+")"};Wo.Ih=function(a,b,c){a instanceof Wo.rg&&(a=a.a(Wo.Zh(b,c)),b=Ha);return{pd:a,I:b}};var Zo=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Mf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},$o=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},ap=function(a,b,c){$o(a)[b]=c},bp=function(a,b,c,d){var e=$o(a),f=Xa(e,b,d);e[b]=c(f)},cp=function(a,b,c){var d=$o(a);return Xa(d,b,c)};var dp=["input","select","textarea"],ep=["button","hidden","image","reset","submit"],fp=function(a){var b=a.tagName.toLowerCase();return!Ma(dp,function(c){return c===b})||"input"===b&&Ma(ep,function(c){return c===a.type.toLowerCase()})?!1:!0},gp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Pf(a,["form"],100)},hp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(fp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var ip=!!D.MutationObserver,jp=void 0,kp=function(a){if(!jp){var b=function(){var c=L.body;if(c)if(ip)(new MutationObserver(function(){for(var e=0;e<jp.length;e++)N(jp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Kf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<jp.length;e++)N(jp[e])}))})}};jp=[];L.body?b():N(b)}jp.push(a)};var wp=D.clearTimeout,xp=D.setTimeout,S=function(a,b,c){if($i()){b&&N(b)}else return Gf(a,b,c)},yp=function(){return new Date},zp=function(){return D.location.href},Ap=function(a){return kh(mh(a),"fragment")},Bp=function(a){return lh(mh(a))},Cp=function(a,b){return Wg(a,b||2)},Dp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Po(a)):d=Po(a);return d},Ep=function(a,b){D[a]=b},W=function(a,b,c){b&&
(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},Fp=function(a,b,c){return qh(a,b,void 0===c?!0:!!c)},Gp=function(a,b,c){return 0===zh(a,b,c)},Hp=function(a,b){if($i()){b&&N(b)}else If(a,b)},Ip=function(a){return!!cp(a,"init",!1)},Jp=function(a){ap(a,"init",!0)},Kp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Jg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(bj("https://","http://",c))},Lp=function(a,
b){var c=a[b];return c},Mp=function(a,b,c){zk&&(yb(a)||Dk(c,b,a))};
var Np=Wo.Ih;function jq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var kq=new Oa;function lq(a,b){function c(g){var h=mh(g),l=kh(h,"protocol"),m=kh(h,"host",!0),n=kh(h,"port"),r=kh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function mq(a){return nq(a)?1:0}
function nq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=F(a,{});F({arg1:c[d],any_of:void 0},e);if(mq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(q){}}f=!1}return f;case "_ew":return jq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=A(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var m;var n=a.ignore_case?"i":void 0;try{var r=String(c)+n,t=kq.get(r);t||(t=new RegExp(c,n),kq.set(r,t));m=t.test(b)}catch(q){m=!1}return m;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return lq(b,c)}return!1};var oq={},pq=encodeURI,X=encodeURIComponent,qq=Jf;var rq=function(a,b){if(!a)return!1;var c=kh(mh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var sq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};oq.xh=function(){var a=!1;return a};function Br(){return D.gaGlobal=D.gaGlobal||{}}var Cr=function(){var a=Br();a.hid=a.hid||Na();return a.hid},Dr=function(a,b){var c=Br();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var ds=window,es=document,fs=function(a){var b=ds._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ds["ga-disable-"+a])return!0;try{var c=ds.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=oh("AMP_TOKEN",String(es.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return es.getElementById("__gaOptOutExtension")?!0:!1};function is(a){delete a.eventModel[I.vb];ks(a.eventModel)}
var ks=function(a){Qa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.na]||{};Qa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ns=function(a,b,c){hn(b,c,a)},os=function(a,b,c){hn(b,c,a,!0)},qs=function(a,b){};
function ps(a,b){}var Z={b:{}};

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);Mp(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=W("google_trackConversion");if(Ia(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=sq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:jl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Ll();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){S(b,d,c)};cg()?lg(function(){jg(I.o)?e():fg(e,I.o)},[I.o]):(Qj(),e())})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){Mp(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(ah(a.vtp_gtmEventId,"event"))})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Zo(c,"gtm.click");Dp(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Ip("cl")){var c=W("document");Kf(c,"click",a,!0);Jp("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Mp(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Fp(a.vtp_name,Cp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<A(e,t))return}else if("write"===r){if(-1<A(f,t))return}else if("readwrite"===r){if(-1<A(f,t)&&-1<A(e,t))return}else if("execute"===r){if(-1<A(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Na(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Dp({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],m=l.indexOf(g);-1!==m&&(l.splice(m,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Z.__tg=g;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,m=g.vtp_firingId;
if(g.vtp_isListeningTag){var n=d[m];n?b(m,n):e.push(m)}else{c[h]=l;for(var r=0,t;t=l[r];r++)d[t]=h;for(var q=0;q<e.length;q++)b(e[q],h)}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Cp("gtm.url",1);c=c||zp();var d=b[a("vtp_component")];if(!d||"URL"==d)return Bp(String(c));var e=mh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?La(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var n=0;n<m.length;n++){var r=kh(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=kh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Cp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Mp(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.ud&&b.wd>=b.ud)b.qd&&W("self").clearInterval(b.qd);else{b.wd++;var c=yp().getTime();Dp({event:b.S,"gtm.timerId":b.qd,"gtm.timerEventNumber":b.wd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.ud,"gtm.timerStartTime":b.nf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.nf,"gtm.triggers":b.ni})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{S:b.vtp_eventName,wd:0,interval:Number(b.vtp_interval),ud:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),ni:String(b.vtp_uniqueTriggerId||"0"),nf:yp().getTime()};c.qd=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(m,n){if(cg()&&!d[m]){var r=function(){var t=Vj(),q="gtm"+Qg(),v=h(n),u={name:q};g(v,u,!0);t("create",m,u);t(function(){t.remove(q)})};fg(r,I.M);fg(r,I.o);d[m]=!0}}var b,c={},d={},e={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,
_cd2l:!0},f={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},g=function(m,n,r){var t=0;if(m)for(var q in m)if(m.hasOwnProperty(q)&&(r&&e[q]||!r&&void 0===e[q])){var v=f[q]?Ta(m[q]):m[q];"anonymizeIp"!=q||v||(v=void 0);n[q]=v;t++}return t},h=function(m){var n={};m.vtp_gaSettings&&F(sq(m.vtp_gaSettings.vtp_fieldsToSet,
"fieldName","value"),n);F(sq(m.vtp_fieldsToSet,"fieldName","value"),n);jg(I.M)||(n.storage="none");jg(I.o)||(n.allowAdFeatures=!1,n.storeGac=!1);Km()||(n.allowAdFeatures=!1);Jm()||(n.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(n._x_19=m.vtp_transportUrl);return n},l=function(m){function n(ra,R){void 0!==R&&C("set",ra,R)}var r={},t={},q={},v={};if(m.vtp_gaSettings){var u=
m.vtp_gaSettings;F(sq(u.vtp_contentGroup,"index","group"),t);F(sq(u.vtp_dimension,"index","dimension"),q);F(sq(u.vtp_metric,"index","metric"),v);var w=F(u);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=void 0;w.vtp_metric=void 0;m=F(m,w)}F(sq(m.vtp_contentGroup,"index","group"),t);F(sq(m.vtp_dimension,"index","dimension"),q);F(sq(m.vtp_metric,"index","metric"),v);var y=h(m),x=Xj(m.vtp_functionName);if(Ia(x)){var B="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?
""!==m.vtp_trackerName&&(z=m.vtp_trackerName,B=z+"."):(z="gtm"+Qg(),B=z+".");var C=function(ra){var R=[].slice.call(arguments,0);R[0]=B+R[0];x.apply(window,R)},E=function(ra,R){return void 0===R?R:ra(R)},G=function(ra,R){if(R)for(var Za in R)R.hasOwnProperty(Za)&&C("set",ra+Za,R[Za])},M=function(){},
P={name:z};g(y,P,!0);var ba=m.vtp_trackingId||r.trackingId;x("create",ba,P);C("set","&gtm",jl(!0));cg()&&(C("set","&gcs",kg()),a(ba,m));y._x_19&&(null==Df&&delete y._x_19,y._x_20&&!c[z]&&(c[z]=!0,x(bk(z,String(y._x_20)))));m.vtp_enableRecaptcha&&C("require","recaptcha","recaptcha.js");(function(ra,R){void 0!==m[R]&&C("set",ra,m[R])})("nonInteraction","vtp_nonInteraction");
G("contentGroup",t);G("dimension",q);G("metric",v);var ca={};g(y,ca,!1)&&C("set",ca);var ea;m.vtp_enableLinkId&&C("require","linkid","linkid.js");C("set","hitCallback",function(){var ra=y&&y.hitCallback;Ia(ra)&&ra();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){
m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());var J={hitType:"event",eventCategory:String(m.vtp_eventCategory||r.category),eventAction:String(m.vtp_eventAction||r.action),eventLabel:E(String,m.vtp_eventLabel||r.label),eventValue:E(Sa,m.vtp_eventValue||r.value)};g(ea,J,!1);C("send",J);}else if("TRACK_SOCIAL"==m.vtp_trackType){}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==
m.vtp_trackType){}else{m.vtp_enableEcommerce&&(C("require","ec","ec.js"),M());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var ua="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","displayfeatures",void 0,{cookieName:ua})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var ib=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");C("require","adfeatures",{cookieName:ib})}ea?C("send","pageview",ea):C("send","pageview");m.vtp_autoLinkDomains&&Yj(B,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);}if(!b){var jb=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&
(jb="internal/"+jb);b=!0;var Tb=Wk(y._x_19,"/analytics.js"),ce=bj("https:","http:","//www.google-analytics.com/"+jb,y&&!!y.forceSSL);S("analytics.js"===jb&&Tb?Tb:ce,function(){var ra=Vj();ra&&ra.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};(function(m){Z.__ua=m;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(m){lg(function(){l(m)},
[I.M,I.o])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(te(mh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();





Z.b.aev=["google"],function(){function a(q,v){var u=ah(q,"gtm");if(u)return u[v]}function b(q,v,u,w){w||(w="element");var y=q+"."+v,x;if(n.hasOwnProperty(y))x=n[y];else{var B=a(q,w);if(B&&(x=u(B),n[y]=x,r.push(y),35<r.length)){var z=r.shift();delete n[z]}}return x}function c(q,v,u){var w=a(q,t[v]);return void 0!==w?w:u}function d(q,v){if(!q)return!1;var u=e(zp());La(v)||(v=String(v||"").replace(/\s+/g,"").split(","));for(var w=[u],y=0;y<v.length;y++){var x=v[y];if(x.hasOwnProperty("is_regex"))if(x.is_regex)try{x=
new RegExp(x.domain)}catch(z){continue}else x=x.domain;if(x instanceof RegExp){if(x.test(q))return!1}else{var B=x;if(0!=B.length){if(0<=e(q).indexOf(B))return!1;w.push(e(B))}}}return!rq(q,w)}function e(q){m.test(q)||(q="http://"+q);return kh(mh(q),"HOST",!0)}function f(q,v,u){switch(q){case "SUBMIT_TEXT":return b(v,"FORM."+q,g,"formSubmitElement")||u;case "LENGTH":var w=b(v,"FORM."+q,h);return void 0===w?u:w;case "INTERACTED_FIELD_ID":return l(v,"id",u);case "INTERACTED_FIELD_NAME":return l(v,"name",
u);case "INTERACTED_FIELD_TYPE":return l(v,"type",u);case "INTERACTED_FIELD_POSITION":var y=a(v,"interactedFormFieldPosition");return void 0===y?u:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(v,"interactSequenceNumber");return void 0===x?u:x;default:return u}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Mf(q,"value");case "button":return Nf(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var v=0,u=0;u<q.elements.length;u++)fp(q.elements[u])&&
v++;return v}}function l(q,v,u){var w=a(q,"interactedFormField");return w&&Mf(w,v)||u}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(q){var v=q.vtp_gtmEventId,u=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(v,"element");return y&&y.tagName||u;case "TEXT":return b(v,w,Nf)||u;case "URL":var x;a:{var B=String(a(v,"elementUrl")||u||""),z=mh(B),C=String(q.vtp_component||"URL");switch(C){case "URL":x=B;break a;case "IS_OUTBOUND":x=d(B,q.vtp_affiliatedDomains);break a;default:x=kh(z,C,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===q.vtp_attribute)E=c(v,
w,u);else{var G=q.vtp_attribute,M=a(v,"element");E=M&&Mf(M,G)||u||""}return E;case "MD":var P=q.vtp_mdValue,ba=b(v,"MD",rp);return P&&ba?up(ba,P)||u:ba||u;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),v,u);default:var ca=c(v,w,u);Mp(ca,"aev",q.vtp_gtmEventId);return ca}})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=W("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=
0})(function(g){function h(){q("gdpr_consent",Ll());}function l(){}function m(w){var y=!0;w&&l();y&&b.push(n)}Qj();var n={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,google_conversion_value:g.vtp_conversionValue||0,
google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:jl()};g.vtp_rdp&&(n.google_restricted_data_processing=!0);void 0!=Cp(I.N)&&!1!==Cp(I.N)&&(n.google_gtm_url_processor=function(w){return w=pj(w)});var r=function(w){return function(y,x,B){var z="DATA_LAYER"==w?Cp(B):g[x];z&&(n[y]=z)}},t=r("JSON");t("google_conversion_currency",
"vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(t=r(g.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),n.google_conversion_items&&n.google_conversion_items.map&&
(n.google_conversion_items=n.google_conversion_items.map(function(w){return{value:w.price,quantity:w.quantity,item_id:w.id}})));var q=function(w,y){void 0!==y&&((n.google_additional_conversion_params=n.google_additional_conversion_params||{})[w]=y)},v=function(w){return function(y,x,B,z){var C="DATA_LAYER"==w?Cp(B):g[x];z(C)&&q(y,C)}};g.vtp_transportUrl&&(n.google_transport_url=g.vtp_transportUrl);var u=Wk(g.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");g.vtp_enableNewCustomerReporting&&(t=v(g.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(n.google_gcl_cookie_prefix=
g.vtp_conversionCookiePrefix),n.google_read_gcl_cookie_opt_out=!1):n.google_read_gcl_cookie_opt_out=!0;"1"===ki(!1)._up&&q("gtm_up","1");h();(function(){cg()?lg(function(){h();var w=jg(I.o),y=!w&&void 0!=Cp(I.N)&&!1!==Cp(I.N);!g.vtp_transportUrl&&y&&(n.google_transport_url="https://pagead2.googlesyndication.com/");q("gcs",kg());m(w);w||fg(function(){h();n=F(n);!g.vtp_transportUrl&&n.google_transport_url&&delete n.google_transport_url;q("gcs",kg());q("gcu","1");m(!0)},I.o)},[I.o]):m(!0)})();a||(a=
!0,S(u,f(),e(u)))})}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=W(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=jf(W("UET"),{ti:b.vtp_tagId,q:d});D[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();



Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=L.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var n=h.getAttribute("data-gtmsrc");n&&(m.src=n,Ff(m,l));d.insertBefore(m,null);n||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Hj(function(){var g,h=O;h.postscribe||(h.postscribe=ve);g=h.postscribe;var l={done:e},m=L.createElement("div");m.style.display="none";m.style.visibility="hidden";L.body.appendChild(m);try{g(m,d,l)}catch(n){N(f)}})};var c=function(d){if(L.body){var e=
d.vtp_gtmOnFailure,f=Np(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.pd,h=f.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Of(g),h,e)()}else xp(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Of('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}qq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var rs={};rs.macro=function(a){if(Wo.$c.hasOwnProperty(a))return Wo.$c[a]},rs.onHtmlSuccess=Wo.Se(!0),rs.onHtmlFailure=Wo.Se(!1);rs.dataLayer=Xg;rs.callback=function(a){Og.hasOwnProperty(a)&&Ia(Og[a])&&Og[a]();delete Og[a]};function ss(){O[Pd.C]=rs;$a(Pg,Z.b);sd=sd||Wo;td=Ld}
function ts(){Sf.gtm_3pds=!0;Sf.gtag_cs_api=!0;O=D.google_tag_manager=D.google_tag_manager||{};Jl();if(O[Pd.C]){var a=O.zones;a&&a.unregisterChild(Pd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ld.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)od.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)nd.push(g[h]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);md.push(r)}qd=Z;rd=mq;var q=data.permissions||{},v=data.sandboxed_scripts,u=data.security_groups;fo();Td=new Sd(q);if(void 0!==v)for(var w=["sandboxedScripts"],y=0;y<v.length;y++){var x=v[y].replace(/^_*/,"");Pg[x]=w}io(u);ss();Vo();
Cj=!1;Dj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Fj();else{Kf(L,"DOMContentLoaded",Fj);Kf(L,"readystatechange",Fj);if(L.createEventObject&&L.documentElement.doScroll){var B=!0;try{B=!D.frameElement}catch(G){}B&&Gj()}Kf(D,"load",Fj)}yn=!1;"complete"===L.readyState?An():Kf(D,"load",An);
a:{if(!zk)break a;D.setInterval(Ak,864E5);}Mg=(new Date).getTime();}}
(function(a){var b=!0;b=!1;if(b){a();return}var c=function(){var g=
D["google.tagmanager.debugui2.queue"];g||(g=[],D["google.tagmanager.debugui2.queue"]=g,Gf("https://www.googletagmanager.com/debug/bootstrap"));return g},d="x"===kh(D.location,"query",!1,void 0,"gtm_debug");if(!d&&L.referrer){var e=mh(L.referrer);d="tagassistant.google.com"===jh(e,"host")}if(!d){var f=qh("__TAG_ASSISTANT");d=f.length&&f[0].length}D.__TAG_ASSISTANT_API&&(d=!0);if(d&&Df){c().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Df,resume:function(){a()}}});return}
a()})(ts);

})()
