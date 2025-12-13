"use client";

import React, { useEffect, useState } from "react";
import styles from "./Contracts.module.css";
import RateMatrix from "./RateMatrix";

export default function ContractForm({ selectedContract, onSave, onCancel }: any) {
  const [contractId, setContractId] = useState("");
  const [segment, setSegment] = useState("Corporate");
  const [partnerType, setPartnerType] = useState("Corporate");
  const [status, setStatus] = useState("Draft");

  const [partnerName, setPartnerName] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [currency, setCurrency] = useState("INR");

  const [validFrom, setValidFrom] = useState("");
  const [validTo, setValidTo] = useState("");
  const [creditLimit, setCreditLimit] = useState("");
  const [creditDays, setCreditDays] = useState("");
  const [billingType, setBillingType] = useState("Credit");
  const [paymentTerms, setPaymentTerms] = useState("");

  const [rateRows, setRateRows] = useState<any[]>([]);

  const [freeSaleNonPeak, setFreeSaleNonPeak] = useState(true);
  const [applyAllotment, setApplyAllotment] = useState(true);
  const [autoRelease, setAutoRelease] = useState(false);
  const [allowOverbooking, setAllowOverbooking] = useState(false);

  const [cancelPolicy, setCancelPolicy] = useState("");
  const [noShowPolicy, setNoShowPolicy] = useState("");

  const [hotelSignatory, setHotelSignatory] = useState("");
  const [partnerSignatory, setPartnerSignatory] = useState("");
  const [signatureMode, setSignatureMode] = useState("Digital e-sign");
  const [requireEsign, setRequireEsign] = useState(true);
  const [autoNotifyFinance, setAutoNotifyFinance] = useState(true);

  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (selectedContract) {
      setContractId(selectedContract.contractId || "");
      setSegment(selectedContract.segment || "Corporate");
      setPartnerType(selectedContract.partnerType || "Corporate");
      setStatus(selectedContract.status || "Draft");

      setPartnerName(selectedContract.partner || "");
      setContactName(selectedContract.contactName || "");
      setContactEmail(selectedContract.contactEmail || "");
      setContactPhone(selectedContract.contactPhone || "");

      setCurrency(selectedContract.currency || "INR");
      setValidFrom(selectedContract.validFrom || "");
      setValidTo(selectedContract.validTo || "");
      setCreditLimit((selectedContract.creditLimit || "").replace(/[₹, ]/g, ""));
      setCreditDays(selectedContract.creditDays || "");
      setBillingType(selectedContract.billingType || "Credit");

      setNotes(selectedContract.notes || "");

      setRateRows([
        {
          id: Date.now() + "-1",
          roomType: "Deluxe King",
          season: "Corporate Shoulder",
          rateType: "Net",
          value: "5200",
          meals: "CP",
          allotment: "10 rooms",
          releasePeriod: "2 days",
          stopSell: false
        }
      ]);
    } else {
      setContractId("");
      setSegment("Corporate");
      setPartnerType("Corporate");
      setStatus("Draft");
      setPartnerName("");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setCurrency("INR");
      setValidFrom("");
      setValidTo("");
      setCreditLimit("");
      setCreditDays("");
      setBillingType("Credit");
      setPaymentTerms("");
      setRateRows([
        {
          id: Date.now() + "-1",
          roomType: "Deluxe King",
          season: "All year",
          rateType: "Net",
          value: "",
          meals: "CP",
          allotment: "",
          releasePeriod: "",
          stopSell: false
        }
      ]);
      setNotes("");
    }
  }, [selectedContract]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newContract = {
      contractId: contractId || `CT-${Date.now()}`,
      partner: partnerName,
      segment,
      validFrom,
      validTo,
      creditLimit: creditLimit ? `₹ ${Number(creditLimit).toLocaleString("en-IN")}` : "₹ 0",
      creditDays,
      billingType,
      signature:
        signatureMode === "Digital e-sign" && requireEsign
          ? "Awaiting signature"
          : "Draft",
      status,
      contactName,
      contactEmail,
      contactPhone,
      partnerType,
      currency,
      notes,
      rateMatrix: rateRows
    };

    onSave(newContract);
  };

    function resetForm() {
        throw new Error("Function not implemented.");
    }
    const handleRateRowsChange = (rows: any[]) => {
    setRateRows(rows);
    };

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      <div className={styles.cardHeader}>
        <div>
          <div className={styles.cardTitle}>
            {selectedContract ? "Edit contract" : "New contract"}
          </div>
          <div className={styles.cardSubtitle}>
            Capture all details required to create a partner contract.
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
        
        <div>
          <label className={styles.formLabel}>Contract ID</label>
          <input className="input" value={contractId} onChange={(e) => setContractId(e.target.value)} />
        </div>

        <div>
          <label className={styles.formLabel}>Segment</label>
          <select className="select" value={segment} onChange={(e) => setSegment(e.target.value)}>
            <option>Corporate</option>
            <option>Agent</option>
            <option>Leisure</option>
            <option>OTA</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className={styles.formLabel}>Partner type</label>
          <select className="select" value={partnerType} onChange={(e) => setPartnerType(e.target.value)}>
            <option>Corporate</option>
            <option>Agent</option>
            <option>Customer</option>
            <option>OTA</option>
            <option>Consolidator</option>
          </select>
        </div>

        <div>
          <label className={styles.formLabel}>Contract status</label>
          <select className="select" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Draft</option>
            <option>Under review</option>
            <option>Pending</option>
            <option>Active</option>
            <option>Expired</option>
          </select>
        </div>
      </div>

      {/* Partner & contact */}
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>Partner & contact</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          <div>
            <label className={styles.formLabel}>Partner name</label>
            <input className="input" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} placeholder="Company / Agency name" />
          </div>
          <div>
            <label className={styles.formLabel}>Primary contact name</label>
            <input className="input" value={contactName} onChange={(e) => setContactName(e.target.value)} placeholder="Contact person" />
          </div>
          <div>
            <label className={styles.formLabel}>Contact email</label>
            <input className="input" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} placeholder="name@example.com" />
          </div>
          <div>
            <label className={styles.formLabel}>Contact phone</label>
            <input className="input" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="+91-" />
          </div>
          <div>
            <label className={styles.formLabel}>Billing currency</label>
            <select className="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
        </div>
      </div>

      {/* Validity & credit */}
      <div style={{ marginTop: 12 }}>
        <div style={{ fontSize: 12, color: "#64748b", marginBottom: 6 }}>Validity & credit terms</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 14 }}>
          <div>
            <label className={styles.formLabel}>Valid from</label>
            <input className="input" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} placeholder="01 Apr 2025" />
          </div>
          <div>
            <label className={styles.formLabel}>Valid to</label>
            <input className="input" value={validTo} onChange={(e) => setValidTo(e.target.value)} placeholder="31 Mar 2026" />
          </div>
          <div>
            <label className={styles.formLabel}>Credit limit (₹)</label>
            <input className="input" value={creditLimit} onChange={(e) => setCreditLimit(e.target.value)} placeholder="2500000" />
          </div>
          <div>
            <label className={styles.formLabel}>Credit days</label>
            <input className="input" value={creditDays} onChange={(e) => setCreditDays(e.target.value)} placeholder="30" />
          </div>
          <div>
            <label className={styles.formLabel}>Billing type</label>
            <select className="select" value={billingType} onChange={(e) => setBillingType(e.target.value)}>
              <option>Credit</option>
              <option>Prepaid</option>
              <option>Pay at hotel</option>
            </select>
          </div>
        </div>

        <div style={{ marginTop: 8 }}>
          <label className={styles.formLabel}>Payment terms (as per contract)</label>
          <textarea className="textarea" value={paymentTerms} onChange={(e) => setPaymentTerms(e.target.value)} placeholder="e.g. Invoices raised fortnightly; payment within 30 days..." />
        </div>
      </div>

      {/* Rate matrix */}
      <div className={styles.card} style={{ marginTop: 12 }}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Contracted room & season rates</div>
            <div className={styles.cardSubtitle}>Different rates per room type and season for this partner. Values here override public BAR.</div>
          </div>
          <div>
            <button type="button" className="btn" onClick={() => {
              // demo load seasons stub
              alert("Load base seasons (demo)");
            }}>Load base seasons (demo)</button>
          </div>
        </div>

        <div className={styles.rateMatrixWrap}>
          <RateMatrix rows={rateRows} onChange={handleRateRowsChange} />
        </div>

        <div className={styles.addRateLineRow}>
          <button type="button" className="btn btn-primary" onClick={() => {
            // add an empty row
            setRateRows((prev) => [...prev, { id: String(Date.now()), roomType: "Deluxe King", season: "All year", rateType: "Net", value: "", meals: "CP", allotment: "", releasePeriod: "", stopSell: false }]);
          }}>Add rate line</button>

          <span style={{ fontSize: 11, color: "#64748b" }}>Demo only – rows are editable on screen but not persisted.</span>
        </div>
      </div>

      {/* Allotment & restrictions */}
      <div className="grid" style={{ marginTop: 12 }}>
        <div className={`${styles.card} ${styles["grid-6"]}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Allotment & usage</div>
              <div className={styles.cardSubtitle}>High-level rules for this partner.</div>
            </div>
          </div>

          <div style={{ fontSize: 13, lineHeight: 1.7 }}>
            <label><input type="checkbox" checked={freeSaleNonPeak} onChange={(e) => setFreeSaleNonPeak(e.target.checked)} /> Allow free sale on non-peak dates</label><br />
            <label><input type="checkbox" checked={applyAllotment} onChange={(e) => setApplyAllotment(e.target.checked)} /> Apply allotment as per rate lines above</label><br />
            <label><input type="checkbox" checked={autoRelease} onChange={(e) => setAutoRelease(e.target.checked)} /> Auto-release unsold allotment 3 days prior</label><br />
            <label><input type="checkbox" checked={allowOverbooking} onChange={(e) => setAllowOverbooking(e.target.checked)} /> Allow overbooking up to 5% on shoulder season</label><br />
          </div>
        </div>

        <div className={`${styles.card} ${styles["grid-6"]}`}>
          <div className={styles.cardHeader}>
            <div>
              <div className={styles.cardTitle}>Cancellations & no-shows</div>
              <div className={styles.cardSubtitle}>Contract-specific override of global policies.</div>
            </div>
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.7 }}>
            <label className={styles.formLabel}>Cancellation policy</label>
            <textarea className="textarea" value={cancelPolicy} onChange={(e) => setCancelPolicy(e.target.value)} placeholder="e.g. 24 hours prior on non-peak dates..." />

            <label className={styles.formLabel} style={{ marginTop: 10 }}>No-show policy</label>
            <textarea className="textarea" value={noShowPolicy} onChange={(e) => setNoShowPolicy(e.target.value)} placeholder="e.g. 1 night charges or full stay for peak periods." />
          </div>
        </div>
      </div>

      {/* Signatures */}
      <div className={styles.card} style={{ marginTop: 12 }}>
        <div className={styles.cardHeader}>
          <div>
            <div className={styles.cardTitle}>Signatures</div>
            <div className={styles.cardSubtitle}>Configure how this contract will be signed.</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 14 }}>
          <div>
            <label className={styles.formLabel}>Hotel signatory</label>
            <input className="input" value={hotelSignatory} onChange={(e) => setHotelSignatory(e.target.value)} placeholder="e.g. Revenue Manager" />
          </div>

          <div>
            <label className={styles.formLabel}>Partner signatory</label>
            <input className="input" value={partnerSignatory} onChange={(e) => setPartnerSignatory(e.target.value)} placeholder="e.g. Head – Travel" />
          </div>

          <div>
            <label className={styles.formLabel}>Signature mode</label>
            <select className="select" value={signatureMode} onChange={(e) => setSignatureMode(e.target.value)}>
              <option>Digital e-sign</option>
              <option>Offline signed copy</option>
              <option>Email approval</option>
            </select>
          </div>
        </div>

        <div style={{ fontSize: 13, marginTop: 10 }}>
          <label><input type="checkbox" checked={requireEsign} onChange={(e) => setRequireEsign(e.target.checked)} /> Require e-sign workflow before activation</label><br />
          <label><input type="checkbox" checked={autoNotifyFinance} onChange={(e) => setAutoNotifyFinance(e.target.checked)} /> Notify finance team on contract activation</label>
        </div>
      </div>

      {/* Notes & actions */}
      <div style={{ marginTop: 12 }}>
        <label className={styles.formLabel}>Commercial notes</label>
        <textarea className="textarea" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Short notes for operations / finance" />
      </div>

      <div className={styles.formActions}>
        <button type="submit" className="btn btn-primary">Save contract</button>
        <button type="button" className="btn" onClick={() => { resetForm(); }}>Reset form</button>
        <button type="button" className="btn" onClick={onCancel}>Back to list</button>

        <span className={styles.formNote} style={{ marginLeft: 12 }}>
          Fill details and click "Save contract" – this is a front-end demo; no data is persisted.
        </span>
      </div>
    </form>
  );
}
