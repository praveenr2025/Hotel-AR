"use client";

import { useState } from "react";
import styles from "../../components/profile/profile.module.css";

import ProfileTopbar from "../../components/profile/ProfileTopbar";
import ProfileTabs from "../../components/profile/ProfileTabs";
import ProfileHotelForm from "../../components/profile/ProfileHotelForm";
import ProfileBillingForm from "../../components/profile/ProfileBillingForm";
import ProfileNotificationsForm from "../../components/profile/ProfileNotificationsForm";
import ProfileUserSettingsForm from "../../components/profile/ProfileUserSettingsForm";
import Sidebar from "@/components/layout/Sidebar";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"hotel" | "billing" | "notifications" | "user">("hotel");

  return (
<div className="app-shell">
  <Sidebar variant="hotel" />
  <main className="main">
    <div className="container">
      <ProfileTopbar />

      <div className={styles.card}>
        <ProfileTabs active={activeTab} setActive={setActiveTab} />

        {activeTab === "hotel" && <ProfileHotelForm />}
        {activeTab === "billing" && <ProfileBillingForm />}
        {activeTab === "notifications" && <ProfileNotificationsForm />}
        {activeTab === "user" && <ProfileUserSettingsForm />}
      </div>
    </div>
    </main>
    </div>
  );
}
