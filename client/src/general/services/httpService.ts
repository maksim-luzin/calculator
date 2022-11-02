import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ApiPath } from "../const";
import { EnvKeys } from "../enums";
import { getEnv } from "../helpers";
import { IRecord } from "../interfaces";

const url = getEnv(EnvKeys.SERVER_URL) + ApiPath;

type IResponse = Promise<AxiosResponse<IRecord, AxiosRequestConfig>>;
type IGetRecordsResponse = Promise<
  AxiosResponse<IRecord[], AxiosRequestConfig>
>;

const createRecord = (newRecord: string[]): IResponse =>
  axios.post(url, { record: newRecord });

const getRecord = (): IGetRecordsResponse => axios.get(url);

const getRecordById = (id: string): IResponse => axios.get(`${url}/${id}`);

const updateRecord = ({ id, ...updateRecord }: IRecord): IResponse =>
  axios.put(`${url}/${id}`, updateRecord);

const deleteRecord = (id: string): IResponse => axios.delete(`${url}/${id}`);

export { createRecord, getRecord, getRecordById, updateRecord, deleteRecord };
