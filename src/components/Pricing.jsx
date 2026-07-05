import "./Pricing.css";
const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h1>School Management Software Pricing</h1>

        <p className="subtitle">
          Affordable pricing based on your school's student strength.
        </p>

        <div className="pricing-wrapper">
          {/* Small & Medium Schools */}
          <div className="pricing-card popular">
            <div className="badge">Best Value</div>

            <h2 className="plan-title">Small & Medium Schools</h2>

            <div className="price">
              ₹150 <span>/ student / year</span>
            </div>

            <div className="student-count">Less than 1000 Students</div>

            <ul>
              <li>✓ Student Management</li>
              <li>✓ Fee Management</li>
              <li>✓ Examination System</li>
              <li>✓ Attendance Tracking</li>
              <li>✓ Staff Management</li>
              <li>✓ Finance Module</li>
              <li>✓ Reports & Dashboard</li>
              <li>✓ Technical Support</li>
            </ul>

            <a href="#contact" className="btn">
              Request Demo
            </a>
          </div>

          {/* Large Schools */}
          <div className="pricing-card popular">
            <div className="badge">Best Value</div>
            <h2 className="plan-title">Large Schools</h2>

            <div className="price">
              ₹100 <span>/ student / year</span>
            </div>

            <div className="student-count">1000+ Students</div>

            <ul>
              <li>✓ Student Management</li>
              <li>✓ Fee Management</li>
              <li>✓ Examination System</li>
              <li>✓ Attendance Tracking</li>
              <li>✓ Staff Management</li>
              <li>✓ Finance Module</li>
              <li>✓ Reports & Dashboard</li>
              <li>✓ Priority Support</li>
            </ul>

            <a href="#contact" className="btn">
              Request Demo
            </a>
          </div>
        </div>

        <div className="note">
          <strong>Note:</strong> Pricing is calculated annually based on the
          total number of enrolled students. There are no hidden charges.
          Contact us for implementation and onboarding details.
        </div>
      </div>
    </section>
  );
};

export default Pricing;
