import {createEmplyeeProps} from '../interface/createEmployee.interface';
import {employeeDetailIF} from '../interface/detailData.interface';
import baseApi from './base.api';

export const setCreateEmployeeEP = async (
  props: createEmplyeeProps,
): Promise<employeeDetailIF> => {
  const {data} = await baseApi().request<employeeDetailIF>({
    url: '/employee/create',
    method: 'POST',
    data: props,
  });

  return data;
};
