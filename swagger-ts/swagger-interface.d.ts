/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«ProcessInstanceBo»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«ProcessInstanceHandlerDto»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«任务节点报价单»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«流程设置»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«研究中心项目信息表»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«雇主首页»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«List«项目基本信息表»» {
    data:array;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«PageInfo«InstitutionSmoPriorityDTO»» {
    data:undefined;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«SOM保存信息» {
    data:undefined;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«boolean» {
    data:boolean;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«string» {
    data:string;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«雇主首页» {
    data:undefined;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«项目smo信息» {
    data:undefined;
    errors:array;
    success:boolean;

}

/**
 * @param data
 * @param errors
 * @param success

 */

export interface ActionResult«项目基本信息表» {
    data:undefined;
    errors:array;
    success:boolean;

}

/**
 * @param accountType
 * @param actualPaymentTotal
 * @param advancePaymentBalance
 * @param advancePaymentTotal
 * @param deductionTotal
 * @param employerTenantId
 * @param enquirySmoRefId
 * @param id
 * @param orderContractId
 * @param partnerProjectId
 * @param tenantId
 * @param version

 */

export interface AdvancePaymentAccountDTO {
    accountType:integer;
    actualPaymentTotal:number;
    advancePaymentBalance:number;
    advancePaymentTotal:number;
    deductionTotal:number;
    employerTenantId:string;
    enquirySmoRefId:string;
    id:string;
    orderContractId:string;
    partnerProjectId:string;
    tenantId:string;
    version:integer;

}

/**
 * @param advancePaymentAccountId
 * @param advancePaymentBalance
 * @param businessId
 * @param businessType
 * @param createTime
 * @param createTimeShow
 * @param detailType
 * @param detailTypeShow
 * @param id
 * @param money
 * @param partnerProjectId
 * @param purchaseOrderNo
 * @param requestNo
 * @param smoName
 * @param statementNo

 */

export interface AdvancePaymentAccountDetailDTO {
    advancePaymentAccountId:string;
    advancePaymentBalance:number;
    businessId:string;
    businessType:integer;
    createTime:string;
    createTimeShow:string;
    detailType:integer;
    detailTypeShow:string;
    id:string;
    money:number;
    partnerProjectId:string;
    purchaseOrderNo:string;
    requestNo:string;
    smoName:string;
    statementNo:string;

}

/**
 * @param advancePaymentStatus
 * @param attachment
 * @param courierNo
 * @param employerApproveName
 * @param employerApproveTime
 * @param employerNodeInstanceId
 * @param employerProcessInstanceId
 * @param employerTenantId
 * @param enquirySmoRefId
 * @param id
 * @param invoiceCode
 * @param invoiceNo
 * @param money
 * @param operation
 * @param orderContractId
 * @param partnerProjectId
 * @param partnerProjectName
 * @param purchaseOrderNo
 * @param remark
 * @param requestNo
 * @param requestPerson
 * @param requestTime
 * @param smoId
 * @param smoName
 * @param trialpayApproveName
 * @param trialpayApproveTime
 * @param updateTime

 */

export interface AdvancePaymentDTO {
    advancePaymentStatus:integer;
    attachment:string;
    courierNo:string;
    employerApproveName:string;
    employerApproveTime:string;
    employerNodeInstanceId:string;
    employerProcessInstanceId:string;
    employerTenantId:string;
    enquirySmoRefId:string;
    id:string;
    invoiceCode:string;
    invoiceNo:string;
    money:number;
    operation:integer;
    orderContractId:string;
    partnerProjectId:string;
    partnerProjectName:string;
    purchaseOrderNo:string;
    remark:string;
    requestNo:string;
    requestPerson:string;
    requestTime:string;
    smoId:string;
    smoName:string;
    trialpayApproveName:string;
    trialpayApproveTime:string;
    updateTime:string;

}

/**
 * @param advancePaymentId
 * @param auditType
 * @param password
 * @param rejectReason

 */

export interface AdvancePaymentFlowPushDTO {
    advancePaymentId:string;
    auditType:integer;
    password:string;
    rejectReason:string;

}

/**
 * @param attachment
 * @param courierNo
 * @param id
 * @param invoiceCode
 * @param invoiceNo
 * @param money
 * @param orderContractId
 * @param partnerProjectId
 * @param partnerProjectName
 * @param password
 * @param remark

 */

export interface ApplyAdvancePaymentParamDTO {
    attachment:string;
    courierNo:string;
    id:string;
    invoiceCode:string;
    invoiceNo:string;
    money:number;
    orderContractId:string;
    partnerProjectId:string;
    partnerProjectName:string;
    password:string;
    remark:string;

}

/**
 * @param message
 * @param type

 */

export interface ArchiveSignOutDTO {
    message:string;
    type:integer;

}

/**
 * @param cnName
 * @param code
 * @param code2
 * @param code3
 * @param enName
 * @param hkName
 * @param id
 * @param intCode
 * @param isoCode
 * @param level
 * @param orderNum
 * @param parentId
 * @param transformationMark
 * @param twName
 * @param type

 */

export interface AreaDTO {
    cnName:string;
    code:string;
    code2:string;
    code3:string;
    enName:string;
    hkName:string;
    id:string;
    intCode:string;
    isoCode:string;
    level:integer;
    orderNum:integer;
    parentId:string;
    transformationMark:string;
    twName:string;
    type:string;

}

/**
 * @param counting
 * @param keyword
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param refId
 * @param smoId
 * @param sortProperties

 */

export interface BaseCroQueryDTO {
    counting:boolean;
    keyword:string;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    refId:string;
    smoId:string;
    sortProperties:array;

}

/**
 * @param appId
 * @param businessCode
 * @param businessKey
 * @param businessValue
 * @param formId
 * @param formName
 * @param formValueId
 * @param instanceId
 * @param isActive
 * @param processDefId
 * @param processSubjectId
 * @param readWriteType
 * @param scopeType
 * @param summaryForms
 * @param taskId
 * @param tenantId

 */

export interface BusiFormRelationDto {
    appId:string;
    businessCode:string;
    businessKey:string;
    businessValue:string;
    formId:string;
    formName:string;
    formValueId:string;
    instanceId:string;
    isActive:integer;
    processDefId:string;
    processSubjectId:string;
    readWriteType:integer;
    scopeType:string;
    summaryForms:object;
    taskId:string;
    tenantId:string;

}

/**
 * @param address
 * @param advantageAreaDTOS
 * @param approveStatus
 * @param authList
 * @param bankAccount
 * @param bankAccountName
 * @param bankCode
 * @param bankName
 * @param businessScopeList
 * @param cityId
 * @param cityName
 * @param companyCraCount
 * @param companyCrcCount
 * @param companyExperimentCount
 * @param companyRegisterCityId
 * @param companyRegisterCityName
 * @param companyRegisterCountryId
 * @param companyRegisterCountryName
 * @param companyRegisterProvinceId
 * @param companyRegisterProvinceName
 * @param contact
 * @param contactDTOList
 * @param cooperativeSiteDTOList
 * @param countryId
 * @param countryName
 * @param countyId
 * @param countyName
 * @param croId
 * @param croProjectCountFrontDTOS
 * @param croProjectCountList
 * @param email
 * @param enable
 * @param established
 * @param honorList
 * @param id
 * @param inspected
 * @param isLocalized
 * @param isPartner
 * @param logoCloudfileId
 * @param logoUrl
 * @param name
 * @param profile
 * @param provinceId
 * @param provinceName
 * @param registeredCapital
 * @param researcherNumber
 * @param siteCount
 * @param smoMemberDTOS
 * @param socialCreditCode
 * @param successfulCaseList
 * @param taimeiSystemAuth
 * @param taxpayerIdentificationNo
 * @param telephone
 * @param type
 * @param typeId

 */

export interface CRO详情 {
    address:string;
    advantageAreaDTOS:array;
    approveStatus:integer;
    authList:array;
    bankAccount:string;
    bankAccountName:string;
    bankCode:string;
    bankName:string;
    businessScopeList:array;
    cityId:string;
    cityName:string;
    companyCraCount:integer;
    companyCrcCount:integer;
    companyExperimentCount:integer;
    companyRegisterCityId:string;
    companyRegisterCityName:string;
    companyRegisterCountryId:string;
    companyRegisterCountryName:string;
    companyRegisterProvinceId:string;
    companyRegisterProvinceName:string;
    contact:string;
    contactDTOList:array;
    cooperativeSiteDTOList:array;
    countryId:string;
    countryName:string;
    countyId:string;
    countyName:string;
    croId:string;
    croProjectCountFrontDTOS:array;
    croProjectCountList:array;
    email:string;
    enable:integer;
    established:integer;
    honorList:array;
    id:string;
    inspected:integer;
    isLocalized:integer;
    isPartner:integer;
    logoCloudfileId:string;
    logoUrl:string;
    name:string;
    profile:string;
    provinceId:string;
    provinceName:string;
    registeredCapital:string;
    researcherNumber:integer;
    siteCount:integer;
    smoMemberDTOS:array;
    socialCreditCode:string;
    successfulCaseList:array;
    taimeiSystemAuth:array;
    taxpayerIdentificationNo:string;
    telephone:string;
    type:string;
    typeId:string;

}

/**
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquirySmoSiteStatusList
 * @param operation
 * @param partnerProjectId

 */

export interface CalProjectTaskParam {
    enquiryId:string;
    enquirySmoRefId:string;
    enquirySmoSiteStatusList:array;
    operation:integer;
    partnerProjectId:string;

}

/**
 * @param partnerProjectInfoPO
 * @param projectSiteStatisticsFieldsDTO
 * @param searchType
 * @param siteTaskPriceControl
 * @param transManagementTaskPriceControl

 */

export interface CalcalTotalSiteTaskParam {
    partnerProjectInfoPO:undefined;
    projectSiteStatisticsFieldsDTO:undefined;
    searchType:integer;
    siteTaskPriceControl:integer;
    transManagementTaskPriceControl:integer;

}

/**
 * @param joint
 * @param matchMode
 * @param operator
 * @param propertyName
 * @param subConditions
 * @param value
 * @param value2
 * @param values

 */

export interface Condition {
    joint:string;
    matchMode:string;
    operator:string;
    propertyName:string;
    subConditions:array;
    value:string;
    value2:string;
    values:array;

}

/**
 * @param email
 * @param enquirySmoRefId
 * @param id
 * @param mobile
 * @param name
 * @param refId
 * @param smoId
 * @param source
 * @param type

 */

export interface ContactDTO {
    email:string;
    enquirySmoRefId:string;
    id:string;
    mobile:string;
    name:string;
    refId:string;
    smoId:string;
    source:integer;
    type:integer;

}

/**
 * @param templateFileId
 * @param templateFileName
 * @param templateFileUrl

 */

export interface ContractTemplateDTO {
    templateFileId:string;
    templateFileName:string;
    templateFileUrl:string;

}

/**
 * @param id
 * @param itemName
 * @param partnerProjectId
 * @param payNode
 * @param payRatio

 */

export interface ContractTemplateItemDTO {
    id:string;
    itemName:string;
    partnerProjectId:string;
    payNode:string;
    payRatio:integer;

}

/**
 * @param createBy
 * @param createTime
 * @param id
 * @param isDeleted
 * @param itemName
 * @param partnerProjectId
 * @param payNode
 * @param payRatio
 * @param tenantId
 * @param updateBy
 * @param updateTime
 * @param version

 */

export interface ContractTemplateItemPO {
    createBy:string;
    createTime:string;
    id:string;
    isDeleted:integer;
    itemName:string;
    partnerProjectId:string;
    payNode:string;
    payRatio:integer;
    tenantId:string;
    updateBy:string;
    updateTime:string;
    version:integer;

}

/**
 * @param createBy
 * @param createTime
 * @param id
 * @param isDeleted
 * @param templateFileId
 * @param templateFileName
 * @param templateFileUrl
 * @param tenantId
 * @param updateBy
 * @param updateTime
 * @param version

 */

export interface ContractTemplatePO {
    createBy:string;
    createTime:string;
    id:string;
    isDeleted:integer;
    templateFileId:string;
    templateFileName:string;
    templateFileUrl:string;
    tenantId:string;
    updateBy:string;
    updateTime:string;
    version:integer;

}

/**
 * @param conditions
 * @param entityName
 * @param selector
 * @param sortProperties

 */

export interface Criteria {
    conditions:array;
    entityName:string;
    selector:undefined;
    sortProperties:array;

}

/**
 * @param changeResume
 * @param notApproved
 * @param signUp

 */

export interface EmployerIntentPageDTO {
    changeResume:boolean;
    notApproved:boolean;
    signUp:boolean;

}

/**
 * @param bankAccount
 * @param bankAccountName
 * @param bankName
 * @param contractTotalAmount
 * @param enquirySmoRefId
 * @param institutions
 * @param mainAgreementId
 * @param mainAgreementNo
 * @param mainAgreementValidEndDate
 * @param mainAgreementValidStartDate
 * @param orderContractId
 * @param payType
 * @param previousPurchaseOrderNo
 * @param signRate
 * @param smoName

 */

export interface EnquireSignDTO {
    bankAccount:string;
    bankAccountName:string;
    bankName:string;
    contractTotalAmount:number;
    enquirySmoRefId:string;
    institutions:array;
    mainAgreementId:string;
    mainAgreementNo:string;
    mainAgreementValidEndDate:string;
    mainAgreementValidStartDate:string;
    orderContractId:string;
    payType:integer;
    previousPurchaseOrderNo:string;
    signRate:integer;
    smoName:string;

}

/**
 * @param attachment
 * @param continueSign
 * @param id
 * @param mainAgreementId
 * @param mainAgreementNo
 * @param mainAgreementValidEndDate
 * @param mainAgreementValidStartDate
 * @param password
 * @param payWay
 * @param purchaseOrderEndDate
 * @param purchaseOrderNo
 * @param purchaseOrderStartDate

 */

export interface EnquiryArchiveSignDTO {
    attachment:string;
    continueSign:integer;
    id:string;
    mainAgreementId:string;
    mainAgreementNo:string;
    mainAgreementValidEndDate:string;
    mainAgreementValidStartDate:string;
    password:string;
    payWay:integer;
    purchaseOrderEndDate:string;
    purchaseOrderNo:string;
    purchaseOrderStartDate:string;

}

/**
 * @param actualSettleTaskPriceControl
 * @param enquirySendStatus
 * @param id
 * @param operation
 * @param partnerProjectId
 * @param siteTaskPriceControl
 * @param tenantId
 * @param transManagementTaskPriceControl
 * @param visitSingleBudgetPriceControlMax
 * @param visitSingleBudgetPriceControlMin

 */

export interface EnquiryDTO {
    actualSettleTaskPriceControl:integer;
    enquirySendStatus:integer;
    id:string;
    operation:integer;
    partnerProjectId:string;
    siteTaskPriceControl:integer;
    tenantId:string;
    transManagementTaskPriceControl:integer;
    visitSingleBudgetPriceControlMax:integer;
    visitSingleBudgetPriceControlMin:integer;

}

/**
 * @param audit
 * @param continueSign
 * @param endEnquiryReason
 * @param id
 * @param institutions
 * @param inviteSign
 * @param password
 * @param signRate
 * @param siteSmoMembers

 */

export interface EnquirySignDTO {
    audit:integer;
    continueSign:integer;
    endEnquiryReason:string;
    id:string;
    institutions:array;
    inviteSign:integer;
    password:string;
    signRate:integer;
    siteSmoMembers:array;

}

/**
 * @param enquiryId
 * @param id
 * @param partnerInstitutionDTO
 * @param partnerProjectId
 * @param planEnrollment
 * @param siteId
 * @param tenantId

 */

export interface EnquirySiteRefDTO {
    enquiryId:string;
    id:string;
    partnerInstitutionDTO:undefined;
    partnerProjectId:string;
    planEnrollment:integer;
    siteId:string;
    tenantId:string;

}

/**
 * @param allPlanEnrollment
 * @param allSiteCount
 * @param beforeEndEnquiryStatus
 * @param contactDTOList
 * @param contractTotalAmount
 * @param endEnquiryReason
 * @param enquiryId
 * @param enquirySmoSiteRefIds
 * @param enquiryStatus
 * @param handleEnquiryType
 * @param id
 * @param inviteSign
 * @param joinNum
 * @param operation
 * @param partnerProjectId
 * @param partnerProjectName
 * @param password
 * @param projectSiteStatisticsFieldsDTO
 * @param rejectReason
 * @param remark
 * @param resumeOperationStatus
 * @param sendEnquiryTime
 * @param signRate
 * @param smoId
 * @param smoName
 * @param tenantId
 * @param unitpricePerCase
 * @param updateContract
 * @param updateSign
 * @param visitSingleBudgetPriceControlMin
 * @param visitSingleQuote
 * @param visitUnitBudgetCost

 */

export interface EnquirySmoRefDTO {
    allPlanEnrollment:integer;
    allSiteCount:integer;
    beforeEndEnquiryStatus:integer;
    contactDTOList:array;
    contractTotalAmount:number;
    endEnquiryReason:string;
    enquiryId:string;
    enquirySmoSiteRefIds:array;
    enquiryStatus:integer;
    handleEnquiryType:integer;
    id:string;
    inviteSign:integer;
    joinNum:integer;
    operation:integer;
    partnerProjectId:string;
    partnerProjectName:string;
    password:string;
    projectSiteStatisticsFieldsDTO:undefined;
    rejectReason:string;
    remark:string;
    resumeOperationStatus:integer;
    sendEnquiryTime:string;
    signRate:integer;
    smoId:string;
    smoName:string;
    tenantId:string;
    unitpricePerCase:number;
    updateContract:boolean;
    updateSign:boolean;
    visitSingleBudgetPriceControlMin:integer;
    visitSingleQuote:number;
    visitUnitBudgetCost:number;

}

/**
 * @param beforeEndEnquiryStatus
 * @param contractTotalAmount
 * @param createBy
 * @param createTime
 * @param endEnquiryReason
 * @param enquiryId
 * @param enquiryStatus
 * @param id
 * @param inviteSign
 * @param inviteTime
 * @param isDeleted
 * @param noticeChangeResumeTime
 * @param partnerProjectId
 * @param partnerProjectName
 * @param reachIntentionTime
 * @param rejectReason
 * @param rejectTime
 * @param remark
 * @param resumeOperationStatus
 * @param sendEnquiryTime
 * @param signRate
 * @param smoAgreeSignTime
 * @param smoId
 * @param smoName
 * @param submitEnquiryTime
 * @param submitResumeTime
 * @param tenantId
 * @param unitpricePerCase
 * @param updateBy
 * @param updateContractTime
 * @param updateTime
 * @param version
 * @param visitSingleQuote

 */

export interface EnquirySmoRefPO {
    beforeEndEnquiryStatus:integer;
    contractTotalAmount:number;
    createBy:string;
    createTime:string;
    endEnquiryReason:string;
    enquiryId:string;
    enquiryStatus:integer;
    id:string;
    inviteSign:integer;
    inviteTime:string;
    isDeleted:integer;
    noticeChangeResumeTime:string;
    partnerProjectId:string;
    partnerProjectName:string;
    reachIntentionTime:string;
    rejectReason:string;
    rejectTime:string;
    remark:string;
    resumeOperationStatus:integer;
    sendEnquiryTime:string;
    signRate:integer;
    smoAgreeSignTime:string;
    smoId:string;
    smoName:string;
    submitEnquiryTime:string;
    submitResumeTime:string;
    tenantId:string;
    unitpricePerCase:number;
    updateBy:string;
    updateContractTime:string;
    updateTime:string;
    version:integer;
    visitSingleQuote:number;

}

/**
 * @param allPlanEnrollment
 * @param allSiteCount
 * @param enquiryId
 * @param enquirySiteRefId
 * @param enquirySmoRefId
 * @param enquirySmoSiteStatus
 * @param id
 * @param partnerInstitutionDTO
 * @param partnerProjectId
 * @param planEnrollment
 * @param siteId
 * @param siteSmoMemberRefDTOS
 * @param tenantId
 * @param updateOrderContractPlanEnrollment

 */

export interface EnquirySmoSiteRefDTO {
    allPlanEnrollment:integer;
    allSiteCount:integer;
    enquiryId:string;
    enquirySiteRefId:string;
    enquirySmoRefId:string;
    enquirySmoSiteStatus:integer;
    id:string;
    partnerInstitutionDTO:undefined;
    partnerProjectId:string;
    planEnrollment:integer;
    siteId:string;
    siteSmoMemberRefDTOS:array;
    tenantId:string;
    updateOrderContractPlanEnrollment:integer;

}

/**
 * @param createBy
 * @param createTime
 * @param enquiryId
 * @param enquirySiteRefId
 * @param enquirySmoRefId
 * @param enquirySmoSiteStatus
 * @param id
 * @param isDeleted
 * @param partnerProjectId
 * @param planEnrollment
 * @param siteId
 * @param tenantId
 * @param updateBy
 * @param updateOrderContractPlanEnrollment
 * @param updateTime
 * @param version

 */

export interface EnquirySmoSiteRefPO {
    createBy:string;
    createTime:string;
    enquiryId:string;
    enquirySiteRefId:string;
    enquirySmoRefId:string;
    enquirySmoSiteStatus:integer;
    id:string;
    isDeleted:integer;
    partnerProjectId:string;
    planEnrollment:integer;
    siteId:string;
    tenantId:string;
    updateBy:string;
    updateOrderContractPlanEnrollment:integer;
    updateTime:string;
    version:integer;

}

/**
 * @param fieldCode
 * @param fieldContent
 * @param fieldName
 * @param fieldNameId
 * @param id
 * @param orderNum

 */

export interface EnumTemplateDTO {
    fieldCode:string;
    fieldContent:string;
    fieldName:string;
    fieldNameId:string;
    id:string;
    orderNum:integer;

}

/**
 * @param arguments
 * @param code
 * @param internationalized
 * @param message

 */

export interface ErrorInfo {
    arguments:array;
    code:string;
    internationalized:boolean;
    message:string;

}

/**
 * @param errorCount
 * @param fileUrl

 */

export interface ImportSiteResultDTO {
    errorCount:integer;
    fileUrl:string;

}

/**
 * @param croId
 * @param croName
 * @param id
 * @param institutionId
 * @param recommend
 * @param sort

 */

export interface InstitutionSmoPriorityDTO {
    croId:string;
    croName:string;
    id:string;
    institutionId:string;
    recommend:integer;
    sort:integer;

}

/**
 * @param counting
 * @param institutionId
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param smoName
 * @param sortProperties

 */

export interface InstitutionSmoQueryDTO {
    counting:boolean;
    institutionId:string;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    smoName:string;
    sortProperties:array;

}

/**
 * @param LecturerName
 * @param NickName
 * @param PhotoUrl

 */

export interface LecturerDTO {
    LecturerName:string;
    NickName:string;
    PhotoUrl:string;

}

/**
 * @param id
 * @param mainAgreementNo
 * @param mainAgreementType
 * @param mainAgreementValidEndDate
 * @param mainAgreementValidStartDate
 * @param partnerProjectId
 * @param smoId
 * @param tenantId

 */

export interface MainAgreementDTO {
    id:string;
    mainAgreementNo:string;
    mainAgreementType:integer;
    mainAgreementValidEndDate:string;
    mainAgreementValidStartDate:string;
    partnerProjectId:string;
    smoId:string;
    tenantId:string;

}

/**
 * @param enquiryId
 * @param partnerInstitutionDTOS
 * @param savedEnquirySiteRefDTOS

 */

export interface NewInquiryReturnDTO {
    enquiryId:string;
    partnerInstitutionDTOS:array;
    savedEnquirySiteRefDTOS:array;

}

/**
 * @param businessId
 * @param employerTenantId
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquiryStatus
 * @param finishNoticeTypeList
 * @param finished
 * @param id
 * @param inviteTime
 * @param noticeChangeResumeTime
 * @param noticeTo
 * @param noticeType
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param projectName
 * @param reachIntentionTime
 * @param rejectReason
 * @param rejectTime
 * @param sendEnquiryTime
 * @param showProjectCard
 * @param smoAgreeSignTime
 * @param smoId
 * @param smoName
 * @param submitEnquiryTime
 * @param submitResumeTime
 * @param title
 * @param updateContractTime

 */

export interface NoticeDTO {
    businessId:string;
    employerTenantId:string;
    enquiryId:string;
    enquirySmoRefId:string;
    enquiryStatus:integer;
    finishNoticeTypeList:array;
    finished:integer;
    id:string;
    inviteTime:string;
    noticeChangeResumeTime:string;
    noticeTo:integer;
    noticeType:integer;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    projectName:string;
    reachIntentionTime:string;
    rejectReason:string;
    rejectTime:string;
    sendEnquiryTime:string;
    showProjectCard:integer;
    smoAgreeSignTime:string;
    smoId:string;
    smoName:string;
    submitEnquiryTime:string;
    submitResumeTime:string;
    title:string;
    updateContractTime:string;

}

/**
 * @param attachment
 * @param bankAccount
 * @param bankAccountName
 * @param bankName
 * @param children
 * @param contractStatus
 * @param enquiryId
 * @param enquirySmoRefId
 * @param exportContractFileId
 * @param exportContractFileUrl
 * @param id
 * @param inputTime
 * @param institutions
 * @param mainAgreementId
 * @param mainAgreementNo
 * @param mainAgreementValidEndDate
 * @param mainAgreementValidStartDate
 * @param orderContractAmountTax
 * @param partnerProjectId
 * @param password
 * @param payWay
 * @param previousOrderContractId
 * @param previousPurchaseOrderNo
 * @param purchaseOrderEndDate
 * @param purchaseOrderNo
 * @param purchaseOrderStartDate
 * @param searchType
 * @param signRate
 * @param signSiteCount
 * @param smoId
 * @param smoName
 * @param tenantId
 * @param totalPlanEnrollment

 */

export interface OrderContractDTO {
    attachment:string;
    bankAccount:string;
    bankAccountName:string;
    bankName:string;
    children:array;
    contractStatus:integer;
    enquiryId:string;
    enquirySmoRefId:string;
    exportContractFileId:string;
    exportContractFileUrl:string;
    id:string;
    inputTime:string;
    institutions:array;
    mainAgreementId:string;
    mainAgreementNo:string;
    mainAgreementValidEndDate:string;
    mainAgreementValidStartDate:string;
    orderContractAmountTax:number;
    partnerProjectId:string;
    password:string;
    payWay:integer;
    previousOrderContractId:string;
    previousPurchaseOrderNo:string;
    purchaseOrderEndDate:string;
    purchaseOrderNo:string;
    purchaseOrderStartDate:string;
    searchType:integer;
    signRate:integer;
    signSiteCount:integer;
    smoId:string;
    smoName:string;
    tenantId:string;
    totalPlanEnrollment:integer;

}

/**
 * @param attachment
 * @param contractStatus
 * @param createBy
 * @param createTime
 * @param enquiryId
 * @param enquirySmoRefId
 * @param exportContractFileId
 * @param exportContractFileUrl
 * @param giveUpReason
 * @param id
 * @param inputTime
 * @param isDeleted
 * @param mainAgreementId
 * @param orderContractAmountTax
 * @param partnerProjectId
 * @param payWay
 * @param previousOrderContractId
 * @param purchaseOrderEndDate
 * @param purchaseOrderNo
 * @param purchaseOrderStartDate
 * @param signRate
 * @param signSiteCount
 * @param smoId
 * @param tenantId
 * @param totalPlanEnrollment
 * @param updateBy
 * @param updateTime
 * @param version

 */

export interface OrderContractPO {
    attachment:string;
    contractStatus:integer;
    createBy:string;
    createTime:string;
    enquiryId:string;
    enquirySmoRefId:string;
    exportContractFileId:string;
    exportContractFileUrl:string;
    giveUpReason:string;
    id:string;
    inputTime:string;
    isDeleted:integer;
    mainAgreementId:string;
    orderContractAmountTax:number;
    partnerProjectId:string;
    payWay:integer;
    previousOrderContractId:string;
    purchaseOrderEndDate:string;
    purchaseOrderNo:string;
    purchaseOrderStartDate:string;
    signRate:integer;
    signSiteCount:integer;
    smoId:string;
    tenantId:string;
    totalPlanEnrollment:integer;
    updateBy:string;
    updateTime:string;
    version:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«AdvancePaymentAccountDetailDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«AdvancePaymentDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«EnquirySmoRefDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«InstitutionSmoPriorityDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«NoticeDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«OrderContractDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«SaleContractDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«SmoMemberDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«StatementDTO» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«供应商合作医院信息» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param endRow
 * @param firstPage
 * @param hasNextPage
 * @param hasPreviousPage
 * @param isFirstPage
 * @param isLastPage
 * @param lastPage
 * @param list
 * @param navigateFirstPage
 * @param navigateLastPage
 * @param navigatePages
 * @param navigatepageNums
 * @param nextPage
 * @param pageNum
 * @param pageSize
 * @param pages
 * @param prePage
 * @param size
 * @param startRow
 * @param total

 */

export interface PageInfo«找cro页面展示结果» {
    endRow:integer;
    firstPage:integer;
    hasNextPage:boolean;
    hasPreviousPage:boolean;
    isFirstPage:boolean;
    isLastPage:boolean;
    lastPage:integer;
    list:array;
    navigateFirstPage:integer;
    navigateLastPage:integer;
    navigatePages:integer;
    navigatepageNums:array;
    nextPage:integer;
    pageNum:integer;
    pageSize:integer;
    pages:integer;
    prePage:integer;
    size:integer;
    startRow:integer;
    total:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«ResearcherDetailDTO» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«企业认证审核列表元素» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«优势领域» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«供应商审核列表元素» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«公司经营范围» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«前端传入的实验数量统计» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param count
 * @param counting
 * @param criteria
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param rows
 * @param sort
 * @param start

 */

export interface Pagination«合作医院» {
    count:integer;
    counting:boolean;
    criteria:undefined;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    rows:array;
    sort:string;
    start:integer;

}

/**
 * @param id
 * @param partnerProjectId
 * @param premiumAmount
 * @param premiumTimes
 * @param settleAmount
 * @param settleTimes
 * @param siteIds
 * @param statementId
 * @param taskDesc
 * @param taskNodeCode
 * @param taskNodeId
 * @param taskNodeName
 * @param taskSettleType
 * @param taskTimes
 * @param taskUnitPrice
 * @param tasks
 * @param totalPrice

 */

export interface PartnerActualSettleTaskDTO {
    id:string;
    partnerProjectId:string;
    premiumAmount:number;
    premiumTimes:integer;
    settleAmount:number;
    settleTimes:integer;
    siteIds:array;
    statementId:string;
    taskDesc:string;
    taskNodeCode:string;
    taskNodeId:string;
    taskNodeName:string;
    taskSettleType:integer;
    taskTimes:integer;
    taskUnitPrice:number;
    tasks:array;
    totalPrice:number;

}

/**
 * @param changeReason
 * @param email
 * @param id
 * @param members
 * @param name
 * @param partnerProjectId
 * @param roleName
 * @param siteId
 * @param siteName
 * @param smoCrcId
 * @param smoMemberId
 * @param smoName
 * @param status
 * @param statusList
 * @param submitTime
 * @param submitUserName

 */

export interface PartnerCrcChangeApplyDTO {
    changeReason:string;
    email:string;
    id:string;
    members:array;
    name:string;
    partnerProjectId:string;
    roleName:string;
    siteId:string;
    siteName:string;
    smoCrcId:string;
    smoMemberId:string;
    smoName:string;
    status:integer;
    statusList:array;
    submitTime:string;
    submitUserName:string;

}

/**
 * @param currentPageIndex
 * @param institutionName
 * @param pageSize
 * @param partnerProjectId
 * @param siteId
 * @param smoId
 * @param totalCount

 */

export interface PartnerInstitutionQueryDTO {
    currentPageIndex:integer;
    institutionName:string;
    pageSize:integer;
    partnerProjectId:string;
    siteId:string;
    smoId:string;
    totalCount:integer;

}

/**
 * @param candidate
 * @param candidateId
 * @param contractJoinNumber
 * @param createBy
 * @param createTime
 * @param cspProjectId
 * @param drugName
 * @param experimentType
 * @param experimentTypeId
 * @param id
 * @param isDeleted
 * @param partnerProjectStatus
 * @param programCode
 * @param projectAttachment
 * @param projectCycle
 * @param projectDesc
 * @param projectName
 * @param projectTotalBudget
 * @param projectTotalPrice
 * @param publishTime
 * @param saeRate
 * @param screenFailRate
 * @param singlePrice
 * @param studyStageId
 * @param studyStageName
 * @param targetJoinNumber
 * @param tenantId
 * @param therapyAreaId
 * @param therapyAreaName
 * @param transManagementCycle
 * @param updateBy
 * @param updateTime
 * @param version
 * @param viewState
 * @param visitUnitBudgetCost

 */

export interface PartnerProjectInfoPO {
    candidate:string;
    candidateId:string;
    contractJoinNumber:integer;
    createBy:string;
    createTime:string;
    cspProjectId:string;
    drugName:string;
    experimentType:string;
    experimentTypeId:string;
    id:string;
    isDeleted:integer;
    partnerProjectStatus:integer;
    programCode:string;
    projectAttachment:string;
    projectCycle:integer;
    projectDesc:string;
    projectName:string;
    projectTotalBudget:number;
    projectTotalPrice:number;
    publishTime:string;
    saeRate:number;
    screenFailRate:number;
    singlePrice:number;
    studyStageId:string;
    studyStageName:string;
    targetJoinNumber:integer;
    tenantId:string;
    therapyAreaId:string;
    therapyAreaName:string;
    transManagementCycle:integer;
    updateBy:string;
    updateTime:string;
    version:integer;
    viewState:integer;
    visitUnitBudgetCost:number;

}

/**
 * @param aliasName
 * @param centerId
 * @param cityId
 * @param cityName
 * @param createBy
 * @param createTime
 * @param id
 * @param institutionId
 * @param institutionName
 * @param inviteSignLock
 * @param isDeleted
 * @param mainResearcher
 * @param partnerProjectId
 * @param planEnrollment
 * @param professionId
 * @param professionName
 * @param provinceId
 * @param provinceName
 * @param secondaryCode
 * @param siteId
 * @param smoId
 * @param smoName
 * @param tenantId
 * @param updateBy
 * @param updateTime
 * @param version

 */

export interface PartnerProjectInstitutionRefPO {
    aliasName:string;
    centerId:string;
    cityId:string;
    cityName:string;
    createBy:string;
    createTime:string;
    id:string;
    institutionId:string;
    institutionName:string;
    inviteSignLock:integer;
    isDeleted:integer;
    mainResearcher:string;
    partnerProjectId:string;
    planEnrollment:integer;
    professionId:string;
    professionName:string;
    provinceId:string;
    provinceName:string;
    secondaryCode:string;
    siteId:string;
    smoId:string;
    smoName:string;
    tenantId:string;
    updateBy:string;
    updateTime:string;
    version:integer;

}

/**
 * @param expressNumber
 * @param id
 * @param invoiceAmount
 * @param invoiceCode
 * @param invoiceNumber
 * @param partnerProjectId
 * @param relFiles
 * @param remark
 * @param statementId

 */

export interface PartnerSettleInvoiceDTO {
    expressNumber:string;
    id:string;
    invoiceAmount:number;
    invoiceCode:string;
    invoiceNumber:string;
    partnerProjectId:string;
    relFiles:array;
    remark:string;
    statementId:string;

}

/**
 * @param crcStatus
 * @param crcStatusList
 * @param distributeTime
 * @param id
 * @param name
 * @param siteId
 * @param siteIds
 * @param smoId
 * @param smoIds

 */

export interface PartnerSmoCrcDTO {
    crcStatus:integer;
    crcStatusList:array;
    distributeTime:string;
    id:string;
    name:string;
    siteId:string;
    siteIds:array;
    smoId:string;
    smoIds:array;

}

/**
 * @param partnerProjectId
 * @param smos
 * @param tenantId

 */

export interface PartnerSmoListDTO {
    partnerProjectId:string;
    smos:array;
    tenantId:string;

}

/**
 * @param businessId
 * @param businessType
 * @param extraData
 * @param failReason
 * @param id
 * @param money
 * @param partnerProjectId
 * @param payCategoryCode
 * @param payResultStatus
 * @param payTime
 * @param requestNo

 */

export interface PayResultDetailDTO {
    businessId:string;
    businessType:integer;
    extraData:string;
    failReason:string;
    id:string;
    money:number;
    partnerProjectId:string;
    payCategoryCode:string;
    payResultStatus:integer;
    payTime:string;
    requestNo:string;

}

/**
 * @param code
 * @param name

 */

export interface PersonRoleDTO {
    code:string;
    name:string;

}

/**
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquirySmoSiteRefDTOS
 * @param partnerProjectId
 * @param resumeOperationStatus
 * @param smoId

 */

export interface PersonnelResumeParam {
    enquiryId:string;
    enquirySmoRefId:string;
    enquirySmoSiteRefDTOS:array;
    partnerProjectId:string;
    resumeOperationStatus:integer;
    smoId:string;

}

/**
 * @param attachment
 * @param enquirySmoRefId
 * @param id
 * @param orderContractId
 * @param partnerProjectId
 * @param premiumItem
 * @param premiumReason
 * @param premiumTotal
 * @param statementId
 * @param taskCount
 * @param taskUnitPrice

 */

export interface PremiumDTO {
    attachment:string;
    enquirySmoRefId:string;
    id:string;
    orderContractId:string;
    partnerProjectId:string;
    premiumItem:string;
    premiumReason:string;
    premiumTotal:number;
    statementId:string;
    taskCount:integer;
    taskUnitPrice:number;

}

/**
 * @param approveMsg
 * @param businessId
 * @param businessType
 * @param createTime
 * @param operateDesc
 * @param operateEnum
 * @param operateType
 * @param operator
 * @param operatorId
 * @param processInstanceId

 */

export interface ProcessFlowHistoryDTO {
    approveMsg:string;
    businessId:string;
    businessType:integer;
    createTime:string;
    operateDesc:string;
    operateEnum:string;
    operateType:integer;
    operator:string;
    operatorId:string;
    processInstanceId:string;

}

/**
 * @param appId
 * @param auditMessageNullable
 * @param auditMessagePlaceholder
 * @param authedOperations
 * @param businessCode
 * @param businessKey
 * @param businessValue
 * @param currentNodeId
 * @param deployId
 * @param endTime
 * @param focusOperation
 * @param handlerDistinctLogic
 * @param hideAuditToSubmitor
 * @param instanceBusiStatus
 * @param instanceContext
 * @param instanceName
 * @param instanceSeqNo
 * @param instanceStatus
 * @param instanceStatusName
 * @param isIntimeNodeHandler
 * @param lastApprovedDate
 * @param lastSubTaskId
 * @param lastTaskTime
 * @param myTaskId
 * @param nodeOwnerType
 * @param parentInstanceId
 * @param processDefId
 * @param processDefKey
 * @param processInstanceId
 * @param processSubjectId
 * @param projectId
 * @param refForms
 * @param startTime
 * @param startUserId
 * @param startUserName
 * @param tenantId

 */

export interface ProcessInstanceBo {
    appId:string;
    auditMessageNullable:integer;
    auditMessagePlaceholder:string;
    authedOperations:array;
    businessCode:string;
    businessKey:string;
    businessValue:string;
    currentNodeId:string;
    deployId:string;
    endTime:string;
    focusOperation:array;
    handlerDistinctLogic:string;
    hideAuditToSubmitor:integer;
    instanceBusiStatus:string;
    instanceContext:string;
    instanceName:string;
    instanceSeqNo:string;
    instanceStatus:string;
    instanceStatusName:string;
    isIntimeNodeHandler:integer;
    lastApprovedDate:string;
    lastSubTaskId:string;
    lastTaskTime:string;
    myTaskId:string;
    nodeOwnerType:integer;
    parentInstanceId:string;
    processDefId:string;
    processDefKey:string;
    processInstanceId:string;
    processSubjectId:string;
    projectId:string;
    refForms:array;
    startTime:string;
    startUserId:string;
    startUserName:string;
    tenantId:string;

}

/**
 * @param authType
 * @param handlerName
 * @param handlerType
 * @param handlerValue
 * @param nodeKey
 * @param processInstanceHandlerId
 * @param processInstanceId
 * @param processSubTimes
 * @param tenantId
 * @param userId
 * @param userName

 */

export interface ProcessInstanceHandlerDto {
    authType:integer;
    handlerName:string;
    handlerType:string;
    handlerValue:string;
    nodeKey:string;
    processInstanceHandlerId:string;
    processInstanceId:string;
    processSubTimes:integer;
    tenantId:string;
    userId:string;
    userName:string;

}

/**
 * @param appId
 * @param assignFromUser
 * @param assignType
 * @param businessKey
 * @param businessStatus
 * @param businessValue
 * @param duration
 * @param endTime
 * @param expectTime
 * @param nodeGroup
 * @param nodeHandlerType
 * @param nodeInstanceId
 * @param nodeType
 * @param operationMessage
 * @param owner
 * @param ownerAccType
 * @param ownerName
 * @param priority
 * @param processInstanceId
 * @param processStartUser
 * @param projectId
 * @param taskId
 * @param taskNodeKey
 * @param taskNodeName
 * @param taskOperation
 * @param taskOperationName
 * @param taskStatus
 * @param taskStatusName
 * @param tenantId

 */

export interface ProcessInstanceTaskDto {
    appId:string;
    assignFromUser:string;
    assignType:string;
    businessKey:string;
    businessStatus:string;
    businessValue:string;
    duration:integer;
    endTime:string;
    expectTime:string;
    nodeGroup:integer;
    nodeHandlerType:string;
    nodeInstanceId:string;
    nodeType:string;
    operationMessage:string;
    owner:string;
    ownerAccType:string;
    ownerName:string;
    priority:integer;
    processInstanceId:string;
    processStartUser:string;
    projectId:string;
    taskId:string;
    taskNodeKey:string;
    taskNodeName:string;
    taskOperation:string;
    taskOperationName:string;
    taskStatus:integer;
    taskStatusName:string;
    tenantId:string;

}

/**
 * @param CoverUrl
 * @param CurrentPrice
 * @param OpenCourseName
 * @param ProductId
 * @param ValidDays
 * @param lecturers
 * @param updateTime

 */

export interface ProductDTO {
    CoverUrl:string;
    CurrentPrice:number;
    OpenCourseName:string;
    ProductId:string;
    ValidDays:integer;
    lecturers:array;
    updateTime:string;

}

/**
 * @param actualSettleTaskTotal
 * @param contractTotalAmount
 * @param siteTaskTotal
 * @param unitpricePerCase
 * @param visitTaskTotal
 * @param visitUnitBudgetCost

 */

export interface ProjectCalDataDTO {
    actualSettleTaskTotal:number;
    contractTotalAmount:number;
    siteTaskTotal:number;
    unitpricePerCase:number;
    visitTaskTotal:number;
    visitUnitBudgetCost:number;

}

/**
 * @param partnerProjectId
 * @param siteCount
 * @param sumTargetEnrollment

 */

export interface ProjectSiteStatisticsFieldsDTO {
    partnerProjectId:string;
    siteCount:integer;
    sumTargetEnrollment:integer;

}

/**
 * @param unitCount
 * @param visitId
 * @param visitName
 * @param visitNote
 * @param visitPrice

 */

export interface ProjectVisitDTO {
    unitCount:integer;
    visitId:string;
    visitName:string;
    visitNote:string;
    visitPrice:number;

}

/**
 * @param unitCount
 * @param visitId
 * @param visitNote

 */

export interface ProjectVisitSaveDTO {
    unitCount:integer;
    visitId:string;
    visitNote:string;

}

/**
 * @param partnerProjectId
 * @param tasks
 * @param visits

 */

export interface ProjectVisitTaskSaveDTO {
    partnerProjectId:string;
    tasks:array;
    visits:array;

}

/**
 * @param taskId
 * @param taskName
 * @param taskPrice

 */

export interface ProjectVisitTaskSaveTaskDTO {
    taskId:string;
    taskName:string;
    taskPrice:number;

}

/**
 * @param taskExecuteCounts
 * @param visitId
 * @param visitName

 */

export interface ProjectVisitTaskSaveVisitDTO {
    taskExecuteCounts:array;
    visitId:string;
    visitName:string;

}

/**
 * @param settleCount
 * @param settlePrice
 * @param settleUnit
 * @param taskId
 * @param taskName
 * @param taskPrice
 * @param unitCount

 */

export interface ProjectVisitTaskSettleDTO {
    settleCount:integer;
    settlePrice:number;
    settleUnit:string;
    taskId:string;
    taskName:string;
    taskPrice:number;
    unitCount:integer;

}

/**
 * @param excludes
 * @param includes

 */

export interface PropertySelector {
    excludes:array;
    includes:array;

}

/**
 * @param advancePaymentAccountId
 * @param detailTypeList
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param queryEndTime
 * @param queryStartTime
 * @param searchTenantId
 * @param searchType
 * @param smoName

 */

export interface QueryAdvancePaymentAccountDetailParamDTO {
    advancePaymentAccountId:string;
    detailTypeList:array;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    queryEndTime:string;
    queryStartTime:string;
    searchTenantId:string;
    searchType:integer;
    smoName:string;

}

/**
 * @param advancePaymentStatusList
 * @param keyword
 * @param orderContractIdList
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param searchType
 * @param sort
 * @param sortField

 */

export interface QueryAdvancePaymentListParamDTO {
    advancePaymentStatusList:array;
    keyword:string;
    orderContractIdList:array;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    searchType:integer;
    sort:integer;
    sortField:string;

}

/**
 * @param label
 * @param value

 */

export interface QueryCroDictDTO {
    label:string;
    value:string;

}

/**
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquirySmoSiteStatusList
 * @param partnerProjectId
 * @param searchType

 */

export interface QueryEnquirySiteStatisticsFieldsParam {
    enquiryId:string;
    enquirySmoRefId:string;
    enquirySmoSiteStatusList:array;
    partnerProjectId:string;
    searchType:integer;

}

/**
 * @param enquirySmoRefId
 * @param pageNum
 * @param pageSize

 */

export interface QueryHistoryOrderContractParam {
    enquirySmoRefId:string;
    pageNum:integer;
    pageSize:integer;

}

/**
 * @param mainAgreementNo
 * @param mainAgreementType
 * @param partnerProjectId
 * @param smoId

 */

export interface QueryMainAgreementParam {
    mainAgreementNo:string;
    mainAgreementType:integer;
    partnerProjectId:string;
    smoId:string;

}

/**
 * @param enquirySmoRefId
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param searchType
 * @param smoId

 */

export interface QueryOrderContractParam {
    enquirySmoRefId:string;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    searchType:integer;
    smoId:string;

}

/**
 * @param institutionIds
 * @param partnerProjectId
 * @param professionIds

 */

export interface QueryPartnerProjectInstitutionRefInfoParam {
    institutionIds:array;
    partnerProjectId:string;
    professionIds:array;

}

/**
 * @param enquirySmoRefId
 * @param enquirySmoSiteStatusList
 * @param keyword
 * @param searchType

 */

export interface QueryPersonnelResumeParam {
    enquirySmoRefId:string;
    enquirySmoSiteStatusList:array;
    keyword:string;
    searchType:integer;

}

/**
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId

 */

export interface QuerySaleContractParam {
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;

}

/**
 * @param enquirySmoRefId
 * @param searchType

 */

export interface QuerySendEmailContactParam {
    enquirySmoRefId:string;
    searchType:integer;

}

/**
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param smoName

 */

export interface QuerySignedEnquirySmoRefParam {
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    smoName:string;

}

/**
 * @param enquiryStatus
 * @param partnerProjectName

 */

export interface QuerySmoProjectInfoParam {
    enquiryStatus:integer;
    partnerProjectName:string;

}

/**
 * @param employerSearchType
 * @param keyword
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param paySuccessTimeEnd
 * @param paySuccessTimeStart
 * @param smoSearchType
 * @param statementStatusList

 */

export interface QueryStatementListParam {
    employerSearchType:integer;
    keyword:string;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    paySuccessTimeEnd:string;
    paySuccessTimeStart:string;
    smoSearchType:integer;
    statementStatusList:array;

}

/**
 * @param personRoleDTOList
 * @param standardDTOList

 */

export interface RecruitmentPrepareDataDTO {
    personRoleDTOList:array;
    standardDTOList:array;

}

/**
 * @param id
 * @param isCustom
 * @param optionCode
 * @param optionId
 * @param optionValue
 * @param partnerProjectId
 * @param recruitmentStandardDTOList
 * @param roleCode
 * @param roleName
 * @param standardCode
 * @param standardName
 * @param standardSubCode
 * @param standardSubName
 * @param tenantId

 */

export interface RecruitmentStandardDTO {
    id:string;
    isCustom:integer;
    optionCode:string;
    optionId:string;
    optionValue:string;
    partnerProjectId:string;
    recruitmentStandardDTOList:array;
    roleCode:string;
    roleName:string;
    standardCode:string;
    standardName:string;
    standardSubCode:string;
    standardSubName:string;
    tenantId:string;

}

/**
 * @param isGlobalConfig
 * @param reportConfigId
 * @param reportForms
 * @param sourceTenantId

 */

export interface ReportConfigDTO {
    isGlobalConfig:integer;
    reportConfigId:string;
    reportForms:array;
    sourceTenantId:string;

}

/**
 * @param childForms
 * @param formName
 * @param formType
 * @param items
 * @param mdmFormId
 * @param parentReportFormConfigId
 * @param reportFormConfigId
 * @param reportMdmFormId

 */

export interface ReportFormConfigDTO {
    childForms:array;
    formName:string;
    formType:integer;
    items:array;
    mdmFormId:string;
    parentReportFormConfigId:string;
    reportFormConfigId:string;
    reportMdmFormId:string;

}

/**
 * @param checkFlag
 * @param groupId
 * @param itemComment
 * @param itemId

 */

export interface ReportFormItemRefDTO {
    checkFlag:integer;
    groupId:string;
    itemComment:string;
    itemId:string;

}

/**
 * @param formName
 * @param formType
 * @param items
 * @param mdmFormId

 */

export interface ReportFormWithItemDTO {
    formName:string;
    formType:integer;
    items:array;
    mdmFormId:string;

}

/**
 * @param appResearcherId
 * @param cityId
 * @param cityName
 * @param countryId
 * @param countryName
 * @param departmentId
 * @param departmentName
 * @param hasFirstStageWard
 * @param indicationName
 * @param institutionId
 * @param institutionName
 * @param isCfda
 * @param levelCode
 * @param levelName
 * @param maxSubjectEnrollRate
 * @param personId
 * @param personName
 * @param projectNum
 * @param provinceId
 * @param provinceName
 * @param smoName
 * @param startupTime
 * @param subjectEnrollRate
 * @param url

 */

export interface ResearcherDetailDTO {
    appResearcherId:string;
    cityId:string;
    cityName:string;
    countryId:string;
    countryName:string;
    departmentId:string;
    departmentName:string;
    hasFirstStageWard:integer;
    indicationName:string;
    institutionId:string;
    institutionName:string;
    isCfda:integer;
    levelCode:string;
    levelName:string;
    maxSubjectEnrollRate:integer;
    personId:string;
    personName:string;
    projectNum:integer;
    provinceId:string;
    provinceName:string;
    smoName:string;
    startupTime:integer;
    subjectEnrollRate:integer;
    url:string;

}

/**
 * @param indicationName
 * @param pageIndex
 * @param pageSize
 * @param sortField
 * @param sortOrder

 */

export interface ResearcherDetailQueryDTO {
    indicationName:string;
    pageIndex:integer;
    pageSize:integer;
    sortField:string;
    sortOrder:string;

}

/**
 * @param approved
 * @param siteSmoMemberRefId

 */

export interface ReviewResumeParam {
    approved:integer;
    siteSmoMemberRefId:string;

}

/**
 * @param id
 * @param password

 */

export interface RollbackAdvancePaymentParamDTO {
    id:string;
    password:string;

}

/**
 * @param auditType
 * @param createTime
 * @param createdUserId
 * @param currentPageIndex
 * @param employer
 * @param institutionId
 * @param institutionName
 * @param needTopParentTaskNodeNameList
 * @param pageSize
 * @param partnerId
 * @param partnerProjectId
 * @param password
 * @param payStatus
 * @param payableMoney
 * @param rejectReason
 * @param reportIds
 * @param reportStatus
 * @param requestNo
 * @param requestTenantId
 * @param requestUserId
 * @param requestUserName
 * @param serarchContent
 * @param smoId
 * @param smoName
 * @param status
 * @param supplementaryMoney
 * @param supplementaryReason
 * @param taskNodeReportPayId
 * @param totalCount

 */

export interface SOM保存信息 {
    auditType:string;
    createTime:string;
    createdUserId:string;
    currentPageIndex:integer;
    employer:integer;
    institutionId:string;
    institutionName:string;
    needTopParentTaskNodeNameList:integer;
    pageSize:integer;
    partnerId:string;
    partnerProjectId:string;
    password:string;
    payStatus:integer;
    payableMoney:number;
    rejectReason:string;
    reportIds:array;
    reportStatus:integer;
    requestNo:string;
    requestTenantId:string;
    requestUserId:string;
    requestUserName:string;
    serarchContent:string;
    smoId:string;
    smoName:string;
    status:array;
    supplementaryMoney:number;
    supplementaryReason:string;
    taskNodeReportPayId:string;
    totalCount:integer;

}

/**
 * @param attachment
 * @param contractEndDate
 * @param contractNo
 * @param contractStartDate
 * @param id
 * @param mainAgreementId
 * @param mainAgreementNo
 * @param mainAgreementValidEndDate
 * @param mainAgreementValidStartDate
 * @param money
 * @param newTargetEnrollment
 * @param operation
 * @param partnerProjectId
 * @param releaseStatus
 * @param sign
 * @param tenantId

 */

export interface SaleContractDTO {
    attachment:string;
    contractEndDate:string;
    contractNo:string;
    contractStartDate:string;
    id:string;
    mainAgreementId:string;
    mainAgreementNo:string;
    mainAgreementValidEndDate:string;
    mainAgreementValidStartDate:string;
    money:number;
    newTargetEnrollment:integer;
    operation:integer;
    partnerProjectId:string;
    releaseStatus:integer;
    sign:integer;
    tenantId:string;

}

/**
 * @param enquiryId
 * @param enquirySiteRefDTOS
 * @param operation
 * @param partnerProjectId

 */

export interface SaveEnquirySiteRefParam {
    enquiryId:string;
    enquirySiteRefDTOS:array;
    operation:integer;
    partnerProjectId:string;

}

/**
 * @param enquiryId
 * @param enquirySmoRefDTOS
 * @param operation
 * @param partnerProjectId

 */

export interface SaveEnquirySmoRefParam {
    enquiryId:string;
    enquirySmoRefDTOS:array;
    operation:integer;
    partnerProjectId:string;

}

/**
 * @param partnerProjectId
 * @param recruitmentStandardDTOS
 * @param recruitmentStandardRoleRefId
 * @param roleCode
 * @param roleName

 */

export interface SaveRecruitmentStandardParam {
    partnerProjectId:string;
    recruitmentStandardDTOS:array;
    recruitmentStandardRoleRefId:string;
    roleCode:string;
    roleName:string;

}

/**
 * @param counting
 * @param institutionId
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param partnerProjectId
 * @param smoName
 * @param sortProperties

 */

export interface SelectSmoDto {
    counting:boolean;
    institutionId:string;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    partnerProjectId:string;
    smoName:string;
    sortProperties:array;

}

/**
 * @param businessId
 * @param businessType
 * @param insNum
 * @param institutions
 * @param partnerProjectId
 * @param receiveNumber
 * @param singlePrice
 * @param smoId
 * @param smos
 * @param taskPrice
 * @param tasks
 * @param totalPrice
 * @param visitPrice

 */

export interface SendBusinessEmailParamDTO {
    businessId:string;
    businessType:integer;
    insNum:integer;
    institutions:array;
    partnerProjectId:string;
    receiveNumber:integer;
    singlePrice:number;
    smoId:string;
    smos:array;
    taskPrice:number;
    tasks:array;
    totalPrice:number;
    visitPrice:number;

}

/**
 * @param contractTotalAmount
 * @param eamilType
 * @param emailList
 * @param enquirySmoRefId
 * @param memberInfo
 * @param partnerprojectId
 * @param partnerprojectName
 * @param purchaseOrderNo
 * @param rejectReason
 * @param settlementAmount
 * @param siteCount
 * @param smoId
 * @param smoName
 * @param sumTargetEnrollment
 * @param visitSingleQuote
 * @param visitUnitBudgetCost

 */

export interface SendSystemEmailParam {
    contractTotalAmount:number;
    eamilType:integer;
    emailList:array;
    enquirySmoRefId:string;
    memberInfo:string;
    partnerprojectId:string;
    partnerprojectName:string;
    purchaseOrderNo:string;
    rejectReason:string;
    settlementAmount:number;
    siteCount:integer;
    smoId:string;
    smoName:string;
    sumTargetEnrollment:integer;
    visitSingleQuote:number;
    visitUnitBudgetCost:number;

}

/**
 * @param actualSettleTasks
 * @param enquirySmoRefPO
 * @param enquirySmoSiteRefPOS
 * @param orderContractPO
 * @param partnerProjectInfoPO

 */

export interface SettlementPrepareData {
    actualSettleTasks:array;
    enquirySmoRefPO:undefined;
    enquirySmoSiteRefPOS:array;
    orderContractPO:undefined;
    partnerProjectInfoPO:undefined;

}

/**
 * @param auditStatus
 * @param email
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquirySmoSiteRefId
 * @param id
 * @param name
 * @param partnerProjectId
 * @param replaceSiteSmoMemberRefId
 * @param resumeInfo
 * @param roleCode
 * @param roleName
 * @param siteId
 * @param smoId
 * @param smoMemberId
 * @param tenantId

 */

export interface SiteSmoMemberRefDTO {
    auditStatus:integer;
    email:string;
    enquiryId:string;
    enquirySmoRefId:string;
    enquirySmoSiteRefId:string;
    id:string;
    name:string;
    partnerProjectId:string;
    replaceSiteSmoMemberRefId:string;
    resumeInfo:string;
    roleCode:string;
    roleName:string;
    siteId:string;
    smoId:string;
    smoMemberId:string;
    tenantId:string;

}

/**
 * @param id
 * @param partnerProjectId
 * @param settlementCount
 * @param settlementUnit
 * @param taskDesc
 * @param taskId
 * @param taskName
 * @param taskTotal
 * @param taskUnitPrice
 * @param tenantId
 * @param unitCount

 */

export interface SiteTaskDTO {
    id:string;
    partnerProjectId:string;
    settlementCount:integer;
    settlementUnit:integer;
    taskDesc:string;
    taskId:string;
    taskName:string;
    taskTotal:number;
    taskUnitPrice:number;
    tenantId:string;
    unitCount:integer;

}

/**
 * @param partnerProjectInfoPO
 * @param siteCount
 * @param siteTaskDTOS

 */

export interface SiteTaskVO {
    partnerProjectInfoPO:undefined;
    siteCount:integer;
    siteTaskDTOS:array;

}

/**
 * @param email
 * @param id
 * @param name
 * @param refId
 * @param resumeInfo
 * @param roleCode
 * @param roleName
 * @param smoId

 */

export interface SmoMemberDTO {
    email:string;
    id:string;
    name:string;
    refId:string;
    resumeInfo:string;
    roleCode:string;
    roleName:string;
    smoId:string;

}

/**
 * @param contractTotalAmount
 * @param endEnquiryReason
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquiryStatus
 * @param inviteSign
 * @param messageType
 * @param partnerProjectInfoDTO
 * @param projectSiteStatisticsFieldsDTO
 * @param rejectReason
 * @param sendEnquiryTime
 * @param submitEnquiryTime
 * @param title
 * @param unitpricePerCase
 * @param visitSingleBudgetPriceControlMin
 * @param visitUnitBudgetCost

 */

export interface SmoProjectInfoDTO {
    contractTotalAmount:number;
    endEnquiryReason:string;
    enquiryId:string;
    enquirySmoRefId:string;
    enquiryStatus:integer;
    inviteSign:integer;
    messageType:integer;
    partnerProjectInfoDTO:undefined;
    projectSiteStatisticsFieldsDTO:undefined;
    rejectReason:string;
    sendEnquiryTime:string;
    submitEnquiryTime:string;
    title:string;
    unitpricePerCase:number;
    visitSingleBudgetPriceControlMin:integer;
    visitUnitBudgetCost:number;

}

/**
 * @param enquiryId
 * @param enquirySmoRefId
 * @param enquirySmoSiteRefDTOList
 * @param operation
 * @param partnerProjectId

 */

export interface SmoSaveEnquirySmoSiteRefParam {
    enquiryId:string;
    enquirySmoRefId:string;
    enquirySmoSiteRefDTOList:array;
    operation:integer;
    partnerProjectId:string;

}

/**
 * @param giveUpReason
 * @param operation
 * @param orderContractId
 * @param password
 * @param signRate

 */

export interface SmoUpdateSignParam {
    giveUpReason:string;
    operation:integer;
    orderContractId:string;
    password:string;
    signRate:integer;

}

/**
 * @param propertyName
 * @param sort

 */

export interface SortProperty {
    propertyName:string;
    sort:string;

}

/**
 * @param code
 * @param fieldType
 * @param hasCustom
 * @param name
 * @param standardValueDTOList

 */

export interface StandardDTO {
    code:string;
    fieldType:string;
    hasCustom:integer;
    name:string;
    standardValueDTOList:array;

}

/**
 * @param code
 * @param name
 * @param standard

 */

export interface StandardValueDTO {
    code:string;
    name:string;
    standard:string;

}

/**
 * @param actualPaymentTotal
 * @param agreeSettlementTime
 * @param approvalTime
 * @param approved
 * @param body
 * @param closeSettlementReason
 * @param closeSettlementTime
 * @param deductionTotal
 * @param employerOperation
 * @param employerProcessInstanceId
 * @param enquirySmoRefId
 * @param id
 * @param orderContractId
 * @param partnerActualSettleTaskDTOS
 * @param partnerProjectId
 * @param password
 * @param payFailReason
 * @param payFailTime
 * @param paySuccessTime
 * @param payWay
 * @param premiumDTOS
 * @param projectVisitTaskSettleDTOS
 * @param purchaseOrderNo
 * @param rejectReason
 * @param rejectTime
 * @param requestNo
 * @param requestPerson
 * @param requestPersonId
 * @param rollbackReason
 * @param siteTaskDTOS
 * @param smoId
 * @param smoName
 * @param smoOperation
 * @param statementNo
 * @param statementStatus
 * @param submitInvoiceTime
 * @param submitTime
 * @param tenantId
 * @param trailPayRequestNo
 * @param trialpayApprovalTime
 * @param trialpayRejectTime

 */

export interface StatementDTO {
    actualPaymentTotal:number;
    agreeSettlementTime:string;
    approvalTime:string;
    approved:integer;
    body:undefined;
    closeSettlementReason:string;
    closeSettlementTime:string;
    deductionTotal:number;
    employerOperation:string;
    employerProcessInstanceId:string;
    enquirySmoRefId:string;
    id:string;
    orderContractId:string;
    partnerActualSettleTaskDTOS:array;
    partnerProjectId:string;
    password:string;
    payFailReason:string;
    payFailTime:string;
    paySuccessTime:string;
    payWay:integer;
    premiumDTOS:array;
    projectVisitTaskSettleDTOS:array;
    purchaseOrderNo:string;
    rejectReason:string;
    rejectTime:string;
    requestNo:string;
    requestPerson:string;
    requestPersonId:string;
    rollbackReason:string;
    siteTaskDTOS:array;
    smoId:string;
    smoName:string;
    smoOperation:string;
    statementNo:string;
    statementStatus:integer;
    submitInvoiceTime:string;
    submitTime:string;
    tenantId:string;
    trailPayRequestNo:string;
    trialpayApprovalTime:string;
    trialpayRejectTime:string;

}

/**
 * @param orderContractId
 * @param partnerActualSettleTaskDTOList
 * @param password
 * @param premiumDTOList
 * @param statementId

 */

export interface SubmitStatementParam {
    orderContractId:string;
    partnerActualSettleTaskDTOList:array;
    password:string;
    premiumDTOList:array;
    statementId:string;

}

/**
 * @param employerTenantId
 * @param enquirySmoRefId
 * @param orderContractId
 * @param partnerProjectId
 * @param smoId

 */

export interface SyncAccountDTO {
    employerTenantId:string;
    enquirySmoRefId:string;
    orderContractId:string;
    partnerProjectId:string;
    smoId:string;

}

/**
 * @param forwardType
 * @param isAdmin
 * @param isStarter
 * @param isTodo
 * @param nodeType
 * @param operationGroupCode
 * @param operationName
 * @param operationType
 * @param processIsEnd
 * @param processStatus
 * @param propertyKey
 * @param propertyValue
 * @param taskStatus

 */

export interface SysNodeOperationDto {
    forwardType:string;
    isAdmin:integer;
    isStarter:integer;
    isTodo:string;
    nodeType:string;
    operationGroupCode:string;
    operationName:string;
    operationType:string;
    processIsEnd:string;
    processStatus:string;
    propertyKey:string;
    propertyValue:string;
    taskStatus:integer;

}

/**
 * @param childTaskNodes
 * @param isDeleted
 * @param parentTaskNodeId
 * @param spotReportTemplateId
 * @param taskNodeCode
 * @param taskNodeId
 * @param taskNodeName
 * @param taskSettleType
 * @param taskUniformityType

 */

export interface TaskConfigDTO {
    childTaskNodes:array;
    isDeleted:integer;
    parentTaskNodeId:string;
    spotReportTemplateId:string;
    taskNodeCode:string;
    taskNodeId:string;
    taskNodeName:string;
    taskSettleType:string;
    taskUniformityType:string;

}

/**
 * @param experimentCount
 * @param experimentalField
 * @param experimentalFieldId
 * @param id
 * @param indication
 * @param refId
 * @param testStageId
 * @param testStageName

 */

export interface TestStageDTO {
    experimentCount:integer;
    experimentalField:string;
    experimentalFieldId:string;
    id:string;
    indication:string;
    refId:string;
    testStageId:string;
    testStageName:string;

}

/**
 * @param enquirySmoSiteRefDTOList
 * @param orderContractId

 */

export interface UpdateOrderContractParam {
    enquirySmoSiteRefDTOList:array;
    orderContractId:string;

}

/**
 * @param handOverTime
 * @param name
 * @param siteId
 * @param siteSmoMemberId
 * @param smoName
 * @param startTime

 */

export interface crc变更记录 {
    handOverTime:string;
    name:string;
    siteId:string;
    siteSmoMemberId:string;
    smoName:string;
    startTime:string;

}

/**
 * @param appId
 * @param billCode
 * @param institutionId
 * @param operator
 * @param operatorId
 * @param payCategoryCode
 * @param payMsg
 * @param payState
 * @param projectId
 * @param rejectReason
 * @param rejectUser
 * @param rejectUserId
 * @param requestNo
 * @param siteId
 * @param tenantId

 */

export interface trialPay消息dto {
    appId:string;
    billCode:string;
    institutionId:string;
    operator:string;
    operatorId:string;
    payCategoryCode:string;
    payMsg:string;
    payState:string;
    projectId:string;
    rejectReason:string;
    rejectUser:string;
    rejectUserId:string;
    requestNo:string;
    siteId:string;
    tenantId:string;

}

/**
 * @param partnerProjectId
 * @param tasks
 * @param tenantId

 */

export interface 任务节点报价 {
    partnerProjectId:string;
    tasks:array;
    tenantId:string;

}

/**
 * @param childTaskNodes
 * @param globalProjectTaskRefId
 * @param id
 * @param institutionId
 * @param level
 * @param midMergeCount
 * @param onceEnquire
 * @param orderPrice
 * @param parentTaskNodeId
 * @param partnerProjectId
 * @param payedMoney
 * @param professionId
 * @param smoId
 * @param spotReportTemplateId
 * @param taskClassName
 * @param taskDesc
 * @param taskFinishTimes
 * @param taskItemName
 * @param taskNodeCode
 * @param taskNodeId
 * @param taskNodeName
 * @param taskPackageName
 * @param taskPrice
 * @param taskSettleType
 * @param taskTimes
 * @param taskUniformityType
 * @param taskUnitPrice
 * @param taskVisitPrice
 * @param taskVisits
 * @param tenantId
 * @param topMergeCount

 */

export interface 任务节点报价单 {
    childTaskNodes:array;
    globalProjectTaskRefId:string;
    id:string;
    institutionId:string;
    level:integer;
    midMergeCount:integer;
    onceEnquire:integer;
    orderPrice:number;
    parentTaskNodeId:string;
    partnerProjectId:string;
    payedMoney:number;
    professionId:string;
    smoId:string;
    spotReportTemplateId:string;
    taskClassName:string;
    taskDesc:string;
    taskFinishTimes:integer;
    taskItemName:string;
    taskNodeCode:string;
    taskNodeId:string;
    taskNodeName:string;
    taskPackageName:string;
    taskPrice:number;
    taskSettleType:integer;
    taskTimes:integer;
    taskUniformityType:string;
    taskUnitPrice:number;
    taskVisitPrice:number;
    taskVisits:array;
    tenantId:string;
    topMergeCount:integer;

}

/**
 * @param enquireTaskRefId
 * @param globalProjectVistRefId
 * @param id
 * @param partnerProjectId
 * @param projectTaskRefId
 * @param referCount
 * @param taskNodeId
 * @param taskUniformityType
 * @param visitCount
 * @param visitName
 * @param visitPrice
 * @param visitType
 * @param visitUnitPrice

 */

export interface 任务访视数组 {
    enquireTaskRefId:string;
    globalProjectVistRefId:string;
    id:string;
    partnerProjectId:string;
    projectTaskRefId:string;
    referCount:integer;
    taskNodeId:string;
    taskUniformityType:string;
    visitCount:integer;
    visitName:string;
    visitPrice:number;
    visitType:integer;
    visitUnitPrice:number;

}

/**
 * @param address
 * @param approveStatus
 * @param businessLicenseList
 * @param cityId
 * @param cityName
 * @param contact
 * @param countryId
 * @param countryName
 * @param countyId
 * @param createTime
 * @param email
 * @param id
 * @param name
 * @param provinceId
 * @param provinceName
 * @param socialCreditCode
 * @param telephone
 * @param type

 */

export interface 企业认证信息 {
    address:string;
    approveStatus:integer;
    businessLicenseList:array;
    cityId:string;
    cityName:string;
    contact:string;
    countryId:string;
    countryName:string;
    countyId:string;
    createTime:string;
    email:string;
    id:string;
    name:string;
    provinceId:string;
    provinceName:string;
    socialCreditCode:string;
    telephone:string;
    type:integer;

}

/**
 * @param approved
 * @param businessId
 * @param taskNote

 */

export interface 企业认证审批参数 {
    approved:integer;
    businessId:string;
    taskNote:string;

}

/**
 * @param approveStatus
 * @param approveTime
 * @param approveUserId
 * @param approveUsername
 * @param businessId
 * @param enble
 * @param entryDate
 * @param id
 * @param name
 * @param taskNote
 * @param tenantId
 * @param type
 * @param typeId

 */

export interface 企业认证审核列表元素 {
    approveStatus:integer;
    approveTime:string;
    approveUserId:string;
    approveUsername:string;
    businessId:string;
    enble:integer;
    entryDate:string;
    id:string;
    name:string;
    taskNote:string;
    tenantId:string;
    type:integer;
    typeId:string;

}

/**
 * @param approveTimeSort
 * @param entryDateSort
 * @param name
 * @param pageIndex
 * @param pageSize
 * @param searchType
 * @param type
 * @param typeId

 */

export interface 企业认证审核查询参数 {
    approveTimeSort:string;
    entryDateSort:string;
    name:string;
    pageIndex:integer;
    pageSize:integer;
    searchType:integer;
    type:string;
    typeId:string;

}

/**
 * @param briefIntroduction
 * @param experimentalField
 * @param experimentalFieldId
 * @param id
 * @param refId

 */

export interface 优势领域 {
    briefIntroduction:string;
    experimentalField:string;
    experimentalFieldId:string;
    id:string;
    refId:string;

}

/**
 * @param dictItemsMap
 * @param personRoleDTOS
 * @param provinces

 */

export interface 供应商入驻页面下拉框选项 {
    dictItemsMap:object;
    personRoleDTOS:array;
    provinces:array;

}

/**
 * @param contact
 * @param contactDTOList
 * @param cooperativeCount
 * @param croId
 * @param email
 * @param id
 * @param institutionId
 * @param name
 * @param recommend
 * @param source
 * @param telephone

 */

export interface 供应商合作医院信息 {
    contact:string;
    contactDTOList:array;
    cooperativeCount:integer;
    croId:string;
    email:string;
    id:string;
    institutionId:string;
    name:string;
    recommend:integer;
    source:integer;
    telephone:string;

}

/**
 * @param approved
 * @param businessId
 * @param taskNote

 */

export interface 供应商审批参数 {
    approved:integer;
    businessId:string;
    taskNote:string;

}

/**
 * @param approveStatus
 * @param approveTime
 * @param approveUserId
 * @param approveUsername
 * @param businessId
 * @param croId
 * @param enble
 * @param entryDate
 * @param id
 * @param name
 * @param type
 * @param typeId

 */

export interface 供应商审核列表元素 {
    approveStatus:integer;
    approveTime:string;
    approveUserId:string;
    approveUsername:string;
    businessId:string;
    croId:string;
    enble:integer;
    entryDate:string;
    id:string;
    name:string;
    type:string;
    typeId:string;

}

/**
 * @param approveTimeSort
 * @param entryDateSort
 * @param name
 * @param pageIndex
 * @param pageSize
 * @param searchType
 * @param type
 * @param typeId

 */

export interface 供应商审核查询参数 {
    approveTimeSort:string;
    entryDateSort:string;
    name:string;
    pageIndex:integer;
    pageSize:integer;
    searchType:integer;
    type:string;
    typeId:string;

}

/**
 * @param businessCategory
 * @param businessCategoryId
 * @param businessName
 * @param businessSummary
 * @param id
 * @param orderNo
 * @param refId
 * @param refType

 */

export interface 公司经营范围 {
    businessCategory:string;
    businessCategoryId:string;
    businessName:string;
    businessSummary:string;
    id:string;
    orderNo:integer;
    refId:string;
    refType:string;

}

/**
 * @param fileId
 * @param fileName
 * @param fileType
 * @param fileUniqueId
 * @param fileUrl
 * @param fileViewUrl
 * @param id
 * @param orderNo
 * @param refId
 * @param refType

 */

export interface 公司资料信息 {
    fileId:string;
    fileName:string;
    fileType:string;
    fileUniqueId:string;
    fileUrl:string;
    fileViewUrl:string;
    id:string;
    orderNo:integer;
    refId:string;
    refType:string;

}

/**
 * @param experimentalField
 * @param experimentalFieldId
 * @param id
 * @param refId
 * @param testStageList

 */

export interface 前端传入的实验数量统计 {
    experimentalField:string;
    experimentalFieldId:string;
    id:string;
    refId:string;
    testStageList:array;

}

/**
 * @param cityId
 * @param cityName
 * @param cooperativeCount
 * @param cooperativeCountShow
 * @param county
 * @param countyId
 * @param failReason
 * @param id
 * @param institutionId
 * @param isLocalized
 * @param name
 * @param provinceId
 * @param provinceName
 * @param refId
 * @param registerNo
 * @param socialCreditCode

 */

export interface 合作医院 {
    cityId:string;
    cityName:string;
    cooperativeCount:string;
    cooperativeCountShow:string;
    county:string;
    countyId:string;
    failReason:string;
    id:string;
    institutionId:string;
    isLocalized:integer;
    name:string;
    provinceId:string;
    provinceName:string;
    refId:string;
    registerNo:string;
    socialCreditCode:string;

}

/**
 * @param id
 * @param refId
 * @param systemCode

 */

export interface 太美系统认证 {
    id:string;
    refId:string;
    systemCode:string;

}

/**
 * @param experimentCount
 * @param experimentalField
 * @param experimentalFieldId
 * @param id
 * @param indication
 * @param refId
 * @param testStageId
 * @param testStageName

 */

export interface 实验数量统计 {
    experimentCount:integer;
    experimentalField:string;
    experimentalFieldId:string;
    id:string;
    indication:string;
    refId:string;
    testStageId:string;
    testStageName:string;

}

/**
 * @param businessScopeDTOS
 * @param cityName
 * @param cooperativeSiteDTOS
 * @param croId
 * @param id
 * @param inspected
 * @param logoCloudfileId
 * @param logoUrl
 * @param matchElements
 * @param name
 * @param profile
 * @param provinceName
 * @param researcherNumber
 * @param siteCount
 * @param taimeiSystemAuthDTOS
 * @param type
 * @param typeId

 */

export interface 找cro页面展示结果 {
    businessScopeDTOS:array;
    cityName:string;
    cooperativeSiteDTOS:array;
    croId:string;
    id:string;
    inspected:integer;
    logoCloudfileId:string;
    logoUrl:string;
    matchElements:array;
    name:string;
    profile:string;
    provinceName:string;
    researcherNumber:integer;
    siteCount:integer;
    taimeiSystemAuthDTOS:array;
    type:string;
    typeId:string;

}

/**
 * @param centerId
 * @param centerIds
 * @param institutionName
 * @param institutions
 * @param operation
 * @param partnerProjectId
 * @param planEnrollment
 * @param sign
 * @param siteId
 * @param tenantId

 */

export interface 操作中心 {
    centerId:string;
    centerIds:array;
    institutionName:string;
    institutions:array;
    operation:integer;
    partnerProjectId:string;
    planEnrollment:integer;
    sign:integer;
    siteId:string;
    tenantId:string;

}

/**
 * @param counting
 * @param institutionId
 * @param name
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param sortProperties

 */

export interface 查询CRO参数 {
    counting:boolean;
    institutionId:string;
    name:string;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    sortProperties:array;

}

/**
 * @param businessCategorys
 * @param counting
 * @param experimentalFields
 * @param idList
 * @param inspected
 * @param institutions
 * @param names
 * @param pageNo
 * @param pageSize
 * @param paging
 * @param profiles
 * @param regions
 * @param researcherNumber
 * @param sortProperties
 * @param taimeiSystemAuth
 * @param types

 */

export interface 查询cro入参 {
    businessCategorys:array;
    counting:boolean;
    experimentalFields:array;
    idList:array;
    inspected:integer;
    institutions:array;
    names:array;
    pageNo:integer;
    pageSize:integer;
    paging:boolean;
    profiles:array;
    regions:array;
    researcherNumber:string;
    sortProperties:array;
    taimeiSystemAuth:array;
    types:array;

}

/**
 * @param croId
 * @param socialCreditCode

 */

export interface 查询partner参数 {
    croId:string;
    socialCreditCode:string;

}

/**
 * @param enquiryStatus
 * @param pageNum
 * @param pageSize
 * @param partnerProjectId
 * @param partnerProjectName
 * @param smoName
 * @param somId

 */

export interface 查询候选服务商入参 {
    enquiryStatus:integer;
    pageNum:integer;
    pageSize:integer;
    partnerProjectId:string;
    partnerProjectName:string;
    smoName:string;
    somId:string;

}

/**
 * @param configType
 * @param processSubjectId

 */

export interface 流程设置 {
    configType:integer;
    processSubjectId:string;

}

/**
 * @param aliasName
 * @param applyCount
 * @param averageNum
 * @param cityId
 * @param cityName
 * @param crcId
 * @param crcName
 * @param crcs
 * @param enquirePriceId
 * @param enquireSmoId
 * @param exchange
 * @param id
 * @param institutionId
 * @param institutionIds
 * @param institutionName
 * @param inviteSignLock
 * @param joinNum
 * @param lookUpReport
 * @param mainResearcher
 * @param partnerProjectId
 * @param payedMoney
 * @param planEnrollment
 * @param professionId
 * @param professionName
 * @param provinceId
 * @param provinceName
 * @param secondaryCode
 * @param siteId
 * @param smoId
 * @param smoName
 * @param smoReceive
 * @param tenantId

 */

export interface 研究中心项目信息表 {
    aliasName:string;
    applyCount:integer;
    averageNum:integer;
    cityId:string;
    cityName:string;
    crcId:string;
    crcName:string;
    crcs:array;
    enquirePriceId:string;
    enquireSmoId:string;
    exchange:integer;
    id:string;
    institutionId:string;
    institutionIds:array;
    institutionName:string;
    inviteSignLock:integer;
    joinNum:integer;
    lookUpReport:boolean;
    mainResearcher:string;
    partnerProjectId:string;
    payedMoney:number;
    planEnrollment:integer;
    professionId:string;
    professionName:string;
    provinceId:string;
    provinceName:string;
    secondaryCode:string;
    siteId:string;
    smoId:string;
    smoName:string;
    smoReceive:integer;
    tenantId:string;

}

/**
 * @param candidate
 * @param cspProjectId
 * @param currentPageIndex
 * @param insNum
 * @param pageSize
 * @param partnerId
 * @param partnerProjectId
 * @param payedMoney
 * @param programCode
 * @param projectName
 * @param projectNum
 * @param projectStatus
 * @param projectTotalBudget
 * @param publishNum
 * @param publishTime
 * @param signSiteNum
 * @param signSmoNum
 * @param smoId
 * @param smoName
 * @param smoNum
 * @param smoStatus
 * @param taskNum
 * @param therapyAreaName
 * @param totalCount
 * @param totalPrice
 * @param unPublish
 * @param unSignSiteNum
 * @param unpublishNum
 * @param updateTime
 * @param viewState

 */

export interface 雇主首页 {
    candidate:string;
    cspProjectId:string;
    currentPageIndex:integer;
    insNum:integer;
    pageSize:integer;
    partnerId:string;
    partnerProjectId:string;
    payedMoney:number;
    programCode:string;
    projectName:string;
    projectNum:string;
    projectStatus:string;
    projectTotalBudget:number;
    publishNum:string;
    publishTime:string;
    signSiteNum:integer;
    signSmoNum:integer;
    smoId:string;
    smoName:string;
    smoNum:integer;
    smoStatus:integer;
    taskNum:integer;
    therapyAreaName:string;
    totalCount:integer;
    totalPrice:string;
    unPublish:integer;
    unSignSiteNum:integer;
    unpublishNum:string;
    updateTime:string;
    viewState:integer;

}

/**
 * @param abbreviatedName
 * @param blindState
 * @param candidate
 * @param candidateId
 * @param cfda
 * @param contractNo
 * @param controlDrug
 * @param cooperativePartner
 * @param copyId
 * @param copyProjectCode
 * @param copyProjectName
 * @param createTenantName
 * @param createTime
 * @param createUserName
 * @param cro
 * @param croId
 * @param dmc
 * @param executiveDepartment
 * @param executiveDepartmentName
 * @param experimentType
 * @param experimentTypeId
 * @param firstPlanEndDate
 * @param firstPlanStartDate
 * @param geneticsCheck
 * @param groupName
 * @param id
 * @param indicationId
 * @param indicationName
 * @param interimAnalysis
 * @param isCopied
 * @param mainPmAccountId
 * @param mainPmId
 * @param mainPmName
 * @param memoTxt
 * @param minorJoin
 * @param pid
 * @param planCenterNum
 * @param planSubjectsNum
 * @param programCode
 * @param projectCode
 * @param projectDesc
 * @param projectDirector
 * @param projectManager
 * @param projectManagerId
 * @param projectName
 * @param projectScopeId
 * @param projectScopeName
 * @param projectSerialNo
 * @param projectStatusId
 * @param projectStatusName
 * @param projectTypeId
 * @param projectTypeName
 * @param projectVersion
 * @param researchDesign
 * @param researchProduct
 * @param researchTitle
 * @param researchTypeId
 * @param researchTypeName
 * @param studyDuration
 * @param studyStageId
 * @param studyStageName
 * @param tenantName
 * @param therapyAreaId
 * @param therapyAreaName
 * @param therapyMethod
 * @param treatmentGroupId
 * @param treatmentGroupName

 */

export interface 项目 {
    abbreviatedName:string;
    blindState:string;
    candidate:string;
    candidateId:string;
    cfda:string;
    contractNo:string;
    controlDrug:string;
    cooperativePartner:string;
    copyId:string;
    copyProjectCode:string;
    copyProjectName:string;
    createTenantName:string;
    createTime:integer;
    createUserName:string;
    cro:string;
    croId:string;
    dmc:string;
    executiveDepartment:string;
    executiveDepartmentName:string;
    experimentType:string;
    experimentTypeId:string;
    firstPlanEndDate:string;
    firstPlanStartDate:string;
    geneticsCheck:string;
    groupName:string;
    id:string;
    indicationId:string;
    indicationName:string;
    interimAnalysis:string;
    isCopied:integer;
    mainPmAccountId:string;
    mainPmId:string;
    mainPmName:string;
    memoTxt:string;
    minorJoin:string;
    pid:string;
    planCenterNum:string;
    planSubjectsNum:string;
    programCode:string;
    projectCode:string;
    projectDesc:string;
    projectDirector:string;
    projectManager:string;
    projectManagerId:string;
    projectName:string;
    projectScopeId:string;
    projectScopeName:string;
    projectSerialNo:string;
    projectStatusId:string;
    projectStatusName:string;
    projectTypeId:string;
    projectTypeName:string;
    projectVersion:integer;
    researchDesign:string;
    researchProduct:string;
    researchTitle:string;
    researchTypeId:string;
    researchTypeName:string;
    studyDuration:string;
    studyStageId:string;
    studyStageName:string;
    tenantName:string;
    therapyAreaId:string;
    therapyAreaName:string;
    therapyMethod:string;
    treatmentGroupId:string;
    treatmentGroupName:string;

}

/**
 * @param contact
 * @param contractPrice
 * @param currentPageIndex
 * @param email
 * @param enquireSmoId
 * @param id
 * @param insNum
 * @param institutionId
 * @param institutionIds
 * @param institutionName
 * @param institutionStatus
 * @param joinNum
 * @param pageSize
 * @param partnerId
 * @param partnerProjectId
 * @param payType
 * @param professionId
 * @param projectTotalPrice
 * @param smoCityId
 * @param smoCityName
 * @param smoId
 * @param smoIndicationName
 * @param smoLastThreeYearBeNumber
 * @param smoLastThreeYearPost_Number
 * @param smoLastThreeYearTwoNumber
 * @param smoName
 * @param smoPayedMoney
 * @param smoProvinceId
 * @param smoProvinceName
 * @param smoQuotedPrice
 * @param smoStationCraNumber
 * @param smoStationCrcNumber
 * @param smoStatus
 * @param smoTotalPrice
 * @param targetJoinNumber
 * @param taskPrice
 * @param taskVisitPrice
 * @param tasks
 * @param tenantId
 * @param totalCount

 */

export interface 项目smo信息 {
    contact:string;
    contractPrice:string;
    currentPageIndex:integer;
    email:string;
    enquireSmoId:string;
    id:string;
    insNum:integer;
    institutionId:string;
    institutionIds:array;
    institutionName:string;
    institutionStatus:integer;
    joinNum:integer;
    pageSize:integer;
    partnerId:string;
    partnerProjectId:string;
    payType:integer;
    professionId:string;
    projectTotalPrice:number;
    smoCityId:string;
    smoCityName:string;
    smoId:string;
    smoIndicationName:string;
    smoLastThreeYearBeNumber:integer;
    smoLastThreeYearPost_Number:integer;
    smoLastThreeYearTwoNumber:integer;
    smoName:string;
    smoPayedMoney:number;
    smoProvinceId:string;
    smoProvinceName:string;
    smoQuotedPrice:number;
    smoStationCraNumber:integer;
    smoStationCrcNumber:integer;
    smoStatus:integer;
    smoTotalPrice:number;
    targetJoinNumber:integer;
    taskPrice:number;
    taskVisitPrice:number;
    tasks:array;
    tenantId:string;
    totalCount:integer;

}

/**
 * @param allPlanEnrollment
 * @param allSiteCount
 * @param candidate
 * @param candidateId
 * @param contractJoinNumber
 * @param contractTotalAmount
 * @param cspProjectId
 * @param currentPageIndex
 * @param distributeSiteCount
 * @param drugName
 * @param endTime
 * @param enquireSmoId
 * @param enquireStatus
 * @param experimentType
 * @param experimentTypeId
 * @param id
 * @param insNum
 * @param institutionName
 * @param intentSinglePrice
 * @param pageSize
 * @param paidMoney
 * @param partnerId
 * @param partnerProjectStatus
 * @param payedMoney
 * @param programCode
 * @param projectAttachment
 * @param projectCycle
 * @param projectDesc
 * @param projectDto
 * @param projectMembers
 * @param projectName
 * @param projectTotalBudget
 * @param projectTotalPrice
 * @param publishTime
 * @param receiveNumber
 * @param saeRate
 * @param screenFailRate
 * @param signInsNumber
 * @param singlePrice
 * @param smoId
 * @param smoName
 * @param smoNum
 * @param smoViewState
 * @param smos
 * @param startTime
 * @param studyStageId
 * @param studyStageName
 * @param sumTargetEnrollment
 * @param targetJoinNumber
 * @param tenantId
 * @param therapyAreaId
 * @param therapyAreaName
 * @param totalCount
 * @param transManagementCycle
 * @param unitpricePerCase
 * @param updateTime
 * @param visitUnitBudgetCost

 */

export interface 项目基本信息表 {
    allPlanEnrollment:integer;
    allSiteCount:integer;
    candidate:string;
    candidateId:string;
    contractJoinNumber:integer;
    contractTotalAmount:number;
    cspProjectId:string;
    currentPageIndex:integer;
    distributeSiteCount:integer;
    drugName:string;
    endTime:string;
    enquireSmoId:string;
    enquireStatus:integer;
    experimentType:string;
    experimentTypeId:string;
    id:string;
    insNum:integer;
    institutionName:string;
    intentSinglePrice:number;
    pageSize:integer;
    paidMoney:number;
    partnerId:string;
    partnerProjectStatus:integer;
    payedMoney:number;
    programCode:string;
    projectAttachment:string;
    projectCycle:integer;
    projectDesc:string;
    projectDto:undefined;
    projectMembers:array;
    projectName:string;
    projectTotalBudget:number;
    projectTotalPrice:number;
    publishTime:string;
    receiveNumber:integer;
    saeRate:number;
    screenFailRate:number;
    signInsNumber:integer;
    singlePrice:number;
    smoId:string;
    smoName:string;
    smoNum:integer;
    smoViewState:integer;
    smos:array;
    startTime:string;
    studyStageId:string;
    studyStageName:string;
    sumTargetEnrollment:integer;
    targetJoinNumber:integer;
    tenantId:string;
    therapyAreaId:string;
    therapyAreaName:string;
    totalCount:integer;
    transManagementCycle:integer;
    unitpricePerCase:number;
    updateTime:string;
    visitUnitBudgetCost:number;

}

/**
 * @param email
 * @param id
 * @param name
 * @param partnerProjectId

 */

export interface 项目授权人员 {
    email:string;
    id:string;
    name:string;
    partnerProjectId:string;

}

