import * as http from "http"
import { request, RequestOptions } from 'http';

interface ApiResponse {
  statusCode: number;
  headers: http.IncomingHttpHeaders;
  data: string;
}

export function fetchData(url: string, callback: (error: Error | null, response?: ApiResponse) => void): void {
  const options: RequestOptions = {
    method: 'GET',
  };
  const req = request(url, options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const result: ApiResponse = {
        statusCode: res.statusCode || 0,
        headers: res.headers,
        data,
      };
      callback(null, result);
    });
  });

  req.on('error', (error) => {
    callback(error);
  });

  req.end();
}
