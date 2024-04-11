import React from "react";

export default function DashboardLayout({
  children,
  revenue,
  users,
  notifications,
}: {
  children: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div>
        {revenue}
        {users}
        {notifications}
      </div>
    </>
  );
}
