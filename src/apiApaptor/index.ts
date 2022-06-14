import { AxiosRequestConfig } from 'axios'
import { HttpClient } from './httpClient'
import { ENDPOINTS } from '../constants'
export class AdapterClient {
  private readonly httpClient: HttpClient;

  constructor() {
    const config = {
      baseURL: ENDPOINTS.BASEURL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    }

    this.httpClient = new HttpClient(config)
  }

  public async searchRestaurant(queryParam: string): Promise<any> {
    const httpOptions: AxiosRequestConfig = {
      url: `${ENDPOINTS.SEARCH}?location=NYC&${queryParam}`,
      method: 'GET',
    }

    return await this.httpClient.doRequest(httpOptions)
  }

  public async restaurantDetails(id: string): Promise<any> {
    const httpOptions: AxiosRequestConfig = {
      url: `${ENDPOINTS.DETAIL}/${id}`,
      method: 'GET',
    }

    return await this.httpClient.doRequest(httpOptions)
  }

  public async restaurantReviews(id: string): Promise<any> {
    const httpOptions: AxiosRequestConfig = {
      url: `${ENDPOINTS.DETAIL}/${id}/reviews`,
      method: 'GET',
    }

    return await this.httpClient.doRequest(httpOptions)
  }
}
