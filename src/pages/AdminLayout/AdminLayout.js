import React from 'react';
import { AdminNavbar } from '../../sections';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet></Outlet>
    </>
  );
};

export default AdminLayout;
