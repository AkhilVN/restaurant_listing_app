
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
const API_KEY = `OciDqzxQi8K6WGWoI9Rs8X6GS5JcACQwpIn6xyg4MQf7c4X3KUvR5Gs17iZjMp_iGhxc6pdTukttzNYGfa-Teh6gRzqQW83Vxj3TRY7-7AcrrQoFOQMEfIRuPB6XYnYx`
export class HttpClient {
  private readonly _axiosInstance: AxiosInstance;

  constructor(config: IHttpConfig) {
    config.headers = config.headers || {}
    this._axiosInstance = axios.create({
      baseURL: config.baseURL,
      headers: config.headers
    })
  }

  public async doRequest(httpOptions: AxiosRequestConfig): Promise<any> {
    if (!httpOptions.headers) {
      httpOptions.headers = {}
    }

    httpOptions.headers.Authorization = `Bearer ${API_KEY}`
    try {
      const { data } = await this._axiosInstance(httpOptions)
      return data
    } catch (error: any) {
      throw error.response
    }
  }
}

interface IHttpConfig {
  baseURL: string;
  headers?: { [key: string]: string };
}
