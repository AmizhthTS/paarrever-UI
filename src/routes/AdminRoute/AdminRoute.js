import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AdminLayout } from '../../pages';
import {
  AdminCategoryList,
  AdminContactList,
  AdminStoreList,
  AdminSubCategoryList
} from '../../sections';

const AdminRoute = () => {
  return (
    <Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route
          path="/admin"
          element={<Navigate replace to="/admin/category/list" />}
        />
        <Route path="/admin/category/list" element={<AdminCategoryList />} />
        <Route
          path="/admin/subcategory/list"
          element={<AdminSubCategoryList />}
        />
        <Route path="/admin/store/list" element={<AdminStoreList />} />
        <Route path="/admin/enquiries/list" element={<AdminContactList />} />
      </Route>
    </Route>
  );
};

export default AdminRoute;
