import React from 'react';
import {toast} from 'react-toastify';

export const toastSuccess = (message) => {
  toast.success(message,  {position: 'bottom-right'});
};
export const toastWarning = (message) => {
  toast.warn(message,  {position: 'bottom-right'});
};
export const toastError = (message) => {
  toast.error(message,  {position: 'top-right'});
};
export const toastInfo = (message) => {
  toast.info(message,  {position: 'top-right'});
};
