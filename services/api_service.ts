
import { cohereResponse, cohereParameters, responseBody } from "../models";


interface APIService {
  init(key: string): void;
  post(
    endpoint: string,
    data: cohereParameters
  ): Promise<cohereResponse<responseBody>>;
}

enum URL {
  COHERE_API = "api.cohere.ai",
}

class APIImpl implements APIService {
  private COHERE_API_KEY = "";
  private COHERE_VERSION = "1";

  public init(key: string): void {
    this.COHERE_API_KEY = key;
  }

  public async post(
    endpoint: string,
    data: cohereParameters
  ): Promise<cohereResponse<responseBody>> {
    const reqData = JSON.stringify(data);

    return (await fetch(`${URL.COHERE_API}/v${this.COHERE_VERSION}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(reqData, "utf8").toString(),
        Authorization: `Bearer ${this.COHERE_API_KEY}`,
        "Request-Source": "forked-sdk",
      },
      body: reqData,
    })).json() as Promise<cohereResponse<responseBody>>;
  }
}

export default new APIImpl();
