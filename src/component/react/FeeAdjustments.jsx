import React, { useState } from 'react';
import '../Css/FeeAdjustments.css';
import { FaPen } from "react-icons/fa";
import { TbCash } from "react-icons/tb";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import chequeIcon from '../../Images/cheque.png';
import creditIcon from '../../Images/Credit.png';

const FeeAdjustments = () => {
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [activeSubItem, setActiveSubItem] = useState('Payments');
  const [dropdownState, setDropdownState] = useState({
    feeYear: false,
    feeHead: false,
    org: false
  });

  const subItems = [
    'Payments',
    'Cancellation',
    'Concession',
    'PM Issues',
    'Fee Installments',
    'Refunds',
    'Books-Reversal',
  ];

  // Handle focus: open the current dropdown, close others
  const handleFocus = (field) => {
    setDropdownState({
      feeYear: field === 'feeYear',
      feeHead: field === 'feeHead',
      org: field === 'org'
    });
  };

  // Handle selection or closure: close the current dropdown
  const handleClose = (field) => {
    setDropdownState(prev => ({
      ...prev,
      [field]: false
    }));
  };

  // Handle click: open dropdown on click, close after selection
  const handleClick = (field) => {
    setDropdownState({
      feeYear: field === 'feeYear',
      feeHead: field === 'feeHead',
      org: field === 'org'
    });
  };

  // Handle blur: close all dropdowns
  const handleBlur = () => {
    setDropdownState({
      feeYear: false,
      feeHead: false,
      org: false
    });
  };

  return (
    <div className="fee-adjustments-container">
      <div className="header-section">
        <div className="title-container">
          <h1>Fee Adjustments</h1>
          <p className="subtitle">Handle Fee Modifications, Concessions, Installments, Refunds, And Other Financial Adjustments</p>
        </div>
        <button className="organise-button">
          <FaPen /> Organise
        </button>
      </div>
      <div className="sub-items-container">
        {subItems.map((item) => (
          <div key={item} className="sub-item-wrapper">
            <span
              className={`sub-item ${activeSubItem === item ? 'active' : ''}`}
              onClick={() => setActiveSubItem(item)}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className="payment-methods">
        <h3>Select Payment Method</h3>
        <div className="buttons">
          <button
            className={paymentMethod === 'Cash' ? 'active' : ''}
            onClick={() => setPaymentMethod('Cash')}
          >
            <TbCash size={23} /> Cash
          </button>
          <button
            className={paymentMethod === 'DD' ? 'active' : ''}
            onClick={() => setPaymentMethod('DD')}
          >
            <HiOutlineDocumentCurrencyRupee size={23} /> DD
          </button>
          <button
            className={paymentMethod === 'Cheque' ? 'active' : ''}
            onClick={() => setPaymentMethod('Cheque')}
          >
            <img src={chequeIcon} alt="Cheque" /> Cheque
          </button>
          <button
            className={paymentMethod === 'Card' ? 'active' : ''}
            onClick={() => setPaymentMethod('Card')}
          >
            <img src={creditIcon} alt="Credit/Debit Card" /> Credit/Debit Card
          </button>
        </div>
      </div>

      <div className="form-container">
        <div className="form-left">
          <div className="dummy_color"></div>
          <div className="form_left_totalcontainer">        
            <div className="form-row">
              <div className="form-group">
                <label>Cheque/DD Amount</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <div className="form-group">
                <label>Pay Date</label>
                <div className="input-container">
                  <input type="text" placeholder="Enter Pay Date" />
                  <CiCalendar className="calendar-icon" />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Fee Payment Year</label>
                <div className="select-container">
                  <select
                    onFocus={() => handleFocus('feeYear')}
                    onBlur={handleBlur}
                    onChange={() => handleClose('feeYear')}
                    onClick={() => handleClick('feeYear')}
                  >
                    <option value="">Select Fee Year</option>
                    <option>Jr Intermediate</option>
                    <option>Fee Head</option>
                  </select>
                  {dropdownState.feeYear ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
              </div>
              <div className="form-group">
                <label>Fee Head</label>
                <div className="select-container">
                  <select
                    onFocus={() => handleFocus('feeHead')}
                    onBlur={handleBlur}
                    onChange={() => handleClose('feeHead')}
                    onClick={() => handleClick('feeHead')}
                  >
                    <option value="">Select Fee Year</option>
                    <option>FEE</option>
                    <option>Details</option>
                  </select>
                  {dropdownState.feeHead ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Total Due</label>
                <input type="text" placeholder="Enter Total Due" style={{ backgroundColor: '#FFE6E6', borderColor: '#FF6666' }} />
              </div>
              <div className="form-group">
                <label>Amount In</label>
                <input type="text" placeholder="Enter Amount" />
                <p className="note">** Amount in words will display HERE **</p>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Pocket Money</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <div className="form-group">
                <label>Akash Books</label>
                <input type="text" placeholder="Fee" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Description</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Pre Print Receipt No.</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
              <div className="form-group"></div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <button type="submit">save</button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-right">
          <h3>Bank Details</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Organization</label>
              <div className="select-container">
                <select
                  onFocus={() => handleFocus('org')}
                  onBlur={handleBlur}
                  onChange={() => handleClose('org')}
                  onClick={() => handleClick('org')}
                >
                  <option value="">Select Organization</option>
                </select>
                {dropdownState.org ? (
                    <FaChevronUp className="chevron-icon" />
                  ) : (
                    <FaChevronDown className="chevron-icon" />
                  )}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Cheque/DD No</label>
              <input type="text" placeholder="Enter Cheque/DD No" />
            </div>
            <div className="form-group">
              <label>Cheque/DD Date</label>
              <div className="input-container">
                <input type="text" placeholder="Enter Cheque/DD Date" />
                <CiCalendar className="calendar-icon" />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Bank Name</label>
              <input type="text" placeholder="Enter Bank" />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input type="text" placeholder="Enter Branch" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>City Name</label>
              <input type="text" placeholder="Enter City" />
            </div>
            <div className="form-group">
              <label>IFSC Code</label>
              <input type="text" placeholder="Enter IFSC" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeAdjustments;