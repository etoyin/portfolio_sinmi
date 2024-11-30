import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import AdminAuthenticated from "@/Layouts/AdminAuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function AdminDashboard(props) {
  console.log(props.user);
  return (
    <AdminAuthenticated
      auth={props.auth}
      errors={props.errors}
      username={props.user.name}
      header={
        <h2 className="text-lg font-semibold leading-tight text-gray-800">
          Admin Dashboard
        </h2>
      }
    >
      <Head title="Admin Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              You're logged in as Admin!
            </div>
          </div>
        </div>
      </div>
    </AdminAuthenticated>
  );
}