import { Timeline } from "@/components/ui/timeline";
import React from "react";

const data = [
  {
    title: "Virtual Bookkeeping",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Virtual Bookkeeping service is designed to help businesses
          maintain accurate and up-to-date financial records without the need
          for in-house bookkeeping staff. We manage all aspects of your
          financial transactions, from the initial recording of expenses and
          income to finalizing monthly reports.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Daily Transaction Management:
                </strong>
                We record every financial transaction, ensuring every invoice,
                receipt, and expense is accounted for accurately.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Real-Time Access:</strong>{" "}
                With cloud-based solutions, you have instant access to your
                financial data, empowering you to make informed decisions in
                real-time.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Customized Reports:
                </strong>{" "}
                We create monthly and quarterly reports based on your needs,
                giving you detailed insights into your financial performance.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Financial Forecasting:
                </strong>{" "}
                Based on your historical data, we can help forecast cash flow,
                giving you a clearer picture of your financial future.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Tax-Ready Books:</strong>{" "}
                We maintain books in line with tax regulations, making tax
                filing easier and ensuring full compliance.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          Our virtual bookkeeping service ensures that your financial records
          are accurate, timely, and ready for any future needs such as audits,
          tax filings, or business growth plans.
        </p>
      </div>
    ),
  },
  {
    title: "Bank Reconciliation",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Bank Reconciliation service ensures that your business&apos;s financial
          records align with your bank statements. We perform regular checks and
          reconcile discrepancies between your internal records and bank
          transactions to ensure complete accuracy and prevent fraud.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Regular Reconciliation:
                </strong>{" "}
                We match your bank statements with your financial records on a
                monthly or quarterly basis, ensuring no errors.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Error Detection:</strong>{" "}
                By cross-referencing bank transactions, we can identify
                discrepancies such as missing entries, duplicate transactions,
                or misbooked items.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Timely Reporting:</strong>{" "}
                After the reconciliation process, we provide you with clear and
                easy-to-understand reconciliation reports.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Cash Flow Visibility:
                </strong>{" "}
                We provide insights into your available cash, making sure you&apos;re
                always aware of your actual bank balance, preventing overdrafts
                and managing cash flow effectively.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Compliance:</strong> We
                ensure that all reconciliations meet regulatory requirements,
                supporting your compliance efforts.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          Regular reconciliation helps keep your financial records clean, avoid
          fraud, and gives you a clear picture of your cash flow and financial
          position.
        </p>
      </div>
    ),
  },

  {
    title: "Payroll & Salary",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Payroll & Salary service handles all aspects of employee
          compensation, ensuring that your employees are paid accurately and on
          time while adhering to local tax laws and regulations.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Accurate Payroll Calculation:
                </strong>{" "}
                We calculate wages, including overtime, bonuses, and deductions,
                ensuring each employee receives the correct amount.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Tax Filing and Compliance:
                </strong>{" "}
                We ensure that your business complies with tax regulations by
                accurately calculating employee tax liabilities and withholding
                the appropriate amounts.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Pay Slips:</strong> We
                provide employees with professional, clear pay slips showing all
                earnings and deductions.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Benefits Management:
                </strong>{" "}
                We handle employee benefits such as health insurance, retirement
                plans, and other perks, ensuring that everything is managed
                properly and in accordance with company policies.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Direct Deposit:</strong> We
                offer secure direct deposit options to ensure your employees
                receive their payments swiftly and securely.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Employee Reporting:
                </strong>{" "}
                We maintain detailed reports on employee wages, tax
                contributions, and benefits for your reference.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          By outsourcing payroll, you save time, reduce the risk of errors, and
          ensure that your business is fully compliant with payroll tax
          requirements and labor laws.
        </p>
      </div>
    ),
  },
  {
    title: "Virtual CFO",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Virtual CFO service provides you with high-level financial
          expertise and strategic guidance, without the expense of a full-time
          Chief Financial Officer. This service is designed for growing
          businesses that need expert financial management but don&apos;t require a
          dedicated CFO.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Financial Strategy Development:
                </strong>{" "}
                We work with you to develop financial strategies that align with
                your business goals, ensuring that your financial health
                supports your long-term vision.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Budgeting and Forecasting:
                </strong>{" "}
                We help you create detailed budgets and forecasts, offering a
                clear roadmap for future growth.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Cash Flow Management:
                </strong>{" "}
                Our team tracks your cash flow, providing advice on how to
                optimize working capital, manage debt, and ensure your business
                remains financially stable.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Financial Reporting and Analysis:
                </strong>{" "}
                We provide regular financial reports, interpreting the data to
                help you make informed decisions about spending, investment, and
                growth strategies.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Risk Management:</strong>{" "}
                We help identify and manage financial risks, from tax
                obligations to market changes, ensuring you mitigate potential
                issues before they arise.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Mergers, Acquisitions, and Fundraising Support:
                </strong>
                If you&apos;re considering expansion or fundraising, we provide
                guidance and financial analysis to ensure you make the right
                decisions.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          With a Virtual CFO, you gain expert financial leadership to guide your
          business through complex decisions, all while keeping costs low.
        </p>
      </div>
    ),
  },
  {
    title: "Data Analytics",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Data Analytics service transforms raw data into powerful insights,
          enabling you to make data-driven decisions that improve business
          performance, drive efficiencies, and increase profitability.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Data Collection & Cleaning:
                </strong>{" "}
                We collect and clean your business data to ensure that it&apos;s
                accurate and ready for analysis.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Descriptive Analytics:
                </strong>{" "}
                We provide reports that describe your past performance, helping
                you understand trends and key metrics.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Predictive Analytics:
                </strong>{" "}
                We use statistical models and machine learning techniques to
                forecast future trends and behaviors, helping you plan for
                growth.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Performance Dashboards:
                </strong>{" "}
                We create customized dashboards to visualize your data, making
                it easier for you to interpret key metrics and take action.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Business Intelligence:
                </strong>{" "}
                We leverage advanced analytics tools to generate actionable
                business insights that help optimize your operations.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Real-Time Reporting:
                </strong>{" "}
                We provide real-time data reports, enabling you to make quick
                decisions based on the most up-to-date information.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          Our data analytics service helps you unlock the value in your data,
          allowing for smarter decisions and long-term business growth.
        </p>
      </div>
    ),
  },
  {
    title: "Tax Preparation",
    content: (
      <div className="w-full">
        <p className="text-neutral-700 text-body mb-8 leading-relaxed">
          Our Tax Preparation service ensures your business complies with tax
          regulations while maximizing deductions and minimizing tax
          liabilities. We manage everything from tax filings to strategic tax
          planning, making the tax season a stress-free experience.
        </p>
        <div className="bg-gray-50 rounded-lg">
          <p className="text-neutral-700 text-lg font-semibold mb-6">
            Key Features:
          </p>
          <ul className="list-disc text-neutral-600 text-lg space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Comprehensive Tax Filing:
                </strong>{" "}
                We handle your business&apos;s tax filings, including income tax,
                sales tax, VAT, and other local taxes, ensuring timely
                submissions and compliance.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Tax Planning and Strategy:
                </strong>{" "}
                We help you plan and strategize to minimize tax liabilities,
                identifying opportunities for deductions and credits that you
                may have overlooked.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Multinational Tax Compliance:
                </strong>{" "}
                For businesses operating internationally, we ensure compliance
                with both local and international tax laws, managing any
                cross-border tax implications.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Quarterly Tax Estimates:
                </strong>{" "}
                We help businesses with quarterly tax estimates, reducing the
                risk of underpayment penalties.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">
                  Tax Document Preparation:
                </strong>{" "}
                We prepare and organize all necessary documents, including W-2s,
                1099s, and other required filings, ensuring everything is in
                order when it&apos;s time to file.
              </span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 relative top-1 w-3 h-3 bg-primary mt-1" />
              <span className="ml-4">
                <strong className="text-neutral-700">Audit Support:</strong> In
                case of an audit, we provide support, ensuring that your
                financial records are accurate and in compliance with tax laws.
              </span>
            </li>
          </ul>
        </div>
        <p className="text-neutral-700 text-body mt-8 leading-relaxed">
          Our tax preparation service helps you navigate complex tax regulations
          while maximizing savings and ensuring full compliance.
        </p>
      </div>
    ),
  },
];

const ServiceTimeline = () => {
  return (
    <div className="w-full font-prosan">
      <Timeline data={data} />
    </div>
  );
};

export default ServiceTimeline;
