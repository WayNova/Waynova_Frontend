import React, { useState } from 'react';
import Select from 'react-select';
  
  const reactSelectStyles = {
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: () => ({ display: 'none' }),
    control: (provided) => ({
      ...provided,
      paddingRight: '0px',
      minHeight: '40px',
      boxShadow: 'none',
      borderColor: '#d1d5db',
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingRight: '24px',
    }),
    input: (provided) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
  };
  const procurementStatusOptions = [
    { value: 'Immediate <3 mo', label: 'Immediate <3 mo' },
    { value: 'Near-term 3–6 mo', label: 'Near-term 3–6 mo' },
    { value: 'Long-term 6–12+ mo', label: 'Long-term 6–12+ mo' },
    { value: 'RFP/Bid', label: 'RFP/Bid' },
    { value: 'Direct Purchase', label: 'Direct Purchase' },
    { value: 'Cooperative Purchasing', label: 'Cooperative Purchasing' }
  ];
  const productCategoryOptions = [
    { value: 'Capital Equipment', label: 'Capital Equipment' },
    { value: 'Training/Services', label: 'Training/Services' },
    { value: 'Software/IT Systems', label: 'Software/IT Systems' },
    { value: 'Recurring Supplies', label: 'Recurring Supplies' },
    { value: 'Other', label: 'Other' }
  ];

const AddBuyerProfiles = () => {
  const [errors, setErrors] = useState({ agencyName: '', firstName: '' });
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', email: '' });
  const primaryUseCaseOptions = [
    { value: 'Operational Need', label: 'Operational Need' },
    { value: 'Training', label: 'Training' },
    { value: 'Community Policing', label: 'Community Policing' },
    { value: 'Research and Development', label: 'Research and Development' },
    { value: 'Emergency Management', label: 'Emergency Management' },
    { value: 'Grant Matching', label: 'Grant Matching' },
    { value: 'Other', label: 'Other' }
  ];
  const [form, setForm] = useState({
    agencyName: '',
    cageDuns: '',
    agencyType: '',
    agencyTypeOther: '',
    state: '',
    zipCode: '',
    populationServed: '',
    crimeRate: '',
    opportunityZone: '',
    femaDisaster: '',
    firePopulationServed: '',
    annualCallVolume: '',
    firesPerYear: '',
    fireFemaDisaster: '',
    tribalJurisdiction: '',
    emsPopulationServed: '',
    emsAnnualCallVolume: '',
    emsResponseTime: '',
    emsOpportunityZone: '',
    emsFemaDisaster: '',
    schoolEnrollmentSize: '',
    titleISchool: '',
    schoolOpportunityZone: '',
    schoolFemaDisaster: '',
    higherEdEnrollmentSize: '',
    r1Institution: '',
    higherEdFemaDisaster: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'agencyName' && e.target.value) {
      setErrors(prev => ({ ...prev, agencyName: '' }));
    }
    if (e.target.name === 'firstName' && e.target.value) {
      setErrors(prev => ({ ...prev, firstName: '' }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  // Validate first name on submit
  if (!userDetails.firstName) {
    setErrors(prev => ({ ...prev, firstName: 'Please fill in required fields' }));
    return;
  }
  import('./../utils/sendBuyerProfileEmail').then(({ sendBuyerProfileEmail }) => {
    sendBuyerProfileEmail({ form, userDetails }).then(result => {
      if (result.success) {
        setForm({
          agencyName: '',
          cageDuns: '',
          agencyType: '',
          agencyTypeOther: '',
          state: '',
          zipCode: '',
          populationServed: '',
          crimeRate: '',
          opportunityZone: '',
          femaDisaster: '',
          firePopulationServed: '',
          annualCallVolume: '',
          firesPerYear: '',
          fireFemaDisaster: '',
          tribalJurisdiction: '',
          emsPopulationServed: '',
          emsAnnualCallVolume: '',
          emsResponseTime: '',
          emsOpportunityZone: '',
          emsFemaDisaster: '',
          schoolEnrollmentSize: '',
          titleISchool: '',
          schoolOpportunityZone: '',
          schoolFemaDisaster: '',
          higherEdEnrollmentSize: '',
          r1Institution: '',
          higherEdFemaDisaster: '',
          municipalityPopulationServed: '',
          urbanRuralClassification: '',
          municipalityOpportunityZone: '',
          municipalityFemaDisaster: '',
          tribalPopulationServed: '',
          federallyRecognizedTribe: '',
          tribalFemaDisaster: '',
          tribalOpportunityZone: '',
          departmentSize: '',
          annualBudget: '',
          pastGrantUse: '',
          procurementStatus: [],
          productCategory: '',
          productCategoryOther: '',
          productNameModel: '',
          capitalOrRecurring: '',
          primaryUseCase: [],
          primaryUseCaseOther: ''
        });
        setUserDetails({ firstName: '', lastName: '', email: '' });
        setStep(1);
        setShowThankYou(true); 
      } else {
        alert('Failed to send buyer profile. Please try again.');
      }
    });
  });
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative" style={{ background: 'linear-gradient(180deg, #2C3E64 0%, #F9F6F2 100%)' }}>
      {step === 1 && (
        <button
          className="absolute top-6 left-6 bg-transparent text-white font-semibold p-0 m-0 border-none outline-none shadow-none hover:underline"
          onClick={() => window.location.href = '/'}
          style={{ zIndex: 10, background: 'none', border: 'none', outline: 'none', boxShadow: 'none', color: '#fff' }}
        >
          &larr; Back
        </button>
      )}
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-lg border border-blue-100 mt-12" style={{ boxShadow: '0 8px 32px rgba(10,34,64,0.10)' }}>
        <div className="flex flex-col items-center mb-6">
          <img src="/waynova_logo.png" alt="WayNova Logo" className="h-2 w-12 mb-0" />
          {!showThankYou && (
            <h2 className="text-3xl font-bold mb-0 text-center" style={{ color: '#0A2240', fontFamily: 'Times New Roman, Times, serif' }}>Add Buyer Profile</h2>
          )}
        </div>
        {showThankYou ? (
          <div className="flex flex-col items-center justify-center py-12">
            <h3 className="text-2xl font-semibold text-[#0A2240] mb-4">
              Thank you for submitting the form!
            </h3>
            <div className="flex gap-4 mt-4">
              <button
                className="px-6 py-2 rounded-lg font-semibold transition text-white"
                style={{ backgroundColor: '#2C3E64' }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#0A2240'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = '#2C3E64'}
                onClick={() => setShowThankYou(false)}
              >
                Submit Another Profile
              </button>
            </div>
          </div>
        ) : (
          <React.Fragment>
            {step === 1 ? (
              <form className="flex flex-col gap-2.5">
          <label className="block text-gray-700 text-sm font-medium mb-0 p-0" style={{marginBottom: '1px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
            Agency Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="agencyName"
            value={form.agencyName}
            onChange={handleChange}
            placeholder="Agency Name"
            className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.agencyName ? 'text-gray-800' : 'text-gray-400'}`}
            required
          />
          {errors.agencyName && (
            <span className="text-red-500 text-xs mt-1">{errors.agencyName}</span>
          )}
          <label className="block text-gray-700 text-sm font-medium mb-0 p-0" style={{marginBottom: '1px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
            CAGE / DUNS #
          </label>
          <input
            type="text"
            name="cageDuns"
            value={form.cageDuns}
            onChange={handleChange}
            placeholder="CAGE / DUNS # (if known)"
            className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.cageDuns ? 'text-gray-800' : 'text-gray-400'}`}
          />
          <label className="block text-gray-700 text-sm font-medium mb-0 p-0" style={{marginBottom: '1px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
            Agency Type <span className="text-red-500">*</span>
          </label>
          <select
            name="agencyType"
            value={form.agencyType}
            onChange={handleChange}
            className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none ${form.agencyType ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
            required
          >
            <option value="" disabled>Select Agency Type</option>
            <option value="Police">Police</option>
            <option value="Fire">Fire</option>
            <option value="EMS">EMS</option>
            <option value="School/District">School/District</option>
            <option value="Higher Ed">Higher Ed</option>
            <option value="Municipality/City Govt">Municipality/City Govt</option>
            <option value="Tribal">Tribal</option>
            <option value="Other">Other</option>
          </select>
          {form.agencyType === 'Other' && (
            <>
              <label className="block text-gray-700 text-sm font-medium mb-0 mt-2 p-0" style={{marginBottom: '-15px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
                Please specify <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="agencyTypeOther"
                value={form.agencyTypeOther}
                onChange={handleChange}
                placeholder="Please specify"
                className={`border border-gray-300 px-4 py-2 rounded-lg mt-3 focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.agencyTypeOther ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ width: '60%' }}
                required
              />
            </>
          )}
            <label className="block text-gray-700 text-sm font-medium mb-0 p-0" style={{marginBottom: '1px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
            State <span className="text-red-500">*</span>
          </label>
          <select
            name="state"
            value={form.state}
            onChange={handleChange}
            className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none ${form.state ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
            style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
            required
          >
            <option value="">Select State</option>
            {['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <label className="block text-gray-700 text-sm font-medium mb-0 p-0" style={{marginBottom: '1px', paddingBottom: 0, display: 'flex', alignItems: 'flex-start'}}>
            ZIP Code
          </label>
          <input
            type="text"
            name="zipCode"
            value={form.zipCode}
            onChange={handleChange}
            placeholder="ZIP Code (optional)"
            className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.zipCode ? 'text-gray-800' : 'text-gray-400'}`}
          />
            {/* Department Size */}
            <label className="block text-gray-700 text-sm font-medium mb-0 mt-3.5" style={{display: 'flex', alignItems: 'flex-start'}}>
              Department Size
            </label>
            <select
              name="departmentSize"
              value={form.departmentSize || ''}
              onChange={handleChange}
              className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.departmentSize ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
              required
            >
              <option value="" disabled className="text-gray-400">Select Size</option>
              <option value="1-10" className="text-gray-800">1–10</option>
              <option value="11-50" className="text-gray-800">11–50</option>
              <option value="51-200" className="text-gray-800">51–200</option>
              <option value="200+" className="text-gray-800">200+</option>
            </select>
            {/* Annual Budget Range */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Annual Budget Range
            </label>
            <select
              name="annualBudget"
              value={form.annualBudget || ''}
              onChange={handleChange}
              className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.annualBudget ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
              required
            >
              <option value="" disabled className="text-gray-400">Select Budget</option>
              <option value="<$1M" className="text-gray-800">&lt;$1M</option>
              <option value="$1-5M" className="text-gray-800">$1–5M</option>
              <option value="$5-20M" className="text-gray-800">$5–20M</option>
              <option value="$20M+" className="text-gray-800">$20M+</option>
            </select>
            {/* Past Grant Use? */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Past Grant Use?
            </label>
            <select
              name="pastGrantUse"
              value={form.pastGrantUse || ''}
              onChange={handleChange}
              className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.pastGrantUse ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
              required
            >
              <option value="" disabled className="text-gray-400">Select Option</option>
              <option value="Yes" className="text-gray-800">Yes</option>
              <option value="No" className="text-gray-800">No</option>
            </select>
            {/* Procurement Status (multi-select dropdown) */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Procurement Status <span style={{marginLeft: '6px'}} className="text-gray-500">(Select all that apply)</span>
            </label>
            <div className="mb-3.5">
              <Select
                isMulti
                name="procurementStatus"
                options={procurementStatusOptions}
                value={procurementStatusOptions.filter(opt => (form.procurementStatus || []).includes(opt.value))}
                onChange={selected => {
                  setForm(prev => ({
                    ...prev,
                    procurementStatus: selected.map(opt => opt.value)
                  }));
                }}
                classNamePrefix="react-select"
                placeholder="Select Procurement Status"
                styles={reactSelectStyles}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              />
            </div>
            {/* Product Category (single-select dropdown) */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Product Category
            </label>
            <div className="mb-3.5">
              <Select
                name="productCategory"
                options={productCategoryOptions}
                value={productCategoryOptions.find(opt => form.productCategory === opt.value) || null}
                onChange={selected => {
                  setForm(prev => ({
                    ...prev,
                    productCategory: selected ? selected.value : ''
                  }));
                }}
                classNamePrefix="react-select"
                placeholder="Select Product Category"
                styles={reactSelectStyles}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              />
              {form.productCategory === 'Other' && (
                <input
                  type="text"
                  name="productCategoryOther"
                  value={form.productCategoryOther || ''}
                  onChange={handleChange}
                  placeholder="Please specify"
                  className="border border-gray-300 px-2 py-1 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 text-gray-800 ml-2 mt-2"
                  style={{ minWidth: '120px' }}
                />
              )}
            </div>
            {/* Specific Product Name/Model (optional) */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Specific Product Name/Model (optional)
            </label>
            <input
              type="text"
              name="productNameModel"
              value={form.productNameModel || ''}
              onChange={handleChange}
              placeholder="Product Name/Model"
              className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.productNameModel ? 'text-gray-800' : 'text-gray-400'}`}
            />
            {/* Is this capital or recurring? (dropdown) */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Is this capital or recurring?
            </label>
            <select
              name="capitalOrRecurring"
              value={form.capitalOrRecurring || ''}
              onChange={handleChange}
              className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.capitalOrRecurring ? 'text-gray-800' : 'text-gray-400'} appearance-none pr-8`}
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=\'none\' stroke=\'#0A2240\' stroke-width=\'2\' viewBox=\'0 0 24 24\' xmlns=\'http://www.w3.org/2000/svg\'><path stroke-linecap=\'round\' stroke-linejoin=\'round\' d=\'M19 9l-7 7-7-7\'></path></svg>')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5em 1.5em' }}
              required
            >
              <option value="" disabled className="text-gray-400">Select Option</option>
              <option value="Capital" className="text-gray-800">Capital</option>
              <option value="Recurring" className="text-gray-800">Recurring</option>
            </select>
            {/* Primary Use Case (multi-select chips) */}
            <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
              Primary Use Case <span style={{marginLeft: '6px'}} className="text-gray-500">(Select all that apply)</span>
            </label>
            <div className="mb-3.5">
              <Select
                isMulti
                name="primaryUseCase"
                options={primaryUseCaseOptions}
                value={primaryUseCaseOptions.filter(opt => (form.primaryUseCase || []).includes(opt.value))}
                onChange={selected => {
                  setForm(prev => ({
                    ...prev,
                    primaryUseCase: selected.map(opt => opt.value)
                  }));
                }}
                classNamePrefix="react-select"
                placeholder="Select Use Case(s)"
                styles={reactSelectStyles}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
              />
              {(form.primaryUseCase || []).includes('Other') && (
                <input
                  type="text"
                  name="primaryUseCaseOther"
                  value={form.primaryUseCaseOther || ''}
                  onChange={handleChange}
                  placeholder="Please specify"
                  className="border border-gray-300 px-2 py-1 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 text-gray-800 ml-2 mt-2"
                  style={{ minWidth: '120px' }}
                />
              )}
            </div>
            {form.agencyType === 'Tribal' && (
              <>
                {/* Population Served */}
                <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Population Served
                </label>
                <select
                  name="tribalPopulationServed"
                  value={form.tribalPopulationServed || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.tribalPopulationServed ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Population Range</option>
                  <option value="less than 10,000" className="text-gray-800">less than 10,000</option>
                  <option value="10,000-50,000" className="text-gray-800">10,000-50,000</option>
                  <option value="50,001-100,000" className="text-gray-800">50,001 - 100,000</option>
                  <option value="100,001-500,000" className="text-gray-800">100,001 - 500,000</option>
                  <option value="more than 500,000" className="text-gray-800">more than 500,000</option>
                </select>
                {/* Federally Recognized Tribe? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Federally Recognized Tribe?
                </label>
                <select
                  name="federallyRecognizedTribe"
                  value={form.federallyRecognizedTribe || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.federallyRecognizedTribe ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* FEMA-Declared Disaster Area? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  FEMA-Declared Disaster Area?
                </label>
                <select
                  name="tribalFemaDisaster"
                  value={form.tribalFemaDisaster || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.tribalFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* Opportunity Zone? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Opportunity Zone?
                </label>
                <select
                  name="tribalOpportunityZone"
                  value={form.tribalOpportunityZone || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.tribalOpportunityZone ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
              </>
            )}
            {form.agencyType === 'Municipality/City Govt' && (
              <>
                {/* Population Served */}
                <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Population Served
                </label>
                <select
                  name="municipalityPopulationServed"
                  value={form.municipalityPopulationServed || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.municipalityPopulationServed ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Population Range</option>
                  <option value="less than 10,000" className="text-gray-800">less than 10,000</option>
                  <option value="10,000-50,000" className="text-gray-800">10,000-50,000</option>
                  <option value="50,001-100,000" className="text-gray-800">50,001 - 100,000</option>
                  <option value="100,001-500,000" className="text-gray-800">100,001 - 500,000</option>
                  <option value="more than 500,000" className="text-gray-800">more than 500,000</option>
                </select>
                {/* Urban / Rural Classification (auto-tag from ZIP) */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Urban / Rural Classification
                </label>
                <input
                  type="text"
                  name="urbanRuralClassification"
                  value={form.urbanRuralClassification || ''}
                  onChange={handleChange}
                  placeholder="Enter Urban or Rural"
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none placeholder-gray-400 ${form.urbanRuralClassification ? 'text-gray-800' : 'text-gray-400'}`}
                />
                {/* Opportunity Zone? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Opportunity Zone?
                </label>
                <select
                  name="municipalityOpportunityZone"
                  value={form.municipalityOpportunityZone || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.municipalityOpportunityZone ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* FEMA-Declared Disaster Area? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  FEMA-Declared Disaster Area?
                </label>
                <select
                  name="municipalityFemaDisaster"
                  value={form.municipalityFemaDisaster || ''}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.municipalityFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
              </>
            )}
            {form.agencyType === 'Higher Ed' && (
              <>
                {/* Student Enrollment Size */}
                <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Student Enrollment Size
                </label>
                <select
                  name="higherEdEnrollmentSize"
                  value={form.higherEdEnrollmentSize}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.higherEdEnrollmentSize ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Enrollment Size</option>
                  <option value="less than 1,000" className="text-gray-800">less than 1,000</option>
                  <option value="1,000-5,000" className="text-gray-800">1,000-5,000</option>
                  <option value="5,001-10,000" className="text-gray-800">5,001-10,000</option>
                  <option value="10,001-20,000" className="text-gray-800">10,001-20,000</option>
                  <option value="more than 20,000" className="text-gray-800">more than 20,000</option>
                </select>
                {/* R1 Research Institution? (Yes/No) */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  R1 Research Institution?
                </label>
                <select
                  name="r1Institution"
                  value={form.r1Institution}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.r1Institution ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* FEMA-Declared Disaster Area? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  FEMA-Declared Disaster Area?
                </label>
                <select
                  name="higherEdFemaDisaster"
                  value={form.higherEdFemaDisaster}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.higherEdFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
              </>
            )}
            {form.agencyType === 'School/District' && (
              <>
                {/* Student Enrollment Size */}
                <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Student Enrollment Size
                </label>
                <select
                  name="schoolEnrollmentSize"
                  value={form.schoolEnrollmentSize}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.schoolEnrollmentSize ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Enrollment Size</option>
                  <option value="less than 500" className="text-gray-800">less than 500</option>
                  <option value="500-1,000" className="text-gray-800">500-1,000</option>
                  <option value="1,001-5,000" className="text-gray-800">1,001-5,000</option>
                  <option value="5,001-10,000" className="text-gray-800">5,001-10,000</option>
                  <option value="more than 10,000" className="text-gray-800">more than 10,000</option>
                </select>
                {/* Title I School? (Yes/No — only for K–12) */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Title I School? (K–12 only)
                </label>
                <select
                  name="titleISchool"
                  value={form.titleISchool}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.titleISchool ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* Opportunity Zone? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Opportunity Zone?
                </label>
                <select
                  name="schoolOpportunityZone"
                  value={form.schoolOpportunityZone}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.schoolOpportunityZone ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* FEMA-Declared Disaster Area? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  FEMA-Declared Disaster Area?
                </label>
                <select
                  name="schoolFemaDisaster"
                  value={form.schoolFemaDisaster}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.schoolFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                  required
                  style={{ appearance: 'none' }}
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
              </>
            )}
            {form.agencyType === 'EMS' && (
              <>
                {/* Population Served */}
                <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Population Served
                </label>
                <select
                  name="emsPopulationServed"
                  value={form.emsPopulationServed}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.emsPopulationServed ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Population Range</option>
                  <option value="less than 10,000" className="text-gray-800">less than 10,000</option>
                  <option value="10,000-50,000" className="text-gray-800">10,000-50,000</option>
                  <option value="50,001-100,000" className="text-gray-800">50,001 - 100,000</option>
                  <option value="100,001-500,000" className="text-gray-800">100,001 - 500,000</option>
                  <option value="more than 500,000" className="text-gray-800">more than 500,000</option>
                </select>
                {/* Annual Call Volume */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Annual Call Volume
                </label>
                <select
                  name="emsAnnualCallVolume"
                  value={form.emsAnnualCallVolume}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.emsAnnualCallVolume ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Volume</option>
                  <option value="Low" className="text-gray-800">Low</option>
                  <option value="Medium" className="text-gray-800">Medium</option>
                  <option value="High" className="text-gray-800">High</option>
                </select>
                {/* Average Response Time */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Average Response Time
                </label>
                <select
                  name="emsResponseTime"
                  value={form.emsResponseTime}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.emsResponseTime ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Response Time</option>
                  <option value="<5 min" className="text-gray-800">&lt;5 min</option>
                  <option value="5–10 min" className="text-gray-800">5–10 min</option>
                  <option value=">10 min" className="text-gray-800">&gt;10 min</option>
                </select>
                {/* Opportunity Zone? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  Opportunity Zone?
                </label>
                <select
                  name="emsOpportunityZone"
                  value={form.emsOpportunityZone}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.emsOpportunityZone ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
                {/* FEMA-Declared Disaster Area? */}
                <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                  FEMA-Declared Disaster Area?
                </label>
                <select
                  name="emsFemaDisaster"
                  value={form.emsFemaDisaster}
                  onChange={handleChange}
                  className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.emsFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                  style={{ appearance: 'none' }}
                  required
                >
                  <option value="" disabled className="text-gray-400">Select Option</option>
                  <option value="Yes" className="text-gray-800">Yes</option>
                  <option value="No" className="text-gray-800">No</option>
                </select>
              </>
            )}
          {form.agencyType === 'Fire' && (
            <>
              {/* Population Served */}
              <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                Population Served
              </label>
              <select
                name="firePopulationServed"
                value={form.firePopulationServed}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.firePopulationServed ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Population Range</option>
                <option value="less than 10,000" className="text-gray-800">less than 10,000</option>
                <option value="10,000-50,000" className="text-gray-800">10,000-50,000</option>
                <option value="50,001-100,000" className="text-gray-800">50,001 - 100,000</option>
                <option value="100,001-500,000" className="text-gray-800">100,001 - 500,000</option>
                <option value="more than 500,000" className="text-gray-800">more than 500,000</option>
              </select>
              {/* Annual Call Volume */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                Annual Call Volume
              </label>
              <select
                name="annualCallVolume"
                value={form.annualCallVolume}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.annualCallVolume ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Volume</option>
                <option value="Low" className="text-gray-800">Low</option>
                <option value="Medium" className="text-gray-800">Medium</option>
                <option value="High" className="text-gray-800">High</option>
              </select>
              {/* Number of Fires Per Year */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                Number of Fires Per Year
              </label>
              <select
                name="firesPerYear"
                value={form.firesPerYear}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.firesPerYear ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Volume</option>
                <option value="Low" className="text-gray-800">Low</option>
                <option value="Medium" className="text-gray-800">Medium</option>
                <option value="High" className="text-gray-800">High</option>
              </select>
              {/* FEMA-Declared Disaster Area? */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                FEMA-Declared Disaster Area?
              </label>
              <select
                name="fireFemaDisaster"
                value={form.fireFemaDisaster}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.fireFemaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Option</option>
                <option value="Yes" className="text-gray-800">Yes</option>
                <option value="No" className="text-gray-800">No</option>
              </select>
              {/* Tribal Land Jurisdiction? */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                Tribal Land Jurisdiction?
              </label>
              <select
                name="tribalJurisdiction"
                value={form.tribalJurisdiction}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.tribalJurisdiction ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Option</option>
                <option value="Yes" className="text-gray-800">Yes</option>
                <option value="No" className="text-gray-800">No</option>
              </select>
            </>
          )}
          {/* Police Department Fields */}
          {form.agencyType === 'Police' && (
            <>
              {/* Population Served */}
              <label className="block text-gray-700 text-sm font-medium mb-0 mt-1" style={{display: 'flex', alignItems: 'flex-start'}}>
                Population Served
              </label>
              <select
                name="populationServed"
                value={form.populationServed}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.populationServed ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Population Range</option>
                <option value="less than 10,000" className="text-gray-800">less than 10,000</option>
                <option value="10,000-50,000" className="text-gray-800">10,000-50,000</option>
                <option value="50,001-100,000" className="text-gray-800">50,001 - 100,000</option>
                <option value="100,001-500,000" className="text-gray-800">100,001 - 500,000</option>
                <option value="more than 500,000" className="text-gray-800">more than 500,000</option>
              </select>
              {/* Crime Rate / Calls for Service Volume */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                Crime Rate / Calls for Service Volume
              </label>
              <select
                name="crimeRate"
                value={form.crimeRate}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.crimeRate ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Volume</option>
                <option value="Low" className="text-gray-800">Low</option>
                <option value="Medium" className="text-gray-800">Medium</option>
                <option value="High" className="text-gray-800">High</option>
              </select>
              {/* Opportunity Zone? */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                Opportunity Zone?
              </label>
              <select
                name="opportunityZone"
                value={form.opportunityZone}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.opportunityZone ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Option</option>
                <option value="Yes" className="text-gray-800">Yes</option>
                <option value="No" className="text-gray-800">No</option>
              </select>
              {/* FEMA-Declared Disaster Area? */}
              <label className="block text-gray-700 text-sm font-medium mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
                FEMA-Declared Disaster Area?
              </label>
              <select
                name="femaDisaster"
                value={form.femaDisaster}
                onChange={handleChange}
                className={`border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none mb-3.5 ${form.femaDisaster ? 'text-gray-800' : 'text-gray-400'}`}
                style={{ appearance: 'none' }}
                required
              >
                <option value="" disabled className="text-gray-400">Select Option</option>
                <option value="Yes" className="text-gray-800">Yes</option>
                <option value="No" className="text-gray-800">No</option>
              </select>
            </>
          )}
          <div className="flex justify-end w-full">
            <button
              type="button"
              className="flex items-center text-[#0A2240] text-m font-semibold bg-transparent border-none p-0 m-0 hover:underline focus:outline-none"
              style={{ boxShadow: 'none' }}
              onClick={() => {
                if (!form.agencyName) {
                  setErrors(prev => ({ ...prev, agencyName: 'Please fill in required fields' }));
                  return;
                }
                setStep(2);
              }}
            >
              Next
              <span className="ml-1">&rarr;</span>
            </button>
          </div>
              </form>
            ) : step === 2 && (
              <React.Fragment>
                {/* Step 2: User Details Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center" style={{ color: '#0A2240' }}>
                Your Details
              </h3>

              <label className="block text-gray-700 text-sm font-medium mb-0">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={e => {
                  setUserDetails({ ...userDetails, firstName: e.target.value });
                  if (e.target.value) setErrors(prev => ({ ...prev, firstName: '' }));
                }}
                placeholder="First Name"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />
              {errors.firstName && (
                <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>
              )}

              <label className="block text-gray-700 text-sm font-medium mb-0">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={e => setUserDetails({ ...userDetails, lastName: e.target.value })}
                placeholder="Last Name"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />

              <label className="block text-gray-700 text-sm font-medium mb-0">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
                placeholder="Email ID"
                className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />

              <div className="flex justify-end">
                <div className="flex justify-between w-full items-center mt-4">
                  <button
                    type="button"
                    className="flex items-center text-[#0A2240] text-sm font-semibold bg-transparent border-none p-0 m-0 hover:underline focus:outline-none"
                    style={{ boxShadow: 'none' }}
                    onClick={() => setStep(1)}
                  >
                    <span className="mr-1">&larr;</span> Back
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-lg font-semibold transition text-white"
                    style={{ backgroundColor: '#2C3E64' }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = '#0A2240'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = '#2C3E64'}
                  >
                    Submit
                  </button>
                </div>
              </div>
                </form>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default AddBuyerProfiles;