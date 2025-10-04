import emailjs from 'emailjs-com';


const SERVICE_ID = 'service_aramg44';
const TEMPLATE_ID = 'template_qlqvfqc'; 
const PUBLIC_KEY = 'Jpm0JZQENzZnCAjWK';


export const sendBuyerProfileEmail = async ({ form, userDetails }) => {
  const templateParams = {
    agencyName: form.agencyName,
    ueiCage: form.ueiCage, // Updated from cageDuns
    agencyType: form.agencyType,
    agencyTypeOther: form.agencyTypeOther,
    state: form.state,
    zipCode: form.zipCode,
    departmentSize: form.departmentSize,
    annualBudget: form.annualBudget,
    pastGrantUse: form.pastGrantUse,
    procurementStatus: (form.procurementStatus || []).join(', '),
    productCategory: form.productCategory,
    productCategoryOther: form.productCategoryOther,
    productNameModel: form.productNameModel,
    capitalOrRecurring: form.capitalOrRecurring,
    primaryUseCase: (form.primaryUseCase || []).join(', '),
    primaryUseCaseOther: form.primaryUseCaseOther,
    // Police
    populationServed: form.populationServed,
    crimeRate: form.crimeRate,
    opportunityZone: form.opportunityZone,
    femaDisaster: form.femaDisaster,
    // Fire
    firePopulationServed: form.firePopulationServed,
    annualCallVolume: form.annualCallVolume,
    firesPerYear: form.firesPerYear,
    fireFemaDisaster: form.fireFemaDisaster,
    tribalJurisdiction: form.tribalJurisdiction,
    // EMS
    emsPopulationServed: form.emsPopulationServed,
    emsAnnualCallVolume: form.emsAnnualCallVolume,
    emsResponseTime: form.emsResponseTime,
    emsOpportunityZone: form.emsOpportunityZone,
    emsFemaDisaster: form.emsFemaDisaster,
    // School/District
    schoolEnrollmentSize: form.schoolEnrollmentSize,
    titleISchool: form.titleISchool,
    schoolOpportunityZone: form.schoolOpportunityZone,
    schoolFemaDisaster: form.schoolFemaDisaster,
    // Higher Ed
    higherEdEnrollmentSize: form.higherEdEnrollmentSize,
    r1Institution: form.r1Institution,
    higherEdFemaDisaster: form.higherEdFemaDisaster,
    // Municipality/City Govt
    municipalityPopulationServed: form.municipalityPopulationServed,
    urbanRuralClassification: form.urbanRuralClassification,
    municipalityOpportunityZone: form.municipalityOpportunityZone,
    municipalityFemaDisaster: form.municipalityFemaDisaster,
    // Tribal
    tribalPopulationServed: form.tribalPopulationServed,
    federallyRecognizedTribe: form.federallyRecognizedTribe,
    tribalFemaDisaster: form.tribalFemaDisaster,
    tribalOpportunityZone: form.tribalOpportunityZone,
    // User details
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    email: userDetails.email,
    to_email: 'support@waynova.ai',
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    return { success: true, response };
  } catch (error) {
    return { success: false, error };
  }
};
